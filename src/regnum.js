module.exports = function (db) {
    //    value holder


    // regnum filter and adder
    async function add (plate) {
        let code = '';
        let num = '';
        let codeFormat = plate.toUpperCase();
        let values = codeFormat.toUpperCase().replace('-', '').replace(/\s/g, '').split('');

        if (codeFormat === '' || codeFormat === undefined) {
            return 'Cant be blank!';
        } else {
            for (let val of values) {
                if (isNaN(val) === true) {
                    code += val;
                } else if (isNaN(val) === false) {
                    num += val;
                }
            }

            await db.add(code, codeFormat);
            console.log(await db.allPlates());
        }
    }

    return {
        add
    };
};
