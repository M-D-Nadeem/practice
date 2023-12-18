// Q1 > Password validator
// let enteredpass=prompt("Enter password")
// const confirmpass="123456789"
// if(enteredpass===confirmpass){
//     console.log("Password Matched. Password validation Successful")
// }
// else{
//     console.log("Password didn't match. Password validation unsuccessful")
// }

// Q2 > Calculator
// let num1=Number(prompt("Enter 1st number"))
// let num2=Number(prompt("Enter 2nd number"))
// let operator=prompt("Enter the opration to perform")
// switch(operator){
//     case "+":
//         console.log(num1,"+",num2,"=",num1+num2)
//         break;
//         case "-":
//         console.log(num1,"-",num2,"=",num1-num2)
//         break;
//         case "*":
//         console.log(num1,"*",num2,"=",num1*num2)
//         break;
//         case "/":
//         console.log(num1,"/",num2,"=",num1/num2)
//         break;
//         default:
//             console.log("Invalid operator")
// }

// Q ->Capitalize
// let nam='aadeem is as'
// if(nam.charCodeAt(0)>=97 && nam.charCodeAt(0)<=122){
//     let a=nam.charCodeAt(0)-32
//     nam=String.fromCharCode(a)+nam.slice(1,nam.length)
// }
// for(let i=0;i<nam.length;i++){
//     if(nam[i]==" "){
//       i=i+1
//       if(nam.charCodeAt(i)>=97 && nam.charCodeAt(i)<=122){
//         let a=nam.charCodeAt(i)-32
//         nam=nam.slice(0,i)+String.fromCharCode(a)+nam.slice(i+1,nam.length);
//     }
//     }
// }
// console.log(nam)
//  Q-> Remove dublicate
// let a=[0,1,1,3,0,3]
// let max=Number.MIN_VALUE;
// for(let i=0;i<a.length;i++){
//     if(a[i]>max){
//         max=a[i];
//     }
// }
// console.log(max)
// let ans=new Array()
// let f=new Array(max+1)
// for(let i=0;i<f.length;i++){
//     f[i]=0
// }
// for(let i=0;i<a.length;i++){
//     f[a[i]]=f[a[i]]+1
//     if(f[a[i]]>=2){
//         continue;
//     }
//     else{
//     ans[i]=a[i];
//     }
// }
// console.log(anss3a)
 
//  Q-> bill spliter
// function input(){
// n=prompt("Number of dish")
// let cost=new Array(n);
// total=0;
// for(let i=0;i<=n-1;i++){
//     cost[i]=Number(prompt("Cost of dish "+i+" ="))
//     total=total+cost[i];
// }
// people=prompt("Number of people sharing")
// }
// function result(){
//     let ans=new Object()
//     ans.total_bill=total
//     let split_amt=total/people;
//     ans.split_amout=split_amt
//     console.log(ans)
// }
// let n
// let total
// let people
// input()
// result()

// Q ->Reverse string
// function reversestring(){ 
// let input=prompt("Enetr a String")
// if(input==""){
//     alert("Enter a value")
//     reversestring()
// }
// else{
//      let output=setTimeout(()=>{
//       console.log(input.split("").reverse().join(""))
//      },2000)
// }
// }
// reversestring();


//Q->Random Number Generator with Delay and Progress Indication:

// let s=1000
// fun=()=>{setInterval(()=>{

//     console.log("Time remaining to generage new number is "+(delay-1))
    
// },1000)}
// setInterval(()=>{
//     console.log("Random number is "+Math.random())
//     fun()
// },3000)

// Q->

//     let store={biscuits:5,cakes:7,milk:3}
//     let ans=new Object();
//     ans=Object.assign({},store)
//     let arr=new Array(3)
//     let i=0
// Object.values(store).forEach((element) =>  {
//    arr[i]=element*80
//    i++;
// });
// i=0;
// Object.keys(ans).forEach((keys)=>{
//    ans[keys]=arr[i]
//    i++;
// })
// console.log(ans)

// let books=[["nad",2003],["raj",2010],["ram",2007],["neal",2013]]
// let ans2=books.filter((element)=>{
//     if(element[1]>=2010){
//         element[0]=element[0].toUpperCase()
//         return element
//     }
// })
// console.log(ans2)

// let redex=/https:\/\/www\.linkedin\.com\/in\/(\w|\d|\_|\-)*([A-Z]$|[a-z]$|\d$)/g
// let link="https://www.linkedin.com/in/fge8"
// if(link.length<5 && link.length>30){
//     console.log("Not valid")
// }
// else{
//     let ans=redex.test(link);
//     console.log(ans)
// }

// let str="there is a there and a there a is"
// let arr=str.split(" ")
// let m=new Map()
// arr.map((el)=>{
//     if(m.has(el)){
//         let a=m.get(el)
//         m.set(el,a+1)
//     }
//     else{
//         m.set(el,1)
//     }
// })
// console.log(m);


// let arr=[1,5,7,1,5,6,7,9,9,7]
// let set=new Set()
// arr.map((el)=>set.add(el))
// console.log(set)
// let x=5;
// let y=10;
// function f() {
//     let arr=new Array(...arguments)
//     arr[0]=arr[0]+arr[1]
//     arr[1]=arr[0]-arr[1]
//     arr[0]=arr[0]-arr[1]
//     return arr
// }
// let ans=f(x,y)
// console.log(ans);
// let arr=[1,2,3,4,5]
// function f(arr){
 
//     return  {max:Math.max(...arr),min:Math.min(...arr) }
    
// }
// console.log(f(arr))

// let obj={name:"nad",age:19,address:{
//     street:"jj",houseno:15
// }}

// function f(obj){
   
//     const{name,address:{street}}=obj
//     return {name,address:{street}}
// }
// console.log(f(obj))
// let arr=[1,2,3,4,5]
// console.log(get(arr))
// function get(arr){
//     const[e1,e2,,,el]=arr
//     return [e1,e2,el]
// }
// function creatpromise() {
//     return new Promise(function exec(resolve,reject){
//          setTimeout(function f(){
//             console.log("timer done")
//             resolve(10)
//          },3000)
//     });
// }
// console.log("start")
// let x=creatpromise()
// console.log("second")
// console.log(x)
// x.then(function f2(value){
//     console.log("promise done",value)
// }).catch(function f3(value){
//     console.log("handeled",value)
// })
// async function consume(){
//     let a=creatpromise();
//     console.log(a)
//     let r=await a;
//     console.log(r)
// }
// consume();



