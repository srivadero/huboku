/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

/** AUTH (requires homepage and dashboard routes)*/
Route.get('register', 'AuthController.registerForm').as('auth_register')
Route.post('register', 'AuthController.register')
Route.get('login', 'AuthController.loginForm').as('auth_login')
Route.post('login', 'AuthController.login')
Route.get('logout', 'AuthController.logout').as('auth_logout').middleware('auth')
Route.get('profile', 'AuthController.profile').as('auth_profile').middleware('auth')


Route.on('/').render('welcome').as('homepage')
Route.on('/dashboard').render('dashboard').as('dashboard').middleware('auth')

Route.resource('/thing', 'ThingsController')
