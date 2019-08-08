/**
 * 第六版
 * 用组合模式添加两个怪兽
 * 
 * 
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
                allresouceTask.then(function (res) { // 图片加载完成后 再画图 保证不会在加载完毕之前使用这个图片
                    callback && callback(context, heroImg, allSpriteImg)
                })
            }
        }
    }

    //  画图一个人开发
    function drawImageHandle(context, heroImg, allSpriteImg) {
        // draw 需要定义在hexo 和 monster之前 否则通过hexo.draw()的方式访问不到
        var draw = function () {
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

        function Hero () {
            this.img = heroImg
            this.context = context
            this.imgPos = {
                x: 0,
                y: 0,
                width: 32,
                height: 32
            },
            this.rect = {
                x: 0,
                y: 0,
                width: 40,
                height: 40
            }
        }

        Hero.prototype.draw = draw 

        function Monster(obj) {
            this.img = allSpriteImg
            this.context = context
            this.imgPos = obj.pos
            this.rect = obj.rect
        }

        Monster.prototype.draw = draw

        const hero = new Hero()

        // 想修改红色怪兽的大小
        const RedMonster = new Monster({
            pos: {
                x: 858,
                y: 497,
                width: 32,
                height: 32
            },
            rect: {
                x: 100,
                y: 100,
                width: 40,
                height: 40
            }
        })

        const BlackMonster = new Monster({
            pos: {
                x: 858,
                y: 529,
                width: 32,
                height: 32
            },
            rect: {
                x: 150,
                y: 150,
                width: 40,
                height: 40
            }
        })

        hero.draw()
        RedMonster.draw()
        BlackMonster.draw()
    }

    var resourceManager = prepare()
    resourceManager.getResource(function (context, heroImg, allSpriteImg) {
        //  console.log(allSpriteImg)
        drawImageHandle(context, heroImg, allSpriteImg)
    })
})()