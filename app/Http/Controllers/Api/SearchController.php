<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Search;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SearchController extends Controller
{
    public function store(Request $request)
    {
        $userId = Auth::id();  // Use Auth::id() for simplicity
        $request->validate([
            'query' => 'required|string',
        ]);

        $search = Search::create([
            'user_id' => $userId,
            'query' => $request->input('query'),  // Correct way to get the 'query' input
        ]);

        return response()->json($search, 201);
    }
}
