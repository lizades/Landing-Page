let name = prompt("Введите своё имя: ", '');
if (name == ""){
  alert('Здравствуйте, гость' );
}
else{
  alert('Здравствуйте, ' + name);
}


function area(){
    let num1=document.getElementById('num1').value;
    let num2=document.getElementById('num2').value;
    if (!num1 || !num2){
        alert('Введите переменные');
    }
    else{
        s=num1/2*num2;
        res=document.getElementById('res')
        res.innerHTML="Площадь треугольника = " + " <b> " + s + "</b>"
    }
}


function symbols(){
    let smb1=document.getElementById('symbol1').value.length;
    let smb2=document.getElementById('symbol2').value.length;
    if (smb1==0 || smb2==0){
        alert('Заполните поля');
    }
    else if(smb1>smb2 || smb1<smb2){
        res=document.getElementById('smb')
        res.innerHTML="Кол-во символов в строках <b> не совпадает </b>"
    }
    else if(smb1==smb2){
        res=document.getElementById('smb')
        res.innerHTML="Кол-во символов в строках <b> совпадает </b>"
    }
}


let hours = 0;
let minutes = 0;
let seconds = 0;
let timer;

let Timer = {
  timeCount() {
    if(hours.toString().length==1) document.getElementById("countHours").innerHTML = "0"+hours.toString();
    else document.getElementById("countHours").innerHTML = hours.toString();

    if(minutes.toString().length==1) document.getElementById("countMinutes").innerHTML = "0"+minutes.toString();
    else document.getElementById("countMinutes").innerHTML = minutes.toString();

    if (seconds.toString().length==1) document.getElementById("countSeconds").innerHTML = "0"+seconds.toString();
    else document.getElementById("countSeconds").innerHTML = seconds.toString()

    seconds++;
    if (seconds == 60){
      seconds = 0;
      minutes++;
    }
    if (minutes == 60){
      minutes = 0;
      hours++;
    }
    timer = window.setTimeout("Timer.timeCount()",1000);
  },
  startCount() {
    if (!timer)
      this.timeCount();
  },
  stopCount() {
    if (timer) {
      clearTimeout(timer);
      timer=null;
    }
  },
  startOverCount(){
    hours = 0;
    minutes = 0;
    seconds = 0;
    if(timer || !timer) {
      window.clearInterval(timer);
      timer = null;
      document.getElementById("countHours").innerHTML="0";
      document.getElementById("countMinutes").innerHTML="0";
      document.getElementById("countSeconds").innerHTML="0";
    }
  },
};


let questions=[
    {
        text: "[] + false - null + true:",
        answers: ["0",
              "NaN",
              "undefined",
              "1"],
        correctAnswer: 1 // нумерация ответов с нуля
    },
    {
        text: "Сколько параметров можно передать функции:",
        answers: ["Ровно столько, сколько указано в определении функции",
              "Сколько указано в определении функции или меньше",
              "Сколько указано в определении функции или больше",
              "Любое количество"],
        correctAnswer: 3
    },
    {
        text: "Верно ли, что null == undefined:",
        answers: ["Да",
              "Нет"],
        correctAnswer: 0
    },
    {
        text: "Какие вызовы parseInt возвратят число:",
        answers: ["parseInt('1px')",
              "parseInt('-1.2')",
              "parseInt('0 минут')",
            "parseInt('$1.2')"],
        correctAnswer: 2
    },
    {
        text: "Язык JavaScript является подвидом языка Java – верно:",
        answers: ["Да",
              "Нет",
              "Наоборот, Java – подвид JavaScript"],
        correctAnswer: 1
    },
    {
        text: "Что делает оператор **:",
        answers: ["Возводит в степень",
              "Умножает число само на себя",
              "Нет такого оператора"],
        correctAnswer: 0
    },
    {
        text: "Какие циклы есть в языке JavaScript:",
        answers: ["for, forMap, foreach, while, do while",
              "for, while, do while",
              "for, while, do while, foreach",
              "for, forMap, foreach, while"],
        correctAnswer: 1
    },
    {
        text: "Где можно использовать JavaScript:",
        answers: ["Прикладное программное обеспечение",
              "Серверные приложения",
              "Можно во всех перечисленных",
              "Веб-приложения",
              "Мобильные приложения"],
        correctAnswer: 2
    },
    {
        text: "Какие значения можно хранить в переменных:",
        answers: ["Строки, числа с точкой, простые числа и булевые выражения",
              "Только числа и строки",
              "Строки, числа с точкой и простые числа"],
        correctAnswer: 0
    },
    {
      text: "Что такое условный оператор:",
      answers: ["Конструкция, что выполняет код несколько раз",
            "Конструкция для создания определенной переменной",
            "Оператор сравнения значений"],
      correctAnswer: 2
  },
    ];
    
    let yourAns = new Array;
    let score = 0;
    
    function Engine(question, answer) {yourAns[question]=answer;}
    
      function Score(){
      let answerText = "Результаты:\n";
      let sum = 0;
        for(let i = 0; i < yourAns.length; ++i){
          let num = i+1;
          sum++;
          answerText=answerText+"\n    Вопрос №"+ num +"";
          if(yourAns[i]!=questions[i].correctAnswer){
              answerText=answerText+"\n    Правильный ответ: " +
              questions[i].answers[questions[i].correctAnswer] + "\n";
          }
          else{
              answerText=answerText+": Верно! \n";
              ++score;
          }
        }    
        if(sum == 10){
          answerText=answerText+"\nВсего правильных ответов: "+score+"\n";
          alert(answerText);
          yourAns = [];
          score = 0;
          clearForm("quiz");
        }
        else{
          alert("fdsdfisdf");
        }

      }
    function clearForm(name) {
       let f = document.forms[name];
       sum=0;
       for(let i = 0; i < f.elements.length; ++i) {
        if(f.elements[i].checked)
            f.elements[i].checked = false;
        }
    }


    function MinMax(){
        let mas1=document.getElementById('m1').value;
        let mas2=document.getElementById('m2').value;
        let mas3=document.getElementById('m3').value;
        let mas4=document.getElementById('m4').value;
        let mas5=document.getElementById('m5').value;
        let massiv=[]
        massiv.push(mas1, mas2, mas3, mas4, mas5)
        let min=Math.min.apply(null, massiv)
        let max=Math.max.apply(null, massiv)
        res0=document.getElementById('massiv1')
        res1=document.getElementById('massiv2')
        res0.innerHTML= "Min значение = " + "<b>" + min + "</b>"
        res1.innerHTML= "Max значение = " + "<b>" + max + "</b>"
    }


    function createModal() {
      console.log("test");
      const modal = document.createElement('div');
      const userName = document.createElement('span');
      const currentDate = document.createElement('span');

      userName.textContent = name;
      currentDate.textContent = new Date().toLocaleDateString();

      modal.append(userName);
      modal.append(currentDate)

      modal.classList.add('modal');
      userName.classList.add('user-Name');
      currentDate.classList.add('curr-Date');
      
      document.body.append(modal);
      
      document.body.classList.add("body-blocked")

      modal.addEventListener('click', () => {
          modal.remove();
          document.body.classList.remove("body-blocked")
      })
  }