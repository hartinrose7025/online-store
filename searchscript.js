//getting the search bar button
var searchButton = document.getElementById("Submit");

//redirecting the page onClick
 searchButton.onclick = function() {
    localStorage.setItem("catID", 0);
    window.location.href = "search.html"; // the location to be redirected to
}; 

//Manga objects

const manga1 = {
    id: 1001,
    name: "Beserk",
    price: 22.32,
    color: "#ff0001",
    qty: 1,
    src: "images/MANGA-Berserk.jpg",
    rating: 5,
};

const manga2 = {
    id: 1002,
    name: "Kakeguri",
    price: 19.31,
    color: "#ff0000",
    qty: 1,
    src: "images/MANGA-Kakeguri.jpg",
    rating: 4,
};

const manga3 = {
    id: 1003,
    name: "Hinamatsuri",
    price: 14.91,
    color: "#ff0000",
    qty: 1,
    src: "images/MANGA-Hinamatsuri.jpg",
    rating: 4,
};

const manga4 = {
    id: 1004,
    name: "Dragon Ball",
    price: 12.50,
    color: "#ff0000",
    qty: 1,
    src: "images/MANGA-DragonBall.jpg",
    rating: 5,
};

//Board Games objects

const bgame1 = {
    id: 1005,
    name: "Gloomhaven",
    price: 169.99,
    color: "#ff0000",
    qty: 1,
    src: "images/BGAMES-Gloomhaven",
    rating: 5,
};

const bgame2 = {
    id: 1006,
    name: "Pandemic",
    price: 59.99,
    color: "#ff0000",
    qty: 1,
    src: "images/BGAMES-Pandemic",
    rating: 3,
};

const bgame3 = {
    id: 1007,
    name: "Betrayal At House On The Hill",
    price: 69.99,
    color: "#ff0000",
    qty: 1,
    src: "images/BGAMES-Betrayal",
    rating: 4,
};

const bgame4 = {
    id: 1008,
    name: "Catan",
    price: 69.99,
    color: "#ff0000",
    qty: 1,
    src: "images/BGAMES-Catan",
    rating: 4,
};

//Video Game objects

const vgame1 = {
    id: 1009,
    name: "Nier Automata",
    price: 39.99,
    color: "#ff0000",
    qty: 1,
    src: "images/VGAMES-NierA.jp",
    rating: 3,
};

const vgame2 = {
    id: 1010,
    name: "Yakuza 0",
    price: 39.99,
    color: "#ff0000",
    qty: 1,
    src: "images/VGAMES-Yakuza.jpg",
    rating: 5,
};

const vgame3 = {
    id: 1011,
    name: "The Legend of Zelda: Majoras Mask",
    price: 29.99,
    color: "#ff0000",
    qty: 1,
    src: "images/VGAMES-Majora",
    rating: 5,
};

const vgame4 = {
    id: 1012,
    name: "Banjo Kazooie",
    price: 29.99,
    color: "#ff0000",
    qty: 1,
    src: "images/VGAMES-Banjo",
    rating: 4,
};

//Comic objects

const comic1 = {
    id: 1013,
    name: "Descender",
    price: 12.99,
    color: "#ff0000",
    qty: 1,
    src: "images/COMIC-Descenderx.jpg",
    rating: 5,
};

const comic2 = {
    id: 1014,
    name: "Dark Phoneix Saga",
    price: 24.99,
    color: "#ff0000",
    qty: 1,
    src: "images/COMICS-DarkPhoenix.jpg",
    rating: 3,
};

const comic3 = {
    id: 1015,
    name: "Saga",
    price: 12.99,
    color: "#ff0000",
    qty: 1,
    src: "images/COMIC-Saga.jpg",
    rating: 4,
};

const comic4 = {
    id: 1016,
    name: "Dark Knight METAL",
    price: 4.99,
    color: "#ff0000",
    qty: 1,
    src: "images/COMIC-BatmanMetal.jpg",
    rating: 4,
};

// declare array of manga, video game, board game, comic
const manga = [manga1, manga2, manga3, manga4];
const vgame = [vgame1, vgame2, vgame3, vgame4];
const bgame = [bgame1, bgame2, bgame3, bgame4];
const comic = [comic1, comic2, comic3, comic4];

// create the master array to store all of the products with the concat function
const masterArray = manga
    .concat(vgame)
    .concat(bgame)
    .concat(comic);

// create products using js objects from the array
function product(name, price, src, rating, id) {
    let img = document.createElement("img");
    img.src = src;
    img.alt = name;

    let h4 = document.createElement("h4");
    h4.innerHTML = name;

    let ratingDiv = document.createElement("div");
    ratingDiv.className = "rating";
    addRating(ratingDiv, rating);

    let prodPrice = document.createElement("p");
    prodPrice.innerHTML = "$" + price;

    let div = document.createElement("div");
    div.className = "col-4";

    let idProd = document.createElement("p");
    idProd.id = "prodID";
    idProd.innerHTML = id;
    idProd.style.visibility = "hidden";
    
    //adding child elements to the div container of products
    div.appendChild(img);
    div.appendChild(h4);
    div.appendChild(ratingDiv);
    div.appendChild(prodPrice);
    div.appendChild(idProd);

    //adding the products to the html body
    document.getElementById("productArea").appendChild(div);

    //adding listener to each of the product card
    div.addEventListener("click", (e) => {
        let id = e.currentTarget.querySelector("#prodID").innerHTML;
        localStorage.setItem("productID", id);
        window.location.href = "search.html";
    });
}

