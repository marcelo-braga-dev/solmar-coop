<?php

namespace App\Utils;

class StringUtils
{
    public static function formatCnpj($cnpj)
    {
        if (!is_numeric($cnpj)) return $cnpj;

        $cnpj = str_pad($cnpj, 14, '0', STR_PAD_LEFT);

        return preg_replace("/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/", "$1.$2.$3/$4-$5", $cnpj);
    }

    public static function formatCep($cep)
    {
        if (!is_numeric($cep)) return $cep;

        $cep = str_pad($cep, 8, '0', STR_PAD_LEFT);

        return preg_replace("/(\d{5})(\d{3})/", "$1-$2", $cep);
    }
}
