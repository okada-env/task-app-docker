# task-app-docker

## 概要
課題【Docker×laravel×vue3でタスクアプリを開発】になります。

Notion：https://www.notion.so/laravel-vue-SPA-2564ca2ae68a80538343d2d744e18841?source=copy_link

## 達成基準

- `docker-compose up -d` を起動するとサービスが立ち上がり操作できる
- 宮田さんがgit cloneを行い、README.mdを見ながら環境構築をして同様の環境を再現してアプリを操作できる（登録→一覧）
- 宮田さんが確認して合格を出す

## セットアップ手順
1. リポジトリのクローン
```
git clone https://github.com/okada-env/task-app-docker.git
```
```
cd task-app-docker
```

2. apiコンテナのセットアップ
```
cd api
```

3. 環境変数ファイルの作成
```
cp .env.example .env
```

4. .env ファイルの設定

.envファイルを以下の内容に設定してください
※ディレクトリ：api/.env

```
APP_NAME=Laravel
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=http://localhost

LOG_CHANNEL=stack
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=debug

DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=root

BROADCAST_DRIVER=log
CACHE_DRIVER=file
FILESYSTEM_DISK=local
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

MEMCACHED_HOST=127.0.0.1

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=smtp
MAIL_HOST=mailpit
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS="hello@example.com"
MAIL_FROM_NAME="${APP_NAME}"

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=
AWS_USE_PATH_STYLE_ENDPOINT=false

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_HOST=
PUSHER_PORT=443
PUSHER_SCHEME=https
PUSHER_APP_CLUSTER=mt1

VITE_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
VITE_PUSHER_HOST="${PUSHER_HOST}"
VITE_PUSHER_PORT="${PUSHER_PORT}"
VITE_PUSHER_SCHEME="${PUSHER_SCHEME}"
VITE_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"

```

5.  Composer インストール
```
docker-compose exec composer install
```

6.  アプリケーションキーを作成
```
php artisan key:generate
```

7. コンテナの立ち上げ
```
cd ../
```

```
docker-compose up -d
```

8. マイグレーション
```
docker-compose exec api php artisan migrate
```

## ブラウザでのアクセス
- アプリケーション : http://localhost

- phpMyAdmin : http://localhost:8080

## その他のコマンド
- コンテナの停止
```
docker-compose down 
```










