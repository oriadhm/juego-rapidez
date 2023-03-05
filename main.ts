basic.forever(function () {
    basic.pause(100)
    basic.pause(randint(0, 4000))
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    while (!(input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B))) {
        basic.pause(100)
    }
    if (input.buttonIsPressed(Button.A)) {
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.pause(1000)
        basic.showString("A")
    } else if (input.buttonIsPressed(Button.B)) {
        music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        basic.pause(1000)
        basic.showString("B")
    }
    basic.pause(1000)
    basic.clearScreen()
})
