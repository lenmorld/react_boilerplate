## Create a new resource

A resource is a collection of similar objects
e.g. lessons, people, animals

You can CRUD a resource as a list or an inidividual item, aka "CRUD operations"

### Add 'lesson' resource to the config/routes.rb

_for our app: course > lesson > section, quiz_

```ruby
Rails.application.routes.draw do
    ...
    `resources :lessons`
```

### See defined routes

...for all the standard RESTful actions

`bin/rails routes`

```
                   Prefix Verb   URI Pattern                                                                              Controller#Action
            welcome_index GET    /welcome/index(.:format)                                                                 welcome#index
                  lessons GET    /lessons(.:format)                                                                       lessons#index
                          POST   /lessons(.:format)                                                                       lessons#create
               new_lesson GET    /lessons/new(.:format)                                                                   lessons#new
              edit_lesson GET    /lessons/:id/edit(.:format)    
              ...
```

## Generate controller for the resource

Now that we have our routes for Lessons, we need the controllers and actions for them.

We can use `/lessons/new` for create.
But a route only works if we have a controller defined for it to serve the request. So we create a controller.

`bin/rails generate controller Lessons`

in `lessons_controller.rb`, this is generated.

```ruby
class LessonsController < ApplicationController
end
```

> A controller is a class that inherits from **ApplicationController**. Here, we define the actions (using class methods) for this controller. These actions will perform the CRUD operations

> Only `public` methods can be controller actions. (not `private` nor `protected`)


## Define the `new` action inside the controller

```ruby
class LessonsController < ApplicationController
    def new
    end
end
```

error:
```
LessonsController#new is missing a template for this request format and variant. request.formats: ["text/html"] request.variant: [] 
```

The template lookup goes from:
- `lessons/new`                         DOESNT FIND IT
- `application/new` (parent)         DOESNT FIND IT
- ERRORS OUT!

`request.formats: ["text/html"] `
specifies the template format to be served in the response
`text/html` means an HTML template, which Rails didnt find

`request.variant: []` 
specifies kind of physical devices served by the response

We still need a View template, since plain actions like this one needs one (compared to an API request)

we need one at

`app/views/lessons/new.html.erb`

**new.html.erb ?**
- `.html`  is the template format
- `.erb`   is the template handler, used to render the template
  - default is erb
  - other handlers:
    - `builder` for XML templates
    - `coffee` for CoffeeScript to build JS templates

## Create the view

`touch app/views/lessons/new.html.erb`

and inside:

```html
<h1>new</h1>
```

### Create a form

...using a _form builder_, provided by a **helper method** called `form_with`

```html
<%= form_with scope: :lesson, local :true do |form| %>

<p>
    <%= form.label :title %><br>
    ...
</p>


<% end %>
```

#### `form_with`

- `scope :lesson`
  - tells `form_with` helper what this form is for

- `local: true`
  - disable Ajax
  - so with local-true, we do full page redirect

- where is the form submitted?
  - by default, genereated `<form action="/lessons/new"`
  - but we need to submit the request to the `lessons/` handler, not to this route

#### add a `url: lessons_path` to the form

now its

`<form action="/lessons"`


but what is `lessons_path`

#### `lessons_path`

its a helper that tells Rails to point the form to the URI Pattern assoc. with `/lessons` prefix, so the form with  send a POST request to that route by default

This is assoc. with `lessons#create`
(create action of the current controller, LessonsController)

Now, we need to create the `lessons#create`

## create action in LessonsController

```ruby
class LessonsController < ApplicationController
    def new
    end

    def create
    end
end
```

submitting now works, but Rails returns a `204 No Content` by default, since we don't specify response

inspect the `params` using

```ruby
    def create
        render plain: params[:lesson].inspect
    end
```

gives

```
<ActionController::Parameters {"title"=>"asd", "text"=>"asdasd"} permitted: false>
```

> NOTE that we can access the submitted POST body with `params`, compared  to Node that params is for GET, body is for POST


## Craeting the model

`bin/rails generate model Lesson title:string text:text`

the `title` and `text` attribute are automaitcally added
to the `lessons` table in the DB, and mapped to the `Lesson` model

The model is created:

`app/models/lesson.rb`

A migration is also created:

`db/migrate/20191215210531_create_lessons.rb`

#### Migration?

Migrations are Ruby classes that simplify creating, modifying db tables.

- Rails uses `rake` commands to run migrations, so it's possible to **undo** a migration after it's been applied
- migration filenames have a timestamp to ensure **order** of processing

```ruby
class CreateLessons < ActiveRecord::Migration[5.2]
  def change
    create_table :lessons do |t|
      t.string :title
      t.text :text

      t.timestamps
    end
  end
end
```

Method `change` is called when migration is ran

Rails know how to reverse this change later if needed

It does the following:
- create a `lessons` table with two columns: `title` and `text`
- creates two timestamp fields that allow Rails to track lesson creation and upadte times

We need to run the migration to apply these changes:

### Run the migration

`bin/rails db:migrate`

gives:
```
== 20191215210531 CreateLessons: migrating ====================================
-- create_table(:lessons)
   -> 0.0055s
== 20191215210531 CreateLessons: migrated (0.0056s) ===========================
```

> NOTE that we are in `dev` environment by default, so this command will apply to the database defined in
`config/database.yml` > development

> to specify a different env for the migration
`bin/rails db:migrate RAILS_ENV=production`


## Saving data in the controller

```ruby
    def create
        # inspect params
        # render plain: params[:lesson].inspect

        @lesson = Lesson.new(params[:lesson])

        @lesson.save

        redirect_to @lesson
    end
```

every Rails model can be init. with its attributes, automatically mapped to the db columns

- `Lesson.new` uses the class `Lesson`

- `new(params)` does just that: **init the model**
- `save`: **save the model** in the db

then, redirect to the `show()` action (we'll define later)

**ERROR** ForbiddenAttributesError

- Rails security feature, "strong parameters", which requries us to tell Rails exactly which params are allowed in the controller actions

> this prevents extra malicious params values being "mass assigned" to the model

we have to whitelist controller

## Whitelisting controller
