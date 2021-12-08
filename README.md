# sample-proto

## リリース手順
GitHub Actions経由で、リリース作業を行うことができます。  
[Release Action](https://github.com/amothic/sample-proto/actions/workflows/release.yml) の `Run workflow` からリリースを実施します。

<img width="333" alt="release" src="https://user-images.githubusercontent.com/828919/127495739-45d7487a-9a38-4118-ace3-2b1b22c00b69.png">

## パッケージの利用手順
### Go
```
go get -u github.com/amothic/sample-proto
```
### TypeScript
1. `package.json`と同じディレクトリに`.npmrc`を作成する
   ```
   @amothic:registry=https://npm.pkg.github.com
   ```
2. npm install
   ```
   $ npm install @amothic/sample-proto
   ```
