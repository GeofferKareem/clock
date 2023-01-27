function showTime() {
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let ms = date.getMilliseconds()


    let theTime = h + ": " + m + ": " + s + ": " + ms

    document.getElementById('muda').innerHTML = theTime
    document.getElementById('muda').textContent = theTime

    setInterval(showTime, 100)

}

showTime()