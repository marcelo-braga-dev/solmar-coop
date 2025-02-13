<?php

namespace App\Utils;

use Illuminate\Support\Facades\Session;

class AlertMessage
{
    public static function success(?string $message): void
    {
        Session::flash('alert', [
            'message' => $message ?: 'Ação realizada com sucesso!',
            'type' => 'success',
        ]);
    }

    public static function error(?string $message): void
    {
        Session::flash('alert', [
            'message' => $message ?: 'Erro desconhecido!',
            'type' => 'error',
        ]);
    }
}
