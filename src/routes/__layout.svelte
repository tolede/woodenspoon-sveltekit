<script>
    import '$styles/app.css'
    import TheFooter from '$layouts/TheFooter.svelte'
    import TheHeader from '$layouts/TheHeader.svelte'
    import TheNavBar from '$layouts/TheNavBar.svelte'
</script>

<TheHeader />
<div class="container ">
    <slot />
</div>
<TheFooter />
