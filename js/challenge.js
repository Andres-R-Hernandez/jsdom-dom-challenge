let intervalID

document.addEventListener("DOMContentLoaded", () => {
  intervalID = setInterval(increment, 1000)
  incrementButtons()
  likeButton()
  pauseButton()
  commentSubmit()
})

function increment() {
  const counter = document.getElementById("counter")
  counter.innerText++
}

function incrementButtons() {
  const plus = document.getElementById("plus")
    plus.addEventListener('click', () => {
      counter.innerText++
    })
  const minus = document.getElementById("minus")
  minus.addEventListener('click', () => {
    counter.innerText--
  })
}

function likeButton() {
  const heart = document.getElementById("heart")
    heart.addEventListener('click', () => {
      like()
    })
}

function like() {
  const count = document.getElementById("counter").innerText
  const li = document.querySelector(`li[data-num="${count}"]`)
  if (li && li.querySelector("span").innerText == 1) {
    li.innerHTML += "s"
    li.querySelector("span").innerText++
  } else if (li) {
    li.querySelector("span").innerText++
  } else {
    const comment = document.createElement("li")
      comment.dataset.num = count
      comment.innerHTML = `${count} has been liked <span>1</span> time`
    const list = document.querySelector(".likes")
      list.append(comment)
  }
}

function pauseButton() {
  const buttons = document.querySelectorAll("#minus, #plus, #heart, #submit")
  const pausebtn = document.getElementById("pause")
    pausebtn.addEventListener('click', () => {
      if (pausebtn.innerText == "pause") {
        clearInterval(intervalID)
        pausebtn.innerText = "resume"
        buttons.forEach((button) => {
          button.disabled = true
        })
      } else {
        document.getElementById("counter").innerText = 0
        intervalID = setInterval(increment, 1000)
        pausebtn.innerText = "pause"
        buttons.forEach((button) => {
          button.disabled = false
        })
      }
    })
}

function commentSubmit() {
  const form = document.getElementById("comment-form")
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      const list = document.getElementById("list")
      const p = document.createElement("p")
        p.innerText = event.target.comment.value
      list.append(p)
    })
}
