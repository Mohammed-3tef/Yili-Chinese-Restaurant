let currentIndex = 0;
const slides = document.querySelector(".slides");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

function openNav() {
    document.getElementById("mySidenav").style.width = "50%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function nextImg () {
    currentIndex = (currentIndex + 1) % slides.children.length;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function prevImg () {
    currentIndex =
    currentIndex == 0
        ? slides.children.length - 1
        : (currentIndex - 1) % slides.children.length;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function scrollUpFun (e){
    e.preventDefault();
    scrollNumber = window.scrollY;
    counter.innerHTML = scrollNumber;
    if (scrollNumber >= 1200) {
        scrollBtn.style.display = "flex";
    }
    else {
        scrollBtn.style.display = "none";
    }
}

const menu = [
    {
        id: 1,
        name: "Sweet And Sour",
        details: "The sauces are traditionally made by mixing sugar or honey with a sour liquid such as rice vinegar or soy sauce and spices such as ginger and cloves. Sometimes a paste made from tomatoes is used, but this is rare and normally restricted to Western cooking.",
        price: "10$",
    },
    {
        id: 2,
        name: "Fried Rice",
        details: "is a dish of cooked rice that has been stir-fried in a wok or a frying pan and is usually mixed with other ingredients such as eggs, vegetables, seafood, or meat. It is often eaten by itself or as an accompaniment to another dish.",
        price: "8$",
    },
    {
        id: 3,
        name: "Dan dan noodles",
        details: "is a noodle dish originating from Chinese Sichuan cuisine. It consists of a spicy sauce usually containing preserved vegetables, chili oil, Sichuan pepper, minced pork, and scallions served over noodles.",
        price: "20$",
    },
    {
        id: 4,
        name: "General Tso's chicken",
        details: "General Tso's chicken is a sweet and spicy deep-fried chicken dish.",
        price: "35$",
    },
    {
        id: 5,
        name: "Kung Pao Chicken",
        details: "is a spicy, stir-fried Chinese dish made with cubes of chicken, peanuts, vegetables and chili peppers and Sichuan peppercorns.",
        price: "60$",
    },
];

menu.forEach((item) => {
    document.getElementById("meals").innerHTML += 
    `
        <div class="card">
            <div style="padding-bottom: 1.5rem">
                <p class="mealTitle">${item.name}</p>
                <p class="mealDetails"><span>Details :</span> ${item.details}</p>
                <p class="mealDetails"><span>Price :</span> ${item.price} </p>
            </div>
            <a href="#" class="buyNow"><p>Buy Now</p></a>
        </div>
        
        <style>
            .card {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width: 30rem; 
                min-height: fit-content; 
                background-color: #70BB9A; 
                padding: 2.5rem; 
                border-radius: 2.5rem;
                transition: 450ms;
                .mealTitle {
                    font-size: 2.5rem;
                    padding: 1.25rem 0rem;
                }
                .mealDetails {
                    font-size: 1.35rem;
                    span {font-size: 1.75rem;}
                }
            }
            .buyNow {
                margin: 0rem auto;
                text-decoration: none;
                transition: 450ms;
                color: black;
                font-size: 1.5rem;
            }
            .buyNow:hover {color: white;}
            .card:hover {filter: drop-shadow(0 0 1.5rem white);}
            
            @media (max-device-width: 430px) {
                .card {
                    width: 100%; 
                    padding: 1.2rem;
                    .mealTitle {font-size: 2.25rem;}
                    .mealDetails {
                        font-size: 1rem;
                        span {font-size: 1.5rem;}
                    }
                }
            }
        </style>
    `
});

window.addEventListener("scroll", scrollUpFun);
nextBtn.addEventListener("click", nextImg);
prevBtn.addEventListener("click", prevImg);
