//Testing FormData...null search?
// // if (!form) return;

//
// const viewSelect = formData.has("#view");
// console.log(viewSelect);

// const sortSelect = formData.has("#sort");
// console.log(sortSelect);
// const filterPick = formData.has("#filter");
// console.log(filterPick);

//1. control view//
//
//2. control search//

//1.class Creer une classe qui return toutes les elements HTML
//2.class example expect to be, que-est-ce suppose de me retourner
//3.la signature


class ElementsLi {
/**@type {HTMLElement}*/
    ul;
    /**@type {HTMLElement}*/
    li;

 /**@type {HTMLElement}*/
    article;

 /**@type {HTMLElement}*/
    img;

 /**@type {HTMLElement}*/
    p;

 /**@type {HTMLElement}*/
    dl;

 /**@type {HTMLElement}*/
    dt; //appeler le prermiere au deuxieme il y a deux

 /**@type {HTMLElement}*/
    dd;//appeler le prermiere au deuxieme il y a deux
    
    
    const ul = document.createElement("ul");
  const li = document.createElement("li");
  
 const article = document.createElement("article");
 const img = document.createElement("img");
 const p = document.createElement("p");
 const dl = document.createElement("dl");
 const dt = document.createElement("dt");
 const dd = document.createElement("dd");
 
    
    
}


//  const searchInput = document.querySelector("input[type=search]");
// if (searchInput instanceof HTMLInputElement) return;

searchInput.addEventListener("input", () => {

    

const form = document.querySelector("form");
const formData = new FormData(form);
const searchInput = formData.get("search");
console.log(searchInput);

    const titles = getTitles(searchInput.value);
    afficherTitles(titles);
});



async function getTitles(searchQuery = "") {
    const url = new URL(location.href); //url courant
    url.searchParams.set("search", searchQuery);

    const res = await fetch(url, {
        method: "GET",

        headers: { "Accept": "application/json" },
    });

    return await res.json();


    
    
function afficherTitles(titles) {

// <main> class="grid" <ul> > <li> > <article>
  const lis = document.createElement("li");
  lis.textContent = getTitles();
  const grid = document.querySelector("grid");
  grid.append(lis);

//creer une class pour creer les elements de chaque carte
   
//     lis.append.getAllContent();

//     async function getAllContent() {
//         const res = await fetch("

//             creteElement....//paramentget????/", {
//             method: "GET",
// //

// cr//eteElement..
//             headers: { "Accept": "application/json" },
//         });

//         const body = await res.text();
//         const bodyString = JSON.parse(body);
//         return bodyString;
//     }
// }



//     // const body = await res.text();
//     // const bodystring = JSON.parse(body);
//     // return bodystring;
// }

// //3. control sort//
// //
// // 4. control filter//
// 1.