//to delete all the products from HTML before displaying the new one
function clearScreen(childList) {
    //child elments that need to be removed.
    listChild = childList;
    for (let i = 0; i < listChild.length; i++) {
        listChild[i].remove(); //removing node
    }
}

// adds stars to the ratings of each item
function addRating(parent, rating) {
    fullS = Math.trunc(rating); //full stars
    halfS = rating - fullS; // half stars
    emptyS = 5 - Math.ceil(rating); // empty stars

    //adding full stars
    for (let i = 0; i < fullS; i++) {
        let fullStar = document.createElement("i");
        fullStar.className = "fa fa-star";
        parent.appendChild(fullStar);
    }

    //adding empty stars
    for (let k = 0; k < emptyS; k++) {
        let emptyStar = document.createElement("i");
        emptyStar.className = "fa fa-star-o";
        parent.appendChild(emptyStar);
    }
}

//create and displays products using the data from the array.
function displayProducts(productsArray) {
    for (let i = 0; i < productsArray.length; i++) {
        product(
            productsArray[i].name,
            productsArray[i].price,
            productsArray[i].src,
            productsArray[i].rating,
            productsArray[i].id
        );
    }
}

/*----------Displaying products in the product area-----------*/

//getting stored value for items in store
function showSpecifiedCategories() {
    let cat = localStorage.getItem("catID");
    console.log(cat);
    debugger;
    switch (cat) {
        case "0":
            displayProducts(masterArray);
            document.querySelector("#catName").innerHTML = "View All";
            break;
        case "1":
            displayProducts(manga);
            document.querySelector("#catName").innerHTML = "Manga";
            break;
        case "2":
            displayProducts(vgame);
            document.querySelector("#catName").innerHTML = "Videogames";
            break;
        case "3":
            displayProducts(bgame);
            document.querySelector("#catName").innerHTML = "Boardgames";
            break;
        case "4":
            displayProducts(comic);
            document.querySelector("#catName").innerHTML = "Comic";
            break;
        default:
            displayProducts(masterArray);
            document.querySelector("#catName").innerHTML = "View All";
            break;
    }
}

showSpecifiedCategories();

//Sort by Price - preparing array to sort through
function sortingByPrice(arrayToBeSorted) {
    arrayToBeSorted.sort(function(a, b) {
        return a.price - b.price;
    });
    return arrayToBeSorted;
}

//display product costs from low to high
function lowToHigh(arrayDisplayed, compareCriteria) {
    let sortedArray;
    if (compareCriteria === "price") {
        // if criteria is price
        sortedArray = sortingByPrice(arrayDisplayed);
    }
    clearScreen(document.querySelectorAll(".col-4")); // clear screen
    displayProducts(sortedArray); //diaplay products
}

//display product costs from high to low
function highToLow(arrayDisplayed, compareValue) {
    let sortedArray;
    let revArray;
    if (compareValue == "price") {
        // if criteria is price
        sortedArray = sortingByPrice(arrayDisplayed);
    }
    revArray = sortedArray.reverse(); // get the reversed array
    clearScreen(document.querySelectorAll(".col-4"));
    displayProducts(revArray); //diaplay products
}

/**------Adding listener to the sorting selection -------**/

//getting sorting selection element
var sortingPrice = document.getElementById("sortPrice");

//adding a event listener to the sorting selection
sortingPrice.addEventListener("change", function() {
    //getting selected value
    let selectedValue = document.getElementById("sortPrice").value;

    //Switching according to the selected value
    switch (selectedValue) {
        case "Low to High":
            console.log("Low to High");
            lowToHigh(masterArray, "price");
            break;
        case "High to Low":
            console.log("High to Low");
            highToLow(masterArray, "price");
            break;
    }
});

/**-------Filter By rating started---------**/
// filter by Rating

// get the filter select menu
var filter = document.getElementById("filterRating");

//adding eventListener to the filter (on change)
filter.addEventListener("change", function() {
    //selected value
    let selectedValue = document.getElementById("filterRating").value;

    //switch according to the selected values
    switch (selectedValue) {
        case "5 Stars":
            displayRating(masterArray, 5);
            break;
        case "4 Stars":
            displayRating(masterArray, 4);
            break;
        case "3 Stars":
            displayRating(masterArray, 3);
            break;
        case "2 Stars":
            displayRating(masterArray, 2);
            break;
        case "1 Star":
            displayRating(masterArray, 1);
            break;
    }
});

//Function to display the products of specific rating.
function displayRating(arrayDisplayed, rating) {
    clearScreen(document.querySelectorAll(".col-4"));
    for (p of arrayDisplayed) {
        if (p.rating == rating) {
            product(p.name, p.price, p.src, p.rating, p.id);
}
    }
}