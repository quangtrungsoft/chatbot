const config = global.helpers.config;

let knex = require('knex')({
    client: 'mysql',
    connection: {
        host: config('DB_HOST', '112.78.4.163'),
        user: config('DB_USER', 'sieunhangao'),
        password: config('DB_PASSWORD', 'Nxh7&k19'),
        database: config('DB_NAME', 'db_yduoc'),
        charset: config('DB_CHARSET', 'utf8')
    },
    pool: { min: 2, max: 50 }
});

const bookshelf = require('bookshelf')(knex);
bookshelf.plugin('pagination');

module.exports.bookshelf = bookshelf;
module.exports.knex = knex;