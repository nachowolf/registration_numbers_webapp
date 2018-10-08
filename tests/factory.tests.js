const assert = require('assert');
const regnumFactory = require('../src/regnum.js');
const dbfactory = require('../src/db-factory.js');
const pg = require('pg');

// const connectionString = process.env.DATABASE_URL || 'postgresql://coder:pg123@localhost:5432/reg_numbers';
const connectionString = process.env.DATABASE_URL || 'postgresql://localhost:5432/reg_numbers';
const Pool = pg.Pool;
const pool = new Pool({
    connectionString
});

const db = dbfactory(pool);
const factory = regnumFactory(db);

describe('Registration web App filter tests', function () {
    it('should return declined for no input', async function () {
        assert.equal('declined', await factory.add(''));
    });

    it('should return declined for input that has code less than 2 letters', async function () {
        assert.equal('declined', await factory.add('F061-006'));
    });

    it('should return accepted for reg number with code in database', async function () {
        assert.equal('accepted', await factory.add('CJ 123-456'));
    });
});

describe('The registration web app queries for rdatabase', function () {
    beforeEach(async function () {
        await pool.query('delete from plates');
    });

    it('should add and return 1 registration number from Cape Town', async function () {
        await factory.add('CA 123-456');
        let value = (await db.allPlates()).map(para => para.registration);
        assert.equal('CA 123-456', value);
    });

    it('should add and return 2 registration numbers from Cape Town', async function () {
        await factory.add('CA 123-456');
        await factory.add('CA 234-567');
        let value = (await db.allPlates()).map(para => para.registration);
        assert.deepEqual(['CA 123-456', 'CA 234-567'], value);
    });

    it('should add and return 1 registration numbers from Cape Town and 1 from Paarl', async function () {
        await factory.add('CA 123-456');
        await factory.add('CJ 234-567');
        let value = (await db.allPlates()).map(para => para.registration);
        assert.deepEqual(['CA 123-456', 'CJ 234-567'], value);
    });

    it('should add and return 4 registration numbers. 1 from Cape Town, 1 from Paarl, 1 from Ceres and 1 from Bellville ', async function () {
        await factory.add('CA 123-456');
        await factory.add('CJ 234-567');
        await factory.add('CY 345-678');
        await factory.add('CT 456-789');
        let value = (await db.allPlates()).map(para => para.registration);
        assert.deepEqual(['CA 123-456', 'CJ 234-567', 'CY 345-678', 'CT 456-789'], value);
    });

    it('should return Cape Town, Paarl and Ceres', async function () {
        await factory.add('CA 123-456');
        await factory.add('CJ 234-567');
        await factory.add('CT 456-789');
        let value = (await db.filterList()).map(para => para.city);
        assert.deepEqual(['Cape Town', 'Paarl', 'Ceres'], value);
    });

    it('should only return the registration numbers from Cape Town', async function () {
        await factory.add('CA 123-456');
        await factory.add('CJ 234-567');
        await factory.add('CT 456-789');
        let value = (await db.filteredPlates('CA')).map(para => para.registration);
        assert.equal('CA 123-456', value);
    });

    it('should only return the registration numbers from Paarl', async function () {
        await factory.add('CA 123-456');
        await factory.add('CJ 234-567');
        await factory.add('CT 456-789');
        let value = (await db.filteredPlates('CJ')).map(para => para.registration);
        assert.equal('CJ 234-567', value);
    });

    after(function () {
        pool.end();
    });
});
