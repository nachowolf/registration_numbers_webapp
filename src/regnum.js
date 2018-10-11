module.exports = function (db) {
    //    value holder

    // regnum filter and adder
    async function add (plate) {
        let code = '';
        let num = '';
        let codeFormat = plate.toUpperCase();
        let values = codeFormat.toUpperCase().replace('-', '').replace(/\s/g, '').split('');
        let availableCodes = await db.codes();
        let allPlates = await db.allPlates();

        let storedPlates = allPlates.map(plate => plate.registration);

        for (let storedPlate of storedPlates) {
            let plateValues = storedPlate.toUpperCase().replace('-', '').replace(/\s/g, '');
            if (plateValues === values.join('')) {
                return 'exists';
            }
        }

        if (codeFormat === '' || codeFormat === undefined) {
            return 'declined';
        } else if ((values.length) < 5) {
            return 'invalid';
        } else {
            for (let val of values) {
                if (isNaN(val) === true) {
                    code += val;
                } else if (isNaN(val) === false) {
                    num += val;
                }
            }
        }
        for (let codes of availableCodes) {
            if (codes === code) {
                await db.add(code, codeFormat);
                return 'accepted';
            }
        }

        if ((code.length) < 2) {
            return 'invalid';
        } else {
            return 'invalid';
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
