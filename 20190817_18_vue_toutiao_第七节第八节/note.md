负责的头条demo 调休一天

主要是学下框架思想

小程序 

react-native 

和端内互通的

flutter 混合开发 

唯一能力的就是学的快

m.toutiao.com 

今天开始动手了 

vue很轻了 173kb 

 mvc 
 controller  model view 
 view有事件触发了 通知controller controller更新model, model 

vm 
 view model 视图的更新可以直接影响到model, 不需要controller插手 

 mvp view和model 完全不连通 
model view presenter 
view>presenter  presenter>model model>presenter presenter>view

mvvm 
少部分可以理解为 




1. 使用webpack编译
` ./node_modules/.bin/webpack -w`
2. 怎么启动一个服务：
在当前文件下：` ./node_modules/.bin/webpack-dev-server` 启动一个web服务 
使用的是webpack-dev-server 
如果不能启动这个端口：可以查看该端口号是否被占用

3. 接口数据在 20190811_今日头条实战/server
advance/20190811_今日头条实战/server              node index.js 

> 注意这里 需要先启动webpack，再启动server。这样的顺序

git 摔锅必备 
查看某行代码谁写的，在哪个commit中提交的：
```
git blame file_name
```

学院派理念 

指令：v-on:click 内部实现 addEventListener
就是当表达式改变的时候，其结果会响应式滴作用于DOM \

定义元素属性 v-bind:title="num" 指令不用加{{}}

1:07 

在mounted里发请求太完了 也可以在mounted里发，一遍在created里发请求 一会把项目里的请求放到created生命周期里

### data为什么是一个function 
为什么这里data是一个方法，而不是一个对象，是因为一个组件被用好几次，其它组件跟你用的是同一个组件的数据data,之间会有影响。对象引用类型 

### 有时候数据结构不合理  要跟后端提

### 拆组件 
v-bind后不写名字 v-bind="item.data" 可以对后面的变量进行解体


### computed  缓存机制
一般会依赖其它变量。或者依赖的变量一开始没变，后来变了，这个也会执行一次。会被缓存。
如果不依赖其它变量，这种情况computed为了解决这个性能问题，就只算一遍，就不从新算了。
》 解析computed的源码 看底层处理 


2:03 


### watch 
很多事不用watch也能做，用watch很多时候是为了解耦逻辑
两种用法

```
watch: {
    area(newArea) {
        this.queryPigPrice(newArea)
    }
}
```

```
this.$watch('area', area => {
    this.queryPigPrice()
})
```

### 防抖节流 

去抖debounce：让它在短时间内只请求一次, 输入内容大量的请求，其实我们只是想处理一次

思想：确定一段时间 其实就是攒一波 
debounce就是不停的打算，不停的打断前面的计划
输入框：输入一个字，就从新设定一段时间，输入一个字就设定一段时间，直到输入最后一个字，超过了这段时间，就去请求接口。


### 节流 抽象需求 throttle 

3s以内的其它的action都抛弃掉  我不听

》》》》》》》》》》》》》》3s 
滑动到距离100 
    滑动到距离90
        滑动到距离80 
            滑动到距离0

### 防抖节流总结
防抖更适合 攒着来 知道最后来一波
节流 只执行一次 后面的就忽略 我不听我不听 
防抖节流做成插件 

美滋滋 学一波 

john resig

css隔离 
 scroped 通过有属性选择器进行隔离 样式 防止进行样式的全局污染 

 26：14

 笑容渐渐凝固 

 其实vue有很多版：
 vue.js
 vue.min.js
 vue.runtime.common.dev.js
 vue.runtime.common.js
 vue.runtime.common.prod.js
 vue.runtime.esm.js
 vue.runtime.js
 vue.runtime.min.js 


### export & default 
```
 import MultiPic from './multi-pic'
 export {MultiPic}
```

### note 
看编译产出是很重要的一项
render函数要return （我们的组件最后都会转化为render函数）

### 疑问

1. scoped的实现原理 css样式隔离
当前的组件的所有元素都添加了 添加一个属性 data-v-8个hash值 空值属性
该组件内部的样式属性，将原来的选择器都改成了 ` 属性选择器 `, 起到了css样式隔离的作用的。起到了css样式模块化。

```
<div data-v-cd16f3e6="" class="content">
    <span data-v-cd16f3e6="">
        被胡歌无视，让巩俐发怒李安灰心，金马奖终于把自己“作”凉了？
    </span>
</div>
.single-pic .content[data-v-cd16f3e6]
```

### vue.*.js CDN区分

vue.js ： vue.js则是直接用在<script>标签中的，完整版本，直接就可以通过script引用。
vue.common.js :预编译调试时，CommonJS规范的格式，可以使用require("")引用的NODEJS格式。
vue.esm.js：预编译调试时， EcmaScript Module（ES MODULE)，支持import from 最新标准的。
vue.runtime.js ：生产的运行时，需要预编译，比完整版小30%左右，前端性能最优
vue.runtime.esm.js：生产运行时，esm标准。
vue.runtime.common.js:生产运行时，commonJS标准。

common和esm分别是2种现代模块化规范CommonJS和EcmaScript Module的缩写

vue.js则是直接用在<script>标签中的。

1.若是自己写个小demo测试一下
用vue.js即可，方便阅读源码

2.若你是用vue2+webpack2开发项目（vue-cli采用的方式）
开发环境用vue.esm.js
生产环境用vue.runtime.esm.js，比完整版小30%左右，前端性能更优


### alias 设置别名
将长路径设置为

```
alias: {
    vue: './node_modules/vue/dist/vue.runtime.common.js'
}
```

```
module.exports = {
  //...
  resolve: {
    alias: {
      Utilities: path.resolve(__dirname, 'src/utilities/'),
      Templates: path.resolve(__dirname, 'src/templates/')
    }
  }
};
```

Now,instead of using relative paths when importing like so:
import Utility from '../../utilities/utility'

you can use the alias:
import Utilty from 'Utilities/utilify'


### vue-loader原理
vue-loader 的内部实现核心是 vue-template-compiler。
一般情况下，vue项目中的 vue和vue-template-compiler的版本要一致。单文件组件中的 <template> 块的默认编译器

vue-loader是webpack的一个loader，可以讲vue后缀的文件处理成js文件。
将template转化为render函数，style样式转化为js，处理到render函数这里的 createElement 元素里的样式属性。

针对<style> 和 <template> 中的静态资源当作模块来对待，并且使用webpack的 loaders进行处理。
对每个组件模拟处css作用域，原理给该组件的所有元素添加data-v-hash属性，通过属性选择器的方式添加样式，算是css模块化的一种。
