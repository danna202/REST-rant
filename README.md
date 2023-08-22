# REST-rant
REST-Rant is an app where users can review resturants.

This site was built using [GitHub Pages](https://pages.github.com/)

Steps: 
*create express
*create files
*create github

![resturant](https://images.unsplash.com/photo-1555992457-b8fefdd09069?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdHVyYW50c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60) 

|Method|  Path           |Purpose                                        |
|------|-----------------|-----------------------------------------------|
|GET   |  /               |Home Page                                     |
|GET   |/places           |Places index page                             |
|POST  |/places           |Create new place                              |
|GET   |/places/new       |From page for creating a new place            |
|GET   |/place/:id        |Details about a particular place              |
|PUT   |/places/:id       |Update a particular place                     |
|GET   |/places/:id/edit  |Form page for editing an existing place       |
|DELETE|/places/:id       |Delete particular place                       |
|POST  |/places/:id/rant  |Create a rant(comment)about a particular place|
|DELETE|/places/:id/rant/:rantId|Delete a rant (comment) about a particular place|
|GET   |  *                |404 page (matches any route not defined above)|



|NAME           |CITY               |STATE|CUISINES       |PICTURE|
|---------------|-------------------|-----|---------------|-------|
|Holy Moly      |Asheville          |NC   |American       |![american resturant](image.png)|
|Wang Fu        |Waynesville        |NC   |Chinese        |![chinese resturant](image-1.png)