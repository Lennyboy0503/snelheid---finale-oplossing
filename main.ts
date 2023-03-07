let Fase = 0
if (true) {
    if (Fase == 0 && pins.analogReadPin(AnalogPin.P0) > 512) {
        Fase = 1
    }
    if (Fase == 1 && pins.analogReadPin(AnalogPin.P0) < 255) {
        Fase = 2
    }
    if (Fase == 2 && pins.analogReadPin(AnalogPin.P1) > 512) {
        Fase = 3
    }
    if (Fase == 3 && pins.analogReadPin(AnalogPin.P1) < 255) {
        Fase = 4
    }
    if (Fase == 4 && pins.analogReadPin(AnalogPin.P2) > 512) {
        Fase = 5
    }
    if (Fase == 5 && pins.analogReadPin(AnalogPin.P2) < 255) {
        Fase = 6
    }
}
