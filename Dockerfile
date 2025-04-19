# --- Build Stage ---
FROM node:18-alpine AS builder

# 作業ディレクトリを設定
WORKDIR /app

# 依存関係とビルドツールをインストール
COPY package*.json tsconfig.json ./
RUN npm ci

# ソースをコピーして TypeScript をビルド
COPY src ./src
RUN npm run build

# --- Production Stage ---
FROM node:18-alpine

# 作業ディレクトリを設定
WORKDIR /app

# 本番依存のみをインストール
COPY package*.json ./
RUN npm ci --production

# ビルド済みの JavaScript をコピー
COPY --from=builder /app/dist ./dist

# デフォルトの起動コマンド
CMD ["node", "dist/index.js"]
