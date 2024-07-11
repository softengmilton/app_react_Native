@extends('layout.MasterApp')
@section('content')
<div class="layout-specing">
    <div class="d-md-flex justify-content-between">
        <h5 class="mb-0">User List</h5>

        <nav aria-label="breadcrumb" class="d-inline-block mt-4 mt-sm-0">
            <ul class="breadcrumb bg-transparent rounded mb-0 p-0">
                <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                <li class="breadcrumb-item active" aria-current="page">User List</li>
            </ul>
        </nav>
    </div>
    
    <div class="row">
        <div class="col-12 mt-4">
            <div class="table-responsive shadow rounded">
                <table class="table table-center bg-white mb-0">
                    <thead>
                        <tr>
                            <th class="border-bottom p-3" style="min-width: 50px;">Id</th>
                            <th class="border-bottom p-3" style="min-width: 180px;">Name</th>
                            <th class="border-bottom p-3">Email</th>>
                            <th class="border-bottom p-3" style="min-width: 150px;">Date</th>
                            <th class="border-bottom p-3">Status</th>
                            <th class="border-bottom p-3" style="min-width: 100px;"></th>
                        </tr>
                    </thead>
                    <tbody>
                        @php
                            $key = $users->firstItem(); 
                        @endphp
                        @forelse ($users as $user)                    
                        <tr>
                            <th class="p-3">{{$key++}}</th>
                            <td class="py-3">
                                <a href="#" class="text-dark">
                                    <div class="d-flex align-items-center">
                                        <img src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=" class="avatar avatar-md-sm rounded-circle shadow" alt="">
                                        <span class="ms-2">{{$user->name}}</span>
                                    </div>
                                </a>
                            </td>
                            <td class="p-3">{{$user->email}}</td>

                            <td class="p-3">{{$user->created_at}}</td>
                            <td class="p-3"><span class="badge bg-soft-success">Approved</span></td>
                            <td class="text-end p-3">
                                <a href="#" class="btn btn-icon btn-pills btn-soft-primary" data-bs-toggle="modal" data-bs-target="#viewprofile"><i class="uil uil-eye"></i></a>
                                <a href="#" class="btn btn-icon btn-pills btn-soft-success" data-bs-toggle="modal" data-bs-target="#editprofile"><i class="uil uil-pen"></i></a>
                                <a href="#" class="btn btn-icon btn-pills btn-soft-danger"><i class="uil uil-trash"></i></a>
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
                {!! $users->links() !!}
            </div>
        </div><!--end col-->
        <!-- PAGINATION END -->
    </div><!--end row-->
</div>



@endsection