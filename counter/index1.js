
class Counter {
  constructor(param = {}) {
      this.startValue = param.startValue ? param.startValue : 0;
      this.increm = param.increm ? param.increm : 1;
      this.decrem = param.decrem ? param.decrem : 1;
      this.maxValue = param.maxValue === undefined ? Infinity : param.maxValue;
      this.minValue = param.minValue === undefined ? -Infinity : param.minValue;
      this.counter = this.startValue;
  }

  minus(event) {

    const result = event.target.parentElement.querySelector(".result" );

    if (this.counter - this.decrem > this.minValue) {
      this.counter -=  this.decrem;
      result.innerText = this.counter;
    }
  }

  plus(event) {

    const result = event.target.parentElement.querySelector(".result");

    if (this.counter + this.increm < this.maxValue) {
      this.counter +=  this.increm;
      result.innerText = this.counter;
    }
  }
 
  display() {
    
    const plusBut = document.createElement("button");
    plusBut.innerText = "+plus";
    plusBut.addEventListener("click", this.plus.bind(this));

    const minusBut = document.createElement("button");
    minusBut.innerText = "-minus";
    minusBut.addEventListener("click", this.minus.bind(this));
    
    const result = document.createElement("span");
    result.className = "result";
    result.append(this.counter);

    const div = document.createElement("div");
    div.className = "button-row";
    div.append(minusBut, result, plusBut);
    document.body.appendChild(div);
    
  }
}

class Summa{

  job(){ 
    this.renderSumm();
    this.summCalc();
    this.summ();
  }

  summCalc(){
   const output = document.querySelector( ".summOut" );  
   let sum=0;
   let elem=document.querySelectorAll(".result")

  for (let i = 0; i < elem.length; i++) {    
    sum+= parseInt(elem[i].innerText); 
     }  

    output.innerText ='Sum= '+sum;
  }

   renderSumm(){
    let sum=0;

    const output = document.createElement("span");
    output.className = "summOut";
    output.append('Sum= '+sum );

    const div = document.createElement("div");
    div.className = "row";
    div.append( output);
    document.body.appendChild(output);
      
    }

 summ(){
    let elements = document.querySelectorAll("button");

for (let i = 0; i < elements.length; i++) {
    elements[i].onclick = this.summCalc.bind(this); 
  
    }
  }
}


const counter1 = new Counter({
  startValue: 0,
  decrem: 1,
  increm: 1,
  minValue: -10,
  maxValue: 10
});

const counter2 = new Counter({
  startValue: 5,
  decrem: 5,
  increm: 5,
  minValue: -10,
  maxValue: 70
});

const counter3 = new Counter({
  startValue: 10,
  decrem: 10,
  increm: 10,
  minValue: -10,
  maxValue: 100
});


counter1.display();
counter2.display();
counter3.display();

const summ=new Summa();
summ.job(); 