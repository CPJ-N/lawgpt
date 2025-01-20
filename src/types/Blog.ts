export interface Author {
    id: string;
    name: string;
    image?: string;
    bio?: string;
}

export interface Category {
    id: string;
    name: string;
    slug: string;
}

export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    content: string;
    excerpt?: string;
    featuredImage?: string;
    author: Author;
    category: Category;
    tags?: string[];
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date;
    isPublished: boolean;
    readingTime?: number;
}

export type BlogPostPreview = Omit<BlogPost, 'content'>;