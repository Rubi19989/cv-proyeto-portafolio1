const container = document.querySelector("#container")

import enviroment from "./config.js"


const API = "https://api.gitHub.com/users/Rubi19989";



const fetchData = async (url) => {
    try {
        let options = {
            "headers":
                { "Authorization": `token ${(enviroment.TOKEN_GITHUB)}` }
        }

        let response = await fetch(url, options)
        let data = await response.json();
        let repos = await fetch(data.repos_url, options)
        let responseRepos = await repos.json();

        console.log(responseRepos)
        misCards(responseRepos)


    } catch (error) {
        console.log(error)
    }

}

fetchData(API);



const misCards = (responseRepos) => {
    let cardAcumuladas = "";
    responseRepos.forEach(element => {
        let card = `<div >
         <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-6">
           <div class="md:flex ">
            <div class="md:shrink-0">
              <img class="h-40 w-full object-cover md:h-full md:w-48" src="./img/yoongi2.jpg" alt="Modern building architecture">
        </div>
      <div class="p-8">
       <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold"> <h3>Name:${element.name}</h3></div>
       <p class="mt-2 text-slate-500">Full_Name:  ${element.full_name} </p>
       <p>
       Description: ${element.description}
       </p>
       <p>
       <a href="${element.html_url}" class="block mt-3 text-lg leading-tight claseA font-medium text-black hover:underline">Ver repositorio</a>
    </div>
  </div>
</div>
</div`
        cardAcumuladas += card;
    });
    container.innerHTML = cardAcumuladas;
}


//class="grid grid-rows-5 grid-flow-col