<nav id="sidebar" class="sidebar-wrapper">
    <div class="sidebar-content" data-simplebar="init" style="height: calc(100% - 60px);"><div class="simplebar-wrapper" style="margin: 0px;"><div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer"></div></div><div class="simplebar-mask"><div class="simplebar-offset" style="right: 0px; bottom: 0px;"><div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style="height: 100%; overflow: hidden scroll;"><div class="simplebar-content" style="padding: 0px;">
        <div class="sidebar-brand active">
            <a href="index.html">
                <!-- <img src="assets/images/logo-dark.png" height="22" class="logo-light-mode" alt="">
                <img src="assets/images/logo-light.png" height="22" class="logo-dark-mode" alt=""> -->
                </a><a href="" style="color:#ff3636;font-weight: 900;font-size: 15px; margin-top: 10px;">Ganna  <span style="font-size: 30px;">Media.</span></a>
                <span class="sidebar-colored">
                    <img src="assets/images/logo-light.png" height="22" alt="">
                </span>
            
        </div>

        <ul class="sidebar-menu">
            <li class=" active"><a href="{{url('/')}}"><i class="uil uil-dashboard me-2 d-inline-block"></i>Dashboard</a></li>

            <li>
                <a href="{{url('/user')}}"><i class="uil uil-browser me-2"></i>Users<span class="badge bg-danger rounded-pill ms-2">New</span></a>
            </li>
            <li class="sidebar-dropdown">
                <a href="javascript:void(0)"><i class="uil uil-user me-2 d-inline-block"></i>Music</a>
                <div class="sidebar-submenu">
                    <ul>
                        <li><a href="{{url('/addmusic')}}">Add Music</a></li>
                        <li><a href="{{url('/musiclist')}}">Music List</a></li>
                    </ul>
                </div>
            </li>

            <li>
                <a href="javascript:void(0)"><i class="uil uil-wheelchair me-2 d-inline-block"></i>Settings</a>
            </li>

            <li class="sidebar-dropdown">
                <a href="javascript:void(0)"><i class="uil uil-apps me-2 d-inline-block"></i>Apps</a>
                <div class="sidebar-submenu">
                    <ul>
                        <li><a href="calendar.html">Calendar</a></li>
                    </ul>
                </div>
            </li>
            <li class="sidebar-dropdown">
                <a href="javascript:void(0)"><i class="uil uil-sign-in-alt me-2 d-inline-block"></i>Authentication</a>
                <div class="sidebar-submenu">
                    <ul>
                        <li><a href="login.html">Login</a></li>
                        <li><a href="signup.html">Signup</a></li>
                        <li><a href="forgot-password.html">Forgot Password</a></li>
                        <li><a href="lock-screen.html">Lock Screen</a></li>
                    </ul>
                </div>
            </li>



            <li class="sidebar-dropdown">
                <a href="javascript:void(0)"><i class="uil uil-postcard me-2 d-inline-block"></i>Miscellaneous </a>
                <div class="sidebar-submenu">
                    <ul>
                        <li><a href="comingsoon.html">Comingsoon</a></li>
                        <li><a href="maintenance.html">Maintenance</a></li>
                        <li><a href="error.html">404 !</a></li>
                        <li><a href="thankyou.html">Thank you...!</a></li>
                    </ul>
                </div>
            </li>
        </ul>
        <!-- sidebar-menu  -->
    </div></div></div></div><div class="simplebar-placeholder" style="width: auto; height: 468px;"></div></div><div class="simplebar-track simplebar-horizontal" style="visibility: hidden;"><div class="simplebar-scrollbar" style="width: 0px; display: none;"></div></div><div class="simplebar-track simplebar-vertical" style="visibility: visible;"><div class="simplebar-scrollbar" style="height: 212px; display: block; transform: translate3d(0px, 0px, 0px);"></div></div></div>
    <!-- Sidebar Footer -->
    <ul class="sidebar-footer list-unstyled mb-0">
        <li class="list-inline-item mb-0 ms-1">
            <a href="#" class="btn btn-icon btn-pills btn-soft-primary">
                <i class="uil uil-comment"></i>
            </a>
        </li>
    </ul>
    <!-- Sidebar Footer -->
</nav>