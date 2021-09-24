const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")
const four = document.querySelector("#four")
const five = document.querySelector("#five")
const array = [one,two,three,four,five]

const showMeTheMoneyJerry = (el) => {
    const array2 = []
    array.map(x => x===el ? (el.querySelector(".answer").classList.toggle("answer-visible"),el.querySelector(".question").querySelector("button").classList.toggle("rotated-arrow"),el.querySelector(".question").querySelector("p").classList.toggle("question-bold")) : array2.push(x))
    array2.map(x => (x.querySelector(".answer").classList.remove("answer-visible"),x.querySelector(".question").querySelector("button").classList.remove("rotated-arrow"),x.querySelector(".question").querySelector("p").classList.remove("question-bold")))    
}

one.querySelector(".question").addEventListener("click", (event) => {showMeTheMoneyJerry(one)})
two.querySelector(".question").addEventListener("click", (event) => {showMeTheMoneyJerry(two)})
three.querySelector(".question").addEventListener("click", (event) => {showMeTheMoneyJerry(three)})
four.querySelector(".question").addEventListener("click", (event) => {showMeTheMoneyJerry(four)})
five.querySelector(".question").addEventListener("click", (event) => {showMeTheMoneyJerry(five)})