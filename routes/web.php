<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('Dashboard.Dashboard');
});
Route::get('/user', function () {
    return view('User.User');
});
Route::get('/addmusic', function () {
    return view('Music.AddMusic');
});
Route::get('/musiclist', function () {
    return view('Music.MusicList');
});




