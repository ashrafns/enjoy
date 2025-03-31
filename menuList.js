var shawarma_meat= [{
    product_t:"شـــاورما شـــامي لـــحم",
    product_b:" Shami Meat Shawarma ",
    product_img:"img/new/شـــاورما شـــامي لـــحم.png",
    product_P:"12",
    product_K:"773"

},{
    product_t:"شـــاورما صـــامولي لـــحم",
    product_b:" Samoli Meat Shawarma",
    product_img:"img/new/شـــاورما صـــامولي لـــحم.png",
    product_P:"17",
    product_K:"850"
},{
    product_t:"شـــاورما صـــاج لـــحم ",
    product_b:" Saj Meat Shawarma",
    product_img:"img/new/شـــاورما صـــاج لـــحم.png",
    product_P:"15",
    product_K:"844"
},{
    product_t:"شـــاورما عـــربي لـــحم",
    product_b:"Arabic Meat Shawarma",
    product_img:"img/new/شـــاورما عـــربي لـــحم.png",
    product_P:"22",
    product_K:"500"
},{
    product_t:"شـــاورما عـــربي لـــحم دبـــل",
    product_b:"Arabic Meat Shawarma Double",
    product_img:"img/new/شـــاورما عـــربي لـــحم دبـــل.png",
    product_P:"32",
    product_K:"796"
},{
    product_t:"وجـــبة أصـــابع لـــحم",
    product_b:"Meat Fingers Meal",
    product_img:"img/new/وجـــبة أصـــابع لـــحم.png",
    product_P:"27",
    product_K:"740"
},{
    product_t:"طـــبق شـــاورما لـــحم مع الأرز",
    product_b:" Shawarma Meal with Rice",
    product_img:"img/new/طـــبق شـــاورما لـــحم مع الأرز.png",
    product_P:"35",
    product_K:"590"
},{
    product_t:" صـــحن فـــرط شـــاورما لـــحم",
    product_b:"Meat Shawarma (Plate)",
    product_img:"img/new/صـــحن فـــرط شـــاورما لـــحم.png",
    product_P:"40",
    product_K:"896"
},{
    product_t:"نـــصف كـــيلو شـــاورما لـــحم",
    product_b:" Shawarma Meal with Rice",
    product_img:"img/new/نـــصف كـــيلو شـــاورما لـــحم.png",
    product_P:"65",
    product_K:"1435"
},{
    product_t:" كـــيلو شـــاورما لـــحم",
    product_b:" Shawarma Meal with Rice",
    product_img:"img/new/كـــيلو شـــاورما لـــحم.png",
    product_P:"120",
    product_K:"2870"
}

]
document.getElementById("shawarma_meat").innerHTML = ''
for (menu of shawarma_meat){
    var product = `<div class="col-lg-6 row g-3">
                        <div class="d-flex h-100">
                            <div class="flex-shrink-0">
                                <img class="img-fluid" src="${menu.product_img}" alt="" style="width: 100px; height:70%">
                                <h4 style="background: gray !important;" class="bg-dark text-primary p-2 m-0"><span> <img class="img-fluid mx-2" src="img/OIP-removebg-preview.png" style="width: 15px;"></span>${menu.product_P}</h4>
                            </div>
                            <div class="d-flex flex-column w-100 justify-content-center bg-secondary border-inner px-4">
                                <h6 class="text-uppercase">${menu.product_t}</h6>
                                <span>${menu.product_b}</span>
                                <h6 class="d-flex  justify-content-center mt-2">kcal ${menu.product_K}</h6>
                            </div>
                        </div>
                    </div>`
                document.getElementById("shawarma_meat").innerHTML += product
}
// ====================================Chicken_Shawarma==============================================================================
var Chicken_Shawarma= [{
    product_t:"شـــاورما شـــامي دجـــاج",
    product_b:"Shami Chicken Shawarma",
    product_img:"img/new/شـــاورما شـــامي دجـــاج.png",
    product_P:"11",
    product_K:"403"

},{
    product_t:"شـــاورما صـــامولي دجـــاج",
    product_b:"Samoli Chicken Shawarma",
    product_img:"img/new/شـــاورما صـــامولي دجـــاج.png",
    product_P:"16",
    product_K:"450"
},{
    product_t:"شـــاورما صـــاج دجـــاج",
    product_b:"Saj Chicken Shawarma",
    product_img:"img/new/شـــاورما صـــاج دجـــاج.png",
    product_P:"14",
    product_K:"600"
},{
    product_t:"شـــاورما عـــربي دجـــاج",
    product_b:"Arabic Meat Shawarma",
    product_img:"img/new/شـــاورما عـــربي دجـــاج.png",
    product_P:"20",
    product_K:"480"
},{
    product_t:"شـــاورما عـــربي دجـــاج دبـــل",
    product_b:"Arabic Chicken Shawarma Double",
    product_img:"img/new/شـــاورما عـــربي دجـــاج دبـــل.png",
    product_P:"30",
    product_K:"550"
},{
    product_t:"وجـــبة أصـــابع دجـــاج",
    product_b:"Chicken Fingers Meal",
    product_img:"img/new/وجـــبة أصـــابع دجـــاج.png",
    product_P:"25",
    product_K:"592"
},{
    product_t:"وجـــبة شـــاورما دجـــاج مع الأرز",
    product_b:"Chicken Shawarma Meal with Rice",
    product_img:"img/new/وجـــبة شـــاورما دجـــاج مع الأرز.png",
    product_P:"30",
    product_K:"531"
},{
    product_t:"صـــحن فـــرط شـــاورما دجـــاج",
    product_b:"Chicken Shawarma (Plate)",
    product_img:"img/new/صـــحن فـــرط شـــاورما دجـــاج.png",
    product_P:"30",
    product_K:"662"
},{
    product_t:"نـــصف كـــيلو شـــاورما دجـــاج",
    product_b:"Chicken Shawarma (Half Kilo)",
    product_img:"img/new/نـــصف كـــيلو شـــاورما دجـــاج.png",
    product_P:"55",
    product_K:"1390"
},{
    product_t:" كـــيلو شـــاورما دجـــاج",
    product_b:" Shawarma Meal with Rice",
    product_img:"img/new/كـــيلو شـــاورما دجـــاج.png",
    product_P:"100",
    product_K:"2780"
},{
    product_t:"خـــلطة شـــاورما إنـــجوي",
    product_b:"Enjoy Mix Shawarma",
    product_img:"img/new/خـــلطة شـــاورما إنـــجوي.png",
    product_P:"18",
    product_K:"1100"
}
]
document.getElementById("Chicken_Shawarma").innerHTML = ''
for (menu of Chicken_Shawarma){
    var product = `<div class="col-lg-6 row g-3">
                        <div class="d-flex h-100">
                            <div class="flex-shrink-0">
                                <img class="img-fluid" src="${menu.product_img}" alt="" style="width: 150px; height:77%">
                                <h4 style="background: gray !important;" class="bg-dark text-primary p-2 m-0"><span> <img class="img-fluid mx-2" src="img/OIP-removebg-preview.png" style="width: 15px;"></span>${menu.product_P}</h4>
                            </div>
                            <div class="d-flex flex-column w-100 justify-content-center bg-secondary border-inner px-4">
                                <h5 class="text-uppercase">${menu.product_t}</h5>
                                <span>${menu.product_b}</span>
                                <h6 class="d-flex  justify-content-center mt-2">kcal ${menu.product_K}</h6>
                            </div>
                        </div>
                    </div>`
                document.getElementById("Chicken_Shawarma").innerHTML += product
}
// ==================================Grills_Section========================================
var Grills_Section= [{
    product_t:"مـــشويّات مـــشكّلة (وجـــبة)",
    product_b:"Mixed Grills (Meal)",
    product_img:"img/new/مـــشويّات مـــشكّلة (وجـــبة).png",
    product_P:"40",
    product_K:"1187"

},{
    product_t:"طـــبق كـــباب لـــحم",
    product_b:"Kebab Meat Dish",
    product_img:"img/new/طـــبق كـــباب لـــحم.png",
    product_P:"35",
    product_K:"1065"
},{
    product_t:"طـــبق كـــباب دجـــاج",
    product_b:"Kebab Chicken Dish",
    product_img:"img/new/طـــبق كـــباب دجـــاج.png",
    product_P:"30",
    product_K:"1055"
},{
    product_t:"طـــبق شـــيش طـــاووق",
    product_b:"Shish Tawook Dish",
    product_img:"img/new/طـــبق شـــيش طـــاووق.png",
    product_P:"30",
    product_K:"600"
},{
    product_t:"طـــبق ريـــش",
    product_b:"Feathers Dish",
    product_img:"img/new/طـــبق ريـــش.png",
    product_P:"45",
    product_K:"617"
},{
    product_t:"طـــبق أوصـــال",
    product_b:"Awsil Meat Dish",
    product_img:"img/new/طـــبق أوصـــال.png",
    product_P:"40",
    product_K:"751"
},{
    product_t:"طـــبق عـــرايس لـــحم مـــارينا",
    product_b:"Arayes Meat Marina Dish",
    product_img:"img/new/طـــبق عـــرايس لـــحم مـــارينا.png",
    product_P:"30",
    product_K:"488"
},{
    product_t:"وجـــبة كـــباب مع الأرز ",
    product_b:"Meal of Kebab with Rice",
    product_img:"img/new/وجـــبة كـــباب مع الأرز.png",
    product_P:"35",
    product_K:"608"
},{
    product_t:"وجـــبة شيش مع الأرز",
    product_b:"Meal of Shish with Rice",
    product_img:"img/new/وجـــبة شيش مع الأرز.png",
    product_P:"30",
    product_K:"466"
},{
    product_t:" نـــصف كـــيلو مـــشويّات مـــشكّلة",
    product_b:" Shawarma Meal with Rice",
    product_img:"img/new/نـــصف كـــيلو مـــشويّات مـــشكّلة.png",
    product_P:"75",
    product_K:"2175"
},{
    product_t:"كـــيلو مـــشويّات مـــشكّلة",
    product_b:"  Mixed Grills (Kilo)",
    product_img:"img/new/كـــيلو مـــشويّات مـــشكّلة.png",
    product_P:"140",
    product_K:"4350"
},{
    product_t:"نـــصف كـــيلو أوصـــال",
    product_b:" Joints (Half Kilo)",
    product_img:"img/new/خـــلطة شـــاورما إنـــجوي.png",
    product_P:"80",
    product_K:"2310"
},{
    product_t:"كـــيلو أوصـــال",
    product_b:"Joints (Kilo)",
    product_img:"img/new/كـــيلو أوصـــال.png",
    product_P:"150",
    product_K:"4600"
},{
    product_t:"نـــصف كـــيلو كـــباب لـــحم",
    product_b:"Kebab Meat (Half Kilo)",
    product_img:"img/new/نـــصف كـــيلو كـــباب لـــحم.png",
    product_P:"75",
    product_K:"2130"
},{
    product_t:"كـــيلو كـــباب لـــحم",
    product_b:"Kebab Meat (Kilo)",
    product_img:"img/new/كـــيلو كـــباب لـــحم.png",
    product_P:"140",
    product_K:"4260"
},{
    product_t:"نـــصف كـــيلو شـــيش طـــاووق",
    product_b:"Shish Tawook (Half Kilo)",
    product_img:"img/new/نـــصف كـــيلو شـــيش طـــاووق.png",
    product_P:"70",
    product_K:"493"
},{
    product_t:"كـــيلو شـــيش طـــاووق",
    product_b:"Shish Tawook (Kilo)",
    product_img:"img/new/كـــيلو شـــيش طـــاووق.png",
    product_P:"130",
    product_K:"1000"
},{
    product_t:"نـــصف كـــيلو كـــباب دجـــاج",
    product_b:"Kebab Chicken (Half Kilo)",
    product_img:"img/new/نـــصف كـــيلو كـــباب دجـــاج.png",
    product_P:"70",
    product_K:"2210"
},{
    product_t:"كـــيلو كـــباب دجـــاج",
    product_b:"Kebab Chicken (Kilo)",
    product_img:"img/new/كـــيلو كـــباب دجـــاج.png",
    product_P:"130",
    product_K:"4220"
},{
    product_t:"نـــصف كـــيلو ريـــش",
    product_b:"Feathers (Half Kilo)",
    product_img:"img/new/نـــصف كـــيلو ريـــش.png",
    product_P:"80",
    product_K:"1770"
},{
    product_t:"ســـاندويتش دجـــاج شـــيش",
    product_b:"Sandwich Chicken Shish",
    product_img:"img/new/ســـاندويتش دجـــاج شـــيش.png",
    product_P:"15",
    product_K:"380"
},{
    product_t:"ســـاندويتش كـــباب دجـــاج",
    product_b:"Sandwich Chicken Kebab",
    product_img:"img/new/ســـاندويتش كـــباب دجـــاج.png",
    product_P:"15",
    product_K:"215"
},{
    product_t:"كـــباب لـــحم",
    product_b:" Meat Kebab",
    product_img:"img/new/كـــباب لـــحم.png",
    product_P:"16",
    product_K:"223"
},{
    product_t:"أوصـــال",
    product_b:"Awsal",
    product_img:"img/new/أوصـــال.png",
    product_P:"16",
    product_K:"323"
},{
    product_t:"وجـــبة لـــحم بالـــصينيّة مع الخـــضار",
    product_b:"Meat with Vegetables (Meal)",
    product_img:"img/new/وجـــبة لـــحم بالـــصينيّة مع الخـــضار.png",
    product_P:"40",
    product_K:"843"
},{
    product_t:"نص كيلو لـــحم بالـــصينيّة مع الخـــضار",
    product_b:"Meat with Vegetables (Half Kilo)",
    product_img:"img/new/نص كيلو لـــحم بالـــصينيّة مع الخـــضار.png",
    product_P:"65",
    product_K:"1425"
},{
    product_t:"كيلو لـــحم بالـــصينيّة مع الخـــضار",
    product_b:"Meat with Vegetables ( Kilo)",
    product_img:"img/new/وجـــبة لـــحم بالـــصينيّة مع الخـــضار.png",
    product_P:"130",
    product_K:"2830"
},{
    product_t:"لـــحم بالـــصينيّة",
    product_b:"Plate of Meat (Meal) ",
    product_img:"img/new/لـــحم بالـــصينيّة.png",
    product_P:"40",
    product_K:"843"
},{
    product_t:"نـــصف كـــيلو لـــحمه بالـــصينيّة",
    product_b:"Meat (Half Kilo)",
    product_img:"img/new/نـــصف كـــيلو لـــحمه بالـــصينيّة.png",
    product_P:"65",
    product_K:"1400"
},{
    product_t:"كيلو لـــحمه بالـــصينيّة",
    product_b:"Plate of Meat (Kilo)",
    product_img:"img/new/نـــصف كـــيلو لـــحمه بالـــصينيّة.png",
    product_P:"130",
    product_K:"2815"
},{
    product_t:"كـــيلو لـــحمه مع طـــحينة",
    product_b:"Meat (Half Kilo)",
    product_img:"img/new/كـــيلو لـــحمه مع طـــحينة.png",
    product_P:"130",
    product_K:"2750"
},{
    product_t:"نـــصف كـــيلو لـــحمه مع طـــحينة",
    product_b:"Meat with Tahini (Half Kilo)",
    product_img:"img/new/نـــصف كـــيلو لـــحمه مع طـــحينة.png",
    product_P:"65",
    product_K:"1370"
},{
    product_t:"وجـــبة لـــحمه مع طـــحينة",
    product_b:"Meat with Tahini (Meal)",
    product_img:"img/new/نـــصف كـــيلو لـــحمه بالـــصينيّة.png",
    product_P:"40",
    product_K:"687"
},{
    product_t:"كـــيلو كـــباب هـــندي",
    product_b:"Indian Kebab (Kilo)",
    product_img:"img/new/كـــيلو كـــباب هـــندي.png",
    product_P:"120",
    product_K:"2230"
},{
    product_t:"نـــصف كـــيلو كـــباب هـــندي",
    product_b:"Indian Kebab (Half Kilo)",
    product_img:"img/new/نـــصف كـــيلو كـــباب هـــندي.png",
    product_P:"65",
    product_K:"1120"
},{
    product_t:"كـــباب هـــندي - وجـــبة",
    product_b:"Indian Kebab (Meal)",
    product_img:"img/new/كـــباب هـــندي - وجـــبة.png",
    product_P:"40",
    product_K:"550"
}
]
document.getElementById("Grills_Section").innerHTML = ''
for (menu of Grills_Section){
    var product = `<div class="col-lg-6 row g-3">
                        <div class="d-flex h-100">
                            <div class="flex-shrink-0">
                                <img class="img-fluid" src="${menu.product_img}" alt="" style="width: 150px; height:77%">
                                <h4 style="background: gray !important;" class="bg-dark text-primary p-2 m-0"><span> <img class="img-fluid mx-2" src="img/OIP-removebg-preview.png" style="width: 15px;"></span>${menu.product_P}</h4>
                            </div>
                            <div class="d-flex flex-column w-100 justify-content-center bg-secondary border-inner px-4">
                                <h5 class="text-uppercase">${menu.product_t}</h5>
                                <span>${menu.product_b}</span>
                                <h6 class="d-flex  justify-content-center mt-2">kcal ${menu.product_K}</h6>
                            </div>
                        </div>
                    </div>`
                document.getElementById("Grills_Section").innerHTML += product
}
// =======================================================================================