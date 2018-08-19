# ncnu_course


## 說明


學校的教務系統要安裝JAVA，並且要登入才能使用。有時候需求很簡單，只是想要找一堂課的地點或是時間而已，而且可能不在電腦旁邊，需要快速查詢某一堂課的基本資訊，為了解決此問題，本系統就誕生了。

## 結構

```
├── app.js
├── build_file
│   ├── README.md
│   ├── feed.xml
│   ├── init_db.py
│   ├── ncnu_api_get.py
│   ├── src
│   ├── testfile
│   └── xml_to_json.py
├── config.js
├── public
│   ├── animation.js
│   ├── feed.json
│   ├── index.css
│   ├── index.js
│   ├── index_ejs.css
│   └── v.js
├── quary_exec.js
└── views
    └── index.ejs
```

views裡面放主要的前端檔案`index.ejs`，後端用nodeJS與資料庫溝通，資料庫選擇sqlite3。
public裡面放入一些css,js做的動畫效果，`v.js`是用Vue來控制前端選項的資料。

build_file裡面放初始化的腳本，該目錄下有README.md可以看，主要就是抓取open data，插入資料庫，轉為json(前端選項要用)。

morgan用來紀錄request的log。

## 套件

```
├── express
├── ejs
├── sqlite3
├── bootstrap@3
├── jquary
├── vueJS(cdn)
├── morgan
```

## 環境

本地環境用`port:3000來開發`，但是heroku上用`port:process.env.PORT`，為了更有效區隔不同環境，目錄下建了一個`config.js`

config.js:

```javascript
// config.js
var config = {
    development: {
        port: 3000,
        // anything else
    },
    production: {
        port: process.env.PORT,
        // anything else
    }
};

module.exports = config;
```

並在`app.js`加入

```javascript
var config = require('./config.js')[app.get('env')];
var port = config.port
```

然後將local環境設為`development`

> NODE_ENV=development

將heroku設為`production`

> heroku config:add NODE_ENV=production

以上即可達成環境區隔，開發同一份code。

## 如何幫忙

[ncnu_course團隊開發流程](https://hackmd.io/lm5n3SpIR9--ddRyI17J8g?view)