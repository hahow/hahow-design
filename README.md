<p align="center">
  <a href="https://hahow.design">
    <img width="200" src="https://user-images.githubusercontent.com/559351/56355239-65e0c300-6208-11e9-894d-67c09156aec9.png">
  </a>
</p>

<h1 align="center">Hahow Design</h1>

---

🚧🚧🚧

## Table of Contents

* Quick Start
  * Installation
  * How to Use
* Purpose
* Usage
  * Directory Structure
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

![Button](https://user-images.githubusercontent.com/559351/56721156-e195bf00-6776-11e9-93e4-86d9c0e6cd80.png)

其它元件的詳細使用方式請見 [https://hahow.design](https://hahow.design)

---

## Purpose

缺點

開發效率（npm link）

### Pros & Cons

Open Source 的好處：

* 一些第三方服務對開源方案免費（例如 [Chromatic](https://www.chromaticqa.com/)）
* 搞不好會有人送 PR
* 信譽驅動開發（）
* 增加品牌影響力（想像一下 [Ant Design](https://ant.design/)）

---

## Usage

### Directory Structure

```
.
├── .circleci
├── .storybook
├── src
│   ├── Component ------------------ ①
│   │   ├── Component.js ----------- ②
│   │   ├── Component.stories.js --- ③
│   │   ├── Component.test.js ------ ④
│   │   └── index.js --------------- ⑤
│   └── index.js ------------------- ⑥
└── nwb.config.js ------------------ ⑦
```

###

```
$ npm start
```

```
$ npm test
```

```
$ npm version <major|minor|patch>
```

```
$ npm publish
```

### 如何使用 `npm link` 本地開發

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

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
