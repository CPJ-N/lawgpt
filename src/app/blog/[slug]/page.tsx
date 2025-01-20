import { notFound } from 'next/navigation'
import { getBlogPost } from '@/lib/blog'
import type { Metadata } from 'next'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Globe, Newspaper, FileText } from 'lucide-react'

interface BlogPostParams {
    params: {
        slug: string
    }
}

export async function generateMetadata({ params }: BlogPostParams): Promise<Metadata> {
    const post = await getBlogPost(params.slug)
    
    if (!post) {
        return {
            title: 'Post Not Found'
        }
    }

    return {
        title: post.title,
        description: post.description
    }
}

// Add this helper function at the component level
function getSourceIcon(url: string) {
    if (url.includes('lawsociety')) return BookOpen
    if (url.includes('americanbar')) return Globe
    if (url.includes('law.com')) return Newspaper
    return FileText
}

export default async function BlogPost({ params }: BlogPostParams) {
    const post = await getBlogPost(params.slug)

    if (!post) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-gray-50 p-24">
            <article className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
                <Card className="overflow-hidden">
                    <CardContent className="p-0">
                        <div className="relative aspect-[16/9] w-full">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                            />
                        </div>
                        
                        <div className="px-6 sm:px-12 py-8">
                            <div className="flex gap-2 mb-6">
                                {post.tags.map((tag) => (
                                    <Badge 
                                        key={tag} 
                                        variant="secondary"
                                        className="rounded-full"
                                    >
                                        {tag}
                                    </Badge>
                                ))}
                            </div>

                            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
                                {post.title}
                            </h1>

                            <div className="mb-8 text-gray-600">
                                {new Date(post.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </div>

                            <div className="prose prose-lg max-w-none">
                                <ReactMarkdown components={{
                                    h1: ({node, ...props}) => null
                                }}>
                                    {post.content}
                                </ReactMarkdown>
                            </div>
                        </div>

                        {post.sources && post.sources.length > 0 && (
                            <div className="border-t border-gray-200 mt-12 pt-8 px-6 sm:px-12 pb-8">
                                <h2 className="text-2xl font-semibold mb-8">Sources & Citations</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {post.sources.map((source, index) => {
                                        const IconComponent = getSourceIcon(source.url)
                                        return (
                                            <Card key={index} className="group hover:shadow-lg transition-shadow">
                                                <a 
                                                    href={source.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="block h-full"
                                                >
                                                    <CardHeader className="space-y-4">
                                                        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                                                            <IconComponent className="w-6 h-6 text-blue-600" />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <CardTitle className="text-lg font-semibold group-hover:text-blue-600 transition-colors line-clamp-2">
                                                                {source.title}
                                                            </CardTitle>
                                                            {(source.author || source.publishedDate) && (
                                                                <CardDescription className="text-sm text-gray-500">
                                                                    {source.author && `by ${source.author}`}
                                                                    {source.author && source.publishedDate && ' • '}
                                                                    {source.publishedDate}
                                                                </CardDescription>
                                                            )}
                                                        </div>
                                                    </CardHeader>
                                                </a>
                                            </Card>
                                        )
                                    })}
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </article>
        </div>
    )
}