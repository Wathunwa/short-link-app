<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUrlsRequest;
use App\Http\Requests\UpdateUrlsRequest;
use App\Models\Urls;
use Illuminate\Http\Request;

class UrlsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return inertia('shortlink/shortlink');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        //
        $fied = $request->validate([
            'original_url' => 'required',
            'user_id' => 'required',
            'user_name' => 'required',
        ]);

        $url = Urls::Where('original_url', $fied['original_url'])->first();
        if(!$url){
            $short_link = Urls::genShortlink();
            Urls::create([
                'user_id' => $fied['user_id'],
                'user_name' => $fied['user_name'],
                'original_url' => $fied['original_url'],
                'short_code_url' => $short_link,
                'status_url' => 'active',
            ]);

            return inertia('shortlink/shortlink', ['url' => url('/').'/'.$short_link]);
        }

        
    }

    function redirectToOriginal($short_code_url)
    {
        $url = Urls::where('short_code_url', $short_code_url)->first();

        if ($url) {
            // $url->increment('visits');
            return redirect($url->original_url);
        } else {
            return redirect()->route('shortlink/shortlink')->withErrors(['url' => 'URL not found.']);
        }
    }

   
}
