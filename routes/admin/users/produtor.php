<?php

use App\Http\Controllers\Admin\Usuarios\Produtor\CadastradosProdutorApiController;
use App\Http\Controllers\Admin\Usuarios\Produtor\Status\AnalizarDocumentosController;
use App\Http\Controllers\Admin\Usuarios\Produtor\Status\UpdateStatusController;
use Illuminate\Support\Facades\Route;

Route::name('admin.')
    ->group(function () {

        Route::name('produtor.status.')
            ->prefix('produtor-status')
            ->group(function () {
                Route::resource('analizar-documentos', AnalizarDocumentosController::class);
            });

        Route::name('produtor.api.')
            ->prefix('produtor-api')
            ->group(function () {
                Route::get('cadastrados', CadastradosProdutorApiController::class)->name('cadastrados');
                Route::post('update-status', UpdateStatusController::class)->name('update-status');
            });
    });
