<?php

use App\Http\Controllers\Auth\Contratos\Clientes\ClientesContratoController;
use App\Http\Controllers\Auth\Contratos\Usinas\UsinasContratoController;
use Illuminate\Support\Facades\Route;

Route::name('auth.contratos.')
    ->prefix('contratos')
    ->group(function () {
        Route::resource('usina', UsinasContratoController::class);
        Route::resource('cliente', ClientesContratoController::class);
    });
