<?php

use App\Http\Controllers\Admin\Concessionaria\ConcessionariaController;
use Illuminate\Support\Facades\Route;

Route::name('admin.')
    ->prefix('concessionaria')
    ->group(function () {
        Route::resource('concessionaria', ConcessionariaController::class);
        Route::get('api/get-all', [ConcessionariaController::class, 'getAll'])->name('concessionaria.api.get-all');
    });
