export interface ArticleFrontmatter {
  title: string;
  category: string;
  price: string;
  publishedAt: string;
  readTime: string;
  difficulty?: string;
  author?: {
    name: string;
    title: string;
    bio: string;
    expertise: string;
    motto: string;
  };
  tags: string[];
}

export interface Article {
  slug: string;
  frontmatter: ArticleFrontmatter;
  content: string;
}
