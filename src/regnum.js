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
            console.log('this', await db.allPlates());
        }
    }

    async function filter (city) {
        if (city === 'All' || city === undefined) {
            let allPlates = await db.allPlates();
            return allPlates;
        } else if (city !== 'All' && city !== undefined) {
            let filteredPlates = await db.filteredPlates(city);
            return filteredPlates;
        }
    }

    async function current (filterList, city) {
        for (let currenter of filterList.map(current => current.code)) {
            if (city === currenter) {
                return 'selected';
            }
        }
    }

    return {
        add,
        filter,
        current
    };
};
// dump sql table into psql
// psql dbname < File.sql
