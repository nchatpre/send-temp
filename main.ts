basic.showString("RCVR")
radio.setGroup(37)
basic.forever(function () {
    radio.sendValue("Celcius", 0)
    basic.showNumber(input.temperature())
    basic.pause(1000)
})
