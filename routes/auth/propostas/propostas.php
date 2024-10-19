<?php

use Illuminate\Support\Facades\Route;

Route::name('auth.propostas.')
    ->prefix('propostas')
    ->group(function () {
        Route::resource('cliente', \App\Http\Controllers\Auth\Propostas\Cliente\ClientePropostaController::class);
        Route::resource('produtor', \App\Http\Controllers\Auth\Propostas\Produtor\ProdutorPropostaController::class);
    });
