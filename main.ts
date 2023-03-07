let tijd_5 = 0
let tijd_4 = 0
let tijd_3 = 0
let tijd_2 = 0
let tijd_1 = 0
let tijd_0 = 0
serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate115200
)
let Fase = 0
let laag = 256
let hoog = 512
serial.writeLine("ready")
while (true) {
    if (Fase == 0 && pins.analogReadPin(AnalogPin.P0) > hoog) {
        tijd_0 = input.runningTimeMicros()
        Fase = 1
        led.plot(0, 0)
    }
    if (Fase == 1 && pins.analogReadPin(AnalogPin.P0) < laag) {
        tijd_1 = input.runningTimeMicros()
        Fase = 2
        led.plot(1, 1)
    }
    if (Fase == 2 && pins.analogReadPin(AnalogPin.P1) > hoog) {
        tijd_2 = input.runningTimeMicros()
        Fase = 3
        led.plot(2, 2)
    }
    if (Fase == 3 && pins.analogReadPin(AnalogPin.P1) < laag) {
        tijd_3 = input.runningTimeMicros()
        Fase = 4
        led.plot(3, 3)
    }
    if (Fase == 4 && pins.analogReadPin(AnalogPin.P2) > hoog) {
        tijd_4 = input.runningTimeMicros()
        Fase = 5
        led.plot(4, 4)
    }
    if (Fase == 5 && pins.analogReadPin(AnalogPin.P2) < laag) {
        tijd_5 = input.runningTimeMicros()
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        serial.writeNumber(tijd_0)
        serial.writeLine("")
        serial.writeNumber(tijd_1)
        serial.writeLine("")
        serial.writeNumber(tijd_2)
        serial.writeLine("")
        serial.writeNumber(tijd_3)
        serial.writeLine("")
        serial.writeNumber(tijd_4)
        serial.writeLine("")
        serial.writeNumber(tijd_5)
        serial.writeLine("")
        Fase = 0
    }
}
