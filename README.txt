使用React官方手脚架
npm install -g create-react-app
创建一个项目
create-react-app apkshop

删除原来的 public 和 src目录
把源码目录复制进去
注：一定要覆盖 package.json 这个文件

安装依赖
yarn install
或者
npm i

编译：
yarn run build
或者
npm run build

编译好之后的操作：
1： 打开build目录下index.html源码，在地一个<srcipt>的前面加入：
<script src="https://cdn.staticfile.org/babel-polyfill/7.4.0/polyfill.min.js"></script>
这个是兼容低版本浏览器需要的插件
 
2:  复制build目录下除index.html以外所有文件 到 Node程序目录static 下面

3:  复制build目录下index.html 到 Node程序目录 template 目录下
更新成功

注意：ReactJS每次修改之后再编译会自动更改css和js的文件名字。