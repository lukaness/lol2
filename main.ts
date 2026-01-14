input.onButtonPressed(Button.A, function () {
    record.playAudio(record.BlockingState.Nonblocking)
})
input.onGesture(Gesture.Shake, function () {
    record.startRecording(record.BlockingState.Nonblocking)
})
input.onGesture(Gesture.TiltRight, function () {
    music.stopAllSounds()
})
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
})
