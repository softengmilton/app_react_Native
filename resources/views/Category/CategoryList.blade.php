@extends('layout.MasterApp')
@section('content')
<div class="layout-specing">
    <div class="d-md-flex justify-content-between">
        <h5 class="mb-0">User List</h5>

        <nav aria-label="breadcrumb" class="d-inline-block mt-4 mt-sm-0">
            <ul class="breadcrumb bg-transparent rounded mb-0 p-0">
                <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                <li class="breadcrumb-item active" aria-current="page">Category List</li>
            </ul>
        </nav>
    </div>
    
    <div class="row">
        <div class="col-12 mt-4">
            <div class="table-responsive shadow rounded">
                <table class="table table-center bg-white mb-0">
                    <thead>
                        <tr>
                            <th class="border-bottom p-3" style="min-width: 180px;"></th>
                            <th class="border-bottom p-3" style="min-width: 180px;">Name</th>
                            <th class="border-bottom p-3">Notes</th>
                            <th class="border-bottom p-3" style="min-width: 150px;">Date</th>
                            <th class="border-bottom p-3" style="min-width: 100px;"></th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse ($categories as $category)                    
                        <tr>
                            <td class="py-3">
                                <a href="#" class="text-dark">
                                    <div class="d-flex align-items-center">
                                        <img src="{{ asset('storage/' . $category->icon) }}" class="avatar avatar-md-sm rounded-circle shadow" alt="">
                                        <span class="ms-2"></span>
                                    </div>
                                </a>
                            </td>
                            <td class="p-3">{{$category->name}}</td>

                            <td class="p-3">  {{ Str::words(strip_tags($category->notes), 15, '...') }}</td>
                            <td class="p-3">{{$category->created_at}}</td>
                            <td class="text-end p-3">
                                <a href="{{ route('category.edit', $category->id)}}" class="btn btn-icon btn-pills btn-soft-success" data-bs-toggle="modal" data-bs-target="#editprofile"><i class="uil uil-pen"></i></a>
                                <form id="delete-category-{{ $category->id }}" action="{{ route('category.destroy', $category->id) }}" method="POST" style="display: inline;">
                                    @csrf <!-- CSRF token -->
                                    @method('DELETE') <!-- Method spoofing for DELETE request -->
                                    <button type="submit" onclick="return confirm('Are you sure you want to delete this category?')" class="btn btn-icon btn-pills btn-soft-danger">
                                        <i class="uil uil-trash"></i>
                                    </button>
                                </form>
                            </td>
                        </tr>
                        @empty
                            <h1>Has no records</h1>
                        @endforelse
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div><!--end row-->

    <div class="row text-center">
        <!-- PAGINATION START -->
        <div class="col-12 mt-4">
            <div class="d-md-flex align-items-center text-center justify-content-between">
                {!! $categories->links() !!}
            </div>
        </div><!--end col-->
        <!-- PAGINATION END -->
    </div><!--end row-->
</div>



@endsection