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

檔案路徑
https://github.com/TzuChuanNien/Vue
Branch：develop

## 採用技術、套件

本次使用 Tailwind、Vue3 Composition、Axios、Heroicons、Vue 3 Pagination

## 開發規劃

此次專題 我將畫面規劃成 4 個區塊

- Header
- Card Style
- List Style (Table)
- Dialog
- Vue 3 Pagination

## 施作流程

1. 先規劃各區塊版面配置，範例是 5\*6 規格，先將此板塊給切出來，但由於我沒有使用過 Tailwind，所以花些時間去看他的 Document。
2. Composition API 應用，由於之前都是採用 Option 的開發模式，故須先了解兩者差異，與使用方法(hook & ref reactive)
3. 將 Axios 封裝，利用 Axios call RandomUser API 並呼叫對應參數
4. 處理相關資料 需呼叫 3009 筆 因為該 api 是抓 index 所以呼叫 3010 會多一筆故需呼叫 results=3009 每頁 30 筆，故在點選頁面時必須先將資料切分，該 pageItem 所需顯示範圍，技術我採用 Filter 後將檔案丟進 pageItem 這個變數，當我點選時會將內容物清空放入新的範圍內容物
5. Dialog 畫面的規劃，由於原先想說做一個隨便的 Dialog ，但又想到得到的資料是 User 資料，所以想說做個對話框，讓此次專案 看起來就像是聊天工具。

## 額外發想

1. 可用 localStorage 去記錄使用者操作習慣(例如可記憶他喜歡看什麼風格)
2. 目前已將 數量訂定為變數，固可讓使用者呼叫想要的數量而非固定的 3009，也可定義各種 API 參數提供呼叫，例如想要的參數 name,email

## Events

| Name               |  Input  | Output/Variables | Description                         |
| ------------------ | :-----: | :--------------: | ----------------------------------- |
| getRandomUserAsync |   Int   |     userData     | 輸入所需抓取檔案數量                |
| page               |   Int   |     pageItem     | 計算該分頁所需顯示範圍              |
| toggleModal        | boolean |      Dialog      | 判斷是否點選外部區域，以關閉 Dialog |

## Variables Description

| Name        |  Type  |   Description    |
| ----------- | :----: | :--------------: |
| userList    | Object |  所有使用者資料  |
| pageItem    | Object | 該分頁使用者資料 |
| currentPage | Number |   當前所在頁面   |
| totalPage   | Number |      總頁數      |

## vue3-pagination Description

| ID              |  Type  | Default |               Description               |
| --------------- | :----: | :-----: | :-------------------------------------: |
| pages           | Number |         |          Total number of pages          |
| rangeSize       | Number |    1    | Number of page around the current page  |
| activeColor     | String | #DCEDFF |  Background color of the current page   |
| hideFirstButton | String |  false  | Hide the button to go to the first page |
| hideLastButton  | String |  false  | Hide the button to go to the last page  |

## vue3-pagination Events

| ID                | Output |            Description            |
| ----------------- | :----: | :-------------------------------: |
| update:modelValue | Number | The current page has been updated |
