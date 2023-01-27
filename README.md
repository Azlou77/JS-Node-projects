# vanilla.js
Revise the basics js:
-Var, let, const

Conditions:
-For, if, else if, while
-forEach
Destructuration data:

Arrays:
-map
-filter
-reduce

Poo:
-objects
-constructor

Browser:
-Dom
-createElement
-Timers


Project:
-Create windows swicth and add HTML element.

# Project node js
https://github.com/Azlou77/vanilla.js/tree/main/node-project/src
# Création d'un nouvel utilisateur
Sur Postman ou Insomnia: 
-Aller sur la méthode POST:
-Url: http://localhost:1234/signUp
-Dans body ajouter en JSON des données pour username 
 et password
-Voir la requête dans src/handlers/user.ts
-Voir la route dans src/index.ts

# Lire un utilisateur
-Aller sur la méthode GET:
-Url: http://localhost:1234/user/
-Dans body ajouter en JSON des données pour username 
-Voir la requête dans src/handlers/user.ts
-Voir la route dans src/routes/user.ts

# Modifier un utilisateur
-Aller sur la méthode PUT:
-Url: http://localhost:1234/user/put
-Dans body ajouter en JSON des données pour username 
-Voir la requête dans src/handlers/user.ts
-Voir la route dans src/routes/user.ts

# Supprimer un utilisateur
-Aller sur la méthode DELETE:
-Url: http://localhost:1234/user/delete
-Dans body ajouter en JSON des données pour username 
-Voir la requête dans src/handlers/user.ts
-Voir la route dans src/routes/user.ts

# Création d'un nouvel article
Sur Postman ou Insomnia: 
-Aller sur la méthode POST:
-Url: http://localhost:1234/post/create
-Dans body ajouter en JSON des données pour title 
 et content
-Voir la requête dans src/routes/post.ts
-Voir la route dans src/routes/post.ts

# Lire un article
-Aller sur la méthode GET:
-Url: http://localhost:1234/post
-Dans body ajouter en JSON des données pour title 
-Voir la requête dans src/routes/post.ts
-Voir la route dans src/routes/post.ts


# Modifier un article
-Aller sur la méthode PUT:
-Url: http://localhost:1234/post/put
-Dans body ajouter en JSON des données pour title 
-Voir la requête dans src/routes/post.ts
-Voir la route dans src/routes/post.ts

# Supprimer un article
-Aller sur la méthode DELETE:
-Url: http://localhost:1234/post/delete
-Dans body ajouter en JSON des données pour title 
-Voir la requête dans src/routes/post.ts
-Voir la route dans src/routes/post.ts

# Création d'un nouvel comment
Sur Postman ou Insomnia: 
-Aller sur la méthode POST:
-Url: http://localhost:1234/comment/create
-Dans body ajouter en JSON des données pour content, 
 postId
-Voir la requête dans src/routes/comment.ts
-Voir la route dans src/routes/comment.ts

# Lire un comment
-Aller sur la méthode GET:
-Url: http://localhost:1234/comment
-Dans body ajouter en JSON des données pour postId 
-Voir la requête dans src/routes/comment.ts
-Voir la route dans src/routes/comment.ts


# Modifier un comment
-Aller sur la méthode PUT:
-Url: http://localhost:1234/comment/put
-Dans body ajouter en JSON des données pour authorId/
 postId 
-Voir la requête dans src/routes/comment.ts
-Voir la route dans src/routes/comment.ts

# Supprimer un comment
-Aller sur la méthode DELETE:
-Url: http://localhost:1234/comment/delete
-Dans body ajouter en JSON des données pour authorId/
 postId 
-Voir la requête dans src/routes/comment.ts
-Voir la route dans src/routes/comment.ts




