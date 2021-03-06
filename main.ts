namespace SpriteKind {
    export const back = SpriteKind.create()
    export const Blower = SpriteKind.create()
    export const Projectle2 = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    timer.throttle("action", 5000, function () {
        projectile = sprites.createProjectileFromSprite(img`
            . f f f . 
            f 6 6 6 f 
            f 6 6 6 f 
            f 6 6 6 f 
            f 6 6 6 f 
            f 6 6 6 f 
            f 6 6 6 f 
            f 6 6 6 f 
            f 6 6 6 f 
            f 6 6 6 f 
            f 6 6 6 f 
            f 6 6 6 f 
            . f 6 f . 
            . f 6 f . 
            . . f . . 
            . f f f . 
            `, mySprite, 0, -20)
        projectile.z = -3
        projectile.startEffect(effects.bubbles, 5000)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectle2, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    Blower2 = sprites.create(img`
        ................
        ................
        ................
        ................
        ....22....22....
        ....22...22.....
        ....222..22..55.
        ....2522222..2..
        .....552222222..
        2222.22525522...
        .2255222552.....
        ..225555522222..
        ....222225555224
        ...225555222.5..
        ..225522552222..
        ..255222225..224
        22222.222.222...
        222..22.2..22...
        22.....22..222..
        ........5....2..
        `, SpriteKind.Blower)
    scene.cameraShake(4, 500)
    Blower2.lifespan = 1200
    Blower2.setPosition(otherSprite.x, otherSprite.y)
    otherSprite.setVelocity(0, 0)
    sprite.destroy(effects.fire, 500)
    pause(1000)
    otherSprite.destroy()
    info.changeScoreBy(1)
})
let projectile2: Sprite = null
let en: Sprite[] = []
let SeaEnemy: Sprite = null
let Blower2: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
let EnemySheeps = [img`
    ..................ff......
    .................fbf......
    ................fbbf......
    ................ffbf......
    ................fbbf.f....
    ...............fffffff....
    ...............fdddddf....
    .f..f.......2..ffffdff..2.
    ..f..f..ff.222.fdddddf.222
    ..ff.ff.f4.f2f.fdddddf.f2f
    ffffffffffffffffffffffffff
    .feeeeeeeeeeeeeeeeeeeeeeee
    ...fbbbbbbbbbbbbfbfbfbfbbf
    ....fbbbbbbbbbbbbbbbbbbbf.
    .....fbbbbbbbbbbbbbbbbbf..
    `, img`
    . . . . . . . . . . . f . . . . . . . . 
    . . . . . . . . . . f 2 f . . . . . . . 
    . . . . . . . . . . . f . . . . . . . . 
    . . . . . . . . . . . f . . . . . . . . 
    . . . . . . . . . . . f . . . . . . . . 
    . . . . . . . . f f f f f . . . . . . . 
    . . . . . . . f d d d d f . . . . . . . 
    . . . . . . f 9 9 d 9 f f . . . . . . . 
    . . . . . . f f f b f f f . . . . . . . 
    . . . . . . f b b b b b f . . . . . . . 
    . . . f d d d d d d d d d f . b b b b . 
    f f f f f f f f f f f f f f . b . b . . 
    . f c c c c c c c c c c c c c c c c c f 
    . . f b b b b b b b b b b b b b b b b f 
    . . . f b b b b b b b b b b b b b b f . 
    `, img`
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ............ff..ff..ff........
    ............ff..ff..ff........
    .f..f....fffffffffffffff..2...
    ..f..f..ffbbbbbbfddddddf.222..
    ..ff.ff.fbbfbfbbfdfdfddf.f2f..
    fffffffffffffffffffffffffffff.
    .feeeeeeeeeeeeeeeeeeeeeeeeeef.
    ...fbbbbbbbbfbfbfbfbfbfbfbbf..
    ....fbbbbbbbbbbbbbbbbbbbbbf...
    .....fbbbbbbbbbbbbbbbbbbbf....
    `]
scene.setBackgroundColor(8)
let back2 = sprites.create(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff.....................ffffffffffffffffffffffffffffffff.....................fffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffff.............................ffffffffffffffffffffffff.............................fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff...................................ffffffffffffffffff...................................ffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff.........................................ffffffffffff.........................................fffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff.............................................ffffffff.............................................fffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff.................................................ffff.................................................fffffffffffffffffffffffffffff
    fffffffffffffffffffffffffff...................................................ffff...................................................fffffffffffffffffffffffffff
    fffffffffffffffffffffffff..............................................................................................................fffffffffffffffffffffffff
    ffffffffffffffffffffffff................................................................................................................ffffffffffffffffffffffff
    ffffffffffffffffffffff....................................................................................................................ffffffffffffffffffffff
    fffffffffffffffffffff......................................................................................................................fffffffffffffffffffff
    ffffffffffffffffffff........................................................................................................................ffffffffffffffffffff
    ffffffffffffffffff............................................................................................................................ffffffffffffffffff
    fffffffffffffffff..............................................................................................................................fffffffffffffffff
    ffffffffffffffff................................................................................................................................ffffffffffffffff
    fffffffffffffff..................................................................................................................................fffffffffffffff
    ffffffffffffff....................................................................................................................................ffffffffffffff
    fffffffffffff......................................................................................................................................fffffffffffff
    fffffffffffff......................................................................................................................................fffffffffffff
    ffffffffffff........................................................................................................................................ffffffffffff
    fffffffffff..........................................................................................................................................fffffffffff
    ffffffffff............................................................................................................................................ffffffffff
    ffffffffff............................................................................................................................................ffffffffff
    fffffffff..............................................................................................................................................fffffffff
    ffffffff................................................................................................................................................ffffffff
    ffffffff................................................................................................................................................ffffffff
    fffffff..................................................................................................................................................fffffff
    fffffff..................................................................................................................................................fffffff
    ffffff....................................................................................................................................................ffffff
    ffffff....................................................................................................................................................ffffff
    fffff......................................................................................................................................................fffff
    fffff......................................................................................................................................................fffff
    ffff........................................................................................................................................................ffff
    ffff........................................................................................................................................................ffff
    ffff........................................................................................................................................................ffff
    fff..........................................................................................................................................................fff
    fff..........................................................................................................................................................fff
    fff..........................................................................................................................................................fff
    ff............................................................................................................................................................ff
    ff............................................................................................................................................................ff
    ff............................................................................................................................................................ff
    ff............................................................................................................................................................ff
    f..............................................................................................................................................................f
    f..............................................................................................................................................................f
    f..............................................................................................................................................................f
    f..............................................................................................................................................................f
    f..............................................................................................................................................................f
    f..............................................................................................................................................................f
    f..............................................................................................................................................................f
    f..............................................................................................................................................................f
    f..............................................................................................................................................................f
    f..............................................................................................................................................................f
    f..............................................................................................................................................................f
    f..............................................................................................................................................................f
    f..............................................................................................................................................................f
    f..............................................................................................................................................................f
    f..............................................................................................................................................................f
    f..............................................................................................................................................................f
    f..............................................................................................................................................................f
    f..............................................................................................................................................................f
    f..............................................................................................................................................................f
    f..............................................................................................................................................................f
    f..............................................................................................................................................................f
    ff............................................................................................................................................................ff
    ff............................................................................................................................................................ff
    ff............................................................................................................................................................ff
    ff............................................................................................................................................................ff
    fff..........................................................................................................................................................fff
    fff..........................................................................................................................................................fff
    fff..........................................................................................................................................................fff
    ffff........................................................................................................................................................ffff
    ffff........................................................................................................................................................ffff
    ffff........................................................................................................................................................ffff
    fffff......................................................................................................................................................fffff
    fffff......................................................................................................................................................fffff
    ffffff....................................................................................................................................................ffffff
    ffffff....................................................................................................................................................ffffff
    fffffff..................................................................................................................................................fffffff
    fffffff..................................................................................................................................................fffffff
    ffffffff................................................................................................................................................ffffffff
    ffffffff................................................................................................................................................ffffffff
    fffffffff..............................................................................................................................................fffffffff
    ffffffffff............................................................................................................................................ffffffffff
    ffffffffff............................................................................................................................................ffffffffff
    fffffffffff..........................................................................................................................................fffffffffff
    ffffffffffff........................................................................................................................................ffffffffffff
    fffffffffffff......................................................................................................................................fffffffffffff
    fffffffffffff......................................................................................................................................fffffffffffff
    ffffffffffffff....................................................................................................................................ffffffffffffff
    fffffffffffffff..................................................................................................................................fffffffffffffff
    ffffffffffffffff................................................................................................................................ffffffffffffffff
    fffffffffffffffff..............................................................................................................................fffffffffffffffff
    ffffffffffffffffff............................................................................................................................ffffffffffffffffff
    ffffffffffffffffffff........................................................................................................................ffffffffffffffffffff
    fffffffffffffffffffff......................................................................................................................fffffffffffffffffffff
    ffffffffffffffffffffff....................................................................................................................ffffffffffffffffffffff
    ffffffffffffffffffffffff................................................................................................................ffffffffffffffffffffffff
    fffffffffffffffffffffffff..............................................................................................................fffffffffffffffffffffffff
    fffffffffffffffffffffffffff...................................................ffff...................................................fffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff.................................................ffff.................................................fffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff.............................................ffffffff.............................................fffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff.........................................ffffffffffff.........................................fffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff...................................ffffffffffffffffff...................................ffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffff.............................ffffffffffffffffffffffff.............................fffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff.....................ffffffffffffffffffffffffffffffff.....................fffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `, SpriteKind.back)
mySprite = sprites.create(img`
    ........fff....fff........
    ......ff66f....f66ff......
    ....ff66dd6ffff66666ff....
    ...f66ddbb666666666666f...
    ..f66db6666666666666666f..
    ..f6db66666666666666666f..
    .f66db666666666666666666f.
    .f6db6666666666666666666f.
    .f6db6666666666666666666f.
    f66db66666666666666666666f
    f6db666666666666666666666f
    f6db666666666666666666666f
    f6db666666666666666666666f
    f6db666666666666666666666f
    f6db666666666666666666666f
    f6db666666666666666666666f
    f6db666666666666666666666f
    f6db666666666666666666666f
    f6db666666666666666666666f
    f6db666666666666666666666f
    f6db666666666666666666666f
    f6db666666666666666666666f
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 40, 0)
mySprite.setStayInScreen(true)
mySprite.setPosition(80, 110)
mySprite.z = -2
game.onUpdateInterval(1000, function () {
    if (Math.percentChance(20)) {
        SeaEnemy = sprites.create(EnemySheeps[randint(0, EnemySheeps.length - 1)], SpriteKind.Enemy)
        SeaEnemy.setPosition(160, randint(20, 90))
        SeaEnemy.setVelocity(randint(-5, -25), 0)
        SeaEnemy.z = -2
        mySprite.setFlag(SpriteFlag.AutoDestroy, true)
    }
    if (Math.percentChance(50)) {
        en = sprites.allOfKind(SpriteKind.Enemy)
        projectile2 = sprites.createProjectileFromSprite(img`
            f f f 
            . f . 
            f f f 
            f f f 
            f f f 
            f f f 
            f f f 
            f f f 
            f f f 
            f f f 
            f f f 
            . f . 
            `, en[randint(0, en.length - 1)], 0, 20)
        projectile2.startEffect(effects.bubbles)
        projectile2.setFlag(SpriteFlag.AutoDestroy, true)
        projectile2.setKind(SpriteKind.Projectle2)
    }
})
