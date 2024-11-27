<?php

use App\Http\Controllers\Auth\Concessionarias\GetAllConcessionariasController;
use App\Http\Controllers\Auth\Concessionarias\UpdateConcessionariaController;
use Illuminate\Support\Facades\Route;

Route::prefix('concessionarias')
    ->name('auth.concessionarias.')
    ->group(function () {
        Route::get('get-all', GetAllConcessionariasController::class)->name('get-all');
        Route::put('update/{id}', UpdateConcessionariaController::class)->name('update');
    });

