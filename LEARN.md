Controller

- receives requests


Routing

- "routes" which controller receives which requests
- often there is more than one route to a controller


Routes
- different routes can be served by different actions

Actions
- each action's purpose is to collect info to provide it to a view

View
- display info to a human readable format

> controller collects the info, not the view. View displays the info

by default, view templates are in a language called eRuby (Embedded Ruby), processed by the *request cycle* in Rails before being sent to the user


## To create a new controller

### Create controller

Create a new controller with 
- controller "Welcome" 
- action "index"

`bin/rails generate controller` 

which creates Controller and View:
- `controllers/welcome_controller.rb`
- `app/views/welcome/index.html.erb`

(and others)
- `helpers/welcome_helper.rb`
- `test/controllers/welcome_controller_test.rb`
- `app/assets/stylesheets/welcome.scss`

### Configure routes

Replace "Welcome Aboard" in `routes.rb`
by adding `root`

```ruby
Rails.application.routes.draw do
  get 'welcome/index'
 
  root 'welcome#index'
end
```

`welcome#index`
tells Rails to map the app root requests, to the welcome controller's index action

`welcome/index` 
tells Rails to map only `welcome/index`, to the welcome controller's index action
(created when `generate`)


> `routes.rb` is a DSL (domain specific language)

https://guides.rubyonrails.org/v5.2/routing.html