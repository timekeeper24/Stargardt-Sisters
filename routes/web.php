<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\ContactFormController;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/contact', [ContactFormController::class, 'index'])->name('contact');
