# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Category.create name: 'clickbait'
Category.create name: 'sports'

Comment.create content: 'this is a seeded comment', article_id: 3
Comment.create content: 'this is another seeded comment', article_id: 3
