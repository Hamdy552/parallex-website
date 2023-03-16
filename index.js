rightGate = document.querySelector(".landing img:nth-child(3)"),
leftGate = document.querySelector(".landing img:nth-child(2)"),
h1 = document.querySelector("h1"),
grass = document.querySelector(".div2")
rightTree = document.querySelector(".landing img:nth-child(5)"),
leftTree = document.querySelector(".landing img:nth-child(4)")
console.log(rightGate,leftGate,h1,rightTree,leftTree)
window.onscroll = ()=>{
    value = window.scrollY
    grass.style.bottom = (value * 1.5) + -558.769 + "px"
    rightGate.style.right = (-value * -0.80) + -290.975 + `px`
    leftGate.style.left = (-value * -0.80) + -290.975 + `px`
    h1.style.marginTop = value * 1.5 + `px`
    rightTree.style.left = value * 1.5 + `px`
    leftTree.style.left = value * -1.5 + `px`
}