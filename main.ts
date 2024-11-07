input.onButtonPressed(Button.A, function () {
    basic.showString("" + (Math.randomBoolean()))
})
input.onButtonPressed(Button.B, function () {
    led.stopAnimation()
    basic.showString("Erasing screen,Please Wait!")
    for (let index = 0; index < 19; index++) {
        basic.showLeds(`
            . # # # .
            # . . . .
            # . . . .
            # . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # # # .
            . . . . #
            . . . . #
            . . . . #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . . #
            . . . . #
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            # . . . .
            # . . . .
            # . . . .
            . # # # .
            `)
    }
    basic.showString("Screen Erased")
    basic.clearScreen()
})
basic.showString("True or False")
