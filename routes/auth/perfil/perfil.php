<?php

use Illuminate\Support\Facades\Route;

Route::name('auth.perfil.')
    ->prefix('perfil')
    ->group(function () {
        Route::resource('usuario', \App\Http\Controllers\Auth\Perfil\PerfilController::class);
    });
