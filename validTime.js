function validTime(time) {
    newTime = time.split(':')
    let newHour = parseInt(newTime[0]);
    let newMinute = parseInt(newTime[1]);
    if (newHour >= 0 && newHour <24 && newMinute >0 && newMinute <= 60) {
        return true
    }
    else
    return false
}
validTime("90:13")
validTime("21:35")
