module.exports = function (db) {
    //    value holder

    // regnum filter and adder
    async function add (plate) {
        let code = '';
        let num = '';
        let codeFormat = plate.toUpperCase();
        let values = codeFormat.toUpperCase().replace('-', '').replace(/\s/g, '').split('');
        let availableCodes = await db.codes();

        if (codeFormat === '' || codeFormat === undefined) {
            return 'blank';
        } else if ((values.length) < 5) {
            return 'blank';
        } else {
            for (let val of values) {
                if (isNaN(val) === true) {
                    code += val;
                } else if (isNaN(val) === false) {
                    num += val;
                }
            }
        }
        if ((code.length) < 2) {
            return 'blank';
        } for (let codes of availableCodes) {
            if (codes === code) {
                await db.add(code, codeFormat);
        console.log('this', await db.allPlates());
        return 'accepted';
            }
            else{
                return 'blank';
            }
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
                return true;
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
