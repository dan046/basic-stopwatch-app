const timer = document.getElementById("js-clock")
const startBtn = document.getElementById("js-start-btn")
const pauseBtn = document.getElementById("js-pause-btn")
const resetBtn = document.getElementById("js-reset-btn")

let hr = 0
let min = 0
let sec = 0
let ms = 0

let intervalID
let flag = true

pauseBtn.style.display = "none"

startBtn.addEventListener("click", () => {
  if (flag) {
    startBtn.disabled = true
    startBtn.style.display = "none"
    pauseBtn.style.display = "block"
  }
  intervalID = setInterval(() => {
    hr = parseInt(hr)
    min = parseInt(min)
    sec = parseInt(sec)
    ms = parseInt(ms)
    ms++
    if (ms === 100) {
      sec++
      ms = 0
    }
    if (sec === 60) {
      min++
      sec = 0
    }
    if (min === 60) {
      hr++
      min = 0
    }
    if (ms < 10) ms = "0" + ms
    if (sec < 10) sec = "0" + sec
    if (min < 10) min = "0" + min
    if (hr < 10) hr = "0" + hr

    timer.innerHTML = `${hr}:${min}:${sec}:${ms}`
  }, 10)
})

pauseBtn.addEventListener("click", () => {
  clearInterval(intervalID)
  startBtn.disabled = false
  startBtn.style.display = "block"
  pauseBtn.style.display = "none"
})

resetBtn.addEventListener("click", () => {
  hr = 0
  min = 0
  sec = 0
  ms = 0
  startBtn.disabled = false
  timer.innerHTML = `00:00:00:00`
  startBtn.style.display = "block"
  clearInterval(intervalID)
  pauseBtn.style.display = "none"
})
