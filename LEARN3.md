
### `link_to`
```ruby
<h1>Hello rails</h1>
<%= link_to 'My blog', controller: 'lessons' %>
```

`link_to` is one of Rails built=in helpers
- creates hyperlink based on text to display and controller/path


### xx_path just works!

`<%= link_to 'New lesson', new_lesson_path %>`

- `new_lesson_path`
- `lessons_path`


### Linking to an action in the same controller

If you want to link to an action in the same controller, you don't need to specify the :controller option, as Rails will use the current controller by default.

## All models inherit from `ApplicationRecord`

and `AppliactionRecord` inherits from `ActiveRecord::Base`

which supplies a lot of functionality to Rails models for free, including 
  
- basic CRUD
- data validation
- search support
- relate models to one another

## `validates:`

Basic validation:

```ruby
class Lesson < ApplicationRecord
    validates :title, presence: true, length: { minimum: 5 }
end
```

more here:
https://guides.rubyonrails.org/v5.2/active_record_validations.html


Now, calling `@lesson.save` on an invalid or empty lesson, will return `false`


#### `pluralize`

Rails helper that takes a number and string as arguments


> Rails automatically wraps fields that contain an error with a div with class **field_with_errors**. You can define a css rule to make them standout.