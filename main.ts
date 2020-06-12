input.onButtonPressed(Button.A, function () {
    music.playMelody("F G A F G A F G ", 240)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    music.stopMelody(MelodyStopOptions.All)
})
basic.forever(function () {
    basic.showString("music")
    basic.showLeds(`
        . # # # #
        . # . . #
        . # . . #
        # # . # #
        # # . # #
        `)
})
