<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactFormController extends Controller
{
    public function index()
    {
        return Inertia::render('Contact/Index', []);
    }
}
