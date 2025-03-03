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

// const form = document.querySelector("form");
// const formData = new FormData(form);
// const searchInput = formData.get("input[type=search]");
const searchInput = document.querySelector("input[type=search]");
if (searchInput instanceof HTMLInputElement) return;

searchInput.addEventListener("input", () => {
    const titles = getTitles(searchInput.value);
    afficherTitles(titles);
});

function afficherTitles(titles) {
    // <main> class="grid" <ul> > <li> > <article>
    //    <img src="image.jpg" /> <p>Castle in the Sky</p>
    //           <dl>
    //           <dt>Release date</dt>
    //           <dd>1986</dd>
    //           <dt>Director</dt>
    //           <dd>Hayao Miyazaki</dd>
    //          </dl> </article> </li> ... <article>...</article>..
    //   </ul> </li> </main>

    const lis = document.querySelectorAll(".grid li"); //plutot
    lis.append.getAllContent();

    async function getAllContent() {
        const res = await fetch("/", {
            method: "GET",

            headers: { "Accept": "application/json" },
        });

        const body = await res.text();
        const bodyString = JSON.parse(body);
        return bodyString;
    }
}

async function getTitles(searchQuery = "") {
    const url = new URL(location.href); //url courant
    url.searchParams.set("search", searchQuery);

    const res = await fetch(url, {
        method: "GET",

        headers: { "Accept": "application/json" },
    });

    return await res.json();

    // const body = await res.text();
    // const bodystring = JSON.parse(body);
    // return bodystring;
}

//3. control sort//
//
// 4. control filter//
