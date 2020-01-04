```ruby
<%= form_with(model: @lesson, local: true) do |form| %>
```

Passing the lesson object to the method

- **automagically creates URL for submitting the edited lesson form**
- submitted via `PATCH HTTP`
  - Patch is the HTTP method you're expected to use for updating resources, according to REST protocol

# `form_with`

The arguments to `form_with` could be:
    - Model objects, like `model: @lesson`
      - which will (through the helper)
      - fill the form with **fields in the `@lesson` object**
    - Symbol scope `scope: :lesson`
      - creates fields but not filled 

    - an array, used to build a nested route (CRUD.md)
http://api.rubyonrails.org/v5.2.4.1/classes/ActionView/Helpers/FormHelper.html#method-i-form_with

The `model` passed to `form_with` is a **resource**,
which corresponds to a set of RESTful routes, most likely defined via `resources` in the

`config/routes.rb`

So
```ruby
<%= form_with model: @lesson do |form| %>
  ...
<% end %>
```

IS EQUIVALENT TO
```ruby
<%= form_with scope: :lesson, url: post_path(@lesson), method: :patch do |form| %>
  ...
<% end %>
```

I.e. Rails is able to infer which UIR and method to use



https://api.rubyonrails.org/v5.2.4.1/classes/ActionView/Helpers/FormHelper.html#method-i-form_with-label-Resource-oriented+style


# `@lesson.update(lesson_params)`

will update all passed attributes

But it is also possible to jsut update one attribute

`@lesson.update(title: 'A new title)` 
will just update the title


`<%= link_to 'Edit', edit_lesson_path(lesson) %>`

# `edit_lesson_path` helper