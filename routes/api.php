<?php

use App\Http\Controllers\Api\Auth\RegisteredUserController;
use App\Http\Controllers\Api\MoviePressCountController;
use App\Http\Controllers\Api\RecomendationController;
use App\Http\Controllers\Api\SearchController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    $user = Auth::user();
    return  response()->json(['user' => $user]);
});

Route::post('/login', function (Request $request) {
    $request->validate([
        'email' => 'required|email',
        'password' => 'required',
        'device_name' => 'required',
    ]);

    $user = User::where('email', $request->email)->first();

    if (!$user || !Hash::check($request->password, $user->password)) {
        throw ValidationException::withMessages([
            'email' => ['The provided credentials are incorrect.'],
        ]);
    }

    return $user->createToken($request->device_name)->plainTextToken;
});



Route::post('/register', [RegisteredUserController::class, 'store']);




Route::get('/helodata', function () {
    $data = User::take(11)->get(); // Use the correct syntax to fetch the first 5 users from the User model

    return response()->json($data); // Return the data as a JSON response
});

Route::get('/recomendation', [RecomendationController::class, 'recomendation']);



// routes/api.php
// routes/api.php
Route::middleware('auth:sanctum')->post('/count', [MoviePressCountController::class, 'store']);
Route::middleware('auth:sanctum')->post('/search', [SearchController::class, 'store']);
