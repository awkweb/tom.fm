interface Frontmatter {
    date: string
    description: string
    permalink: string
    title: string
}

interface Post {
    body: string
    frontmatter: Frontmatter
    id: string
}

interface Node {
    node: Post
}
