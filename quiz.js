const faqs = document.querySelectorAll(".faq");
//ربط كلاس مع المتغير DOM
faqs.forEach(faq => {
	faq.addEventListener("click",() => {
  	faq.classList.toggle('open');
    // الدالة بسيطة عندما يستدعي الحدث
	// clickالحدث 
	// نقوم بتبديل كلاس
// مع كلاس open  
})
})


// function hello(user,age){
// 	console.log(`hello is ${user} i ${age} yd old `)
// }
// let haniw=setTimeout(hello,1000,'hani',20)

// clearTimeout(haniw)

// let divn=document.getElementById('h2n');
// function countdown(){
// 	divn.innerHTML--;
// 	if(divn.innerHTML=="0")
// 	clearInterval(num)
// }

// let num=setInterval(countdown,1000)