<?php

use App\Http\Controllers\Auth\Cliente\Propostas\GetPropostaController;
use App\Http\Controllers\Auth\Cliente\Propostas\PropostaController;
use Illuminate\Support\Facades\Route;

Route::name('auth.cliente.')
    ->prefix('cliente')
    ->group(function () {
        Route::resource('proposta', PropostaController::class);

        Route::name('proposta.api.')
            ->prefix('proposta-api')
            ->group(function () {
                Route::get('get', GetPropostaController::class)->name('get');
            });
    });
