const getAllPosts = async () => {
    const allPostFiles = import.meta.glob('/cms/blog/*.md')

    const iterablePostFiles = Object.entries(allPostFiles)

    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolverPromise]) => {
            const { metadata } = await resolverPromise()
            const postPath = path.slice(`/cms/blog/`.length, -3)
            return {
                meta: metadata,
                path: postPath,
            }
        })
    )

    return allPosts.sort((a, b) => {
        return new Date(b.meta.date) - new Date(a.meta.date)
    })
}
const getPost = async slug => {
    const allPostFiles = import.meta.glob(`/cms/blog/*.md`)
    const iterablePostFile = Object.entries(allPostFiles).find(([path]) =>
        path.includes(slug)
    )
    const [, resolverPromise] = iterablePostFile
    const { metadata } = await resolverPromise()

    return { meta: metadata, path: slug }
}

export { getPost, getAllPosts }
