<script>
    let userAvatar = 'tolede-rond.png'
    let userName = 'Tolede'
</script>

<div class="navbar bg-base-200">
    <div class="flex-1">
        <a href="/" class="btn btn-ghost text-xl normal-case">Woodenspoon</a>
    </div>
    <div class="flex-none gap-2">
        <div class="form-control">
            <a href="/blog" class="btn btn-outline text-xl normal-case">Blog</a>
        </div>
        <div class="form-control">
            <input
                type="text"
                placeholder="Rechercher"
                class="input input-bordered"
            />
        </div>

        <div class="dropdown dropdown-end">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label tabindex="0" class="avatar btn btn-ghost btn-circle">
                <div class="w-10 rounded-full">
                    <img src="/assets/{userAvatar}" alt={userName} />
                </div>
            </label>
            <ul
                tabindex="0"
                class="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
            >
                <li>
                    <a href="/" class="justify-between">
                        Profile
                        <span class="badge">New</span>
                    </a>
                </li>
                <li><a href="/">Settings</a></li>
                <li><a href="/">Logout</a></li>
            </ul>
        </div>
    </div>
</div>
