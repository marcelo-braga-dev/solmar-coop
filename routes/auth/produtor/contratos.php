<?php

use App\Http\Controllers\Admin\Usuarios\Produtor\GetProdutorApiController;
use App\Http\Controllers\Auth\Produtor\Contratos\ContratosProdutorApiController;
use App\Http\Controllers\Auth\Produtor\Contratos\ContratosProdutorController;
use App\Http\Controllers\Auth\Produtor\FindProdutorController;
use App\Http\Controllers\Auth\Produtor\ProdutorController;
use Illuminate\Support\Facades\Route;

Route::name('auth.')
    ->group(function () {

        Route::resource('produtor-contratos', ContratosProdutorController::class);

        Route::name('produtor-contratos-api.')
            ->group(function () {
                Route::get('get-all/{id}', [ContratosProdutorApiController::class, 'getAll'])->name('get-all');
            });
    });
