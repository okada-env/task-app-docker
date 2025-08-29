FROM node:22-alpine

# 必要なパッケージ(開発環境)をインストール
RUN apk update && \
    apk add git && \
    apk add --no-cache curl

WORKDIR /src

# Vue.jsの起動
CMD ["npm", "run", "dev"] 