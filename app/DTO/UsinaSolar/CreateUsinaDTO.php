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

    public static function fromArray(int $userId, $data): CreateUsinaDTO
    {
        $dto = new self();

        $dto->userId = $userId;
        $dto->uc = $data['uc'] ?? null;
        $dto->mediaGeracao = $data['media_geracao'] ?? null;
        $dto->prazoLocacao = $data['prazo_locacao'] ?? null;
        $dto->concessionaria = $data['concessionaria_id'] ?? null;

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
        ];
    }
}
