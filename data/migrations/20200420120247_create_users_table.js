
exports.up = function(knex) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments();
            tbl.string('user_name', 8)
                .notNullable()
                .unique();
            tbl.string('password', 8)
                .notNullable()
                .unique();
  })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('users')
};
