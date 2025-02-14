<?php

use App\Http\Controllers\Admin\Usuarios\Produtor\CadastradosProdutorApiController;
use App\Http\Controllers\Auth\Produtor\GetProdutorController;
use App\Http\Controllers\Auth\Produtor\ProdutorController;
use Illuminate\Support\Facades\Route;

Route::name('auth.')
    ->group(function () {

        Route::resource('produtor', ProdutorController::class);

        Route::name('produtor.api.')
            ->prefix('produtor-api')
            ->group(function () {
                Route::get('cadastrados', CadastradosProdutorApiController::class)->name('get-all');
                Route::get('get/{id}', GetProdutorController::class)->name('get');
            });
    });
