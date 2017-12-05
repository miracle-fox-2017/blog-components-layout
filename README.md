# blog-components-layout

A vue Simple Blog  
access here: http://vueblog.masfaris.com  

username:password = admin:admin

## Endpoint API
| Endpoint       | HTTP   | Require                  | Description         |
|----------------|--------|--------------------------|---------------------|
| /api/blog      | POST   | token(header), newpost   | Post new blog       |
| /api/blog      | GET    | token(header)            | Get blog post       |
| /api/blog/:id  | GET    | token(header),id(params) | Get blog post       |
| /api/blog/:id  | DELETE | token(header),id(params) | Delete blog post    |
| /api/signin    | POST   | username, password       | return token        |
| /api/signup    | POST   | username, password       | return token        |
| /api/verify    | POST   | token(header)            | return status login | 