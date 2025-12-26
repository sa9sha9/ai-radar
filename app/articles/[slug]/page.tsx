import { getArticleBySlug, getAllArticles } from '@/lib/articles';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b sticky top-0 z-10 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">AR</span>
            </div>
            <span className="font-bold text-lg">AI Radar</span>
          </Link>
        </div>
      </header>

      {/* Article Content */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Meta */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              {article.frontmatter.category}
            </span>
            <span className="text-gray-500 text-sm">{article.frontmatter.readTime}</span>
            {article.frontmatter.difficulty && (
              <span className="text-gray-500 text-sm">{article.frontmatter.difficulty}</span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{article.frontmatter.title}</h1>

          <div className="flex items-center gap-4 text-gray-600">
            <span>
              {format(new Date(article.frontmatter.publishedAt), 'yyyy年M月d日', { locale: ja })}
            </span>
            {article.frontmatter.author && (
              <>
                <span>•</span>
                <span>{article.frontmatter.author.name}</span>
              </>
            )}
          </div>
        </div>

        {/* MDX Content */}
        <div className="prose prose-lg prose-slate max-w-none">
          <MDXRemote source={article.content} />
        </div>

        {/* Author Bio */}
        {article.frontmatter.author && (
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-bold mb-2">✍️ この記事を書いた人</h3>
            <p className="font-semibold">
              {article.frontmatter.author.name}（{article.frontmatter.author.title}）
            </p>
            <p className="text-gray-600 mt-2">{article.frontmatter.author.bio}</p>
            <div className="mt-2 text-sm text-gray-500">
              <p>得意分野: {article.frontmatter.author.expertise}</p>
              <p>モットー: {article.frontmatter.author.motto}</p>
            </div>
          </div>
        )}

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link href="/" className="text-blue-600 hover:underline">
            ← トップページに戻る
          </Link>
        </div>
      </article>
    </div>
  );
}
