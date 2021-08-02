# SociaLod Backend API
Use this api for scrap user information. Scrap by social media profile links of user and Create information resource.

RUN
---
    # ndoe index
    Server listen at http://localhost:5000
    Database connected

Visit http://localhost:5000 for SociLod API manual
---

<table><tbody><tr><th>Paths</th><th>Methods</th><th>Parameters</th></tr><tr><td>/auth/verify</td><td>get</td><td>bearer token required</td></tr><tr><td>/auth/login</td><td>post</td><td>{"email":"","password":""}</td></tr><tr><td>/auth/register</td><td>post</td><td>{"profile":"","name":"","email":"","mobileno":"","password":"","about":""}</td></tr><tr><td>/auth/logout</td><td>get</td><td>bearer token required</td></tr><tr><td>/auth/forget</td><td>post</td><td>{"email":""}</td></tr><tr><td>/auth/reset</td><td>post</td><td>{"password":""}</td></tr><tr><td>/user/get</td><td>get</td><td>bearer token required</td></tr><tr><td>/user/edit</td><td>post</td><td>bearer token required-{"profile":"","name":"","mobileno":"","about":""}</td></tr><tr><td>/user/delete</td><td>get</td><td>bearer token required</td></tr><tr><td>/service/new_media</td><td>post</td><td>bearer token required-{"username":"","site":""}</td></tr><tr><td>/service/remove_media</td><td>post</td><td>bearer token required-{"username":"","site":""}</td></tr><tr><td>/service/notification</td><td>get</td><td>bearer token required</td></tr><tr><td>/service/search</td><td>post</td><td>bearer token required-{"username":""}</td></tr><tr><td>/service/view_user</td><td>post</td><td>bearer token required-{"userid":""}</td></tr><tr><td>/service/scrap</td><td>post</td><td>bearer token required-{"username":"","site":""}</td></tr></tbody></table>