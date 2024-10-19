<?php

namespace App\Http\Controllers\Auth\Produtor;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class KanbanProdutorController extends Controller
{
    public function index()
    {
        return Inertia::render('Auth/Produtor/Kanban/Page');
    }
}
