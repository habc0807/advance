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


vue-loader原理？

1. 使用webpack编译
` ./node_modules/.bin/webpack`
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