<?php

use Illuminate\Support\Facades\Route;

Route::name('auth.suporte.')
    ->prefix('suporte')
    ->group(function () {
        Route::resource('cliente', \App\Http\Controllers\Auth\Suporte\Cliente\ClienteSuporteController::class);
        Route::resource('produtor', \App\Http\Controllers\Auth\Suporte\Produtor\ProdutorSuporteController::class);
    });
