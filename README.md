# official-website
東大エンジニアリング研究会の公式ウェブサイトです。

https://ut-engineering-society.github.io/official-website/

# deployについて
docsファイルの中身のみ表示されるようになっている。

各ディレクトリ、index.htmlが自動で表示される。

拡張子は省略可能（なはず）

## headerとfooter
ここを変更したら手動で全部のファイルを変える（どうにかしたい）

# フォルダ構成

## header
左上にロゴと名前、右上にナビゲーションバー

## footer
左に小さくナビゲーションバー、右に小さくロゴと名前、copyrightもつける

## top
* サークル概要
* 代表挨拶
* vision

## activity
* 定例会（セミナー）
* 勉強会
* プロジェクト
* （交流会）

## contact
* SNS
* お問い合わせフォーム（googleフォーム）

https://form.run/media/contents/form-creation-tools/google-form-embedding/

## css
### global.css
全体に共通のもの（body, header, footer, フォントや色）

### xxxx.css
それぞれのページのcss（globalの後に読み込む）

## images
* 画像は全てここ
* global関連（ロゴ等）以外はページごとにフォルダ分けする


## その他
company, events, mediaは今後作る可能性を残し、docsの外へ

# コーディング規約

## 重要・よく使うもの
* インデントは**半角スペース2文字**分
* 大文字を使用しない（HTML要素名、属性、属性値（text/CDATA除く）、CSSセレクター、プロパティ、およびプロパティ値（文字列を除く）は**全て小文字**）
* HTMLのクラスやIDで複数の英単語を使うときは「_」で繋ぐ


## 参考サイト（問題なければ基本的にはここに従う）
[現在のGoogle HTML/CSS Guide コーディング規約/日本語訳](https://fueru.info/design/html-css/google-styleguide/)

# ブランチ等のルール
* 基本的にはmainには直接mergeしない
* 作業内容をブランチ名に使う


# 直近のtodo、議論
* ~~cssは何ファイル作るか~~
* ~~React, Next.js等を使うか~~
* ~~tailwind を使うか~~
* ~~ビルド → fh-pagesにpush → 公開という流れを取るか？（少し難しいが共通部分をまとめられるため楽）~~
* 無料のHTMLテンプレートを使うか→参考にする程度
* 404.htmlを作りたい(自分たちで404 not found を実装できる)


# 参考サイト一覧
## 技術面
* [GitHub Actions で Web サイトをビルドして GitHub Pages へ公開する](https://maku.blog/p/5q3eq2c/)
* [HTMLで共通部分をインクルードして使い回す方法は？](https://qumeru.com/magazine/7)

## 見た目
* [ut.code();](https://utcode.net/)
* [KING](https://waav-bcking.com/)
* [winc](https://www.winc.ne.jp/)

