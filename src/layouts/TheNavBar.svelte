<script>
    let userAvatar = 'tolede-rond.png'
    let userName = 'Tolede'
</script>

<div class="drawer h-screen w-full">
    <!-- A hidden checkbox to toggle the visibility of the sidebar -->
    <input
        type="checkbox"
        name="nav-drawer"
        id="nav-drawer"
        class="drawer-toggle"
    />
    <!-- Drawer elements are vertically aligned -->
    <div class="drawer-content flex flex-col">
        <!-- md: NavBar goes here -->
        <div class="navbar w-full bg-base-300">
            <div class="flex-1 justify-between md:hidden">
                <label for="nav-drawer" class="btn btn-ghost btn-square">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        class="inline-block h-6 w-6 stroke-current"
                        ><path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        /></svg
                    >
                </label>
                <div>Test</div>
            </div>
            <div class="hidden flex-1 md:flex">
                <a href="/" class="btn btn-ghost font-logo text-2xl"
                    >WoodenSpoon</a
                >
            </div>
            <div class="hidden flex-none gap-2 md:flex">
                <div class="dropdown-end dropdown">
                    <div tabindex="0" class="avatar btn btn-circle btn-ghost">
                        <div class="w-10 rounded-full">
                            <img src="/assets/{userAvatar}" alt={userName} />
                        </div>
                    </div>
                    <ul
                        tabindex="0"
                        class="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
                    >
                        <li>
                            <a href="/"> Profil </a>
                        </li>
                        <li>
                            <a href="/" class="justify-between">
                                Profil
                                <span class="badge badge-success">New</span>
                            </a>
                        </li>
                        <li><a href="/">Settings</a></li>
                        <li><a href="/">Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
