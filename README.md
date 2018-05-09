# ncnu_course

## 說明

學校的教務系統要安裝JAVA，並且要登入才能使用。有時候需求很簡單，只是想要找一堂課的地點或是時間而已，而且可能不在電腦旁邊，需要快速查詢某一堂課的基本資訊，為了解決此問題，本系統就誕生了。

## 結構

```
├── app.js
├── quary_exec.js
├── public
│   ├── index.css
│   └── index.html
├── src
│   ├── feed.xml
│   ├── init_db.py
│   ├── ncnu.db
│   ├── ncnu_api_get.py
│   ├── sql_exec.py
│   ├── test.py
│   └── xml_insert_db.py
└── views
    └── index.ejs
```

前端的HTML與CSS放在`/public`中，後端用expressJS來做routing，查詢的結果用ejs來渲染(views/index.ejs)到前端。資料庫選擇sqlite3。

src裡面只有ncnu.db會直接被程式使用，其他檔案皆為初始化用(取得api,解析api(xml),建db,插入資料到ncnu.db)

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
