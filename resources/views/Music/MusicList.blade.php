@extends('layout.MasterApp')
@section('content')
<div class="layout-specing">
    <div class="row">
        <div class="col-xl-9 col-md-6">
            <h5 class="mb-0">Music List</h5>

            <nav aria-label="breadcrumb" class="d-inline-block mt-2">
                <ul class="breadcrumb breadcrumb-muted bg-transparent rounded mb-0 p-0">
                    <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Music List</li>
                </ul>
            </nav>
        </div><!--end col-->

        <div class="col-xl-3 col-md-6 mt-4 mt-md-0 text-md-end">
            <a href="add-doctor.html" class="btn btn-primary">Add New Music</a>
        </div><!--end col-->
    </div><!--end row-->
    
    <div class="row row-cols-md-2 row-cols-lg-5">
        @forelse($songs as $song)
        <div class="col mt-4">
            <div class="card team border-0 rounded shadow overflow-hidden">
                <div class="team-img position-relative">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1BCwNlo0G7YYXUc3c2eFEIsPDZq8Q9h35SMqIyhBtCSshjpIvmbU9DoUqmbzwHB0jRAo&usqp=CAU"  class="img-fluid" style="width:100%" alt="">
                    <ul class="list-unstyled team-social mb-0">
                        <li><a href="#" class="btn btn-icon btn-pills btn-soft-primary"><i class="fa-solid fa-download"></i></a></li>
                    </ul>
                </div>
                <div class="card-body content text-center">
                    <a href="dr-profile.html" class="title text-dark h5 d-block mb-0">{{$song->title}}</a>
                    <small class="text-muted speciality">{{$song->artist}}</small> 
                </div>
            </div>
        </div><!--end col-->

        @empty
            <h4>No records found</h4>
        @endforelse

    </div><!--end row-->
</div>
@endsection