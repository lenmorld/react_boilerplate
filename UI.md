# Layout: application.html.erb

This is the main layout used for the Rails app.
The views go in the `yield` section inside `<body>`


## For mobile-responsive, put this

`<meta content="width=device-width, initial-scale=1" name="viewport" />` 


# View: index.html.erb

via `routes.rb` > `get 'welcome/index'` 

We'll mount our React SPA here for now, since we probably won't need React in the other pages, like the CRUD Admin page


# pages vs views

Views are loaded inside the layout template (which has the head, body, scripts etc)

Pages are independent, with its own head, body and scripts

For now, we'll load the React app in the `index.html.erb` view,
but if this will limit us, it might be better to have it in it's own page with a dedicated route
(like in `react-rails` repo)


# Asset Pipeline

## `public` directory

In previous Rails(before 5), all assets are in the subdirectories of `public/`, such as `images, javascripts, stylesheets`

Any assets in `public/` will be served as static files by the app/web server when:

```ruby
config.public_file_server.enabled = true
```

> might have to do this both in production|developement.rb



### WE'RE NOT USING IT IN THIS APP, but...

### `app/assets` -> `public/assets`

With the new **Asset pipeline** the preferred location is in `app/assets` served by the `Sprockets` middleware

Use `app/assets` for files that must undergo some pre-processsing before served, these files are never served directly in production

Rails precompiles these to `public/assets` by default
then server as static assets by the web server


### Not using Asset pipeline, coffeescript, etc

So we will put them in `public/javascripts`





