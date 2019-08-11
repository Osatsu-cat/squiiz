# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "csv"


User.create(nickname: 'developer', email: 'develop@gmail.com', password: 'fortest')


Question.create!([
  {question: "MVCの仕組みについて説明してください",answer:"MVCとは、プログラミング手法のアプローチの一種でRuby on Railsでも採用されています。\nWebアプリケーションを動かすために必要な処理の一部を分類し分けることで、保守性、可読性の高いコードを維持できます。\n「V」はViewの略。\n実際にクライアント側に表示される見た目の部分です。\n「M」はModelの略。\nWebアプリケーションにおけるビジネスロジック(データベースから取得してきた値を加工するメソッドや、レコード検索の条件が書かれたメソッド、データを保存する前に加工するメソッドなど)を定義します。\n「C」はControllerの略。\nクライアントからのリクエストに対して適切なレスポンスを返すことや、そのレスポンスに必要なデータの用意を行う。\nあくまでも用意するだけが責務なので、データの加工など複雑なロジックはControllerには書きません。", user_id: "1", publicness: 1},
  {question: "AWSとは何ですか？また、AWSの裏側ではどのような技術が動いていますか？",answer:"Amazon Web Servicesの略で、Amazonが提供するクラウド型Webサービスの総称。\nWebエンジニアが利用する代表的なものはEC2。\nEC2はクラウドサーバといって、自社にサーバ本体を置く必要がなくなります。", user_id: "1", publicness: 1},
  {question: "Ruby の「include」とは何ですか？",answer:"moduleをクラスに含めるメソッド。\nmoduleAをclassBにincludeすると、moduleAに含まれているメソッドをclassBのインスタンスが使えるようになります。", user_id: "1", publicness: 1},
  {question: "エラー解決はどのように行いますか？",answer:"まず、起こっているエラーのログを見ます。\n良く遭遇するエラーであれば(例えばtemplate missingやundefind method for nil NilClassなど)自分で仮説をたて考えて原因を探ります。\nあまり見たことがないエラーについては必要に応じて検索します。", user_id: "1", publicness: 1},
  {question: "オブジェクト指向とは何ですか？",answer:"オブジェクト指向とは現実世界を正しく捉えることで、プログラムの動作をある特徴(属性値とメソッド)を持ったパーツの組み合わせで実現するという考え方。\nパーツの特徴を定義するのがclass、実際のパーツはインスタンス。\nインスタンスはclassから生み出される。", user_id: "1", publicness: 1},
  {question: "参照渡し、値渡しについて説明してください",answer:"参照渡しの場合は、実引数と仮引数がメモリ上の同じ場所を指すため、仮引数に変更を加えた際に実引数の方にも影響がでます。\n一方、値渡しの場合は、実引数の値がコピーされるため、仮引数に変更を加えても実引数には影響がありません。", user_id: "1", publicness: 1},
  {question: "アジャイル開発の利点を挙げてください",answer:"アジャイル開発の一番の利点は顧客の要望に臨機応変に対応できることです。\nイテレーションという「計画」「設計」「実装」「テスト」からなる一つのサイクルを1~2週間で、すばやく繰り返すことで変更に強い開発手法を実現しています。", user_id: "1", publicness: 1},
  {question: "こちらのDBを正規化してください\nhttps://docs.google.com/spreadsheets/d/11CDfzbK1snzBovbYiBdAZkA6ZbiYEY0NtT8v8FTnnr4/edit#gid=0",answer:"https://docs.google.com/spreadsheets/d/11CDfzbK1snzBovbYiBdAZkA6ZbiYEY0NtT8v8FTnnr4/edit#gid=1154682183", user_id: "1", publicness: 1},
  {question: "SQLとは何か説明してください",answer:"SQLとは、Structured Query Languageの略で、リレーショナルデータベース管理システム（RDBMS）と対話するための言語です。\nRDBMSにquery（問い合わせ）を投げることでデータベースのあらゆる操作を行うことができます。", user_id: "1", publicness: 1},
  {question: "SQLで具体的にどのようなことができますか？",answer:"データベースやテーブルの「作成/更新/削除」やデータの「登録/更新/削除/検索」、またデータを特定するための条件を指定することができます。", user_id: "1", publicness: 1},
  {question: "SQLの基本構文を教えてください",answer:"CREATE, ALTER, DROP, INSERT, UPDATE, DELETE, SELECT", user_id: "1", publicness: 1},
  {question: "ログイン、ログアウトの仕組みを説明してください",answer:"認証にメールアドレスとパスワードを利用する場合、ログインはユーザ情報を保存しているテーブルからユーザが入力したメールアドレスとパスワードがマッチするデータがあるかどうかを判定します。\nログインするとセッションに既定のデータが保存されるので、ログアウト時にはそのセッションデータを削除することでログイン状態を解除するという仕組みです。", user_id: "1", publicness: 1},
  {question: "クッキーとセッションの違いを説明してください",answer:"主にステートフルな通信を実現するためにそれぞれ利用され、クッキーはサーバーからクライアント側に付与する情報（セッションID）の仕組みで、セッションはサーバー側に保存される一連の操作や通信のことです。\n（備考を上から読んでいけば理解できるはずです）", user_id: "1", publicness: 1},
  {question: "ブラウザにURLを打ち込んでサイトが表示されるまでの仕組みを教えてください",answer:"初めに、DNSサーバにアクセスし、WebサイトのIPアドレスを特定します。\n次に、そのIPアドレスを持つサーバーに対してhttpリクエストを送信します。\nサーバーがそのhttpリクエストを元にクライアントの要求を承認すると、サーバーはクライアントに“200 OK”というメッセージを返します。\n承認が行われるとサーバーからWebサイトの情報がデータパケットという形で転送されてクライアント側に表示されるという仕組みです。", user_id: "1", publicness: 1},
  {question: "好きなHTTPエラーとそのコードを教えてください",answer:"（これ！というものがなくてもHTTPエラーがどんなものがあるのか備考のURLを確認しておいてください）", user_id: "1", publicness: 1},
  {question: "HTTPリクエストの中身を構成する3つのパートを教えてください",answer:"「HTTPリクエスト行」、「HTTPリクエストヘッダー」、「HTTPリクエストボディ」です。", user_id: "1", publicness: 1},
  {question: "HTTPリクエストヘッダーはどのような役割を果たしていますか？",answer:"端的に言えば、HTTPリクエストの2行目以降の情報のことで、ブラウザの「ユーザエージェント名」や「リファラ」、「クッキー」等の情報をWEBサーバへ伝える役割を果たしています。", user_id: "1", publicness: 1},
  {question: "デスクトップPCとスマートフォンでは画面のサイズが異なりますが、どのように対応しますか？",answer:"メディアクエリを利用し画面のサイズ事に適用するCSSを変化させます。", user_id: "1", publicness: 1},
  {question: "viewを作成するときにエンジニア目線で気をつけていることはありますか？",answer:"「メンテナンス性」の高いコードを書くように気をつけています。\n具体的には、BEMという方法論を使ってフロントを設計することで可読性、再利用性の高いコードを実現できるように心がけています。", user_id: "1", publicness: 1},
  {question: "データベースのトランザクションについて説明してください",answer:"トランザクションとはデータベースに対して行われるワンセットになった処理のまとまりのことです。", user_id: "1", publicness: 1},
  {question: "トランザクションの特性であるACIDについて説明してください",answer:"Aは「原子性」を表す「Atomicity」でトランザクションが終わった時に、そこに含まれていた更新処理が全て実行されるか、全て実行されない状態で終わることを保証する性質です。\nCは「一貫性」の「Consistency」でトランザクションに含まれる処理はそれぞれの制約を満たすという性質です。\nIは「独立性」のIsolationであるトランザクションが実行中の場合、もう一方のその他のトランザクションの影響を受けないという性質です。\nDは「永続性」のDurabilityでトランザクションが完了した後、そのデータ状態が保存され失われることは無いという性質です。", user_id: "1", publicness: 1},
  {question: "DBのconfigファイルに記載した内容について説明してください",answer:"接続するデータベースの種類やソケットファイルの在り処、データベースクライアントのユーザー名/パスワードなどを記載します", user_id: "1", publicness: 1},
  {question: "Rubyの長所、短所について教えてください",answer:"オブジェクト指向を採用しており、保守、運用に秀でており、インタプリタ方式なのでデバッグも容易です。\nまた、動的型付け言語かつシンプルな構文が多いので記述量少なくあらゆる実装を行うことができます。\n一方、処理速度は他の言語に比べ遅いので、大規模アプリや処理速度が重要なサービスには向いていないといえます。", user_id: "1", publicness: 1}
])

CSV.foreach('db/cf.csv') do |row|
  Cf.create(link: row[0], question_id: row[1])
end