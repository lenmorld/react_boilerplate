# render method

Can iterate over a collection, so you can do `render comments`
as long as you have a `_comment` partial

before:
```ruby
<% @lesson.comments.each do |comment| %>
  <p>
    <strong>Commenter:</strong>
    <%= comment.commenter %>
  </p>
 
  <p>
    <strong>Comment:</strong>
    <%= comment.body %>
  </p>
<% end %>
```

after (NO NEED to iterate over `comments`)
```ruby
# show.html.erb
<%= render comments %>

# _comment.html.erb
  <p>
    <strong>Commenter:</strong>
    <%= comment.commenter %>
  </p>
 
  <p>
    <strong>Comment:</strong>
    <%= comment.body %>
  </p>
```

The render method iterates over the @lesson.comments collection.
It assigns each comment to a local variable named the same as the partial, in this case `comment` which is then available in the partial to show.

## `<%= render 'comments/form' %>`

Rails is smart enough to spot the forward slash and realize that you want to render
`_form.html.erb` in the `app/views/comments/` directory

## @lesson object

is available to any partials rendered in the view, because it is defined as an **instance variable**
