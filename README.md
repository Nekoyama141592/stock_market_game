# Node.js環境構築ガイド

このガイドでは、WindowsとMacの両方の環境でJavascriptファイルを実行するのに必要なNode.jsをインストールする方法を説明します。

## Windows環境

1. Node.jsの公式ウェブサイト（https://nodejs.org/）にアクセスします。
2. 「LTS」バージョンのインストーラーをダウンロードします。
3. ダウンロードしたインストーラーを実行し、画面の指示に従ってインストールを完了します。
4. インストールが完了したら、コマンドプロンプトを開き、以下のコマンドを実行してバージョンを確認します：

   ```
   node --version
   npm --version
   ```

## Mac環境

1. Homebrewがインストールされていない場合は、まずHomebrewをインストールします：

   ```
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. Homebrewを使用してNode.jsをインストールします：

   ```
   brew install node
   ```

3. インストールが完了したら、ターミナルで以下のコマンドを実行してバージョンを確認します：

   ```
   node --version
   npm --version
   ```
4. `node 01_index.js` と打ち込んでください