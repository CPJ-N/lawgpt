// Sample blog posts data structure
export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    date: string;
    author: string;
    excerpt: string;
    content: string;
    tags: string[];
}

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        title: "Understanding Legal Tech Trends in 2024",
        slug: "legal-tech-trends-2024",
        date: "2024-01-15",
        author: "Jane Smith",
        excerpt: "An overview of emerging legal technology trends and their impact on law practice.",
        content: "Legal technology is rapidly evolving...",
        tags: ["Legal Tech", "Innovation", "Law Practice"],
    },
    {
        id: "2",
        title: "AI in Legal Research: A Practical Guide",
        slug: "ai-legal-research-guide",
        date: "2024-01-20",
        author: "John Doe",
        excerpt: "How artificial intelligence is transforming legal research methodologies.",
        content: "The integration of AI in legal research has revolutionized...",
        tags: ["AI", "Legal Research", "Technology"],
    },
    {
        id: "3",
        title: "Digital Transformation in Law Firms",
        slug: "digital-transformation-law-firms",
        date: "2024-01-25",
        author: "Sarah Johnson",
        excerpt: "Best practices for implementing digital solutions in legal practices.",
        content: "Law firms are increasingly embracing digital transformation...",
        tags: ["Digital Transformation", "Law Firms", "Technology"],
    },
];