<?php

namespace App\DTO\UsinaSolar;

use Illuminate\Http\Request;

class CreateUsinaDTO
{
    public int $userId;
    public int $uc;
    public int $mediaGeracao;
    public int $prazoLocacao;
    public int $concessionaria;

    public int $sellerId;
    public float $potenciaUsina;
    public string $inversores;
    public string $modulos;
    public float $taxaReducaoConsumo;

    public static function fromArray(int $userId, $data): CreateUsinaDTO
    {
        $dto = new self();

        $dto->userId = $userId;
        $dto->uc = $data['uc'] ?? null;
        $dto->mediaGeracao = $data['media_geracao'] ?? null;
        $dto->prazoLocacao = $data['prazo_locacao'] ?? null;
        $dto->concessionaria = $data['concessionaria_id'] ?? null;
        $dto->sellerId = auth()->id();
        $dto->potenciaUsina = $data['potencia_usina'] ?? null;
        $dto->inversores = $data['inversores'] ?? null;
        $dto->modulos = $data['modulos'] ?? null;
        $dto->taxaReducaoConsumo = $data['taxa_reducao_consumo'] ?? null;

        return $dto;
    }

    public function toArray(): array
    {
        return [
            'user_id' => $this->userId,
            'uc' => $this->uc,
            'media_geracao' => $this->mediaGeracao,
            'prazo_locacao' => $this->prazoLocacao,
            'concessionaria_id' => $this->concessionaria,
            'seller_id' => $this->sellerId,
            'potencia_usina' => $this->potenciaUsina,
            'inversores' => $this->inversores,
            'modulos' => $this->modulos,
            'taxa_reducao_consumo' => $this->taxaReducaoConsumo,
        ];
    }
}
