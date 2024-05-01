@extends('layout.MasterApp')
@section('content')
<div class="layout-specing">
    <div class="d-md-flex justify-content-between">
        <h5 class="mb-0">Add New Doctor</h5>

        <nav aria-label="breadcrumb" class="d-inline-block mt-4 mt-sm-0">
            <ul class="breadcrumb bg-transparent rounded mb-0 p-0">
                <li class="breadcrumb-item"><a href="index.html">Doctris</a></li>
                <li class="breadcrumb-item"><a href="doctors.html">Doctors</a></li>
                <li class="breadcrumb-item active" aria-current="page">Add Doctor</li>
            </ul>
        </nav>
    </div>
    
    <div class="row">
        <div class="col-lg-8 mt-4">
            <div class="card border-0 p-4 rounded shadow">
                <div class="row align-items-center">
                    <div class="col-lg-2 col-md-4">
                        <img src="assets/images/doctors/01.jpg" class="avatar avatar-md-md rounded-pill shadow mx-auto d-block" alt="">
                    </div><!--end col-->

                    <div class="col-lg-5 col-md-8 text-center text-md-start mt-4 mt-sm-0">
                        <h5 class="">Upload your picture</h5>
                        <p class="text-muted mb-0">For best results, use an image at least 600px by 600px in either .jpg or .png format</p>
                    </div><!--end col-->

                    <div class="col-lg-5 col-md-12 text-lg-end text-center mt-4 mt-lg-0">
                        <a href="#" class="btn btn-primary">Upload</a>
                        <a href="#" class="btn btn-soft-primary ms-2">Remove</a>
                    </div><!--end col-->
                </div><!--end row-->

                <form class="mt-4">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">First Name</label>
                                <input name="name" id="name" type="text" class="form-control" placeholder="First Name :">
                            </div>
                        </div><!--end col-->

                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Last Name</label>
                                <input name="name" id="name2" type="text" class="form-control" placeholder="Last Name :">
                            </div>
                        </div><!--end col-->

                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Your Email</label>
                                <input name="email" id="email" type="email" class="form-control" placeholder="Your email :">
                            </div> 
                        </div><!--end col-->

                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Phone no.</label>
                                <input name="number" id="number" type="text" class="form-control" placeholder="Phone no. :">
                            </div>                                                                               
                        </div><!--end col-->

                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Departments</label>
                                <select class="form-select form-control">
                                    <option value="EY">Eye Care</option>
                                    <option value="GY">Gynecologist</option>
                                    <option value="PS">Psychotherapist</option>
                                    <option value="OR">Orthopedic</option>
                                    <option value="DE">Dentist</option>
                                    <option value="GA">Gastrologist</option>
                                    <option value="UR">Urologist</option>
                                    <option value="NE">Neurologist</option>
                                </select>
                            </div>
                        </div><!--end col-->

                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Gender</label>
                                <select class="form-select form-control">
                                    <option value="EY">Male</option>
                                    <option value="GY">Female</option>
                                </select>
                            </div>
                        </div><!--end col-->

                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Instagram</label>
                                <div class="input-group flex-nowrap">
                                    <span class="input-group-text bg-light border border-end-0 text-dark" id="insta-id"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram fea icon-sm"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></span>
                                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="insta-id">
                                </div>
                            </div>
                        </div><!--end col-->

                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Facebook</label>
                                <div class="input-group flex-nowrap">
                                    <span class="input-group-text bg-light border border-end-0 text-dark" id="fb-id"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook fea icon-sm"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></span>
                                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="fb-id">
                                </div>
                            </div>
                        </div><!--end col-->

                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Linkedin</label>
                                <div class="input-group flex-nowrap">
                                    <span class="input-group-text bg-light border border-end-0 text-dark" id="linke-pro"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin fea icon-sm"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></span>
                                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="linke-pro">
                                </div>
                            </div>
                        </div><!--end col-->

                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Twitter</label>
                                <div class="input-group flex-nowrap">
                                    <span class="input-group-text bg-light border border-end-0 text-dark" id="twitter-id"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter fea icon-sm"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></span>
                                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="twitter-id">
                                </div>
                            </div>
                        </div><!--end col-->

                        <div class="col-md-12">
                            <div class="mb-3">
                                <label class="form-label">Your Bio Here</label>
                                <textarea name="comments" id="comments" rows="3" class="form-control" placeholder="Bio :"></textarea>
                            </div>
                        </div>
                    </div><!--end row-->

                    <button type="submit" class="btn btn-primary">Add Doctor</button>
                </form>
            </div>
        </div><!--end col-->

        <div class="col-lg-4 mt-4">
            <div class="card rounded border-0 shadow">
                <div class="p-4 border-bottom">
                    <h5 class="mb-0">Doctors List</h5>
                </div>

                <ul class="list-unstyled mb-0 p-4" data-simplebar="init" style="height: 690px;"><div class="simplebar-wrapper" style="margin: -24px;"><div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer"></div></div><div class="simplebar-mask"><div class="simplebar-offset" style="right: 0px; bottom: 0px;"><div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style="height: 100%; overflow: hidden scroll;"><div class="simplebar-content" style="padding: 24px;">
                    <li class="d-md-flex align-items-center text-center text-md-start">
                        <img src="assets/images/doctors/01.jpg" class="avatar avatar-medium rounded-md shadow" alt="">

                        <div class="ms-md-3 mt-4 mt-sm-0">
                            <a href="#" class="text-dark h6">Dr. Calvin Carlo</a>
                            <p class="text-muted my-1">Cardiologist</p>
                            <p class="text-muted mb-0">3 Years Experienced</p>
                        </div>
                    </li>

                    <li class="d-md-flex align-items-center text-center text-md-start mt-4">
                        <img src="assets/images/doctors/02.jpg" class="avatar avatar-medium rounded-md shadow" alt="">

                        <div class="ms-md-3 mt-4 mt-sm-0">
                            <a href="#" class="text-dark h6">Dr. Alex Smith</a>
                            <p class="text-muted my-1">Dentist</p>
                            <p class="text-muted mb-0">1 Years Experienced</p>
                        </div>
                    </li>

                    <li class="d-md-flex align-items-center text-center text-md-start mt-4">
                        <img src="assets/images/doctors/03.jpg" class="avatar avatar-medium rounded-md shadow" alt="">

                        <div class="ms-md-3 mt-4 mt-sm-0">
                            <a href="#" class="text-dark h6">Dr. Cristina Luly</a>
                            <p class="text-muted my-1">Orthopedic</p>
                            <p class="text-muted mb-0">5 Years Experienced</p>
                        </div>
                    </li>

                    <li class="d-md-flex align-items-center text-center text-md-start mt-4">
                        <img src="assets/images/doctors/04.jpg" class="avatar avatar-medium rounded-md shadow" alt="">

                        <div class="ms-md-3 mt-4 mt-sm-0">
                            <a href="#" class="text-dark h6">Dr. Dwayen Maria</a>
                            <p class="text-muted my-1">Gastrologist</p>
                            <p class="text-muted mb-0">2 Years Experienced</p>
                        </div>
                    </li>

                    <li class="d-md-flex align-items-center text-center text-md-start mt-4">
                        <img src="assets/images/doctors/05.jpg" class="avatar avatar-medium rounded-md shadow" alt="">

                        <div class="ms-md-3 mt-4 mt-sm-0">
                            <a href="#" class="text-dark h6">Dr. Jenelia Focia</a>
                            <p class="text-muted my-1">Psychotherapist</p>
                            <p class="text-muted mb-0">3 Years Experienced</p>
                        </div>
                    </li>

                    <li class="mt-4">
                        <a href="doctors.html" class="btn btn-primary">All Doctors</a>
                    </li>
                </div></div></div></div><div class="simplebar-placeholder" style="width: auto; height: 758px;"></div></div><div class="simplebar-track simplebar-horizontal" style="visibility: hidden;"><div class="simplebar-scrollbar" style="width: 0px; display: none;"></div></div><div class="simplebar-track simplebar-vertical" style="visibility: visible;"><div class="simplebar-scrollbar" style="height: 628px; transform: translate3d(0px, 0px, 0px); display: block;"></div></div></ul>
            </div>
        </div>
    </div><!--end row-->
</div>
@endsection