import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/blogs')

export interface Source {
    title: string;
    url: string;
    author?: string;
    publishedDate?: string;
}

export interface BlogPost {
    slug: string
    title: string
    date: string
    description: string
    image: string
    tags: string[]
    content: string
    sources?: Source[]
}

export function getAllBlogPosts() {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)
        
        return {
            slug,
            content,
            ...data,
        } as BlogPost
    })

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getBlogPost(slug: string): BlogPost | null {
    try {
        const fullPath = path.join(postsDirectory, `${slug}.md`)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)
        
        return {
            slug,
            content,
            ...data,
        } as BlogPost
    } catch {
        return null
    }
}