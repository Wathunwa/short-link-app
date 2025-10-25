<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Users_login;
use Illuminate\Http\JsonResponse;
use Inertia\Inertia;

class AuthController extends Controller
{
    //
    public function loginAuth(Request $request)
    {
        //
        $data = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = Users_login::where('email', $data['email'])->first();   
        if (!$user || !\Hash::check($data['password'], $user->password)) {
            return redirect()->route('home')->withErrors(['login' => 'Login error: Invalid credentials.']);
        }

        if($user->email ==='admin@gmail.com'){
            // return inertia('admin/admin', ['user' => $user->only(['id','email'])]);
            // return redirect()->route('admin');

            // return Inertia::render('admin/admin', [
            //     'user' => $user->only(['id','email'])
            // ]);
            return redirect()->route('admin');
        } else {
            return inertia('shortlink/shortlink', ['user' => $user->only(['id','email'])]);
        }
        
        // return redirect()->route('shortlink');
        // return response()->json(['user' => $user->only(['id,email'])], 200);
        

    }

    public function get(){ 
        //
        return inertia('shortlink/shortlink');
    }
}
