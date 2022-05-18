let distantzia = 0
DFRobotMaqueenPlus.I2CInit()
basic.forever(function () {
    if (distantzia > 40) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 80)
    } else if (distantzia > 40) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
    } else if (distantzia > 30) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 30)
    } else if (distantzia > 20) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 20)
    } else if (distantzia > 10) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 10)
    } else if (distantzia > 5) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 5)
    } else {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    }
})
basic.forever(function () {
    distantzia = DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2)
    basic.showNumber(DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2))
})
