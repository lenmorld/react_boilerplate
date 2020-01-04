## New API resource

`bin/rails generate controller Cards`

`bin/rails generate model Cards`

`bin/rails db:migrate`

Fill `seeds.rb` with initial values

`bin/rails db:seed`

curl http://localhost:3000/cards



## How to serve both view .erb templates and json based on request

https://stackoverflow.com/questions/20188047/rails-respond-to-json-and-html


```ruby
respond_to do |format|

  format.html # show.html.erb
  format.json { render json: @user }

 end
```

```bash
curl -X DELETE http://localhost:3000/cards/4 

curl -X PUT -H "Content-type: application/json" -d '{"question": "Ruby is a dynamic language. T or F?", "answer": "F"}' http://localhost:3000/cards/3

curl -X POST -H "Content-type: application/json" -d '{"question": "Ruby is a dynamic language. T or F?", "answer": "T"}' http://localhost:3000/cards
```