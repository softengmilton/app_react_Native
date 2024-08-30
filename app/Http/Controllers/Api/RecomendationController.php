<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Search;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Click;

class RecomendationController extends Controller
{
    public function recomendation()
    {
        $mostClickedMovieType = Click::select('movie_type')
            ->groupBy('movie_type')
            ->orderByRaw('SUM(press_count) DESC')
            ->limit(1)
            ->value('movie_type');

        return response()->json($mostClickedMovieType, 201);
    }
}
