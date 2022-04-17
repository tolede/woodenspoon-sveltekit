import { getAllPosts } from '$lib/controllers/postController.js'

export const get = async () => {
    const posts = await getAllPosts()
    return { body: posts }
}
