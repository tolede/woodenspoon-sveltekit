<script context="module">
    export const load = async ({ fetch }) => {
        const posts = await fetch('/api/blog/posts.json').then(r => r.json())
        return {
            props: {
                posts,
            },
        }
    }
</script>

<script>
    import BlogListCard from '$components/blogPostsListCard.svelte'
    export let posts
</script>

<div class="container m-10">
    <h1 class="text-2xl">Section Blog</h1>
    <div class="flex flex-wrap">
        {#each posts as post}
            <BlogListCard {post} />
        {/each}
    </div>
</div>
