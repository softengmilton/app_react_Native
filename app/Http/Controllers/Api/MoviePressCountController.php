<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Click;
use Illuminate\Http\Request;

class MoviePressCountController extends Controller
{
    public function store(Request $request)
    {
        // Ensure user is authenticated and get the authenticated user ID
        $userId = $request->user()->id;

        $moviePressCount = Click::updateOrCreate(
            [
                'movie_id' => $request->movie_id, // Adjust to match your request payload
                'user_id' => $userId,
                'movie_type' => $request->movie_type, // Adjust to match your request payload
            ],
            ['press_count' => $request->press_count] // Adjust to match your request payload
        );

        return response()->json(['success' => true, 'data' => $moviePressCount]);
    }
}
