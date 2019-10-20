interface Fields {}

interface Frontmatter {
    date: string
    description: string
    entry: string
    permalink: string
    title: string
    twitter: string
}

interface Post {
    body: string
    fields: Fields
    frontmatter: Frontmatter
    id: string
}

interface Node {
    node: Post
}
