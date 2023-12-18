// function f1(arr,f2){
//     let ans=f2(arr)
//     console.log(ans)
// }
// function f2(arr){
//     let ans=new Array();
//     let i=0;
//     arr.forEach((element) => {
//            ans[i]=element*2;
//            i++;
//     });
//     return ans;
// }
// f1([1,2,3],f2)

// function f1(str,f2){
//     str=str.toUpperCase()
//     return f2(str)
// }
// function f2(str){
//     let ans="The manipulated string is: "+str
//     return ans
// }
// console.log(f1("hello",f2))


// function f1(obj,f2){
//        let obj2=new Object()
//        obj2.fullname=obj.firstname+" "+obj.lastname
//        obj2.ageindays=obj.age*365
//        f2(obj2)
// }
// function f2(obj){
//     console.log("The person's full name is "+obj.fullname)
//     console.log("Age in days is "+obj.ageindays);
// }
// let obj=new Object()
// obj.firstname="MD"
// obj.lastname="Nadeem"
// obj.age=20
// f1(obj,f2)


// function f1(book,f2){
//       let title=book.map((el)=>{
//         return el.title;
//       })
//       f2(title)
// }
// function f2(title){
//     title=title.sort()
//     console.log(title);
// }
// let book=[{title:"great",author:"nadeem",year:2002},
// {title:"wall",author:"rahul",year:2004},
// {title:"china",author:"rakesh",year:2002}]
// f1(book,f2)


// function f1(name){
//     return new Promise(function exec(resolve,reject){
//         let greet="Hello! "+name
//         resolve(greet)
//     })
// }
// async function f2(name){
//     let greet=await f1(name)
//     console.log(greet);
// }
// let name="Nadeem"
// f2(name)



// async function f1(){
//     let respond=await
//     fetch(" https://jsonplaceholder.typicode.com/todos/1")
//     let get=await respond.json()
//     console.log(get)
// }
// f1()

// fetch(" https://jsonplaceholder.typicode.com/todos/1")
// .then(function f(respond){
//    return respond.json()
// }).then(function f2(value){
//     console.log(value);
// })



// async function f1(){
//     let obj=new Object();
    
//     let arr=await Promise.all([fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then(function f(r){
//         return r.json()
//     }),
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((r)=>r.json())   ])
    
//     obj.todo=arr[0];
//     obj.post=arr[1]

//     console.log(obj);
// }
// f1()


// async function f1(){
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((r)=>r.json())
//     .then((value)=>console.log(value))
//     .catch((error)=>console.log(error))
// }
// f1()


f=()=>console.log("hello");
f()