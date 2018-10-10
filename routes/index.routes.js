module.exports = function (factory, db) {
    async function home (req, res) {
        let city = req.params.city;

        let allPlates = await factory.filter(city);
        let allCities = await db.allCities();
        let filterList = await db.filterList();

        for (let list of filterList) {
            if (list.code === city) {
                list.selected = true;
            }
        }

        res.render('home', {
            allPlates,
            filterList,
            allCities

        });
    }
    async function regNum (req, res) {
        let numberPlate = req.body.numberPlate;
        // factory.add(numberPlate);
        let checker = await factory.add(numberPlate);
        if (checker === 'declined') {

            req.flash('error', 'Please insert a registration number!');
            res.redirect('/');

        } else {
           
            res.redirect('/');
        }
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
