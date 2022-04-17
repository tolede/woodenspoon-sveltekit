<script context="module">
    export async function load({ fetch, params }) {
        // request post from [url].json.js endpoint
        const post = await fetch(`/api/blog/${params.slug}.json`).then(r =>
            r.json()
        )

        return {
            props: { post },
        }
    }
</script>

<script>
    import BlogPostCard from '$components/blogPostCard.svelte'
    export let post
</script>

<BlogPostCard {post} />
