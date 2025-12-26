# AI Radar

最新AIツールを速報でお届けするニュースサイト

## 概要

AI Radarは、話題のAIツール・サービスの簡単な紹介と使い方をまとめる速報的なニュースサイトです。初心者から上級者まで、幅広い層に向けて最新のAI情報を分かりやすく提供します。

## 特徴

- **速報性**: 最新のAIツールをいち早く紹介
- **分かりやすさ**: 初心者でも理解できる丁寧な解説
- **多角的な視点**: 3つの執筆者ペルソナによる多様な記事
  - 山田太郎: 初心者向け「やってみた」系の記事
  - 荻原健太: 技術的に詳しい深堀り解説
  - 鈴木美咲: ビジネス活用を考察
- **完全無料**: Cloudflare Pagesを利用した完全無料ホスティング

## 技術スタック

- **フレームワーク**: Next.js 16 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **コンテンツ管理**: MDX (next-mdx-remote)
- **ホスティング**: Cloudflare Pages
- **デプロイ**: 完全無料

## ローカル開発

### 必要な環境

- Node.js 20以上
- npm または yarn

### セットアップ

```bash
# リポジトリをクローン
git clone https://github.com/sa9sha9/ai-radar.git
cd ai-radar

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

http://localhost:3000 でサイトが表示されます。

### ビルド

```bash
# プロダクションビルド
npm run build

# ビルド結果を確認
npm start
```

## 記事の追加

新しい記事は `content/articles/` ディレクトリに MDX ファイルとして追加します。

### 記事のフロントマター例

```yaml
---
title: "記事のタイトル"
category: "カテゴリ名"
price: "無料|有料|フリーミアム"
publishedAt: "2024-12-25"
readTime: "5分"
author:
  name: "山田太郎"
  title: "Webマーケター"
  bio: "AI初心者でも分かる記事を得意としています。"
  expertise: "初心者向けガイド、実践レビュー"
  motto: "とりあえず使ってみる！"
tags: ["タグ1", "タグ2"]
---
```

## Cloudflare Pages へのデプロイ

### 1. Cloudflare アカウントの準備

1. [Cloudflare](https://www.cloudflare.com/) でアカウントを作成（無料）
2. ダッシュボードにログイン

### 2. Pages プロジェクトの作成

1. Cloudflare ダッシュボードで「Workers & Pages」を選択
2. 「Create application」→「Pages」→「Connect to Git」を選択
3. GitHubアカウントを接続
4. `ai-radar` リポジトリを選択

### 3. ビルド設定

以下の設定を入力：

- **Project name**: `ai-radar` (任意の名前)
- **Production branch**: `main`
- **Framework preset**: `Next.js`
- **Build command**: `npm run build`
- **Build output directory**: `.next`

### 4. 環境変数の設定（必要に応じて）

現時点では環境変数は不要です。

### 5. デプロイ

「Save and Deploy」をクリックすると、自動的にデプロイが開始されます。

デプロイ完了後、`https://ai-radar.pages.dev` のようなURLでサイトが公開されます。

### 6. 自動デプロイ

main ブランチに push すると、自動的に再デプロイされます。

```bash
git add .
git commit -m "記事を追加"
git push origin main
```

## プロジェクト構造

```
ai-radar/
├── app/                    # Next.js App Router
│   ├── page.tsx           # トップページ
│   ├── layout.tsx         # 共通レイアウト
│   └── articles/
│       └── [slug]/        # 記事詳細ページ
│           └── page.tsx
├── content/
│   └── articles/          # MDX形式の記事
│       └── *.mdx
├── lib/
│   └── articles.ts        # 記事管理ユーティリティ
├── types/
│   └── article.ts         # TypeScript型定義
├── public/                # 静的ファイル
└── components/            # 共有コンポーネント（将来の拡張用）
```

## ライセンス

MIT

## 作成者

Created with [Claude Code](https://claude.com/claude-code)
