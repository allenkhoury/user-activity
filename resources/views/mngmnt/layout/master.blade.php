<!DOCTYPE html>
<html lang="en" class="light-style layout-menu-fixed" dir="ltr" data-theme="theme-default" data-assets-path="/vendor/al-user-activity/assets/theme/"
        data-template="vertical-menu-template-free">
<head>
    <meta charset="utf-8" />
    <title>User activity</title>

    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"/>
    <meta name="robots" content="noindex, nofollow">

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700"/>

    <link href="/vendor/al-user-activity/assets/css/mngmnt/fontawesome.min.css" rel="stylesheet">
    <link href="/vendor/al-user-activity/assets/css/mngmnt/brands.min.css" rel="stylesheet">
    <link href="/vendor/al-user-activity/assets/css/mngmnt/solid.min.css" rel="stylesheet">

    <link rel="stylesheet" href="/vendor/al-user-activity/assets/theme/vendor/fonts/boxicons.css" />

    <link rel="stylesheet" href="/vendor/al-user-activity/assets/theme/vendor/css/core.css" class="template-customizer-core-css" />
    <link rel="stylesheet" href="/vendor/al-user-activity/assets/theme/vendor/css/theme-default.css" class="template-customizer-theme-css" />
    <link rel="stylesheet" href="/vendor/al-user-activity/assets/theme/css/demo.css" />

    <link rel="stylesheet" href="/vendor/al-user-activity/assets/css/mngmnt/app.css"/>

    <script src="/vendor/al-user-activity/assets/theme/vendor/js/helpers.js"></script>

    <script src="/vendor/al-user-activity/assets/theme/js/config.js"></script>
</head>

<body>

<div id="MasterApp" class="layout-wrapper layout-content-navbar">
    <div class="layout-container">

        @include('al-user-activity::mngmnt.partials.aside-menu')

        <div class="layout-page">

            <nav
                    class="d-flex d-xl-none layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
                    id="layout-navbar"
            >
                <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                    <a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                        <i class="bx bx-menu bx-sm"></i>
                    </a>
                </div>
            </nav>


            <div class="content-wrapper">

                <div class="container-xxl flex-grow-1 container-p-y">
                    @yield('content')
                </div>

                <!-- Footer -->
                <footer class="content-footer footer bg-footer-theme">
                    <div class="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                        <div class="mb-2 mb-md-0">
                            <small>
                                User activity dashboard template made by
                                <a href="https://themeselection.com" target="_blank" class="footer-link fw-bolder">ThemeSelection</a>
                            </small>
                        </div>
                        <div>
                        </div>
                    </div>
                </footer>

                <div class="content-backdrop fade"></div>
            </div>
        </div>
    </div>

    <div class="layout-overlay layout-menu-toggle"></div>
</div>

<script src="/vendor/al-user-activity/assets/theme/vendor/libs/jquery/jquery.js"></script>
<script src="/vendor/al-user-activity/assets/theme/vendor/libs/popper/popper.js"></script>
<script src="/vendor/al-user-activity/assets/theme/vendor/js/bootstrap.js"></script>
<script src="/vendor/al-user-activity/assets/theme/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></script>
<script src="/vendor/al-user-activity/assets/theme/vendor/js/menu.js"></script>
<script src="/vendor/al-user-activity/assets/theme/js/main.js"></script>

@stack('scripts')
</body>
</html>