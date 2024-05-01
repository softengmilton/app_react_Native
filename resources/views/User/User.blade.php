@extends('layout.MasterApp')
@section('content')
<div class="layout-specing">
    <div class="d-md-flex justify-content-between">
        <h5 class="mb-0">Patients List</h5>

        <nav aria-label="breadcrumb" class="d-inline-block mt-4 mt-sm-0">
            <ul class="breadcrumb bg-transparent rounded mb-0 p-0">
                <li class="breadcrumb-item"><a href="index.html">Doctris</a></li>
                <li class="breadcrumb-item active" aria-current="page">Patients</li>
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
                            <th class="border-bottom p-3">Age</th>
                            <th class="border-bottom p-3">Gender</th>
                            <th class="border-bottom p-3">Address</th>
                            <th class="border-bottom p-3">Mobile No.</th>
                            <th class="border-bottom p-3">Department</th>
                            <th class="border-bottom p-3" style="min-width: 150px;">Date</th>
                            <th class="border-bottom p-3">Time</th>
                            <th class="border-bottom p-3">Status</th>
                            <th class="border-bottom p-3" style="min-width: 100px;"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th class="p-3">1</th>
                            <td class="py-3">
                                <a href="#" class="text-dark">
                                    <div class="d-flex align-items-center">
                                        <img src="assets/images/client/01.jpg" class="avatar avatar-md-sm rounded-circle shadow" alt="">
                                        <span class="ms-2">Howard Tanner</span>
                                    </div>
                                </a>
                            </td>
                            <td class="p-3">25</td>
                            <td class="p-3">Male</td>
                            <td class="p-3">1451 - ABC Street, NY</td>
                            <td class="p-3">(+452) 8945 4568</td>
                            <td class="p-3">Cardiology</td>
                            <td class="p-3">20th Dec 2020</td>
                            <td class="p-3">11:00AM</td>
                            <td class="p-3"><span class="badge bg-soft-success">Approved</span></td>
                            <td class="text-end p-3">
                                <a href="#" class="btn btn-icon btn-pills btn-soft-primary" data-bs-toggle="modal" data-bs-target="#viewprofile"><i class="uil uil-eye"></i></a>
                                <a href="#" class="btn btn-icon btn-pills btn-soft-success" data-bs-toggle="modal" data-bs-target="#editprofile"><i class="uil uil-pen"></i></a>
                                <a href="#" class="btn btn-icon btn-pills btn-soft-danger"><i class="uil uil-trash"></i></a>
                            </td>
                        </tr>
                        
                        <tr>
                            <th class="p-3">2</th>
                            <td class="py-3">
                                <a href="#" class="text-dark">
                                    <div class="d-flex align-items-center">
                                        <img src="assets/images/client/02.jpg" class="avatar avatar-md-sm rounded-circle shadow" alt="">
                                        <span class="ms-2">Wendy Filson</span>
                                    </div>
                                </a>
                            </td>
                            <td class="p-3">28</td>
                            <td class="p-3">Female</td>
                            <td class="p-3">1451 - ABC Street, NY</td>
                            <td class="p-3">(+452) 8945 4568</td>
                            <td class="p-3">Gynecology</td>
                            <td class="p-3">20th Dec 2020</td>
                            <td class="p-3">11:00AM</td>
                            <td class="p-3"><span class="badge bg-soft-warning">Pending</span></td>
                            <td class="text-end p-3">
                                <a href="#" class="btn btn-icon btn-pills btn-soft-primary" data-bs-toggle="modal" data-bs-target="#viewprofile"><i class="uil uil-eye"></i></a>
                                <a href="#" class="btn btn-icon btn-pills btn-soft-success" data-bs-toggle="modal" data-bs-target="#editprofile"><i class="uil uil-pen"></i></a>
                                <a href="#" class="btn btn-icon btn-pills btn-soft-danger"><i class="uil uil-trash"></i></a>
                            </td>
                        </tr>
                        
                        <tr>
                            <th class="p-3">3</th>
                            <td class="py-3">
                                <a href="#" class="text-dark">
                                    <div class="d-flex align-items-center">
                                        <img src="assets/images/client/03.jpg" class="avatar avatar-md-sm rounded-circle shadow" alt="">
                                        <span class="ms-2">Faye Bridger</span>
                                    </div>
                                </a>
                            </td>
                            <td class="p-3">28</td>
                            <td class="p-3">Female</td>
                            <td class="p-3">1451 - ABC Street, NY</td>
                            <td class="p-3">(+452) 8945 4568</td>
                            <td class="p-3">Psychotherapy</td>
                            <td class="p-3">20th Dec 2020</td>
                            <td class="p-3">11:00AM</td>
                            <td class="p-3"><span class="badge bg-soft-success">Approved</span></td>
                            <td class="text-end p-3">
                                <a href="#" class="btn btn-icon btn-pills btn-soft-primary" data-bs-toggle="modal" data-bs-target="#viewprofile"><i class="uil uil-eye"></i></a>
                                <a href="#" class="btn btn-icon btn-pills btn-soft-success" data-bs-toggle="modal" data-bs-target="#editprofile"><i class="uil uil-pen"></i></a>
                                <a href="#" class="btn btn-icon btn-pills btn-soft-danger"><i class="uil uil-trash"></i></a>
                            </td>
                        </tr>
                        
                        <tr>
                            <th class="p-3">4</th>
                            <td class="py-3">
                                <a href="#" class="text-dark">
                                    <div class="d-flex align-items-center">
                                        <img src="assets/images/client/04.jpg" class="avatar avatar-md-sm rounded-circle shadow" alt="">
                                        <span class="ms-2">Ronald Curtis</span>
                                    </div>
                                </a>
                            </td>
                            <td class="p-3">25</td>
                            <td class="p-3">Male</td>
                            <td class="p-3">1451 - ABC Street, NY</td>
                            <td class="p-3">(+452) 8945 4568</td>
                            <td class="p-3">Orthopedic</td>
                            <td class="p-3">20th Dec 2020</td>
                            <td class="p-3">11:00AM</td>
                            <td class="p-3"><span class="badge bg-soft-success">Approved</span></td>
                            <td class="text-end p-3">
                                <a href="#" class="btn btn-icon btn-pills btn-soft-primary" data-bs-toggle="modal" data-bs-target="#viewprofile"><i class="uil uil-eye"></i></a>
                                <a href="#" class="btn btn-icon btn-pills btn-soft-success" data-bs-toggle="modal" data-bs-target="#editprofile"><i class="uil uil-pen"></i></a>
                                <a href="#" class="btn btn-icon btn-pills btn-soft-danger"><i class="uil uil-trash"></i></a>
                            </td>
                        </tr>
                        
                        <tr>
                            <th class="p-3">5</th>
                            <td class="py-3">
                                <a href="#" class="text-dark">
                                    <div class="d-flex align-items-center">
                                        <img src="assets/images/client/05.jpg" class="avatar avatar-md-sm rounded-circle shadow" alt="">
                                        <span class="ms-2">Melissa Hibner</span>
                                    </div>
                                </a>
                            </td>
                            <td class="p-3">28</td>
                            <td class="p-3">Female</td>
                            <td class="p-3">1451 - ABC Street, NY</td>
                            <td class="p-3">(+452) 8945 4568</td>
                            <td class="p-3">Dental</td>
                            <td class="p-3">20th Dec 2020</td>
                            <td class="p-3">11:00AM</td>
                            <td class="p-3"><span class="badge bg-soft-warning">Pending</span></td>
                            <td class="text-end p-3">
                                <a href="#" class="btn btn-icon btn-pills btn-soft-primary" data-bs-toggle="modal" data-bs-target="#viewprofile"><i class="uil uil-eye"></i></a>
                                <a href="#" class="btn btn-icon btn-pills btn-soft-success" data-bs-toggle="modal" data-bs-target="#editprofile"><i class="uil uil-pen"></i></a>
                                <a href="#" class="btn btn-icon btn-pills btn-soft-danger"><i class="uil uil-trash"></i></a>
                            </td>
                        </tr>
                        
                        <tr>
                            <th class="p-3">6</th>
                            <td class="py-3">
                                <a href="#" class="text-dark">
                                    <div class="d-flex align-items-center">
                                        <img src="assets/images/client/06.jpg" class="avatar avatar-md-sm rounded-circle shadow" alt="">
                                        <span class="ms-2">Randall Case</span>
                                    </div>
                                </a>
                            </td>
                            <td class="p-3">25</td>
                            <td class="p-3">Male</td>
                            <td class="p-3">1451 - ABC Street, NY</td>
                            <td class="p-3">(+452) 8945 4568</td>
                            <td class="p-3">Orthopedic</td>
                            <td class="p-3">20th Dec 2020</td>
                            <td class="p-3">11:00AM</td>
                            <td class="p-3"><span class="badge bg-soft-success">Approved</span></td>
                            <td class="text-end p-3">
                                <a href="#" class="btn btn-icon btn-pills btn-soft-primary" data-bs-toggle="modal" data-bs-target="#viewprofile"><i class="uil uil-eye"></i></a>
                                <a href="#" class="btn btn-icon btn-pills btn-soft-success" data-bs-toggle="modal" data-bs-target="#editprofile"><i class="uil uil-pen"></i></a>
                                <a href="#" class="btn btn-icon btn-pills btn-soft-danger"><i class="uil uil-trash"></i></a>
                            </td>
                        </tr>

                        <tr>
                            <th class="p-3">7</th>
                            <td class="py-3">
                                <a href="#" class="text-dark">
                                    <div class="d-flex align-items-center">
                                        <img src="assets/images/client/07.jpg" class="avatar avatar-md-sm rounded-circle shadow" alt="">
                                        <span class="ms-2">Jerry Morena</span>
                                    </div>
                                </a>
                            </td>
                            <td class="p-3">25</td>
                            <td class="p-3">Male</td>
                            <td class="p-3">1451 - ABC Street, NY</td>
                            <td class="p-3">(+452) 8945 4568</td>
                            <td class="p-3">Dentist</td>
                            <td class="p-3">20th Dec 2020</td>
                            <td class="p-3">11:00AM</td>
                            <td class="p-3"><span class="badge bg-soft-warning">Pending</span></td>
                            <td class="text-end p-3">
                                <a href="#" class="btn btn-icon btn-pills btn-soft-primary" data-bs-toggle="modal" data-bs-target="#viewprofile"><i class="uil uil-eye"></i></a>
                                <a href="#" class="btn btn-icon btn-pills btn-soft-success" data-bs-toggle="modal" data-bs-target="#editprofile"><i class="uil uil-pen"></i></a>
                                <a href="#" class="btn btn-icon btn-pills btn-soft-danger"><i class="uil uil-trash"></i></a>
                            </td>
                        </tr>
                        
                        <tr>
                            <th class="p-3">8</th>
                            <td class="py-3">
                                <a href="#" class="text-dark">
                                    <div class="d-flex align-items-center">
                                        <img src="assets/images/client/08.jpg" class="avatar avatar-md-sm rounded-circle shadow" alt="">
                                        <span class="ms-2">Lester McNally</span>
                                    </div>
                                </a>
                            </td>
                            <td class="p-3">25</td>
                            <td class="p-3">Male</td>
                            <td class="p-3">1451 - ABC Street, NY</td>
                            <td class="p-3">(+452) 8945 4568</td>
                            <td class="p-3">Gastrology</td>
                            <td class="p-3">20th Dec 2020</td>
                            <td class="p-3">11:00AM</td>
                            <td class="p-3"><span class="badge bg-soft-success">Approved</span></td>
                            <td class="text-end p-3">
                                <a href="#" class="btn btn-icon btn-pills btn-soft-primary" data-bs-toggle="modal" data-bs-target="#viewprofile"><i class="uil uil-eye"></i></a>
                                <a href="#" class="btn btn-icon btn-pills btn-soft-success" data-bs-toggle="modal" data-bs-target="#editprofile"><i class="uil uil-pen"></i></a>
                                <a href="#" class="btn btn-icon btn-pills btn-soft-danger"><i class="uil uil-trash"></i></a>
                            </td>
                        </tr>
                        
                        <tr>
                            <th class="p-3">9</th>
                            <td class="py-3">
                                <a href="#" class="text-dark">
                                    <div class="d-flex align-items-center">
                                        <img src="assets/images/client/09.jpg" class="avatar avatar-md-sm rounded-circle shadow" alt="">
                                        <span class="ms-2">Christopher Burrell</span>
                                    </div>
                                </a>
                            </td>
                            <td class="p-3">28</td>
                            <td class="p-3">Female</td>
                            <td class="p-3">1451 - ABC Street, NY</td>
                            <td class="p-3">(+452) 8945 4568</td>
                            <td class="p-3">Urology</td>
                            <td class="p-3">20th Dec 2020</td>
                            <td class="p-3">11:00AM</td>
                            <td class="p-3"><span class="badge bg-soft-success">Approved</span></td>
                            <td class="text-end p-3">
                                <a href="#" class="btn btn-icon btn-pills btn-soft-primary" data-bs-toggle="modal" data-bs-target="#viewprofile"><i class="uil uil-eye"></i></a>
                                <a href="#" class="btn btn-icon btn-pills btn-soft-success" data-bs-toggle="modal" data-bs-target="#editprofile"><i class="uil uil-pen"></i></a>
                                <a href="#" class="btn btn-icon btn-pills btn-soft-danger"><i class="uil uil-trash"></i></a>
                            </td>
                        </tr>
                        
                        <tr>
                            <th class="p-3">10</th>
                            <td class="py-3">
                                <a href="#" class="text-dark">
                                    <div class="d-flex align-items-center">
                                        <img src="assets/images/client/10.jpg" class="avatar avatar-md-sm rounded-circle shadow" alt="">
                                        <span class="ms-2">Mary Skeens</span>
                                    </div>
                                </a>
                            </td>
                            <td class="p-3">28</td>
                            <td class="p-3">Female</td>
                            <td class="p-3">1451 - ABC Street, NY</td>
                            <td class="p-3">(+452) 8945 4568</td>
                            <td class="p-3">Neurology</td>
                            <td class="p-3">20th Dec 2020</td>
                            <td class="p-3">11:00AM</td>
                            <td class="p-3"><span class="badge bg-soft-warning">Pending</span></td>
                            <td class="text-end p-3">
                                <a href="#" class="btn btn-icon btn-pills btn-soft-primary" data-bs-toggle="modal" data-bs-target="#viewprofile"><i class="uil uil-eye"></i></a>
                                <a href="#" class="btn btn-icon btn-pills btn-soft-success" data-bs-toggle="modal" data-bs-target="#editprofile"><i class="uil uil-pen"></i></a>
                                <a href="#" class="btn btn-icon btn-pills btn-soft-danger"><i class="uil uil-trash"></i></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div><!--end row-->

    <div class="row text-center">
        <!-- PAGINATION START -->
        <div class="col-12 mt-4">
            <div class="d-md-flex align-items-center text-center justify-content-between">
                <span class="text-muted me-3">Showing 1 - 10 out of 50</span>
                <ul class="pagination justify-content-center mb-0 mt-3 mt-sm-0">
                    <li class="page-item"><a class="page-link" href="javascript:void(0)" aria-label="Previous">Prev</a></li>
                    <li class="page-item active"><a class="page-link" href="javascript:void(0)">1</a></li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0)">2</a></li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0)" aria-label="Next">Next</a></li>
                </ul>
            </div>
        </div><!--end col-->
        <!-- PAGINATION END -->
    </div><!--end row-->
</div>



@endsection