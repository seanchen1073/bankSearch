# 台灣銀行代碼查詢系統
網址:https://banksearch.hkg1.zeabur.app/<br>
提供一個能查詢全台所有銀行及其分行資料的系統，並整合 Google 地圖功能，讓使用者能夠輕鬆規劃前往該銀行的路線。

## 一、實現前後端分離
前端使用 JavaScript 和 React，後端採用 Python 和 Django，並透過 RESTful API 進行資料串接。

## 二、串接 Google Map API 
在前端串接 Google Map API，將使用者所選擇的銀行位置顯示於地圖上，並渲染至畫面中。

## 三、前端處理 (frontend資料夾)

### 1. 使用 React 和 Tailwind CSS
開發銀行與分行搜尋功能，下拉選單支援鍵盤導航與滑鼠操作，且可無縫切換，提升使用體驗。

### 2.顯示地圖功能
當使用者選擇銀行及分行後，系統會在地圖上顯示該分行的所在地點，並加上地點標記，使用者可複製該地址。

### 3. URL 動態更新
使用者選擇銀行與分行後，會根據選擇的資料動態更新 URL，將銀行和分行代碼組合成符合規範的網址，並正確渲染對應頁面。

### 4. URL 路由解析與資料初始化
支援直接複製及貼上網址進行訪問，當 URL 符合格式時，能正確渲染頁面狀態，免去重新選擇銀行與分行的流程。

### 5. 前端打包效能優化
前端改用 Vite 打包取代 CRA，以提升開發速度並減少專案容量。

## 四、後端處理 (backend資料夾)

### 1. CSV 數據解析與結構化處理
從指定路徑載入 CSV 文件，解析銀行與分行數據，處理空值、重複記錄及格式化電話等資訊，根據銀行與分行代碼生成結構化資料，供後續使用。

### 2. 使用RESTful API風格
採用清晰的 URL 路徑與標準 HTTP 方法處理銀行和分行資料，確保前後端數據順暢交換。

### 3. 數據導出為 JSON
支援將處理後的銀行與分行數據輸出為 JSON 格式，便於前端使用。

## 五、網站部署
使用 Zeabur 分別部署前端與後端，確保專案順利運行。

