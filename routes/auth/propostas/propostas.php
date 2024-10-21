<?php

use App\Http\Controllers\Auth\Propostas\Cliente\ClientePropostaController;
use App\Http\Controllers\Auth\Propostas\Produtor\GerarPropostaUsinaController;
use App\Http\Controllers\Auth\Propostas\Produtor\ProdutorPropostaController;
use Illuminate\Support\Facades\Route;

Route::name('auth.propostas.')
    ->prefix('propostas')
    ->group(function () {
        Route::resource('cliente', ClientePropostaController::class);
        Route::resource('produtor', ProdutorPropostaController::class);

        Route::name('pdf.usina.')
            ->prefix('pdf')
            ->group(function () {
                Route::post('gerar-pdf-usina', [GerarPropostaUsinaController::class, 'gerarPdf'])->name('gerar-pdf');
                Route::get('layout-pdf', [GerarPropostaUsinaController::class, 'layoutPdf'])->name('layout-pdf');
            });
    });
