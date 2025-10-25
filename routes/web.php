<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersLoginController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UrlsController;
use App\Http\Controllers\AdminController;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/shortlink', function () {
    return Inertia::render('shortlink/shortlink');
})->name('shortlink');

Route::get('/register', function () {
    return Inertia::render('register/register');
})->name('register');

// Route::get('/admin', function () {
//     return Inertia::render('admin/admin');
// })->name('admin');

Route::get('/admin', [AdminController::class, 'index'])->name('admin');

Route::resource('userslogin', UsersLoginController::class);

Route::get('/auth', [AuthController::class, 'get']);
Route::post('/auth', [AuthController::class, 'loginAuth']);

Route::get('/shortlink/create', [UrlsController::class, 'index'])->name('shortlink.index');
Route::post('/shortlink/create', [UrlsController::class, 'create'])->name('shortlink.create');
Route::get('/{short_code_url}', [UrlsController::class, 'redirectToOriginal'])->name('redirect.original');

// Route::post('/userslogin', UsersLoginController::class, 'store')->name('userslogin.store');

