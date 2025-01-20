<?php

namespace App\Models\Users;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @deprecated
 */
class Cliente extends Model
{
    public function getAll()
    {
        return User::where('role_id', 4)
            ->with('userData');
    }
}
