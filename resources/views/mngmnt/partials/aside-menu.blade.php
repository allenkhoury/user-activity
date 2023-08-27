<aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
    <div class="app-brand demo">
        <a href="{{ route('al-user-activity.dashboard.index') }}" class="app-brand-link">
            <span class="app-brand-text text-capitalize demo menu-text fw-bolder ms-2">
                <small>
                    User activity
                </small>
            </span>
        </a>

        <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
            <i class="bx bx-chevron-left bx-sm align-middle"></i>
        </a>
    </div>

    <div class="menu-inner-shadow"></div>

    <ul class="menu-inner py-1">

        <li class="menu-item {{ url()->current() == route('al-user-activity.dashboard.index') ? 'active' : '' }}">
            <a href="{{ route('al-user-activity.dashboard.index') }}" class="menu-link">
                <i class="menu-icon tf-icons bx bx-home-circle"></i>
                <div>Dashboard</div>
            </a>
        </li>

        <li class="menu-item {{ url()->current() == route('al-user-activity.activity-log.index') ? 'active' : '' }}">
            <a href="{{ route('al-user-activity.activity-log.index') }}" class="menu-link">
                <i class="menu-icon tf-icons bx bx-list-ul"></i>
                <div>Activity log</div>
            </a>
        </li>


{{--        <li class="menu-item">--}}
{{--            <a href="javascript:void(0);" class="menu-link menu-toggle">--}}
{{--                <i class="menu-icon tf-icons bx bx-layout"></i>--}}
{{--                <div data-i18n="Layouts">Layouts</div>--}}
{{--            </a>--}}

{{--            <ul class="menu-sub">--}}
{{--                <li class="menu-item">--}}
{{--                    <a href="layouts-without-menu.html" class="menu-link">--}}
{{--                        <div data-i18n="Without menu">Without menu</div>--}}
{{--                    </a>--}}
{{--                </li>--}}
{{--                <li class="menu-item">--}}
{{--                    <a href="layouts-without-navbar.html" class="menu-link">--}}
{{--                        <div data-i18n="Without navbar">Without navbar</div>--}}
{{--                    </a>--}}
{{--                </li>--}}
{{--                <li class="menu-item">--}}
{{--                    <a href="layouts-container.html" class="menu-link">--}}
{{--                        <div data-i18n="Container">Container</div>--}}
{{--                    </a>--}}
{{--                </li>--}}
{{--                <li class="menu-item">--}}
{{--                    <a href="layouts-fluid.html" class="menu-link">--}}
{{--                        <div data-i18n="Fluid">Fluid</div>--}}
{{--                    </a>--}}
{{--                </li>--}}
{{--                <li class="menu-item">--}}
{{--                    <a href="layouts-blank.html" class="menu-link">--}}
{{--                        <div data-i18n="Blank">Blank</div>--}}
{{--                    </a>--}}
{{--                </li>--}}
{{--            </ul>--}}
{{--        </li>--}}

{{--        <li class="menu-header small text-uppercase">--}}
{{--            <span class="menu-header-text">Pages</span>--}}
{{--        </li>--}}
{{--        <li class="menu-item">--}}
{{--            <a href="javascript:void(0);" class="menu-link menu-toggle">--}}
{{--                <i class="menu-icon tf-icons bx bx-dock-top"></i>--}}
{{--                <div data-i18n="Account Settings">Account Settings</div>--}}
{{--            </a>--}}
{{--            <ul class="menu-sub">--}}
{{--                <li class="menu-item">--}}
{{--                    <a href="pages-account-settings-account.html" class="menu-link">--}}
{{--                        <div data-i18n="Account">Account</div>--}}
{{--                    </a>--}}
{{--                </li>--}}
{{--                <li class="menu-item">--}}
{{--                    <a href="pages-account-settings-notifications.html" class="menu-link">--}}
{{--                        <div data-i18n="Notifications">Notifications</div>--}}
{{--                    </a>--}}
{{--                </li>--}}
{{--                <li class="menu-item">--}}
{{--                    <a href="pages-account-settings-connections.html" class="menu-link">--}}
{{--                        <div data-i18n="Connections">Connections</div>--}}
{{--                    </a>--}}
{{--                </li>--}}
{{--            </ul>--}}
{{--        </li>--}}


    </ul>
</aside>