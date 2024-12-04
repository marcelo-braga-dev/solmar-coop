<?php

use App\Http\Controllers\Auth\Produtor\GetKanbanController;
use App\Http\Controllers\Auth\Produtor\GetProdutorController;
use App\Http\Controllers\Auth\Produtor\KanbanProdutorController;
use Illuminate\Support\Facades\Route;

Route::name('auth.')
    ->group(function () {

        Route::name('produtor.')
            ->prefix('produtor')
            ->group(function () {

                Route::name('api.')
                    ->prefix('produtor-api')
                    ->group(function () {
                        Route::get('get/{id}', GetProdutorController::class)->name('get');
                    });
            });
    });
