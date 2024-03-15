# PROYECTO 7 API REST AUTH -

Para este proyecto se ha creado una API usando una base de datos con videojuegos, consolas y usuarios, con un modelo para cada apartado.

## USERS

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

## Traer un juego oconsola por id

- **Método:** GET
- **URL:** `http://localhost:3003/api/v1/games/id`
- **URL:** `http://localhost:3003/api/v1/consoles/id`

Sólo el rol de administrador (admin) permite hacer determinadas acciones en la API, ya que se generará un token personal que sólo permitirá hacer modificaciones al administrador al hacer login; como por ejemplo:

## ADMIN

## traerse todos los usuarios

- **Método:** GET
- **URL:** `http://localhost:3000/api/v1/users/`

## traerse un usuario por su id

- **Método:** GET
- **URL:** `http://localhost:3002/api/v1/users/id`

## crear juegos o consolas

- **Método:** POST
- **URL:** `http://localhost:3003/api/v1/games/newgame`
- **URL:** `http://localhost:3003/api/v1/consoles/newconsole`

## actualizar por id usuarios, juegos y consolas

- **Método:** PATCH
- **URL:** `http://localhost:3002/api/v1/users/update/id`
- **URL:** `http://localhost:3002/api/v1/games/update/id`
- **URL:** `http://localhost:3002/api/v1/consoles/update/id`

## borrar usuarios, juegos y consolas por su id

- **Método:** DELETE
- **URL:** `http://localhost:3003/api/v1/users/delete/id`
- **URL:** `http://localhost:3003/api/v1/games/delete/id`
- **URL:** `http://localhost:3003/api/v1/consoles/delete/id`

Las contraseñas están encriptadas.

![captura a Insomnia](/src/pics/1.png)
![captura a Insomnia](/src/pics/2.png)

Prueba en el front
![captura a Insomnia](/src/pics/3.png)
