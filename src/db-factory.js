module.exports = function (pool) {
    async function allPlates () {
        try {
            let plates = await pool.query('select * from plates');
            return plates.rows;
        } catch (error) {
            console.error(error);
        }
    }

    async function filteredPlates (filter) {
        try {
            let plates = await pool.query('select * from plates where code = $1', [filter]);
            return plates.rows;
        } catch (error) {
            console.error(error);
        }
    }

    async function add (code, regnum) {
        try {
            let plate = await pool.query('select registration from plates where registration = $1', [regnum]);

            if (plate !== '' && plate.rowCount === 0) {
                await pool.query('insert into plates (code, registration) values ($1, $2)', [code, regnum]);
            } else if (plate === '' && plate.rowCount !== 0) {
                return 'Registration already exists';
            }
        } catch (error) {
            console.error(error);
        }
    }

    async function deleter (reg) {
        try {
            await pool.query('delete from plates where registration = $1', [reg]);
            await pool.query('update plates set id = default');
            await pool.query('alter sequence plates_id_seq restart 1');
        } catch (error) {
            console.error(error);
        }
    }

    async function reset () {
        await pool.query('TRUNCATE TABLE plates RESTART IDENTITY;');
        await pool.query('update plates set id = default');
        await pool.query('alter sequence plates_id_seq restart 1');
    }

    async function filterList () {
        let cities = await pool.query('select city, code from cities where code in (select code from plates)');

        return cities.rows;
    }
    return {
        add,
        allPlates,
        deleter,
        reset,
        filterList,
        filteredPlates
    };
};
