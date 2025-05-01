<?php

use App\Http\Controllers\Admin\Config\ConfigController;
use Illuminate\Support\Facades\Route;

Route::name('auth.config.')
    ->prefix('config')
    ->group(function () {
        Route::name('api.')
            ->prefix('api')
            ->group(function () {
                Route::get('get-taxa-reducao-conta', [ConfigController::class, 'getTaxaReducaoConta'])->name('get-taxa-reducao-conta');
            });
    });
