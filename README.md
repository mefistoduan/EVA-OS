#eva-os
##常用的后台管理模板  

基于 https://panjiachen.github.io/vue-element-admin-site/zh/guide/ 的版本， 只保留常用功能和修改部分UI效果  

##安装：  

###克隆项目  

git clone https://git.beswell.com/duanchangpeng/backstage.git  

###进入项目目录  

cd backstage  

###安装依赖  

npm install  

###建议不要用 cnpm 安装 会有各种诡异的bug 可以通过如下操作解决 npm 下载速度慢的问题  

npm install --registry=https://registry.npm.taobao.org

###本地开发 启动项目  

npm run dev

##1.目录结构  
  
    ├── build                      # 构建相关
    ├── mock                       # 项目mock 模拟数据
    ├── src                        # 源代码
    │   ├── api                    # 所有请求
    │   ├── assets                 # 主题 字体等静态资源
    │   ├── components             # 全局公用组件
    │   ├── directive              # 全局指令
    │   ├── filters                # 全局 filter
    │   ├── icons                  # 项目所有 svg icons
    │   ├── lang                   # 国际化 language
    │   ├── layout                 # 全局 layout  todo
    │   ├── router                 # 路由
    │   ├── store                  # 全局 store管理  todo
    │   ├── utils                  # 全局公用方法
    │   ├── vendor                 # 公用vendor todo
    │   ├── views                  # views 所有页面
    │   ├── App.vue                # 入口页面
    │   ├── main.js                # 入口文件 加载组件 初始化等
    ├── .env.xxx                   # 环境变量配置
    ├── .eslintrc.js               # eslint 配置项
    ├── .babelrc                   # babel-loader 配置
    ├── .travis.yml                # 自动化CI配置
    ├── vue.config.js              # vue-cli 配置
    ├── postcss.config.js          # postcss 配置
    └── package.json               # package.json

##2. todolist
    
    1.右上角下拉菜单基本功能 √    
    2.左侧菜单列表 √    
    3.封装axios的使用   √   
    4.路由守卫  √  
    5.table翻页 √   
    <s> 6.tab标签页 </s>      
    7.图表页面   √  
    8.弹窗提醒，弹窗交互   dialog,popconfirm
    9.excel  todo
    10.navbar 小图标模式  √   
    11.radar 动画  √   
    12.地图组件 √
    
##4.使用方法
   
a.增加新页面  
    在views里新建一个vue文件，将文件名和路径加入router/index.js中，注意文件层级，非系统级别页面应加入main下的同级别里。  
        
b.新增接口
    在api/getApiRes.js里添加方法，在使用页面，首先引入这个文件    
    import { 新写的方法名 } from '../api/getApiRes.js'    
    然后再methods里使用 新的方法名(param).then(res => {...})的形式调用  
        
        
        
      
