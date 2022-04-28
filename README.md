# official-website
東大エンジニアリング研究会の公式ウェブサイトです。

# deployについて
docsファイルの中身のみ表示されるようになっている。

各ディレクトリ、index.htmlが自動で表示される。

拡張子は省略可能（なはず）

# フォルダ構成
## headerとfotter
ここを変更したら手動で全部のファイルを変える（どうにかしたい）

## 他のページ
今bodyのh1で書いてある通り

# コーディング規約

## 参考サイト（問題なければ基本的にはここに従う）
[現在のGoogle HTML/CSS Guide コーディング規約/日本語訳](https://fueru.info/design/html-css/google-styleguide/)

## 重要・よく使うもの
* インデントは**半角スペース2文字**分
* 大文字を使用しない（HTML要素名、属性、属性値（text/CDATA除く）、CSSセレクター、プロパティ、およびプロパティ値（文字列を除く）は**全て小文字**）
* HTMLのクラスやIDで複数の英単語を使うときは「_」で繋ぐ

# ブランチ等のルール
* 基本的にはmainには直接mergeしない
* 作業内容をブランチ名に使う


# 直近のtodo、議論
* cssは何ファイル作るか
* React, Next.js等を使うか
* tailwind を使うか
* ビルド → fh-pagesにpush → 公開という流れを取るか？（少し難しいが共通部分をまとめられるため楽）
* 無料のHTMLテンプレートを使うか
* 404.htmlを作りたい(自分たちで404 not found を実装できる)


# 参考サイト一覧
## 技術面
* [GitHub Actions で Web サイトをビルドして GitHub Pages へ公開する](https://maku.blog/p/5q3eq2c/)
* [HTMLで共通部分をインクルードして使い回す方法は？](https://qumeru.com/magazine/7)

## 見た目
* [ut.code();](https://utcode.net/)
* [KING](https://waav-bcking.com/)

