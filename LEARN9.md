# Basic Authentication

## LessonsController

`http_basic_authenticate_with` **before filter**

Block access to CRUD actions if not authenticated

```ruby
class LessonsController < ApplicationController
    
    http_basic_authenticate_with name: 'lenny', password: 'abcd1234', except: [:index, :show]
    ...

class CommentsController < ApplicationController

    http_basic_authenticate_with name: 'lenny', password: 'abcd1234', only: :destroy
    ...
```

When Create, Update, Destroy (Read is fine for non-authenticated users):

![](screens/2019-12-24-10-02-57.png)

![](screens/2019-12-24-10-14-53.png)

After successful login, (i think) it actually saves the username and password as a **server session**
such that even deleting the Browser session, it would just get it again from the server

![](screens/2019-12-24-10-11-04.png)

https://stackoverflow.com/questions/15662969/what-is-the-difference-between-http-basic-authenticate-with-and-authenticate-or

### Try Auth addon gems too:

- Devise
- Authlogic

full auth: https://guides.rubyonrails.org/v5.2/security.html


# Configuration gotchas

UTF-8
- store all external data as UTF-8
- Ruby, Rails libraries will often be able to convert your native data into UTF-8