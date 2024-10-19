<?php

use Illuminate\Support\Facades\Route;

Route::name('auth.')
    ->group(function () {
        Route::resource('usinas', \App\Http\Controllers\Auth\Usinas\UsinasController::class);

        Route::prefix('usinas-concessionaria')
            ->name('concessionaria.')
            ->group(function () {
                Route::get('usinas-concessionaria/{id}', [\App\Http\Controllers\Auth\Usinas\UsinasController::class, 'usinas'])->name('usinas');
            });
    });
