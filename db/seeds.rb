# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

cards = Card.create([
    {
        question: "What is resource routing?",
        answer: "Resource routing allows you to declare all common routes for a give resourceful controller"
    },
    {
        question: "What common routes are included when doing resouce routing?",
        answer: "index, show, new, edit, create"
    }
])