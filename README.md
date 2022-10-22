## Webpackを使う理由
- モダンでないブラウザでモジュールを使うため
- http通信を一括で行うため
- コードの最適化のため
- プラグインの追加
- いろんな種類のファイルを扱うため
- HMR付きのローカルサーバーを使うため

## axiosのindex.d.ts
- dはdeclaration
- axiosに関する型の情報のみが書かれているファイル
- tsconfig.jsonで"declaration": trueにする、npm run buildでdeclarationファイルを作成できる
- d.tsはletやconstを使えない

## 値と型とnamespaceの関係
- 値と型とnamespaceは○
- 値同士、型同士は○
- 値を含んだnamespaceと変数は×
- interface同士は○
　同名のプロパティは別の型だとエラー
　同名のメソッドはオーバーロード
- interfaceとclassは○
- namespace同士は○