<p align="center">
  <a href="https://hahow.design">
    <img width="200" src="https://user-images.githubusercontent.com/559351/56355239-65e0c300-6208-11e9-894d-67c09156aec9.png">
  </a>
</p>

<h1 align="center">Hahow Design</h1>

🚧🚧🚧

## Table of Contents

* Quick Start
  * Installation
  * How to Use
* Feature
* Purpose
* Roadmap
  * To-do List
* Usage
  * Directory Structure
  * Development
    * 啟動 Storybook
    * 運行測試
    * 更新 npm package
    * 如何使用 `npm link` 本地開發

## Quick Start

### Installation

```
$ npm install --save @hahow/hahow-design
```

or

```
$ yarn add @hahow/hahow-design
```

### How to Use

```js
import { Button } from '@hahow/hahow-design';

function App() {
  return <Button>Hello World!</Button>
}
```

<img width="260" alt="Screen Shot 2019-04-25 at 4 23 37 PM" src="https://user-images.githubusercontent.com/559351/56721156-e195bf00-6776-11e9-93e4-86d9c0e6cd80.png">

其它元件的詳細使用方式請見 [https://hahow.design](https://hahow.design)（WIP）

---

## Feature

* 開箱即用 Component Library（or Pattern Library）
* 快速迭代 Hahow Style 產品原型
* [Automated Visual Testing](https://storybook.js.org/docs/testing/automated-visual-testing/) for [Storybook](https://storybook.js.org/) and [Chromatic](https://www.chromaticqa.com/)

## Purpose

<p align="center">
  <img src="https://user-images.githubusercontent.com/559351/56781700-9fbc5580-6816-11e9-97db-3617e428fc78.png" alt="Design System">
</p>

![Designer and engineer](https://user-images.githubusercontent.com/559351/56781764-da25f280-6816-11e9-984b-7f709764127f.png)

![Consumer and engineer](https://user-images.githubusercontent.com/559351/56781765-db571f80-6816-11e9-99ac-205d9c3da33b.png)

![Consumer and designer](https://user-images.githubusercontent.com/559351/56781768-dc884c80-6816-11e9-9dc5-73e81e6725a2.png)

### Pros & Cons

Component Library 成為獨立 repository 的好處：

* 降低 **hh-frontend-react** 的 bundle size，增加 build time 效率

壞處：

* 🚧 增加開發成本，詳見「如何使用 `npm link` 本地開發」

Open Source 的好處：

* 一些第三方服務對開源方案免費（例如 [Chromatic](https://www.chromaticqa.com/)）
* 搞不好會有人送 PR
* 信譽驅動開發（工程師要化妝才敢出門）
* 增加品牌影響力（想像一下 [Ant Design](https://ant.design/)）

## Roadmap

![Roadmap](https://user-images.githubusercontent.com/559351/56786069-2e869d80-682a-11e9-970a-8c9779859503.png)

### To-do List

| 正在做的事 | 應該做的事 | 想做的事 |
| --- | --- | --- |
| ✅Component Library | [Design system renew](https://paper.dropbox.com/doc/Design-system-renew--AcI16u6sqkdJSLGzMylM6j1cAg-Pb5lMXAcTLHfHQ2RagjkP) | |
| ✅Open-source | 自動化 `npm version` 和 `npm publish` | |
| | Apply https://hahow.design |

---

## Usage

### Directory Structure

```
.
├── .circleci ---------------------- ⑧
├── .storybook --------------------- ⑨
├── src
│   ├── Component ------------------ ①
│   │   ├── Component.js ----------- ③
│   │   ├── Component.stories.js --- ⑤
│   │   ├── Component.test.js ------ ④
│   │   └── index.js --------------- ②
│   └── index.js ------------------- ⑥
└── nwb.config.js ------------------ ⑦
```

<details>
  <summary>1. React Component</summary>
  <ul>
    <li>資料夾名稱採用 Pascal Case 命名法（例如：PrimaryButton）</li>
  </ul>
</details>
<details>
  <summary>2. 需建立 entry file</summary>
  <pre>
    export { default } from './Component';
  </pre>
</details>
<details>
  <summary>3. 元件主要的程式碼</summary>
</details>
<details>
  <summary>4. Jest 單元測試</summary>
  <ul>
    <li>檔名後輟 <b>*.test.js</b></li>
  </ul>
</details>
<details>
  <summary>5. Storybook stories</summary>
  <ul>
    <li>檔名後輟 <b>*.stories.js</b></li>
    <li>Chromatic 依據此檔做 visual testing</li>
  </ul>
</details>
<details>
  <summary>6. 最後記得將新增元件加入此 exporting list，否則 <code>npm run build</code> 不會有結果</summary>
  <ul>
    <li>檔名後輟 <b>*.stories.js</b></li>
    <li>Chromatic 依據此檔做 visual testing</li>
  </ul>
</details>
<details>
  <summary>7. 這個專案使用 <a href="https://github.com/insin/nwb">nwb</a> 這套工具來 build React Component Library</summary>
</details>
<details>
  <summary>8. CircleCI 配置</summary>
</details>
<details>
  <summary>9. Storybook 配置</summary>
</details>

### Development

#### 啟動 Storybook

```
$ npm start
```

#### 運行測試

```
$ npm test
```

#### 更新 npm package

Step 1

更新版本號：

```
$ npm version <major|minor|patch>
```

Step 2

發佈至 npm registry：

```
$ npm publish
```

#### 如何使用 `npm link` 本地開發

如果你希望透過直接修改本地原始碼的方式來加速開發效率，建議使用 [npm link](https://docs.npmjs.com/cli/link.html)。

Step 1

`git clone` **@hahow/hahow-design** 至任意位置：

```
$ git clone https://github.com/hahow/hahow-design.git
```

or

```
$ git clone git@github.com:hahow/hahow-design.git
```

Step 2

使用 `npm link` 建立 global folder：

```
$ cd hahow-design
$ npm link
```

Step 3

切換至使用 **@hahow/hahow-design** 的專案（以 **hh-frontend-react** 為例）：

```
$ cd hh-frontend-react
```

同樣使用 `npm link` 建立 symlink：

```
$ npm link @hahow/hahow-design
```

完成。如果接下來有變更 **@hahow/hahow-design** 的原始碼，只需要 `npm run build`，**hh-frontend-react** 就會即時更新：

```
$ npm run build
```

如果 **hh-frontend-react** 想要取消 symlink，可以使用 `npm unlink`：

```
$ npm unlink @hahow/hahow-design
```
