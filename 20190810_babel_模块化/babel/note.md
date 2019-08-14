### 如果只用babel编译 （不使用webpack）

./node_modules/.bin/babel src --out-dir lib 

### commonJS 私有变量 通过引用的方式 互改了 
处理方案 套一层 定义一个私有变量

- _symbol 
    这中方法 可以解决私有变量唯一的问题，但是这个私有变量外部拿不到
