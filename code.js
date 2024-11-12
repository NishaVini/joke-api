let apiBody = document.querySelector(".section");
let apiUrl = 'https://official-joke-api.appspot.com/jokes/random';



const fetchData = () =>{
    fetch(apiUrl )
    .then( response => response.json())
    .then(data => {
          apiBody.innerHTML =  `<strong>${ data.setup}</strong> ${data.punchline} ` 
    })
    .catch( error =>  console.error('url is worng', error));
}

fetchData();

document.querySelector("button").addEventListener("click",()=>{
         fetchData();
     });







// const fetchData= async()=>{

//   try{ 
//       const res = await fetch(apiUrl,{
//           headers:{
//           accept:"application/json",
//           },
//        });
//     const data = await res.json();
//     console.log(data.joke);
//     apiBody.innerHtml=data.joke;   
//  }
//  catch(error){
//     apiBody.innerHTML=error;
//     console.log(error);
//     }
  
// }

// document.querySelector("button").addEventListener("click",()=>{
//     fetchData();
// });