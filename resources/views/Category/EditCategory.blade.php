@extends('layout.MasterApp')
@section('content')
<div class="layout-specing">
    <div class="d-md-flex justify-content-between">
        <h5 class="mb-0">Add New Category</h5>

        <nav aria-label="breadcrumb" class="d-inline-block mt-4 mt-sm-0">
            <ul class="breadcrumb bg-transparent rounded mb-0 p-0">
                <li class="breadcrumb-item active" aria-current="page">Add Category</li>
            </ul>
        </nav>
    </div>
    
    <div class="row">
        <div class="col-lg-12 mt-4">
            <div class="card border-0 p-4 rounded shadow">
                <div class="row align-items-center">
                <form  action="{{ route('category.update'.$category->id) }}" method="PUT"  class="mt-4"  enctype= multipart/form-data>
                    @csrf
                    <div class="row">
                        <div class="col-md-12">
                            <div class="mb-3">
                                <label class="form-label">Category Name</label>
                                <input name="name" id="name" type="text" value="{{$category->name}}" class="form-control" placeholder="Category Name :">
                                @error('name')
                                <div>{{ $message }}</div>
                            @enderror
                            </div>
                        </div><!--end col-->
                        <div class="col-md-12">
                            <div class="mb-3">
                                <label class="form-label">Notes</label>
                                <textarea name="notes" id="notes" rows="3" class="form-control" placeholder="Note :"></textarea>
                                @error('notes')
                                <div>{{ $message }}</div>
                            @enderror
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="mb-3">
                                <label class="form-label">Icon</label>
                                <input type="file" name="icon" id="icon" class="form-control" placeholder="Chosse icon">
                                @error('icon')
                                <div>{{ $message }}</div>
                            @enderror
                            </div>
                        </div>
                    </div><!--end row-->

                    <button type="submit" class="btn btn-primary">Add Category</button>
                </form>
            </div>
        </div><!--end col-->
    </div><!--end row-->
</div>
@endsection