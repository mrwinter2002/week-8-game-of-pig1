controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    roll_the_die()
})
function roll_the_die () {
    for (let index = 0; index < 4; index++) {
        die_roll = randint(1, 6)
        die.setImage(die_phases[die_roll])
        animation.runMovementAnimation(
        die,
        animation.animationPresets(animation.shake),
        500,
        false
        )
        pause(200)
        die.setPosition(76, 57)
    }
}
let die_phases: Image[] = []
let die: Sprite = null
let die_roll = 0
let current_player = 0
scene.setBackgroundColor(12)
let playerone_turnsign = sprites.create(img`
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    b b b b c b c b c b b b c b b b 
    c b c c c b c b c b c b c b c b 
    c b c c c b c b c b b c c b c b 
    c b c c c b b b c b c b c b c b 
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    `, SpriteKind.Player)
playerone_turnsign.setPosition(24, 60)
playerone_turnsign.say("0")
let playertwo_turnsign = sprites.create(img`
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    b b b b c b c b c b b b c b b b 
    c b c c c b c b c b c b c b c b 
    c b c c c b c b c b b c c b c b 
    c b c c c b b b c b c b c b c b 
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    `, SpriteKind.Player)
playertwo_turnsign.say("0")
playertwo_turnsign.setPosition(126, 60)
let playerone_scoresign = sprites.create(img`
    cccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccc
    ccbbbccccccccccccccccccccccccc
    cbbcbbcccccccccccccccccccccccc
    bbcccccccccccccccccccccccccccc
    bccccccccccccccccccccccccccccc
    bbcccccccccccccccccccccccccccc
    cbbbbcccccccccccccccccbbbccccc
    ccccbbcccbbbbccccccccbbcbcbbbc
    cccccbbcbbccbbcbbbbbcbccccbcbc
    ccccccbcbccccccbcccbcbccccbbbc
    ccccccbcbccccccbcccbcbccccbccc
    cccccbbcbccccccbcccbcbccccbbbb
    cbccbbccbccccbcbbbbbcbcccccccc
    cbbbbcccbbbbbbcccccccccccccccc
    cccccccccccccccccccccccccccccc
    `, SpriteKind.Player)
playerone_scoresign.say("0")
playerone_scoresign.setPosition(24, 100)
let playertwo_scoresign = sprites.create(img`
    cccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccc
    ccbbbccccccccccccccccccccccccc
    cbbcbbcccccccccccccccccccccccc
    bbcccccccccccccccccccccccccccc
    bccccccccccccccccccccccccccccc
    bbcccccccccccccccccccccccccccc
    cbbbbcccccccccccccccccbbbccccc
    ccccbbcccbbbbccccccccbbcbcbbbc
    cccccbbcbbccbbcbbbbbcbccccbcbc
    ccccccbcbccccccbcccbcbccccbbbc
    ccccccbcbccccccbcccbcbccccbccc
    cccccbbcbccccccbcccbcbccccbbbb
    cbccbbccbccccbcbbbbbcbcccccccc
    cbbbbcccbbbbbbcccccccccccccccc
    cccccccccccccccccccccccccccccc
    `, SpriteKind.Player)
playertwo_scoresign.say("0")
playertwo_scoresign.setPosition(126, 100)
// 1 = player 1
// 2 = player 2
current_player += 1
let p1_total = 0
let p1_turn_points = 0
let p2_total = 0
let p2_turn_points = 0
// val of die
die_roll = 0
die = sprites.create(img`
    c d d d d d d d d d d d d d d c 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 f f 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 f f 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    c d d d d d d d d d d d d d d c 
    `, SpriteKind.Player)
die.setPosition(76, 57)
let aroll = sprites.create(img`
    666666666666666666666666666666
    666666666666666666666666666666
    666666666666666666666666666666
    666666666666666666666666666666
    666666666666666666666666666866
    666666666666666666666666666866
    666666666666688666666668666866
    666666666666886666666668666866
    668886666666866668888668666866
    686688666668866686668666866866
    686688666668866686668866866866
    686688866668866686668866866866
    686886886666866686668666866866
    688866668666666688888666866886
    666666666666666668666666866666
    666666666666666666666666666666
    `, SpriteKind.Player)
aroll.setPosition(76, 78)
let broll = sprites.create(img`
    666666666666666666666666666666
    666666666666666666666666666666
    666666666666666666666666666666
    686666666866666666666866666686
    686666666866666666666866666686
    686666666866666666666866666686
    686666666866666666666866666686
    686666666866666666666866666686
    686666666866666666666866666686
    688888866888886666666866666686
    686666686866686888886866666686
    686666686866686866686868888886
    686666686866686866686868666686
    686666686866686866686868666686
    686666686866686866686868666686
    668888866866686888886868888886
    `, SpriteKind.Player)
broll.setPosition(76, 107)
let p1 = sprites.create(img`
    cccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccc
    cbbbbbcbcccccccccccccccccccccc
    cbcccbcbcccccccccccccccccccccc
    cbcccbcbcccccccccccccccccccccc
    cbcccbcbcccccccccccccccccccccc
    cbbbbbcbcccccccccccccccccccccc
    cbcccccbcccbccccccccccccccbbcc
    cbcccccbcbbcbccbbcbbcccccbbccc
    cbcccccbcbccbbcccbbcbbbccbcccc
    cbcccccbcbcbbbcccbbcbbbccbcccc
    cbcccccbcbbbcbccccbcbbcccbcccc
    cccccccccccccccccbbccbbbcccccc
    cccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccc
    ccccbbbbbcccbcccbccbbbbbbccccc
    cccbcccccbccbbccbccbcccccccccc
    cccbcccccbccbbccbccbcccccccccc
    cccbcccccbccbcbcbccbbbbccccccc
    cccbcccccbccbccbbccbcccccccccc
    cccbcccccbccbcccbccbcccccccccc
    ccccbbbbbcccbcccbccbbbbbbccccc
    cccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccc
    `, SpriteKind.Player)
