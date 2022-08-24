//sélectionner tous les éléments requis DOM
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// si le bouton startQuiz est cliqué
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //afficher info box
}

// si le bouton exitQuiz est cliqué
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //cacher info box
 window.close();
 // BOM 
}

// si le bouton ContinueQuiz est cliqué
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //cacher info box
    quiz_box.classList.add("activeQuiz"); //afficher quiz box
    showQuetions(0); //appeler la fonction showQuestions
    queCounter(1); //passer 1 paramètre à queCounter
    startTimer(15); //appeler la fonction startTimer
    startTimerLine(0); //appel de la fonction startTimerLine
}
// initiliser les valeur
let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

//  si le bouton restartQuiz est cliqué
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //afficher quiz box
    result_box.classList.remove("activeResult"); //cacher result box
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //appeler la fonction showQuestions
    queCounter(que_numb); //passer la valeur que_numb à queCounter
    clearInterval(counter); //compteur clair
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //appeler la fonction startTimer
    startTimerLine(widthValue); //appel de la fonction startTimerLine
    timeText.textContent = "Time Left"; //changer le texte de timeText en temps restant
    next_btn.classList.remove("show"); //masquer next button
    bar.style.width= "0" // Progress bar 
    
}

// si le bouton quitterQuiz a été cliqué
quit_quiz.onclick = ()=>{
    window.location.reload(); //recharger la fenêtre en cours
}



const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// si le bouton Next Que a été cliqué
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ //si question_count est inférieur à la longueur totale de la question
        que_count++; //incrémenter la valeur que_count
        que_numb++; //incrémenter la valeur que_numb
        showQuetions(que_count); //appeler la fonction showQestions
        queCounter(que_numb); //passer la valeur que_numb à queCounter
        clearInterval(counter); //compteur clair
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //appeler la fonction startTimer
        startTimerLine(widthValue); //appel de la fonction startTimerLine
        timeText.textContent = "Time Left"; //changer le timeText en temps restant
        next_btn.classList.remove("show"); //masquer le bouton suivant
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //appeler la fonction showResult   
    }
    
    	bar.style.width= parseInt(bar.style.width||0,10) + 30+'px' ; // Progress Bar style 
    
    
}

// obtenir des questions et des options à partir du tableau
function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    //créer une nouvelle balise span et div pour la question et l'option et transmettre la valeur à l'aide de l'index de tableau
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //ajouter une nouvelle balise span à l'intérieur de que_tag
    option_list.innerHTML = option_tag; //ajouter une nouvelle balise div à l'intérieur de option_tag
    
    const option = option_list.querySelectorAll(".option");

    //définir l'attribut onclick sur toutes les options disponibles
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// créer les nouvelles balises div qui sont pour les icônes
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//si l'utilisateur a cliqué sur l'option
function optionSelected(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //obtenir l'option sélectionnée par l'utilisateur
    let correcAns = questions[que_count].answer; //obtenir la bonne réponse du tableau
    const allOptions = option_list.children.length; //obtenir tous les éléments d'option
    
    if(userAns == correcAns){ //si l'option sélectionnée par l'utilisateur est égale à la bonne réponse du tableau
        userScore += 1; //mise à niveau de la valeur du score avec 1
        answer.classList.add("correct"); //ajouter la couleur verte pour corriger l'option sélectionnée
        answer.insertAdjacentHTML("beforeend", tickIconTag); //ajout d'une coche pour corriger l'option sélectionnée
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //ajouter la couleur rouge pour corriger l'option sélectionnée
        answer.insertAdjacentHTML("beforeend", crossIconTag); //ajout d'une icône de croix pour corriger l'option sélectionnée
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ //s'il y a une option qui correspond à une réponse de tableau 
                option_list.children[i].setAttribute("class", "option correct"); //ajouter la couleur verte à l'option correspondante
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //ajouter une icône de coche à l'option correspondante
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //une fois que l'utilisateur a sélectionné une option, il a désactivé toutes les options
    }
    next_btn.classList.add("show"); //afficher le bouton suivant si l'utilisateur a sélectionné une option
}

function showResult(){
    info_box.classList.remove("activeInfo"); //cacher info box
    quiz_box.classList.remove("activeQuiz"); //cacher quiz box
    result_box.classList.add("activeResult"); //afficher result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){ // si l'utilisateur a marqué plus de 3
        //créer une nouvelle balise span et transmettre le numéro de score de l'utilisateur et le nombre total de questions
        let scoreTag = '<span>ممتاز 🎉, حصلت على  <p>'+ userScore +'</p>من <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //ajout d'une nouvelle balise span dans score_Text
    }
    else if(userScore > 1){ // si l'utilisateur a marqué plus de 1
        let scoreTag ='<span>جيد جدا ✅, حصلت على<p>'+ userScore +'</p>من <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // si l'utilisateur a marqué moins de 1
        let scoreTag='<span>حاول مرة أخرى ❌, حصلت على<p>'+ userScore +'</p>من <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changer la valeur de timeCount avec la valeur de temps
        time--; //décrémenter la valeur du temps
        if(time < 9){ //si la minuterie est inférieure à 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //ajouter un 0 avant la valeur de l'heure
        }
        if(time < 0){ //si la minuterie est inférieure à 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //changer le texte de l'heure en temps libre
            const allOptions = option_list.children.length; //obtenir tous les éléments d'option
            let correcAns = questions[que_count].answer; //obtenir la bonne réponse du tableau
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ //s'il y a une option qui correspond à une réponse de tableau
                    option_list.children[i].setAttribute("class", "option correct"); //ajouter la couleur verte à l'option correspondante
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //ajouter une icône de coche à l'option correspondante
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //une fois que l'utilisateur a sélectionné une option, il a désactivé toutes les options
            }
            next_btn.classList.add("show"); //afficher le bouton suivant si l'utilisateur a sélectionné une option
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 549){ //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}

function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}