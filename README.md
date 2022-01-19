# Talktalk

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# 專案說明

## 採用技術、套件

本次使用 Tailwind、Vue3 Composition、Axios、Heroicons、Vue 3 Pagination

## 開發規劃

此次專題 我將畫面規劃成 4 個區塊

- Navgation
- Card Style
- List Style (Table)
- Dialog
- Vue 3 Pagination

## 施作流程

1. 先規劃各區塊版面配置，範例是 5\*6 規格，先將此板塊給切出來，但由於我沒有使用過 Tainwind，所以花些時間去看他的 Document。
2. Composition API 應用，由於之前都是採用 Option 的開發模式，故須先了解兩者差異，與使用方法(hook & ref reactive)
3. Axios 套件引入，利用 Axios call RandomUser API 並呼叫對應參數
4. 處理相關資料 需呼叫 3009 筆 因為該 api 是抓 index 所以呼叫 3010 會多一筆故需呼叫 resuls=3009 每頁 30 筆，故在點選頁面時必須先將資料切分，該 pageItem 所需顯示範圍，技術我採用 filter 後將檔案丟進 pageItem 這個變數，當我點選時會將內容物清空放入新的範圍內容物
5. Dialog 畫面的規劃，由於原先想說做一個隨便的 Dialog ，但又想到得到的資料是 User 資料，所以想說做個對話框，讓此次專案 看起來就像是聊天工具。
6. Pagination 直接採用套件處理，其實可以將它實作成 props 父子元件再引用

## 額外發想

1. 可用 localStorage 去記錄使用者操作習慣(例如可記憶他喜歡看什麼風格)

## 尚未施作

- RWD 切版
