<?php

use App\Http\Controllers\MainController;
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
Route::post('/contact/store', [MainController::class, 'contact'])->name('contact.store');

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

Route::get('/donate', function () {
    return Inertia::location('https://donate.stripe.com/3cs3cybNU6e7cbCeUU');
});

Route::post('/subscribe', [MainController::class, 'subscribe'])->name('subscribe');

Route::post('/unsubscribe', [MainController::class, 'unsubscribe'])->name('unsubscribe');

Route::post('/membership', [MainController::class, 'membership'])->name('membership');
Route::post('/partnership', [MainController::class, 'partnership'])->name('partnership');
