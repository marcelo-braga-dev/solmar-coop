<?php

use Illuminate\Support\Facades\Route;

Route::name('admin.user.')
    ->prefix('user')
    ->group(function () {
        Route::resource('admin', \App\Http\Controllers\Admin\Usuarios\Admin\AdminController::class);

        Route::name('api.')
            ->prefix('admin-api')
            ->group(function () {
                Route::get('get-admin', \App\Http\Controllers\Admin\Usuarios\Admin\GetAdminController::class)->name('get');
            });
    });
