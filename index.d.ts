interface Fields {
    entry: number
    slug: string
}

interface Frontmatter {
    date: string
    description: string
    title: string
    twitter: string
}

interface Post {
    body: string
    excerpt: string
    fields: Fields
    frontmatter: Frontmatter
    id: string
}

interface Node {
    node: Post
}
