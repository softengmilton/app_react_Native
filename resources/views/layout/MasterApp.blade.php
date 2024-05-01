<!doctype html>
<html lang="en" dir="ltr">
<head>
        <meta charset="utf-8" />
        <title>GANNA Media-Music Recomender System</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Premium Bootstrap 5 Landing Page Template" />
        <meta name="keywords" content="Appointment, Booking, System, Dashboard, Health" />
        <meta name="author" content="Shreethemes" />
        <meta name="email" content="support@shreethemes.in" />
        <meta name="website" content="https://shreethemes.in/" />
        <meta name="Version" content="v1.4.0" />
        <!-- Css -->
        <link href="{{asset('libs/simplebar/simplebar.min.css')}}" rel="stylesheet">
        <!-- Bootstrap Css -->
        <link href="{{asset('css/bootstrap.min.css')}}" class="theme-opt" rel="stylesheet" type="text/css" />
        <!-- Icons Css -->
        <link href="{{asset('css/icons.min.css')}}" rel="stylesheet" type="text/css" />
        <link href="{{asset('libs/remixicon/fonts/remixicon.css')}}" rel="stylesheet" type="text/css" />
        <link href="{{asset('libs/%40iconscout/unicons/css/line.css')}}" type="text/css" rel="stylesheet" />
        <!-- Style Css-->
        <link href="{{asset('css/style.min.css')}}" class="theme-opt" rel="stylesheet" type="text/css" />
 
    </head>

    <body>

        <div class="page-wrapper doctris-theme toggled">
            @include('layout.inc.SideBar')
            <div class="page-content bg-light">
                @include('layout.inc.Header')

                <div class="container-fluid">

                    @yield('content')

                </div>
            </div>

        </div>















        <!-- javascript -->
        <script src="{{asset('libs/simplebar/simplebar.min.js')}}"></script>
        <script src="{{asset('/libs/apexcharts/apexcharts.min.js')}}"></script>
        <script src="{{asset('js/admin-apexchart.init.js')}}"></script>
        <script src="{{asset('libs/feather-icons/feather.min.js')}}"></script>
        <!-- Main Js -->
        <!-- JAVASCRIPT -->
        <script src="{{asset('libs/bootstrap/js/bootstrap.bundle.min.js')}}"></script>
        <script src="{{asset('js/plugins.init.js')}}"></script>
        <script src="{{asset('js/app.js')}}"></script>
    </body>



</html>