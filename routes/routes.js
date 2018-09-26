module.exports = function (factory) {
    function index (req, res) {
        res.render('home');
    }

    function regNum (req, res) {
        let plate = req.body.number;
        factory.add(plate)
        res.redirect('/');
    }
    return {
        index,
        regNum
    };
};
