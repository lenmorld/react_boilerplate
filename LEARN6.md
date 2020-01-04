# Adding a second model

`bin/rails generate model Comment commenter:string body:text lesson:references`

## Active Record association

`:references` is a special data type for models

- creates a new column on db
- appended with an `_id` that can hold int values
- see `db/schema.rb`

```ruby
# comment.rb
class Comment < ApplicationRecord
  belongs_to :lesson
end
```

Migration:
`db/migrate/20191223024422_create_comments.rb`


```ruby
class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :commenter
      t.text :body
      t.references :lesson, foreign_key: true

      t.timestamps
    end
  end
end

```

`t.references :lesson, foreign_key: true` 
- creates an int column `lesson_id`
- index 
- foregin key constraint that points to `id` column of `lessons`

## `bin/rails db:migrate`

- Rails is smart enough to only executes the migrations that have not already been run against the current db

# Associating Models

Active Record associations let you declare relationship between two models

There's two sides to the relationship

## 1. Comment belongs_to Lesson

this has already been added in 
```ruby
class Comment < ApplicationRecord
  belongs_to :lesson
end
```

## 2. Lesson has_many comments

this we need to add

```ruby
class Lesson < ApplicationRecord
    has_many :comments
    ...
```

**This is great!!**
- if you have a @lesson, you can get all comments using `@lesson.comments`


Associations: https://guides.rubyonrails.org/v5.2/association_basics.html

## Add a route

in `routes.rb`, we capture the hierarchy via

```ruby
resources :lessons do
    resources :comments
end
```

## Generating a controller

`bin/rails generate controller Comments`