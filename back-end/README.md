# SociaLod Backend API
Use this api for scrap information

RUN
---
    # ndoe index
    Server listen at http://localhost:5000
    (node:19628) DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
    Database connected

Visit http://localhost:5000 for API manual
---

<h1>SociaLod Backend Manual</h1><table><tr><th>Paths</th><th>Methods</th><th>Parameters</th></tr><tr><td>/auth/login</td><td>post</td><td></td></tr><tr><td>/auth/register</td><td>post</td><td></td></tr><tr><td>/auth/logout</td><td>get</td><td></td></tr><tr><td>/auth/forget</td><td>post</td><td></td></tr><tr><td>/auth/reset/:resetPass</td><td>post</td><td></td></tr><tr><td>/user/get</td><td>get</td><td></td></tr><tr><td>/user/edit</td><td>post</td><td></td></tr><tr><td>/user/delete</td><td>get</td><td></td></tr><tr><td>/service/new_media</td><td>post</td><td></td></tr><tr><td>/service/remove_media</td><td>post</td><td></td></tr><tr><td>/service/notification</td><td>get</td><td></td></tr><tr><td>/service/search</td><td>post</td><td></td></tr><tr><td>/service/view_user</td><td>post</td><td></td></tr><tr><td>/service/scrap</td><td>post</td><td></td></tr></table>