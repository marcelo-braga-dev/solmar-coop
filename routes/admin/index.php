<?php

use Illuminate\Support\Facades\Route;

Route::middleware(['auth'])
    ->prefix('admin')
    ->group(function () {
        require __DIR__ . '/users/admin.php';
        require __DIR__ . '/users/cliente.php';
        require __DIR__ . '/users/produtor.php';
        require __DIR__ . '/users/vendedor.php';
        require __DIR__ . '/financeiro.php';
    });


