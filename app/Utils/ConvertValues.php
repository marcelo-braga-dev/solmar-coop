<?php

namespace App\Utils;

class ConvertValues
{
    public static function convertMoneyToFloat(?string $valor): float
    {
        if (is_null($valor) || $valor === '') {
            return 0;
        }

        if (is_numeric($valor)) {
            return $valor;
        }

        $valorLimpo = preg_replace('/[^\d,.-]/', '', $valor);
        $valorLimpo = str_replace('.', '', $valorLimpo);
        $valorLimpo = str_replace(',', '.', $valorLimpo);

        return is_numeric($valorLimpo) ? (float)$valorLimpo : 0.0;
    }
}
