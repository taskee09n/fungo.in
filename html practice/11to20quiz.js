function check() {
    var c=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var result=document.getElementById('result1');
    var quiz=document.getElementById("quiz1")
    if (q1=="Rabindranath Tagore") {c++}
    if (q2=="Stopping by Woods on a Snowy Evening") {c++}
    if (q3=="J.K Rowling") {c++}
   quiz.style.display="none";
    
    if (c<=2){
     result.textContent=`Your result is ${c}. Not a good Performance. Practice more..`
    } else {
    result.textContent=`Your result is ${c}. It's Awesome. Very well done! Keep it up..`
    }
}    
