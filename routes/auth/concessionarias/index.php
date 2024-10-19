<?php

use Illuminate\Support\Facades\Route;

Route::prefix('concessionarias')
    ->name('auth.concessionarias.')
    ->group(function () {
        Route::get('get-all', \App\Http\Controllers\Auth\ConcessionariasEnegia\GetAllConcessionariasController::class)->name('get-all');
    });

