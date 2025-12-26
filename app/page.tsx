import Link from 'next/link';
import { getAllArticles } from '@/lib/articles';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';

export default function Home() {
  const articles = getAllArticles();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AR</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Radar
              </h1>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/articles" className="text-gray-600 hover:text-gray-900 transition">
                記事一覧
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 transition">
                About
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          最新AIツールを<br />いち早くキャッチ
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          話題のAIツール・サービスを、初心者から上級者まで分かりやすく解説。
          毎日更新で最新情報をお届けします。
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/articles"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition"
          >
            記事を読む
          </Link>
          <a
            href="#latest"
            className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 transition"
          >
            最新記事へ
          </a>
        </div>
      </section>

      {/* Latest Articles */}
      <section id="latest" className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold mb-8">最新記事</h3>

        {articles.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">記事はまだありません</p>
            <p className="text-gray-400 mt-2">近日公開予定です</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100 overflow-hidden"
              >
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {article.frontmatter.category}
                    </span>
                    <span className="text-sm text-gray-500">{article.frontmatter.readTime}</span>
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition line-clamp-2">
                    {article.frontmatter.title}
                  </h4>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
                    <span>
                      {format(new Date(article.frontmatter.publishedAt), 'yyyy年M月d日', {
                        locale: ja,
                      })}
                    </span>
                    {article.frontmatter.author && (
                      <span className="font-medium">{article.frontmatter.author.name}</span>
                    )}
                  </div>

                  {/* Tags */}
                  {article.frontmatter.tags && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {article.frontmatter.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs text-gray-600">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-gray-600">
          <p>&copy; 2024 AI Radar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
