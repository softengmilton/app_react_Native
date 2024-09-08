<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Wishlist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class WishlistController extends Controller
{
    public function storeWish(Request $request)
    {
        $request->validate([
            'movie_id' => 'required|integer',
            'poster' => 'required|string',
            'movie_name' => 'required|string',
        ]);

        // Create or update the wishlist item
        $wishlistItem = Wishlist::updateOrCreate(
            ['movie_id' => $request->input('movie_id'), 'user_id' => Auth::user()->id],
            [
                'poster' => $request->input('poster'),
                'movie_name' => $request->input('movie_name'),
            ]
        );

        return response()->json(['message' => 'Wishlist item added successfully.', 'data' => $wishlistItem], 200);
    }
    public function destroyWish(Request $request)
    {
        $request->validate([
            'movie_id' => 'required|integer',
        ]);

        // Find and delete the wishlist item
        $wishlistItem = Wishlist::where('movie_id', $request->input('movie_id'))
            ->where('user_id', Auth::user()->id)
            ->first();

        if ($wishlistItem) {
            $wishlistItem->delete();
            return response()->json(['message' => 'Wishlist item removed successfully.'], 200);
        }

        return response()->json(['message' => 'Wishlist item not found.'], 404);
    }
    public function checkWish(Request $request)
    {
        $request->validate([
            'movie_id' => 'required|integer',
        ]);

        $isInWishlist = Wishlist::where('movie_id', $request->input('movie_id'))
            ->where('user_id', Auth::user()->id)
            ->exists();

        return response()->json(['isInWishlist' => $isInWishlist]);
    }
    public function index()
    {
        $user = Auth::user();
        $wishlistItems = Wishlist::where('user_id', $user->id)->get();

        return response()->json($wishlistItems);
    }

    public function removeWish(Request $request)
    {
        $user = Auth::user();

        // Validate the incoming request to ensure 'id' is provided
        $request->validate([
            'id' => 'required|integer|exists:wishlists,id',
        ]);

        // Find the wishlist item by the user and item id
        $wishlistItem = Wishlist::where('user_id', $user->id)
            ->where('id', $request->input('id'))
            ->first();

        // If the item exists, delete it
        if ($wishlistItem) {
            $wishlistItem->delete();
            return response()->json(['message' => 'Item removed from wishlist'], 200);
        }

        // If item is not found or belongs to another user
        // return response()->json(['message' => 'Item not found or unauthorized'], 404);
    }
}
