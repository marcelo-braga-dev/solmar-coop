<?php

use Illuminate\Support\Facades\Route;

Route::name('admin.')
    ->group(function () {
        Route::resource('produtor', \App\Http\Controllers\Admin\Usuarios\Produtor\ProdutorController::class);

        Route::name('produtor.status.')
            ->prefix('produtor-status')
            ->group(function () {
                Route::resource('analizar-documentos', \App\Http\Controllers\Admin\Usuarios\Produtor\Status\AnalizarDocumentosController::class);
            });

        Route::name('produtor.api.')
            ->prefix('produtor-api')
            ->group(function () {
                Route::get('cadastrados', \App\Http\Controllers\Admin\Usuarios\Produtor\CadastradosProdutorApiController::class)->name('cadastrados');
                Route::get('get-kanban', \App\Http\Controllers\Admin\Usuarios\Produtor\GetKanbanController::class)->name('get-kanban');
                Route::post('update-status', \App\Http\Controllers\Admin\Usuarios\Produtor\Status\UpdateStatusController::class)->name('update-status');
            });
    });
