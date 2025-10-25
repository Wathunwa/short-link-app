<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Urls;

class AdminController extends Controller
{
    //
    public function index()
    {
        // return inertia('admin/admin');
        $data = Urls::all();
        return inertia('admin/admin', ['data' => $data]);
    }

    public function getData()
    {
        //
        $data = Urls::all();
        return inertia('admin/admin', ['data' => $data]);
    }
}
