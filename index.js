const container = document.querySelector("#container")




const API = "https://api.gitHub.com/users/Rubi19989";



const fetchData = async (url) => {
    try {
        let options = {
            "headers":
                { "Authorization": "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" }
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



// const misCards = (responseRepos) => {
//     let cardAcumuladas = "" ;
//     responseRepos.forEach(element => {
//         let card = `<div class="card" style="width: 18rem;">
//         <img src="..." class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">Name proyect: ${element.name}</h5>
//           <p class="card-text my-2  ">
//           Full_Name:  ${element.full_name} <p>
//           <br>
//           <p class="card-text my-2 ">
//           Description:: ${element.description}
//           </p>
//           <p class="card-text my-2 ">
//           <a href="${element.html_url}" class="card-text my-2 btn btn-outline-dark"> Ver repositorio
//           </a>
//           </p>
//         </div>
//       </div>`
//         cardAcumuladas += card;
//     });

// }

const misCards = (responseRepos) => {
    let cardAcumuladas = "";
    responseRepos.forEach(element => {
        let card = `
        <div class = "col-12 col-sm-6 col-lg-4
         text-center my-2  text-dark color  ">
             <div class="card  bg-dark bg-opacity-10 m-8" style="height: 33rem; ">                 
                 <div class="card-body divs  ">
                    <h4 class="card-title my-3 ">Name: ${element.name}</h4>
                    <img src="./img/yoongi2.jpg" class="card-img-top ms-5" alt="img de una persona" style="width: 12rem;>
                    <p class="card-text my-2  ">
                    Full_Name:  ${element.full_name} <p>
                    <br>
                    <p class="card-text my-2 ">
                    Description:: ${element.description}
                    </p>
                    <p class="card-text my-2 ">
                    <a href="${element.html_url}" class="card-text my-2 btn btn-outline-dark"> Ver repositorio
                    </a>
                    </p>
                 </div>
             </div>
         </div>`
        cardAcumuladas += card;

    });

    container.innerHTML = cardAcumuladas;

    
}