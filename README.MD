# PROYECTO 8 API REST FILES -

Para este proyecto se ha creado una API usando una base de datos con videojuegos, consolas y usuarios, con un modelo para cada apartado.

## ADMIN

El rol de administrador (admin) permitirá hacer determinadas acciones en la API, ya que se generará un token personal que sólo permitirá hacer modificaciones al administrador al hacer login; como por ejemplo:

## traerse todos los usuarios

- **Método:** GET
- **URL:** `http://localhost:3000/api/v1/users/`

## traerse un usuario por su id

- **Método:** GET
- **URL:** `http://localhost:3003/api/v1/users/id`

## actualizar al usuario y/o generar un rol de administrador a un usuario

- **Método:** PATCH
- **URL:** `http://localhost:3003/api/v1/users/update/id`

## crear juegos o consolas

- **Método:** PUT
- **URL:** `http://localhost:3003/api/v1/games/newgame`
- **URL:** `http://localhost:3003/api/v1/consoles/newconsole`

## actualizar por id juegos y consolas

- **Método:** PATCH
- **URL:** `http://localhost:3003/api/v1/games/update/id`
- **URL:** `http://localhost:3003/api/v1/consoles/update/id`

## borrar usuarios, juegos y consolas por su id

- **Método:** DELETE
- **URL:** `http://localhost:3003/api/v1/users/delete/id`
- **URL:** `http://localhost:3003/api/v1/games/delete/id`
- **URL:** `http://localhost:3003/api/v1/consoles/delete/id`

## USERS

El rol de usuario (user) vendrá siempre por defecto en el registro.

Todos los usuarios pueden

## Registrarse

- **Método:** POST
- **URL:** `http://localhost:3003/api/v1/users/register`

## Loguearse

- **Método:** POST
- **URL:** `http://localhost:3003/api/v1/users/login`

## Traer los juegos y las consolas

- **Método:** GET
- **URL:** `http://localhost:3003/api/v1/games`
- **URL:** `http://localhost:3003/api/v1/consoles`

## Traer juegos o consolas por id

- **Método:** GET
- **URL:** `http://localhost:3003/api/v1/games/id`
- **URL:** `http://localhost:3003/api/v1/consoles/id`

## Las contraseñas están encriptadas

![captura a Insomnia](/src/pics/picture1.png)
![captura a Insomnia](/src/pics/picture2.png)

Pruebas en el front
![captura a Insomnia](/src/pics/picture3.png)