p1.setPosition(24, 15)
let p2 = sprites.create(img`
    cccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccc
    cbbbbbcbcccccccccccccccccccccc
    cbcccbcbcccccccccccccccccccccc
    cbcccbcbcccccccccccccccccccccc
    cbcccbcbcccccccccccccccccccccc
    cbbbbbcbcccccccccccccccccccccc
    cbcccccbcccbccccccccccccccbbcc
    cbcccccbcbbcbccbbcbbcccccbbccc
    cbcccccbcbccbbcccbbcbbbccbcccc
    cbcccccbcbcbbbcccbbcbbbccbcccc
    cbcccccbcbbbcbccccbcbbcccbcccc
    cccccccccccccccccbbccbbbcccccc
    cccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccc
    bbbbbbbbbccccccccccccccccccccc
    ccccbccccccccccccccccccccccccc
    ccccbcccccccccccccccbbbbbbbbcc
    ccccbcccccccccccccccbccccccbcc
    ccccbccbccccccccbcccbccccccbcc
    ccccbccbccccccccbcccbccccccbcc
    ccccbcccbcccccccbcccbccccccbcc
    ccccbccccbccbccbbcccbccccccbcc
    ccccbccccbcbcbcbccccbccccccbcc
    ccccbcccccbbccbbccccbbbbbbbbcc
    cccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccc
    `, SpriteKind.Player)
p2.setPosition(126, 15)
die_phases = [
img`
    c d d d d d d d d d d d d d d c 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    c d d d d d d d d d d d d d d c 
    `,
img`
    c d d d d d d d d d d d d d d c 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 f f f 1 1 1 1 1 1 d 
    d 1 1 1 1 1 f f f 1 1 1 1 1 1 d 
    d 1 1 1 1 1 f f f 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    c d d d d d d d d d d d d d d c 
    `,
img`
    c d d d d d d d d d d d d d d c 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 f f f 1 1 1 1 1 1 1 1 1 1 d 
    d 1 f f f 1 1 1 1 1 1 1 1 1 1 d 
    d 1 f f f 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 f f f 1 d 
    d 1 1 1 1 1 1 1 1 1 1 f f f 1 d 
    d 1 1 1 1 1 1 1 1 1 1 f f f 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    c d d d d d d d d d d d d d d c 
    `,
img`
    c d d d d d d d d d d d d d d c 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 f f f 1 1 1 1 1 1 1 1 1 1 d 
    d 1 f f f 1 1 1 1 1 1 1 1 1 1 d 
    d 1 f f f 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 f f f 1 1 1 1 1 1 d 
    d 1 1 1 1 1 f f f 1 1 1 1 1 1 d 
    d 1 1 1 1 1 f f f 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 f f f 1 d 
    d 1 1 1 1 1 1 1 1 1 1 f f f 1 d 
    d 1 1 1 1 1 1 1 1 1 1 f f f 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    c d d d d d d d d d d d d d d c 
    `,
img`
    c d d d d d d d d d d d d d d c 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 f f f 1 1 1 1 1 1 f f f 1 d 
    d 1 f f f 1 1 1 1 1 1 f f f 1 d 
    d 1 f f f 1 1 1 1 1 1 f f f 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 f f f 1 1 1 1 1 1 f f f 1 d 
    d 1 f f f 1 1 1 1 1 1 f f f 1 d 
    d 1 f f f 1 1 1 1 1 1 f f f 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    c d d d d d d d d d d d d d d c 
    `,
img`
    c d d d d d d d d d d d d d d c 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 f f f 1 1 1 1 1 1 f f f 1 d 
    d 1 f f f 1 1 1 1 1 1 f f f 1 d 
    d 1 f f f 1 1 1 1 1 1 f f f 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 f f f 1 1 1 1 1 d 
    d 1 1 1 1 1 1 f f f 1 1 1 1 1 d 
    d 1 1 1 1 1 1 f f f 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 f f f 1 1 1 1 1 1 f f f 1 d 
    d 1 f f f 1 1 1 1 1 1 f f f 1 d 
    d 1 f f f 1 1 1 1 1 1 f f f 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    c d d d d d d d d d d d d d d c 
    `,
img`
    c d d d d d d d d d d d d d d c 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 f f f 1 1 1 1 1 1 f f f 1 d 
    d 1 f f f 1 1 1 1 1 1 f f f 1 d 
    d 1 f f f 1 1 1 1 1 1 f f f 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 f f f 1 1 1 1 1 1 f f f 1 d 
    d 1 f f f 1 1 1 1 1 1 f f f 1 d 
    d 1 f f f 1 1 1 1 1 1 f f f 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 f f f 1 1 1 1 1 1 f f f 1 d 
    d 1 f f f 1 1 1 1 1 1 f f f 1 d 
    d 1 f f f 1 1 1 1 1 1 f f f 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    c d d d d d d d d d d d d d d c 
    `
]
