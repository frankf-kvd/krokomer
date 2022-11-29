input.onButtonPressed(Button.AB, function () {
    kroky = 0
})
input.onGesture(Gesture.Shake, function () {
    kroky = kroky + 1
})
let kroky = 0
kroky = 0
basic.forever(function () {
    basic.showNumber(kroky)
})
