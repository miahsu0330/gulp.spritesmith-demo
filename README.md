設計部雪碧圖工具包使用說明

# gulp-spritesmith

#### Repository: [gulp.spritesmith](https://github.com/twolfson/gulp.spritesmith)

## 👩‍💻 在這之前你必須....

- 知道如何開啟 vs code 的終端機（ `Control + ~` ）
- 準備好要 1x、2x 圖
- 以下終端機指令都將會以 `$` 這個提示字元與一個空白字元來表示，但是你不需要鍵入這兩個字元，電腦會很貼心的幫你打好 :)

## 🌲 檔案目錄說明

```
gulp-spritesmith/
  ├── original-images  --> 放入需 @1x、@2x 的圖片)
  ├── sprite           --> 生成之 sprite 相關檔案 png、css、scss
```

## ✏️ 工具包使用說明

🌟 若非第一次使用可直接跳到 **[Step4. 輸出檔案]**

### Step1. 檢查電腦是否已安裝 node.js, npm, and npx

```
$ node --version
$ npm --version
$ npx --version
```

| 無安裝的畫面                         | 有安裝的畫面                         |
| ------------------------------------ | ------------------------------------ |
| ![](https://i.imgur.com/uzqyU4x.png) | ![](https://i.imgur.com/cPiA5yI.png) |

- 如果是無安裝畫面請至 [node.js 載點](https://nodejs.org/en/)，點擊下一步安裝即可~
- 安裝 node.js 時會一併裝好 npm 及 npx
- 安裝好 node.js 後可以再檢查一次是否安裝成功
- [補充說明] [什麼是 node.js and npm?](https://miahsuwork.medium.com/%E7%AC%AC%E4%BA%8C%E9%80%B1-%E4%B8%8D%E5%86%8D%E8%88%87-node-js-npm-%E6%93%A6%E8%82%A9%E8%80%8C%E9%81%8E-fb188b3baf20)

### Step2. 安裝此工具包需使用之套件

```
$ npm install
```

### Step3. 將圖檔放入 original-images

必須放入 1x 及 2x，可直接使用 zeplin 下載的格式即可，無需重新命名。

### Step4. 輸出檔案

```
$ npm run build
```

執行完畢會得到以下 4 個檔案：

1. `_sprite.scss`
2. `sprite.css`
3. `sprite.png`
4. `sprite@2x.png`

就完成雪碧圖的製作囉！

## 檔案使用說明

### 👀 CSS 使用方法（sprite.css）

#### 放置相關檔案

- 將 `sprite.png`、`sprite@2x` 放入 `/images`
- 將 `sprite.css` 檔放入 `/css`

#### 使用說明

- class 名為檔名加上前綴 `icon-`：

  - **File Name:** `deleted-green.png`
  - **Class Name:** `.icon-deleted-green`

- HTML `<i>` 使用方法：

```
<i class="icon-deleted-green"></i>
```

### 👀 SCSS 使用方法（\_sprite.scss）

#### 放置相關檔案

- 將 `sprite.png`、`sprite@2x` 放入 `/images`
- 將 `_sprite.scss` 檔放入 `/scss`

#### 使用說明

step1. 使用 import 的方式將 sprite.scss 引入需使用的 scss 檔最上方

```
@import "../sprite";
```

step2. 用 include 引用個別 icon，舉例：

```
.icon-deleted-green {
   @include sprite($deleted-green);
}
```
