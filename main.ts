input.onButtonPressed(Button.AB, function () {
    kroky = 0
})
input.onGesture(Gesture.FreeFall, function () {
    kroky = kroky + 1
})
let kroky = 0
input.setAccelerometerRange(AcceleratorRange.OneG)
kroky = 0
basic.forever(function () {
    basic.showNumber(kroky)
})
