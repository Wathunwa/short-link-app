<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\Users_login;

class UsersLoginController extends Controller
{
    //
    public function index()
    {
        return inertia('welcome');
    }

    public function create()
    {
        //
        return inertia('register');
    }

    public function store(Request $request)
    {
        //
        $fied = $request->validate([
            'email' => 'required|email|unique:users_logins,email',
            'password' => 'required|min:6',
        ]);

        Users_login::create([
            'email' => $fied['email'],
            'password' => Hash::make($fied['password']),
        ]);

       return redirect()->route('home');

    }
}
