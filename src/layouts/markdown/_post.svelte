<script>
    export let title
    export let date
</script>

<div class="prose m-10">
    <h2>{title}</h2>
    <p>Publié : {date}</p>
    <div class="content">
        <slot />
    </div>
</div>
