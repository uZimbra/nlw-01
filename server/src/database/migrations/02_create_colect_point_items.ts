import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('colect_point_items', table => {
    table.increments('id').primary();
    
    table.integer('colect_point_id')
      .notNullable()
      .references('id')
      .inTable('colect_points');

    table.integer('item_id')
      .notNullable()
      .references('id')
      .inTable('items');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('colect_point_items');
}