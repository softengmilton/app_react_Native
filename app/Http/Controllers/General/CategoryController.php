<?php

namespace App\Http\Controllers\General;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\CategoryRequest;
use App\Models\Category;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): View
    {
        $categories = Category::paginate(5);
        return view('Category.CategoryList', compact('categories'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): View
    {
        return view('Category.AddCategory');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CategoryRequest $request): RedirectResponse
    {
        // try {
        $validated = $request->validated();

        if ($request->hasFile('icon')) {
            $iconPath = $request->file('icon')->store('icons', 'public');
            $validated['icon'] = $iconPath;
        }

        Category::create($validated);

        return redirect()->route('category.index')->with('success', 'Category created successfully');
        // } catch (\Throwable $th) {
        return redirect()->back()->withErrors('An error occurred while creating the category');
        // }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category): View
    {

        return view('Category.EditCategory', compact('category'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CategoryRequest $request, string $id): RedirectResponse
    {
        try {
            $category = Category::findOrFail($id);
            $validated = $request->validated();

            if ($request->hasFile('icon')) {
                // Delete the old icon if it exists
                if ($category->icon) {
                    Storage::disk('public')->delete($category->icon);
                }

                // Store the new icon
                $iconPath = $request->file('icon')->store('icons', 'public');
                $validated['icon'] = $iconPath;
            }

            $category->update($validated);

            return redirect()->route('category.index')->with('success', 'Category updated successfully');
        } catch (\Throwable $th) {
            return redirect()->back()->withErrors('An error occurred while updating the category');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        try {
            // Attempt to delete the category
            $category->delete();

            // Redirect back with success message
            return redirect()->back()->with('success', 'Category deleted successfully');
        } catch (\Throwable $th) {
            // Handle any errors that occur during deletion
            return redirect()->back()->withErrors('Failed to delete category');
        }
    }
}
