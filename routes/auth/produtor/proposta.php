<?php

use App\Http\Controllers\Auth\Produtor\GetPropostasProdutorController;
use App\Http\Controllers\Auth\Produtor\ProdutorPropostasController;
use Illuminate\Support\Facades\Route;

Route::name('auth.produtor.')
    ->prefix('produtores')
    ->group(function () {
        Route::resource('proposta', ProdutorPropostasController::class);

        Route::name('proposta.api.')
            ->prefix('proposta-api')
            ->group(function () {
                Route::get('get', GetPropostasProdutorController::class)->name('get');
            });
    });
