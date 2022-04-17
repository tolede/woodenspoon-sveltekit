<script>
    export let post
</script>

<div class="card m-3 w-60 bg-base-100 shadow-xl">
    <figure>
        <img src={post.meta.source} alt={post.path} />
    </figure>
    <div class="card-body">
        <div class="badge badge-secondary">
            <span class="text-xs">{post.meta.date}</span>
        </div>
        <h2 class="card-title">
            {post.meta.title}
        </h2>
        <div class="card-actions justify-end align-bottom">
            <a href="/blog/{post.path}" class="btn btn-sm">En lire plus...</a>
        </div>
    </div>
</div>
