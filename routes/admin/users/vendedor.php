<?php

use Illuminate\Support\Facades\Route;

Route::name('admin.user.')
    ->prefix('user')
    ->group(function () {
        Route::resource('vendedor', \App\Http\Controllers\Admin\Usuarios\Vendedor\VendedorController::class);

        Route::name('vendedor.api.')
            ->prefix('vendedor-api')
            ->group(function () {
                Route::get('get-vendedores', \App\Http\Controllers\Admin\Usuarios\Vendedor\GetAllVendedoresController::class)->name('get');
            });
    });
