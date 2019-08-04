/**
 * gaobingyan 
 * 20190804
 */

/** 
 * 第一版
 * 顺着写
 */

//  (function(){
//     const context = document.getElementById('content').getContext('2d')

//     const heroImg = new Image() // 创建img元素
//     heroImg.onload = function () {
//         var imgPos = {
//             x: 0,
//             y: 0,
//             width: 32,
//             height: 32
//         };

//         var rect = {
//             x: 0,
//             y: 0,
//             width: 40,
//             height: 40
//         };
//         // 执行drawImage语句
//         context
//             .drawImage(
//                 heroImg,
//                 imgPos.x,
//                 imgPos.y,
//                 imgPos.width,
//                 imgPos.height,
//                 rect.x,
//                 rect.y,
//                 rect.width,
//                 rect.height
//             )
//     }
//     heroImg.src = './hero.png' // 设置图片源地址
//  })();


/**
 * 第二版
 * 拆分 准备资源和画图部分
 * 尽量解耦
 */

// (function() {
//     // 准备资源一个人开发
//     function prepare()  {
//         const context = document.getElementById('content').getContext('2d')
//         const heroImg = new Image()
//         heroImg.src = './hero.png'
        
//         return {
//             // 外部传入的callback 可以拿到 prepare内部的变量 
//             getResource(callback){
//                 heroImg.onload = function () { // 图片加载完成后 再画图 保证不会在加载完毕之前使用这个图片
//                     callback && callback(context, heroImg)
//                 }
//             }
//         }
        
//     }

//     //  画图一个人开发
//     function drawHero(context, heroImg) {
//         var context = context
//         var heroImg = heroImg
//         console.log(context)
//         console.log(heroImg)
//         var imgPos = {
//             x: 0,
//             y: 0,
//             width: 32,
//             height: 32
//         };

//         var rect = {
//             x: 0,
//             y: 0,
//             width: 40,
//             height: 40
//         };

//         context.drawImage(
//             heroImg,
//             imgPos.x,
//             imgPos.y,
//             imgPos.width,
//             imgPos.height,
//             rect.x,
//             rect.y,
//             rect.width,
//             rect.height
//         )
//     }

//     var resourceManager = prepare()
//     resourceManager.getResource(function(context, heroImg) {
//         drawHero(context, heroImg)
//     })
//  })()

//  image是 image 或者 canvas 对象
// x 和 y 是其在目标 canvas 里的起始坐标
// width 和 height， 这两个参数用来控制 当向canvas画入时应该缩放的大小
//  drawImage(image, x, y, width, height)
//  drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
//  第一个参数和其它的是相同的， 都是一个图像或者另一个 canvas 的引用。 其它8个参数最好是参照右边的图解， 前4个是定义图像源的切片位置和大小， 后4个则是定义切片的目标显示位置和大小。

/**
 * 第三版
 * 需要多张图片 图片预加载处理
 */

 (function () {
     // 准备资源一个人开发
     function prepare() {
         const context = document.getElementById('content').getContext('2d')
         const heroImg = new Image()
         const allSpriteImg = new Image()

         const imgTask = (img, src) => {
             return new Promise(function (resolve, reject) {
                 img.onload = resolve 
                 img.onerror = reject 
                 img.src = src 
             })
         }

         const allresouceTask = Promise.all([
             imgTask(heroImg, './hero.png'),
             imgTask(allSpriteImg, './all.jpg')
         ])

         return {
             /**
              * 
              * @param {Function} callback - 外部传入的callback 可以拿到 prepare内部的变量
              */
             getResource(callback) {
                allresouceTask.then(function(res) { // 图片加载完成后 再画图 保证不会在加载完毕之前使用这个图片
                    callback && callback(context, heroImg, allSpriteImg)
                })
             }
         }
     }

    //  画图一个人开发
     function drawImageHandle(context, heroImg, allSpriteImg) {
        // draw 需要定义在hexo 和 monster之前 否则通过hexo.draw()的方式访问不到
        var draw = function () {
            console.log(this.context)
            this.context.drawImage(
                this.img,
                this.imgPos.x,
                this.imgPos.y,
                this.imgPos.width,
                this.imgPos.height,
                this.rect.x,
                this.rect.y,
                this.rect.width,
                this.rect.height
            )
        }

        var hero = {
             img: heroImg,
             context: context,
             imgPos: {
                 x: 0,
                 y: 0,
                 width: 32,
                 height: 32
            },
            rect: {
                x: 0,
                y: 0,
                width: 40,
                height: 40
            },
            draw: draw
        }

        var monster = {
            img: allSpriteImg,
            context: context,
            imgPos: {
                x: 858,
                y: 529,
                width: 32,
                height: 32
            },
            rect: {
                x: 100,
                y: 100,
                width: 40,
                height: 40
            },
            draw: draw
        }

        

        hero.draw()
        monster.draw()
     }

     var resourceManager = prepare()
     resourceManager.getResource(function (context, heroImg, allSpriteImg) {
        //  console.log(allSpriteImg)
         drawImageHandle(context, heroImg, allSpriteImg)
     })
 })()