# Partials

Remove duplication in views, using "view partials"

By convention, partial files are prefixed with an underscore

`_partial.html.erb`


# destroy

You can call `destroy` on Active Record objects when you want to delete then frmo the db

```ruby
      <td><%= link_to 'Destroy', lesson_path(lesson),
              method: :delete,
              data: { confirm: 'Are you sure?'} %></td>
```

`:delete and data:` are options used as HTML5 attributes
for showing a confirm dialog, then submit link with method `delete`

> done via `rails-ujs` automatically included in the layout

### Javascript in Rails

Unobstrusive JS: https://guides.rubyonrails.org/v5.2/working_with_javascript_in_rails.html


# resources

Rails encourages using resources objects instead of declaring routes manually.

Routing: https://guides.rubyonrails.org/v5.2/routing.html