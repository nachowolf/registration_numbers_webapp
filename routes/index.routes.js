module.exports = function (factory, db) {
    async function home (req, res) {
        let city = req.params.city;
        
        let allPlates = await factory.filter(city);
        // let selector = await factory.current(city);

        let filterList = await db.filterList();
        let selector = await factory.current(filterList, city);
        
        // let selector = function(code, city){
        //     if (code === city){
               
        //         return "selected"
        //     }
        // }
        
        console.log(selector)

        res.render('home', {
            allPlates,
            filterList,
            selector
        });
    }
    async function regNum (req, res) {
        let numberPlate = req.body.numberPlate;
        // factory.add(numberPlate);
        await factory.add(numberPlate);
        res.redirect('/');
    }
    async function deleter (req, res) {
        let num = req.params.reg;
        await db.deleter(num);
        res.redirect('/');
    }

    async function reset (req, res) {
        await db.reset();
        res.redirect('/');
    }

    async function filter (req, res) {
        let city = req.body.location;
        console.log('this here =>', city)

        res.redirect('/' + city);
    }

    return {
        home,
        regNum,
        deleter,
        reset,
        filter
    };
};
