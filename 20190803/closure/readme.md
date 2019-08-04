### 报错

Failed to execute 'drawImage' on 'CanvasRenderingContext2D': The provided value is not of type '(CSS

画图的时候图片没加载完成，或者没有获取到正确的图片，会报这个错误，排查到时 `callback(context, heroImg, allSpriteImg)` 少传参数 `allSpriteImg` 了