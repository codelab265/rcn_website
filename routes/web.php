<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/store', function () {
    return Inertia::render('Store');
})->name('store');

Route::get('/programmes', function () {
    return Inertia::render('Programmes');
})->name('programmes');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('/partnership', function () {
    return Inertia::render('Partnership');
})->name('partnership');

Route::group(['prefix' => 'community', 'as' => 'community.'], function () {
    Route::get('/events', function () {
        return Inertia::render('community/Events');
    })->name('events');
    Route::get('/sermons', function () {
        return Inertia::render('community/Sermons');
    })->name('sermons');
    Route::get('/podcasts', function () {
        return Inertia::render('community/Podcasts');
    })->name('podcasts');
    Route::get('/news', function () {
        return Inertia::render('community/News');
    })->name('news');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';