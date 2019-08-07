### 报错

Failed to execute 'drawImage' on 'CanvasRenderingContext2D': The provided value is not of type '(CSS

画图的时候图片没加载完成，或者没有获取到正确的图片，会报这个错误，排查到时 `callback(context, heroImg, allSpriteImg)` 少传参数 `allSpriteImg` 了


1.玩玩这个游戏 熟悉游戏规则 和 机制
2.系统学习继承
3.熟练使用canvas绘图和处理动画