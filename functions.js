add = (a,b)=>a+b;
sub = (a,b)=>a-b;
mul = (a,b)=>a*b;
div = (a,b)=>a/b;

let num1 = '';
let oper = '';
let num2 = '';
let num1taken = false;
let num2taken = false
let decimal = false

const nums = document.querySelectorAll("#num")
const div1 = document.querySelector(".div1")
const div2 = document.querySelector(".div2")
const clearbut = document.querySelector(".clearbut");
nums.forEach(num =>{
    num.addEventListener("click",()=>{
        figureOut(num.textContent);
    })
})

clearbut.addEventListener("click",()=>{
    num1 = '0';
    oper = '';
    num2 = '0';
    num1taken = false;
    num2taken = false
    decimal = false
    div1.textContent = num1;
    div2.textContent = num2;
})

const figureOut = (num)=>{
    if(num == '+'||num == '-'|| num =='*' || num == '/'|| num =='='){
        if(num1 == '')return;
        if(num == '='){
            if(Number(num2) == 0)return;
            else{
                num1 = String(calleval(num1,num2,oper));
                num2 = '0';
                oper = '';
                num1taken = true;
                decimal =false
                div1.textContent = num1;
                div2.textContent = "";
            }
        }else{
            if(oper != '' && Number(num2) == 0){
                oper = num;
            }
            if(oper != '' && Number(num2) != 0){
                num1 = String(calleval(num1,num2,oper));
            }
            num2='0'
            oper = num;
            num1taken = true;
            decimal=false
            div1.textContent = num1+oper;
            div2.textContent = "";
        }
    }
    else if(num1taken == false){
        if(num == '.'){
            if(decimal == false){
                num1 += num;
                decimal = true;
            }
        }else{
            num1 += num;
        }
        div2.textContent = num1;
    }
    else if(num1taken==true){
        if(oper == "")return;
        if(num == '.'){
            if(decimal == false){
                num2 += num;
                decimal = true;
            }
        }else{
            num2 += num;
        }
        div2.textContent = num2;
    }
}

calleval = (a,b,op) =>{
    a = Number(a);
    b = Number(b);
    console.log(a,b)
    if(op == '+')return add(a,b);
    if(op == '-')return sub(a,b);
    if(op == '*')return mul(a,b);
    if(op == '/')return div(a,b);
}