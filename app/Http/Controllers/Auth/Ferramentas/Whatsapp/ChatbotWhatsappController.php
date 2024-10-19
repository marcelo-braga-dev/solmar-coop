<?php

namespace App\Http\Controllers\Auth\Ferramentas\Whatsapp;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class ChatbotWhatsappController extends Controller
{
    public function index()
    {
        return Inertia::render('Auth/Ferramentas/Whatsapp/Chatbot/Page');
    }
}
