module.exports = function () {
    function connected () {
        return 'connection to factory tests: true';
    }

    function add (plate){
        let values = plate.trim().split('');
    }
    return {
        connected,
        add
    };
};
