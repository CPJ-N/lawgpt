import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { getAllBlogPosts } from '@/lib/blog'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default async function BlogPage() {
    const posts = await getAllBlogPosts()

    return (
        <main className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-12 text-gray-900">Latest Articles</h1>
                
                <div className="grid gap-8">
                    {posts.map((post) => (
                        <Link 
                            key={post.slug} 
                            href={`/blog/${post.slug}`}
                            className="group"
                        >
                            <Card className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-0">
                                    <div className="flex flex-col sm:flex-row">
                                        <div className="relative h-48 sm:h-auto sm:w-48 flex-shrink-0">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h2 className="text-2xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600">
                                                {post.title}
                                            </h2>
                                            <p className="text-gray-600 mb-4 line-clamp-2">
                                                {post.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mb-4">
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
                                            <div className="text-sm text-gray-500">
                                                {new Date(post.date).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    )
}