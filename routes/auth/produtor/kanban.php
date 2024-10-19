<?php

use Illuminate\Support\Facades\Route;

Route::name('auth.')
    ->group(function () {

        Route::name('produtor.')
            ->prefix('produtor')
            ->group(function () {
                Route::resource('kanban', \App\Http\Controllers\Auth\Produtor\KanbanProdutorController::class);
            });
    });
