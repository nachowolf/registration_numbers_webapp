module.exports = function (factory, db) {
    async function home (req, res) {
    let allPlates = await db.allPlates();
        res.render('home', {allPlates});
    }
    async function regNum (req, res) {
        let numberPlate = req.body.numberPlate;
        // factory.add(numberPlate);
        await factory.add(numberPlate);
        res.redirect('/');
    }
    async function deleter(req, res) {
        let num = req.params.reg;
        await db.deleter(num);
        res.redirect('/');
    }

    async function reset (req, res) {
        await db.reset()
        res.redirect('/');
    }
    return {
        home,
        regNum,
        deleter,
        reset
    };
};
