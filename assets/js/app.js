 let falg = 0
 let _flag = 1
 let temp = ''
 let _li = document.querySelectorAll('.slider-img>li')

 _li.forEach(function (val, index) {
    
     val.addEventListener("click", function () {
         let temp = val.children[0].getAttribute('src')
         falg = index
         show(temp)
     })
 })
 document.querySelector('.right').addEventListener("click", function () {

     if (falg < _li.length - 1) {
         falg++

     } else {
         falg = 0
     }
     temp = _li[falg].children[0].getAttribute('src')
     show(temp)

 })

 document.querySelector('.left').addEventListener("click", function () {
     if (falg == 0) {
         falg = _li.length - 1

     } else {
         falg--
     }
     temp = _li[falg].children[0].getAttribute('src')
     show(temp)
 })

 function show(temp) {
     document.querySelector('.top-img>img').setAttribute('src', temp)
     _border()
 }

 function _border() {
     _li.forEach(function (para) {
         para.style.border = "1px solid black"
     })
     _li[falg].style.border = '2px solid red'
     // _li[falg].style.background= 'red'
 }

 function showTime(){
         let date = new Date()
         let h = date.getHours()
         let m = date.getMinutes()
         let s = date.getSeconds()
         let sesstion = 'AM'

         if(h == 0){
            h = 12
         }
          if(h > 12 ){
            h = h - 12
            sesstion = 'PM '
          }

          h = (h < 10) ? `0${h}` : h
          m = (m < 10) ? `0${m}` : m
          a = (s < 10) ? `0${s}` : s

          let time =  `${h}:${m}:${s} ${sesstion}`
          
          document.getElementById('clock').innerText = time

 }


setInterval(showTime, 100)



document.querySelector('.hamburger-icon').addEventListener('click', function(){
 
         document.querySelector('.aside').style.transform = 'translateX(0)'
    
})

document.querySelector('.bi-x-lg').addEventListener('click', ()=>{
    document.querySelector('.aside').style.transform = 'translateX(100%)'
})