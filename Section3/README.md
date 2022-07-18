## watchモードを使って、保存時に自動的にTSからJSにコンパイルする方法
```
tsc index.ts -w
tsc index.ts --watch
```
止める時は ctrl + c

## tsc --initでtsconfig.jsonを作り、全てのファイルを一気にコンパイルする方法
このように記述してもコンパイルできるが、複数ファイルがあると大変
```
tsc compiler.ts index.ts
```

tscofig.jsonを作る
```
tsc --init
```

下記コマンドで全てのファイルをコンパイル
```
tsc
```

## includeとexcludeとfilesを使ってコンパイルするファイルを選ぶ方法
tsconfig.jsonに記載

## targetを指定して、特定のバージョンのJavaScriptに変換する方法
デフォルトはes3

## libを指定して、TypeScriptが用意している型の定義を追加する
libプロパティがコメントアウトされている場合は、targetによてlibがインストールするものが変わる

## allowJs、checkJs、jsx、declaration、declarationMapの設定はこう使う
allowJs: JavaScriptをコンパイルの対象にする
checkJs: allowJsと一緒に使う必要がある、JavaScriptファイルもエラーをチェックする
jsx: Reactに使う
declaration、declarationMap: 型定義ファイルを作る

## SourceMapを使用して、ブラウザでTypeScriptを操作する方法
TypeScriptとJavaScriptの架け橋になるmapファイルを作成する
ブラウザでTypescriptファイルをみたい時に使う
compiler.js.mapはJavaScriptファイルからTypeScriptファイルを作り出す

## outDirとrootDir、removeComments、noEmit、downlevelIterationの使い方
TypeScriptがコンパイルされてJavaScriptに出力される時、その出力先を決める
distフォルダ配下に作成
outDir: ファイルの出力のみ、フォルダは出力しない
rootDir: フォルダも出力する
removeComments: コメントアウトを削除する
noEmit: 何も出力しない
downlevelIteration: targetがes5とes3のみ使用できる

## noEmitOnErrorオプションを使って、エラーが出た時にコンパイルしない方法
エラーが起きたらJavaScriptファイルは出力しない

## noImplicitAnyやstrictNullChecksなどのstrictの設定はこう使う
noImplicitAny: 暗黙的なanyはエラーを出す

## 綺麗なコードを書くための設定をする方法
noUnusedLocals
unUsedParameters
noImplicitReturns
