### stopImmediatePropagation() 
阻止冒泡 这个方法的使用跟执行顺序有关。

### 如何做浏览器事件的全局代理？
react中的合成事件就是在body上做全局代理，优化性能

### 阻止默认事件 
vue-router中的a链接它不希望你跳出去

```javascript
document.querySelector('[href="require.html#浏览器事件模型"]').addEventListener('click', function(e) {
    e.preventDefault()
})
```

### 在chrome选中一个元素 可以通过$0来获取

### gitbook 的a标签的默认事件是自己做的

### cookie 和 localStorage的最大区别
cookie会被携带到服务端的，每次请求都会带上
什么时候需要用cookie, 从sever传给客户端的，sever端和客户端向一起维护的。

图片不身不需要cookie, 不和主域放在一起，有自己的专属静态资源域名。


