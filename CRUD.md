Edit

`edit.html.erb`

```ruby
<%= form_with(model: @lesson, local: true) do |form| %>
```
-> lessons#update


`new.html.erb`

```ruby
<%= form_with scope: :lesson, url: lessons_path, local: true do |form| %>
```

-> lessons#create

---

```ruby
<%= form_with(model: [ @lesson, @lesson.comments.build ], local: true) do |form| %>
```

Array in `model:`
- builds a nested route:
  - `/lessons/1/comments`


## comments#create

```ruby
class CommentsController < ApplicationController
    def create
        @lesson = Lesson.find(params[:lesson_id])
        @comment = @lesson.comments.create(comment_params)
        redirect_to lesson_path(@lesson)
    end

    private
        def comment_params
            params.require(:comment).permit(:commenter, :body)
        end
end
```


`Lesson.find(params[:lesson_id])`
Each request for a comment has to keep track of the lesson to which the comment is attached (Lesson.find)

`@lesson.comments.create(comment_params)`
create and save the comment. This will automatically link the comment so that it belongs to that @lesson

`redirect_to lesson_path(@lesson)`
calls the `show` action

# `lesson_path(@lesson)` helper
