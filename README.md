# Squiizについて
![logo_s](https://user-images.githubusercontent.com/51403845/63330151-48666600-c36e-11e9-9803-75c552af0b64.png)

問題を一問一答形式で出題するクイズアプリです。(作成途中)  
暗記用に使えるよう、問題の公開・非公開が選べるようになっています。  
名前の由来は、「記憶を絞り出す」ということで"quiz"と"squeeze"をかけてます。  
こちらのリンクより動作の確認ができます。http://3.114.174.23/
### 出題画面
![squiiz0](https://user-images.githubusercontent.com/51403845/63330184-587e4580-c36e-11e9-99b4-7c2097a2c719.gif)
現在は記述式問題のみのため、正誤判定は自己申告になってます。

### マイページ
![squiiz1](https://user-images.githubusercontent.com/51403845/63330215-6cc24280-c36e-11e9-9c8d-815dc6a08fcf.gif)
問題の一覧/新規作成/編集が行えます。

## 制作理由
プログラミングスクールの友人たちと技術質問の練習を出し合っていたとき、自動化やより記憶定着できるしくみを作りたいと思い作成しました。  
また、前回作成したアプリケーションがサーバーサイドの実装のみだったため、フロントサイドの制作の復習もかねています。

## 工夫した点
- レスポンシブルデザイン
 …スマホサイズ(1000px以下)に対応しています。フロント知識復習のため、CSSフレームワークを使用せずに画面を作成しました。マイページ並び替えのドロップダウンのみbootstrapより流用してます。
- ユーザーごとの正解率・回答数の表示
　…学習経過がわかりやすいよう意識しています。

## 今度改善したい点
- クイズの出題範囲を増やす…ジャンル項目を追加予定です。
- クイズの出題形式を増やす…選択問題、◯×問題を追加し、自動判定できるようにする。また、記述式の時は自分の解答の入力フォームを増やす
- お気に入り機能の追加 
- プライペート問題・お気に入り問題からの出題
- タイマーの設置

## 環境
ruby 2.5.1/rails 5.2.3/EC2にデプロイ中

## DB
<img width="676" alt="スクリーンショット 2019-08-20 17 14 26" src="https://user-images.githubusercontent.com/51403845/63330268-82d00300-c36e-11e9-8ddc-164f141a61f8.png">
