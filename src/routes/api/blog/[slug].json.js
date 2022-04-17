import { getPost } from '$lib/controllers/postController.js'

export const get = async params => {
    const post = await getPost(params.params.slug)
    return { body: post }
}
