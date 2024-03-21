// // console.log(https://api.openweathermap.org/data/2.5/weather?q=noida&appid=cf634e36e3accda1e65cc0a2121c6a37&units=metric")

// const fetchData = async () => {
//         // fetch("https://api.openweathermap.org/data/2.5/weather?q=noida&appid=cf634e36e3accda1e65cc0a2121c6a37&units=metric")
//         // .then(res => res.json())
//         // .then(data => console.log(data))

//         const res = await fetch("https://api.openweathermap.org/data/2.5/weather?q=noida&appid=cf634e36e3accda1e65cc0a2121c6a37&units=metric");
//         const data = await res.json();
//         console.log(data);
// }

// // fetchData();
// // setTimeout(() => {
// //     console.log("hi2")
// // }, 0)

// console.log("hi")



// async function getdata(){
//     const detail=await fetch("https://api.openweathermap.org/data/2.5/weather?q=noida&appid=cf634e36e3accda1e65cc0a2121c6a37&units=metric");
//     var data=await detail.json();
//     console.log(data.name);
// }

// getdata();

// var g=$(document);
// console.log(g);
async function getData(location){
    const data=await fetch("https://api.openweathermap.org/data/2.5/weather?q="+location+"&appid=cf634e36e3accda1e65cc0a2121c6a37&units=metric");
    var detail= await data.json();
    console.log(detail);
    document.querySelector(".temp").innerHTML=detail.main.temp+ "°C";
    document.querySelector(".city").innerHTML=detail.name;
    document.querySelector(".humidity").innerHTML=detail.main.humidity +"<br/>humidity";
    document.querySelector(".speed").innerHTML=detail.wind.speed+"<br/> Wind Speed" ;
}



document.querySelector("button").addEventListener("click", function(){
   var location = (document.querySelector("input").value);
   getData(location);
});

