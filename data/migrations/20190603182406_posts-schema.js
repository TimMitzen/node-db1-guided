exports.up = async (knex) => {
	await knex.schema.createTable("posts", (posts) => {
		posts.increments()
		posts.string("title", 1024).notNullable()
		posts.text("contents").notNullable()
		posts.timestamps(true, true)
	})
}

exports.down = async (knex) => {
	await knex.schema.dropTableIfExists("posts")
}
