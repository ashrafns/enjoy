var shawarma_meat = [
  {
    product_t: "شـــاورما شـــامي لـــحم",
    product_b: " Shami Meat Shawarma ",
    product_img: "img/new/شـــاورما شـــامي لـــحم.png",
    product_P: "12",
    product_K: "773",
  },
  {
    product_t: "شـــاورما صـــامولي لـــحم",
    product_b: " Samoli Meat Shawarma",
    product_img: "img/new/شـــاورما صـــامولي لـــحم.png",
    product_P: "17",
    product_K: "850",
  },
  {
    product_t: "شـــاورما صـــاج لـــحم ",
    product_b: " Saj Meat Shawarma",
    product_img: "img/new/شـــاورما صـــاج لـــحم.png",
    product_P: "15",
    product_K: "844",
  },
  {
    product_t: "شـــاورما عـــربي لـــحم",
    product_b: "Arabic Meat Shawarma",
    product_img: "img/new/شـــاورما عـــربي لـــحم.png",
    product_P: "22",
    product_K: "500",
  },
  {
    product_t: "شـــاورما عـــربي لـــحم دبـــل",
    product_b: "Arabic Meat Shawarma Double",
    product_img: "img/new/شـــاورما عـــربي لـــحم دبـــل.png",
    product_P: "32",
    product_K: "796",
  },
  {
    product_t: "وجـــبة أصـــابع لـــحم",
    product_b: "Meat Fingers Meal",
    product_img: "img/new/وجـــبة أصـــابع لـــحم.png",
    product_P: "27",
    product_K: "740",
  },
  {
    product_t: "طـــبق شـــاورما لـــحم مع الأرز",
    product_b: " Shawarma Meal with Rice",
    product_img: "img/new/طـــبق شـــاورما لـــحم مع الأرز.png",
    product_P: "35",
    product_K: "590",
  },
  {
    product_t: " صـــحن فـــرط شـــاورما لـــحم",
    product_b: "Meat Shawarma (Plate)",
    product_img: "img/new/صـــحن فـــرط شـــاورما لـــحم.png",
    product_P: "40",
    product_K: "896",
  },
  {
    product_t: "نـــصف كـــيلو شـــاورما لـــحم",
    product_b: " Shawarma Meal with Rice",
    product_img: "img/new/نـــصف كـــيلو شـــاورما لـــحم.png",
    product_P: "65",
    product_K: "1435",
  },
  {
    product_t: " كـــيلو شـــاورما لـــحم",
    product_b: " Shawarma Meal with Rice",
    product_img: "img/new/كـــيلو شـــاورما لـــحم.png",
    product_P: "120",
    product_K: "2870",
  },
];
document.getElementById("shawarma_meat").innerHTML = "";
for (menu of shawarma_meat) {
  var product = `<div class="col-lg-2 row g-3 m-0 p-0 border-inner">
                        <div class="d-flex h-7" style="padding: 0 11px; margin-bottom: 11px;">
                            <div class="flex-shrink-0">
                                <img class="img-fluid" src="${menu.product_img}" alt="" style="width: 100px; height:67%">
                                <h5 style="background: #fff !important;" class="bg-dark text-primary p-1 m-0"><span> <img class="img-fluid mx-2" src="img/OIP-removebg-preview.png" style="width: 15px;"></span>${menu.product_P}</h5>
                            </div>
                            <div class="d-flex flex-column w-100 justify-content-center bg-secondary  px-4">
                                <h6 class="text-uppercase  m-0" style="color: #bd2026;">${menu.product_t}</h6>
                                <span style="font-weight: 500; color: #bd2026; font-size: 14px;">${menu.product_b}</span>
                                <h6 class="d-flex mt-0 justify-content-center">kcal ${menu.product_K}</h6>
                            </div>
                        </div>
                    </div>`;
  document.getElementById("shawarma_meat").innerHTML += product;
}
// ==================================== Chicken_Shawarma ==============================================================================
var Chicken_Shawarma = [
  {
    product_t: "شـــاورما شـــامي دجـــاج",
    product_b: "Shami Chicken Shawarma",
    product_img: "img/new/شـــاورما شـــامي دجـــاج.png",
    product_P: "11",
    product_K: "403",
  },
  {
    product_t: "شـــاورما صـــامولي دجـــاج",
    product_b: "Samoli Chicken Shawarma",
    product_img: "img/new/شـــاورما صـــامولي دجـــاج.png",
    product_P: "16",
    product_K: "450",
  },
  {
    product_t: "شـــاورما صـــاج دجـــاج",
    product_b: "Saj Chicken Shawarma",
    product_img: "img/new/شـــاورما صـــاج دجـــاج.png",
    product_P: "14",
    product_K: "600",
  },
  {
    product_t: "شـــاورما عـــربي دجـــاج",
    product_b: "Arabic Meat Shawarma",
    product_img: "img/new/شـــاورما عـــربي دجـــاج.png",
    product_P: "20",
    product_K: "480",
  },
  {
    product_t: "شـــاورما عـــربي دجـــاج دبـــل",
    product_b: "Arabic Chicken Shawarma Double",
    product_img: "img/new/شـــاورما عـــربي دجـــاج دبـــل.png",
    product_P: "30",
    product_K: "550",
  },
  {
    product_t: "وجـــبة أصـــابع دجـــاج",
    product_b: "Chicken Fingers Meal",
    product_img: "img/new/وجـــبة أصـــابع دجـــاج.png",
    product_P: "25",
    product_K: "592",
  },
  {
    product_t: "وجـــبة شـــاورما دجـــاج مع الأرز",
    product_b: "Chicken Shawarma Meal with Rice",
    product_img: "img/new/وجـــبة شـــاورما دجـــاج مع الأرز.png",
    product_P: "30",
    product_K: "531",
  },
  {
    product_t: "صـــحن فـــرط شـــاورما دجـــاج",
    product_b: "Chicken Shawarma (Plate)",
    product_img: "img/new/صـــحن فـــرط شـــاورما دجـــاج.png",
    product_P: "30",
    product_K: "662",
  },
  {
    product_t: "نـــصف كـــيلو شـــاورما دجـــاج",
    product_b: "Chicken Shawarma (Half Kilo)",
    product_img: "img/new/نـــصف كـــيلو شـــاورما دجـــاج.png",
    product_P: "55",
    product_K: "1390",
  },
  {
    product_t: " كـــيلو شـــاورما دجـــاج",
    product_b: " Shawarma Meal with Rice",
    product_img: "img/new/كـــيلو شـــاورما دجـــاج.png",
    product_P: "100",
    product_K: "2780",
  },
  {
    product_t: "خـــلطة شـــاورما إنـــجوي",
    product_b: "Enjoy Mix Shawarma",
    product_img: "img/new/خـــلطة شـــاورما إنـــجوي.png",
    product_P: "18",
    product_K: "1100",
  },
];
document.getElementById("Chicken_Shawarma").innerHTML = "";
for (menu of Chicken_Shawarma) {
  var product = `<div class="col-lg-2 row g-3 m-0 p-0 border-inner">
                        <div class="d-flex h-7" style="padding: 0 11px; margin-bottom: 11px;">
                            <div class="flex-shrink-0">
                                <img class="img-fluid" src="${menu.product_img}" alt="" style="width: 100px; height:67%">
                                <h5 style="background: #fff !important;" class="bg-dark text-primary p-1 m-0"><span> <img class="img-fluid mx-2" src="img/OIP-removebg-preview.png" style="width: 15px;"></span>${menu.product_P}</h5>
                            </div>
                            <div class="d-flex flex-column w-100 justify-content-center bg-secondary  px-4">
                                <h6 class="text-uppercase  m-0" style="color: #bd2026;">${menu.product_t}</h6>
                                <span style="font-weight: 500; color: #bd2026; font-size: 14px;">${menu.product_b}</span>
                                <h6 class="d-flex mt-0 justify-content-center">kcal ${menu.product_K}</h6>
                            </div>
                        </div>
                    </div>`;
  document.getElementById("Chicken_Shawarma").innerHTML += product;
}
// ================================== Grills_Section ========================================
var Grills_Section = [
  {
    product_t: "مـــشويّات مـــشكّلة (وجـــبة)",
    product_b: "Mixed Grills (Meal)",
    product_img: "img/new/مـــشويّات مـــشكّلة (وجـــبة).png",
    product_P: "40",
    product_K: "1187",
  },
  {
    product_t: "طـــبق كـــباب لـــحم",
    product_b: "Kebab Meat Dish",
    product_img: "img/new/طـــبق كـــباب لـــحم.png",
    product_P: "35",
    product_K: "1065",
  },
  {
    product_t: "طـــبق كـــباب دجـــاج",
    product_b: "Kebab Chicken Dish",
    product_img: "img/new/طـــبق كـــباب دجـــاج.png",
    product_P: "30",
    product_K: "1055",
  },
  {
    product_t: "طـــبق شـــيش طـــاووق",
    product_b: "Shish Tawook Dish",
    product_img: "img/new/طـــبق شـــيش طـــاووق.png",
    product_P: "30",
    product_K: "600",
  },
  {
    product_t: "طـــبق ريـــش",
    product_b: "Feathers Dish",
    product_img: "img/new/طـــبق ريـــش.png",
    product_P: "45",
    product_K: "617",
  },
  {
    product_t: "طـــبق أوصـــال",
    product_b: "Awsil Meat Dish",
    product_img: "img/new/طـــبق أوصـــال.png",
    product_P: "40",
    product_K: "751",
  },
  {
    product_t: "طـــبق عـــرايس لـــحم مـــارينا",
    product_b: "Arayes Meat Marina Dish",
    product_img: "img/new/طـــبق عـــرايس لـــحم مـــارينا.png",
    product_P: "30",
    product_K: "488",
  },
  {
    product_t: "وجـــبة كـــباب مع الأرز ",
    product_b: "Meal of Kebab with Rice",
    product_img: "img/new/وجـــبة كـــباب مع الأرز.png",
    product_P: "35",
    product_K: "608",
  },
  {
    product_t: "وجـــبة شيش مع الأرز",
    product_b: "Meal of Shish with Rice",
    product_img: "img/new/وجـــبة شيش مع الأرز.png",
    product_P: "30",
    product_K: "466",
  },
  {
    product_t: " نـــصف كـــيلو مـــشويّات مـــشكّلة",
    product_b: " Shawarma Meal with Rice",
    product_img: "img/new/نـــصف كـــيلو مـــشويّات مـــشكّلة.png",
    product_P: "75",
    product_K: "2175",
  },
  {
    product_t: "كـــيلو مـــشويّات مـــشكّلة",
    product_b: "  Mixed Grills (Kilo)",
    product_img: "img/new/كـــيلو مـــشويّات مـــشكّلة.png",
    product_P: "140",
    product_K: "4350",
  },
  {
    product_t: "نـــصف كـــيلو أوصـــال",
    product_b: " Joints (Half Kilo)",
    product_img: "img/new/خـــلطة شـــاورما إنـــجوي.png",
    product_P: "80",
    product_K: "2310",
  },
  {
    product_t: "كـــيلو أوصـــال",
    product_b: "Joints (Kilo)",
    product_img: "img/new/كـــيلو أوصـــال.png",
    product_P: "150",
    product_K: "4600",
  },
  {
    product_t: "نـــصف كـــيلو كـــباب لـــحم",
    product_b: "Kebab Meat (Half Kilo)",
    product_img: "img/new/نـــصف كـــيلو كـــباب لـــحم.png",
    product_P: "75",
    product_K: "2130",
  },
  {
    product_t: "كـــيلو كـــباب لـــحم",
    product_b: "Kebab Meat (Kilo)",
    product_img: "img/new/كـــيلو كـــباب لـــحم.png",
    product_P: "140",
    product_K: "4260",
  },
  {
    product_t: "نـــصف كـــيلو شـــيش طـــاووق",
    product_b: "Shish Tawook (Half Kilo)",
    product_img: "img/new/نـــصف كـــيلو شـــيش طـــاووق.png",
    product_P: "70",
    product_K: "493",
  },
  {
    product_t: "كـــيلو شـــيش طـــاووق",
    product_b: "Shish Tawook (Kilo)",
    product_img: "img/new/كـــيلو شـــيش طـــاووق.png",
    product_P: "130",
    product_K: "1000",
  },
  {
    product_t: "نـــصف كـــيلو كـــباب دجـــاج",
    product_b: "Kebab Chicken (Half Kilo)",
    product_img: "img/new/نـــصف كـــيلو كـــباب دجـــاج.png",
    product_P: "70",
    product_K: "2210",
  },
  {
    product_t: "كـــيلو كـــباب دجـــاج",
    product_b: "Kebab Chicken (Kilo)",
    product_img: "img/new/كـــيلو كـــباب دجـــاج.png",
    product_P: "130",
    product_K: "4220",
  },
  {
    product_t: "نـــصف كـــيلو ريـــش",
    product_b: "Feathers (Half Kilo)",
    product_img: "img/new/نـــصف كـــيلو ريـــش.png",
    product_P: "80",
    product_K: "1770",
  },
  {
    product_t: "ســـاندويتش دجـــاج شـــيش",
    product_b: "Sandwich Chicken Shish",
    product_img: "img/new/ســـاندويتش دجـــاج شـــيش.png",
    product_P: "15",
    product_K: "380",
  },
  {
    product_t: "ســـاندويتش كـــباب دجـــاج",
    product_b: "Sandwich Chicken Kebab",
    product_img: "img/new/ســـاندويتش كـــباب دجـــاج.png",
    product_P: "15",
    product_K: "215",
  },
  {
    product_t: "كـــباب لـــحم",
    product_b: " Meat Kebab",
    product_img: "img/new/كـــباب لـــحم.png",
    product_P: "16",
    product_K: "223",
  },
  {
    product_t: "أوصـــال",
    product_b: "Awsal",
    product_img: "img/new/أوصـــال.png",
    product_P: "16",
    product_K: "323",
  },
  {
    product_t: "وجـــبة لـــحم بالـــصينيّة مع الخـــضار",
    product_b: "Meat with Vegetables (Meal)",
    product_img: "img/new/وجـــبة لـــحم بالـــصينيّة مع الخـــضار.png",
    product_P: "40",
    product_K: "843",
  },
  {
    product_t: "نص كيلو لـــحم بالـــصينيّة مع الخـــضار",
    product_b: "Meat with Vegetables (Half Kilo)",
    product_img: "img/new/نص كيلو لـــحم بالـــصينيّة مع الخـــضار.png",
    product_P: "65",
    product_K: "1425",
  },
  {
    product_t: "كيلو لـــحم بالـــصينيّة مع الخـــضار",
    product_b: "Meat with Vegetables ( Kilo)",
    product_img: "img/new/وجـــبة لـــحم بالـــصينيّة مع الخـــضار.png",
    product_P: "130",
    product_K: "2830",
  },
  {
    product_t: "لـــحم بالـــصينيّة",
    product_b: "Plate of Meat (Meal) ",
    product_img: "img/new/لـــحم بالـــصينيّة.png",
    product_P: "40",
    product_K: "843",
  },
  {
    product_t: "نـــصف كـــيلو لـــحمه بالـــصينيّة",
    product_b: "Meat (Half Kilo)",
    product_img: "img/new/نـــصف كـــيلو لـــحمه بالـــصينيّة.png",
    product_P: "65",
    product_K: "1400",
  },
  {
    product_t: "كيلو لـــحمه بالـــصينيّة",
    product_b: "Plate of Meat (Kilo)",
    product_img: "img/new/نـــصف كـــيلو لـــحمه بالـــصينيّة.png",
    product_P: "130",
    product_K: "2815",
  },
  {
    product_t: "كـــيلو لـــحمه مع طـــحينة",
    product_b: "Meat (Half Kilo)",
    product_img: "img/new/كـــيلو لـــحمه مع طـــحينة.png",
    product_P: "130",
    product_K: "2750",
  },
  {
    product_t: "نـــصف كـــيلو لـــحمه مع طـــحينة",
    product_b: "Meat with Tahini (Half Kilo)",
    product_img: "img/new/نـــصف كـــيلو لـــحمه مع طـــحينة.png",
    product_P: "65",
    product_K: "1370",
  },
  {
    product_t: "وجـــبة لـــحمه مع طـــحينة",
    product_b: "Meat with Tahini (Meal)",
    product_img: "img/new/نـــصف كـــيلو لـــحمه بالـــصينيّة.png",
    product_P: "40",
    product_K: "687",
  },
  {
    product_t: "كـــيلو كـــباب هـــندي",
    product_b: "Indian Kebab (Kilo)",
    product_img: "img/new/كـــيلو كـــباب هـــندي.png",
    product_P: "120",
    product_K: "2230",
  },
  {
    product_t: "نـــصف كـــيلو كـــباب هـــندي",
    product_b: "Indian Kebab (Half Kilo)",
    product_img: "img/new/نـــصف كـــيلو كـــباب هـــندي.png",
    product_P: "65",
    product_K: "1120",
  },
  {
    product_t: "كـــباب هـــندي - وجـــبة",
    product_b: "Indian Kebab (Meal)",
    product_img: "img/new/كـــباب هـــندي - وجـــبة.png",
    product_P: "40",
    product_K: "550",
  },
];
document.getElementById("Grills_Section").innerHTML = "";
for (menu of Grills_Section) {
  var product = `<div class="col-lg-2 row g-3 m-0 p-0 border-inner">
  <div class="d-flex h-7" style="padding: 0 11px; margin-bottom: 11px;">
      <div class="flex-shrink-0">
          <img class="img-fluid" src="${menu.product_img}" alt="" style="width: 100px; height:67%">
          <h5 style="background: #fff !important;" class="bg-dark text-primary p-1 m-0"><span> <img class="img-fluid mx-2" src="img/OIP-removebg-preview.png" style="width: 15px;"></span>${menu.product_P}</h5>
      </div>
      <div class="d-flex flex-column w-100 justify-content-center bg-secondary  px-4">
          <h6 class="text-uppercase  m-0" style="color: #bd2026;">${menu.product_t}</h6>
          <span style="font-weight: 500; color: #bd2026; font-size: 14px;">${menu.product_b}</span>
          <h6 class="d-flex mt-0 justify-content-center">kcal ${menu.product_K}</h6>
      </div>
  </div>
</div>`;
  document.getElementById("Grills_Section").innerHTML += product;
}
// ======================= Hot Appetizers Section ================================================================
var Hot_Appetizers_Section = [
  {
    product_t: "حـــبّة كـــبّة مـــقليّة",
    product_b: "Fried Kibbeh",
    product_img: "img/new/حـــبّة كـــبّة مـــقليّة.png",
    product_P: "4",
    product_K: "160",
  },
  {
    product_t: "حـــبّة كـــبّة مـــشويّة",
    product_b: "Grilled Kibbeh",
    product_img: "img/new/حـــبّة كـــبّة مـــشويّة.png",
    product_P: "7",
    product_K: "152",
  },
  {
    product_t: "بـــطاطا مـــقليّة - حـــجم كـــبير",
    product_b: "French Fries (Large)",
    product_img: "img/new/بـــطاطا مـــقليّة - حـــجم كـــبير.png",
    product_P: "10",
    product_K: "377",
  },
  {
    product_t: "بـــطاطا مـــقليّة - حـــجم مـــتوسّط",
    product_b: "French Fries (Medium)",
    product_img: "img/new/بـــطاطا مـــقليّة - حـــجم مـــتوسّط.png",
    product_P: "7",
    product_K: "259",
  },
  {
    product_t: "بـــطاطا مـــقليّة - حـــجم صـــغير",
    product_b: "French Fries (Smal)",
    product_img: "img/new/بـــطاطا مـــقليّة - حـــجم صـــغير.png",
    product_P: "5",
    product_K: "196",
  },
];
document.getElementById("Hot_Appetizers_Section").innerHTML = "";
for (menu of Hot_Appetizers_Section) {
  var product = `<div class="col-lg-2 row g-3 m-0 p-0 border-inner">
    <div class="d-flex h-7" style="padding: 0 11px; margin-bottom: 11px;">
        <div class="flex-shrink-0">
            <img class="img-fluid" src="${menu.product_img}" alt="" style="width: 100px; height:67%">
            <h5 style="background: #fff !important;" class="bg-dark text-primary p-1 m-0"><span> <img class="img-fluid mx-2" src="img/OIP-removebg-preview.png" style="width: 15px;"></span>${menu.product_P}</h5>
        </div>
        <div class="d-flex flex-column w-100 justify-content-center bg-secondary  px-4">
            <h6 class="text-uppercase  m-0" style="color: #bd2026;">${menu.product_t}</h6>
            <span style="font-weight: 500; color: #bd2026; font-size: 14px;">${menu.product_b}</span>
            <h6 class="d-flex mt-0 justify-content-center">kcal ${menu.product_K}</h6>
        </div>
    </div>
</div>`;
  document.getElementById("Hot_Appetizers_Section").innerHTML += product;
}
// ======================== Cold Appetizers Section ===============================================================
var Cold_Appetizers_Section = [
  {
    product_t: "تـــبّوله",
    product_b: "Tabbouleh",
    product_img: "img/new/تـــبّوله.png",
    product_P: "15",
    product_K: "70",
  },
  {
    product_t: "فـــتّوش",
    product_b: "Fattoush",
    product_img: "img/new/فـــتّوش.png",
    product_P: "15",
    product_K: "132",
  },
  {
    product_t: "ســـلطة خـــضراء",
    product_b: "Green Salad",
    product_img: "img/new/ســـلطة خـــضراء.png",
    product_P: "15",
    product_K: "80",
  },
  {
    product_t: "ســـلطة ســـيزر",
    product_b: "Cesar Salad",
    product_img: "img/new/ســـلطة ســـيزر.png",
    product_P: "20",
    product_K: "281",
  },
  {
    product_t: "ورق عـــنب 10ح ",
    product_b: "Grape Leaves 10p",
    product_img: "img/new/ورق عـــنب 10ح.png",
    product_P: "18",
    product_K: "250",
  },
  {
    product_t: "ورق عـــنب 5ح",
    product_b: "Grape Leaves 5p",
    product_img: "img/new/ورق عـــنب 5ح.png",
    product_P: "10",
    product_K: "125",
  },
  {
    product_t: "حـــمص",
    product_b: "Hummus",
    product_img: "img/new/حـــمص.png",
    product_P: "12",
    product_K: "490",
  },
  {
    product_t: "بـــابا غـــنوج",
    product_b: "Baba Ghanoush",
    product_img: "img/new/بـــابا غـــنوج.png",
    product_P: "12",
    product_K: "120",
  },
  {
    product_t: "مـــتبّل",
    product_b: "Mutabal",
    product_img: "img/new/مـــتبّل.png",
    product_P: "12",
    product_K: "145",
  },
  {
    product_t: "مـــقبّلات مـــشكّلة",
    product_b: " Mixed Appetizers",
    product_img: "img/new/مـــقبّلات مـــشكّلة.png",
    product_P: "25",
    product_K: "212",
  },
];
document.getElementById("Cold_Appetizers_Section").innerHTML = "";
for (menu of Cold_Appetizers_Section) {
  var product = `<div class="col-lg-2 row g-3 m-0 p-0 border-inner">
    <div class="d-flex h-7" style="padding: 0 11px; margin-bottom: 11px;">
        <div class="flex-shrink-0">
            <img class="img-fluid" src="${menu.product_img}" alt="" style="width: 100px; height:67%">
            <h5 style="background: #fff !important;" class="bg-dark text-primary p-1 m-0"><span> <img class="img-fluid mx-2" src="img/OIP-removebg-preview.png" style="width: 15px;"></span>${menu.product_P}</h5>
        </div>
        <div class="d-flex flex-column w-100 justify-content-center bg-secondary  px-4">
            <h6 class="text-uppercase  m-0" style="color: #bd2026;">${menu.product_t}</h6>
            <span style="font-weight: 500; color: #bd2026; font-size: 14px;">${menu.product_b}</span>
            <h6 class="d-flex mt-0 justify-content-center">kcal ${menu.product_K}</h6>
        </div>
    </div>
</div>`;
  document.getElementById("Cold_Appetizers_Section").innerHTML += product;
}
// ========================= Hot_Section ==============================================================
var Hot_Section = [
  {
    product_t: "أرز",
    product_b: "Zinger",
    product_img: "img/new/أرز.png",
    product_P: "18",
    product_K: "550",
  },
  {
    product_t: "شـــوربة عـــدس",
    product_b: " Mixed Appetizers",
    product_img: "img/new/شـــوربة عـــدس.png",
    product_P: "6",
    product_K: "175",
  },
];
document.getElementById("Hot_Section").innerHTML = "";
for (menu of Hot_Section) {
  var product = `<div class="col-lg-2 row g-3 m-0 p-0 border-inner">
    <div class="d-flex h-7" style="padding: 0 11px; margin-bottom: 11px;">
        <div class="flex-shrink-0">
            <img class="img-fluid" src="${menu.product_img}" alt="" style="width: 100px; height:67%">
            <h5 style="background: #fff !important;" class="bg-dark text-primary p-1 m-0"><span> <img class="img-fluid mx-2" src="img/OIP-removebg-preview.png" style="width: 15px;"></span>${menu.product_P}</h5>
        </div>
        <div class="d-flex flex-column w-100 justify-content-center bg-secondary  px-4">
            <h6 class="text-uppercase  m-0" style="color: #bd2026;">${menu.product_t}</h6>
            <span style="font-weight: 500; color: #bd2026; font-size: 14px;">${menu.product_b}</span>
            <h6 class="d-flex mt-0 justify-content-center">kcal ${menu.product_K}</h6>
        </div>
    </div>
</div>`;
  document.getElementById("Hot_Section").innerHTML += product;
}
// ======================= Pastries ================================================================
var Pastries = [
  {
    product_t: "شـــرحات على العـــجين - وجـــبة",
    product_b: " Slice In Dough (Meal)",
    product_img: "img/new/شـــرحات على العـــجين - وجـــبة.png",
    product_P: "40",
    product_K: "210",
  },
  {
    product_t: "نـــصف كـــيلو شـــرحات على العـــجين",
    product_b: " Slice In Dough (Kilo)",
    product_img: "img/new/نـــصف كـــيلو شـــرحات على العـــجين.png",
    product_P: "170",
    product_K: "2100",
  },
  {
    product_t: "مـــجرمشة ســـادة - وجـــبة",
    product_b: "Plain Majramish (Meal)",
    product_img: "img/new/مـــجرمشة ســـادة - وجـــبة.png",
    product_P: "40",
    product_K: "350",
  },
  {
    product_t: "نـــصف كـــيلو مـــجرمشة ســـادة",
    product_b: "Plain Majramish (Half Kilo)",
    product_img: "img/new/نـــصف كـــيلو مـــجرمشة ســـادة.png",
    product_P: "90",
    product_K: "1700",
  },
  {
    product_t: "كـــيلو مـــجرمشة ســـادة",
    product_b: "Plain Majramish (Kilo)",
    product_img: "img/new/كـــيلو مـــجرمشة ســـادة.png",
    product_P: "170",
    product_K: "3450",
  },
  {
    product_t: "مـــجرمشة مع الخـــضار - وجـــبة",
    product_b: "Majramish with Vegetables (Meal)",
    product_img: "img/new/مـــجرمشة مع الخـــضار - وجـــبة.png",
    product_P: "40",
    product_K: "368",
  },
  {
    product_t: "نـــصف كـــيلو مـــجرمشة مع الخـــضار",
    product_b: "Majramish with Vegetables (Half Kilo)",
    product_img: "img/new/نـــصف كـــيلو مـــجرمشة مع الخـــضار.png",
    product_P: "90",
    product_K: "1840",
  },
  {
    product_t: " كـــيلو مـــجرمشة مع الخـــضار",
    product_b: "Majramish with Vegetables (Kilo)",
    product_img: "img/new/كـــيلو مـــجرمشة مع الخـــضار.png",
    product_P: "170",
    product_K: "3640",
  },
  {
    product_t: "صـــفيحة دبـــس رمـــان - وجـــبة",
    product_b: "Pomegranate Molasses Sfeeha (Meal)",
    product_img: "img/new/صـــفيحة دبـــس رمـــان - وجـــبة.png",
    product_P: "35",
    product_K: "340",
  },
  {
    product_t: "صـــفيحة أرمـــانيّة - وجـــبة",
    product_b: "Pomegranate Molasses Sfeeha (Half Kilo)",
    product_img: "img/new/صـــفيحة أرمـــانيّة - وجـــبة.png",
    product_P: "75",
    product_K: "1650",
  },
  {
    product_t: " كـــيلو صـــفيحة دبـــس رمـــان",
    product_b: "Pomegranate Molasses Sfeeha (Half Kilo)",
    product_img: "img/new/كـــيلو صـــفيحة دبـــس رمـــان.png",
    product_P: "140",
    product_K: "3400",
  },
  {
    product_t: "صـــفيحة بـــندورة - وجـــبة",
    product_b: " Tomato Sfeeha (Meal)",
    product_img: "img/new/نـــصف كـــيلو صـــفيحة بـــندورة.png",
    product_P: "35",
    product_K: "280",
  },
  {
    product_t: "نـــصف كـــيلو صـــفيحة بـــندورة",
    product_b: " Tomato Sfeeha (Half Kil+D97:D98o)",
    product_img: "img/new/نـــصف كـــيلو صـــفيحة بـــندورة.png",
    product_P: "75",
    product_K: "1400",
  },
  {
    product_t: "كـــيلو صـــفيحة بـــندورة",
    product_b: "Tomato Sfeeha (Kilo)",
    product_img: "img/new/كـــيلو صـــفيحة بـــندورة.png",
    product_P: "140",
    product_K: "2850",
  },
  {
    product_t: "صـــفيحة أرمـــانيّة - وجـــبة",
    product_b: " Armani Sfeeha (Meal)",
    product_img: "img/new/صـــفيحة أرمـــانيّة - وجـــبة.png",
    product_P: "35",
    product_K: "175",
  },
  {
    product_t: "نـــصف كـــيلو صـــفيحة أرمـــانيّة",
    product_b: "Armani Sfeeha (Half Kilo)",
    product_img: "img/new/نـــصف كـــيلو صـــفيحة أرمـــانيّة.png",
    product_P: "75",
    product_K: "1320",
  },
  {
    product_t: "كـــيلو صـــفيحة أرمـــانيّة",
    product_b: "Armani Sfeeha (Kilo)",
    product_img: "img/new/كـــيلو صـــفيحة أرمـــانيّة.png",
    product_P: "140",
    product_K: "2650",
  },
  {
    product_t: "بـــيتزا مـــارغريتا",
    product_b: "Margherita Pizza",
    product_img: "img/new/بـــيتزا مـــارغريتا.png",
    product_P: "18",
    product_K: "2448",
  },
  {
    product_t: "بـــيتزا الفـــصول الأربـــعة",
    product_b: "Four Seasons Pizza",
    product_img: "img/new/بـــيتزا الفـــصول الأربـــعة.png",
    product_P: "18",
    product_K: "2747",
  },
  {
    product_t: "بـــيتزا خـــضار",
    product_b: "Vegetables Pizza",
    product_img: "img/new/بـــيتزا خـــضار.png",
    product_P: "18",
    product_K: "2160",
  },
  {
    product_t: "مـــنقوشة زعـــتر",
    product_b: " Zaatar Manoushe",
    product_img: "img/new/مـــنقوشة زعـــتر.png",
    product_P: "10",
    product_K: "357",
  },
  {
    product_t: "مـــنقوشة مـــحمّره قـــشقوان",
    product_b: "Muhammara Kashkaval Manoushe",
    product_img: "img/new/مـــنقوشة مـــحمّره قـــشقوان.png",
    product_P: "14",
    product_K: "422",
  },
  {
    product_t: "مـــنقوشة مـــحمّره",
    product_b: "Muhammara Manoushe",
    product_img: "img/new/مـــنقوشة مـــحمّره.png",
    product_P: "12",
    product_K: "371",
  },
  {
    product_t: "مـــنقوشة قـــشقوان",
    product_b: "Kashkaval Manoushe",
    product_img: "img/new/مـــنقوشة قـــشقوان.png",
    product_P: "13",
    product_K: "400",
  },
  {
    product_t: "مـــنقوشة عـــكاوي وقـــشقوان",
    product_b: "Akkawi & Kashkaval Manoushe",
    product_img: "img/new/مـــنقوشة عـــكاوي وقـــشقوان.png",
    product_P: "12",
    product_K: "494",
  },
  {
    product_t: "جـــبنة عـــكاوي",
    product_b: "Akkawi Cheese",
    product_img: "img/new/جـــبنة عـــكاوي.png",
    product_P: "14",
    product_K: "458",
  },
  {
    product_t: "مـــنقوشة لـــبنه وعـــسل",
    product_b: "Labaneh & Honey Manoushe",
    product_img: "img/new/مـــنقوشة لـــبنه وعـــسل.png",
    product_P: "11",
    product_K: "360",
  },
  {
    product_t: "مـــنقوشة مـــرتديلا مع الجبن",
    product_b: "Mortadella & Cheese Manoushe",
    product_img: "img/new/مـــنقوشة مـــرتديلا مع الجبن.png",
    product_P: "14",
    product_K: "898",
  },
  {
    product_t: "مـــنقوشة لـــبنه وزعـــتر",
    product_b: "Labaneh & Zaatar Manoushe",
    product_img: "img/new/مـــنقوشة لـــبنه وزعـــتر.png",
    product_P: "11",
    product_K: "576",
  },
  {
    product_t: "مـــنقوشة لـــحم ســـاده",
    product_b: "Plain Meat Manoushe",
    product_img: "img/new/مـــنقوشة لـــحم ســـاده.png",
    product_P: "16",
    product_K: "876",
  },
  {
    product_t: "مـــنقوشة لـــحم مع الجـــبنه",
    product_b: "Meat & Cheese Manoushe",
    product_img: "img/new/مـــنقوشة لـــحم مع الجـــبنه.png",
    product_P: "18",
    product_K: "838",
  },
  {
    product_t: "مـــنقوشة لـــبنه",
    product_b: "Manoushe Labna",
    product_img: "img/new/مـــنقوشة لـــبنه.png",
    product_P: "10",
    product_K: "518",
  },
  {
    product_t: "مـــنقوشة زعـــتر بالخـــضار",
    product_b: "Manoushe Vegetables with Zaatar",
    product_img: "img/new/مـــنقوشة زعـــتر بالخـــضار.png",
    product_P: "12",
    product_K: "400",
  },
  {
    product_t: "مـــنقوشة ســـبانخ",
    product_b: "Manoushe Spinach",
    product_img: "img/new/مـــنقوشة ســـبانخ.png",
    product_P: "10",
    product_K: "432",
  },
  {
    product_t: "شـــختور جـــبنه",
    product_b: "Shaktoor Cheese",
    product_img: "img/new/شـــختور جـــبنه.png",
    product_P: "3",
    product_K: "580",
  },
];
document.getElementById("Pastries").innerHTML = "";
for (menu of Pastries) {
  var product = `<div class="col-lg-2 row g-3 m-0 p-0 border-inner">
    <div class="d-flex h-7" style="padding: 0 11px; margin-bottom: 11px;">
        <div class="flex-shrink-0">
            <img class="img-fluid" src="${menu.product_img}" alt="" style="width: 100px; height:67%">
            <h5 style="background: #fff !important;" class="bg-dark text-primary p-1 m-0"><span> <img class="img-fluid mx-2" src="img/OIP-removebg-preview.png" style="width: 15px;"></span>${menu.product_P}</h5>
        </div>
        <div class="d-flex flex-column w-100 justify-content-center bg-secondary  px-4">
            <h6 class="text-uppercase  m-0" style="color: #bd2026;">${menu.product_t}</h6>
            <span style="font-weight: 500; color: #bd2026; font-size: 14px;">${menu.product_b}</span>
            <h6 class="d-flex mt-0 justify-content-center">kcal ${menu.product_K}</h6>
        </div>
    </div>
</div>`;
  document.getElementById("Pastries").innerHTML += product;
}
// ============================= Western Food ==========================================================
var Western_Food = [
  {
    product_t: "زنـــجر",
    product_b: "Rice",
    product_img: "img/new/زنـــجر.png",
    product_P: "8",
    product_K: "130",
  },
  {
    product_t: "كـــرسبي",
    product_b: "Crispy",
    product_img: "img/new/كـــرسبي.png",
    product_P: "18",
    product_K: "780",
  },
  {
    product_t: "بـــرجر لـــحم",
    product_b: "Beef Burger",
    product_img: "img/new/بـــرجر لـــحم.png",
    product_P: "20",
    product_K: "701",
  },
  {
    product_t: "بـــرجر دجـــاج",
    product_b: "Chicken Burger",
    product_img: "img/new/بـــرجر دجـــاج.png",
    product_P: "20",
    product_K: "520",
  },
  {
    product_t: "بـــرجر شـــاورما",
    product_b: "Burger Shawarma",
    product_img: "img/new/بـــرجر شـــاورما.png",
    product_P: "18",
    product_K: "788",
  },
  {
    product_t: "مـــكسيكي",
    product_b: "Mexican",
    product_img: "img/new/مـــكسيكي.png",
    product_P: "18",
    product_K: "974",
  },
  {
    product_t: "فـــرانسيسكو",
    product_b: "Francisco",
    product_img: "img/new/فـــرانسيسكو.png",
    product_P: "18",
    product_K: "607",
  },
  {
    product_t: "بـــريوش شـــاورما",
    product_b: "Brioche Shawarma",
    product_img: "img/new/بـــريوش شـــاورما.png",
    product_P: "18",
    product_K: "918",
  },
  {
    product_t: "بـــيستو",
    product_b: "Pesto",
    product_img: "img/new/بـــيستو.png",
    product_P: "18",
    product_K: "492",
  },
  {
    product_t: "فـــتّة شـــاورما",
    product_b: "Fataa Shawarma",
    product_img: "img/new/فـــتّة شـــاورما.png",
    product_P: "18",
    product_K: "870",
  },
  {
    product_t: "كـــريسبي رول",
    product_b: "Crispy Roll",
    product_img: "img/new/كـــريسبي رول.png",
    product_P: "20",
    product_K: "1353",
  },
  {
    product_t: "كـــاساديا",
    product_b: "Quesadilla",
    product_img: "img/new/كـــاساديا.png",
    product_P: "22",
    product_K: "486",
  },
];
document.getElementById("Western_Food").innerHTML = "";
for (menu of Western_Food) {
  var product = `<div class="col-lg-2 row g-3 m-0 p-0 border-inner">
    <div class="d-flex h-7" style="padding: 0 11px; margin-bottom: 11px;">
        <div class="flex-shrink-0">
            <img class="img-fluid" src="${menu.product_img}" alt="" style="width: 100px; height:67%">
            <h5 style="background: #fff !important;" class="bg-dark text-primary p-1 m-0"><span> <img class="img-fluid mx-2" src="img/OIP-removebg-preview.png" style="width: 15px;"></span>${menu.product_P}</h5>
        </div>
        <div class="d-flex flex-column w-100 justify-content-center bg-secondary  px-4">
            <h6 class="text-uppercase  m-0" style="color: #bd2026;">${menu.product_t}</h6>
            <span style="font-weight: 500; color: #bd2026; font-size: 14px;">${menu.product_b}</span>
            <h6 class="d-flex mt-0 justify-content-center">kcal ${menu.product_K}</h6>
        </div>
    </div>
</div>`;
  document.getElementById("Western_Food").innerHTML += product;
}
// ======================= Drinks ================================================================
var Drinks = [
  {
    product_t: "مـــشروبات غـــازيّة",
    product_b: "Soft Drinks",
    product_img: "img/new/مـــشروبات غـــازيّة.png",
    product_P: "4",
    product_K: "170",
  },
  {
    product_t: "مـــاء",
    product_b: "Water",
    product_img: "img/new/مـــاء.png",
    product_P: "2",
    product_K: "0",
  },
  {
    product_t: "كـــوكتيل",
    product_b: "Cocktail",
    product_img: "img/new/كـــوكتيل.png",
    product_P: "16",
    product_K: "124",
  },
  {
    product_t: "مـــانجه",
    product_b: "Mango",
    product_img: "img/new/مـــانجه.png",
    product_P: "14",
    product_K: "60",
  },
  {
    product_t: "جـــوافة",
    product_b: "Guava",
    product_img: "img/new/جـــوافة.png",
    product_P: "12",
    product_K: "68",
  },
  {
    product_t: "فـــراولة",
    product_b: "Strawberry",
    product_img: "img/new/فـــراولة.png",
    product_P: "12",
    product_K: "33",
  },
  {
    product_t: "رمـــان",
    product_b: "Pomegranate",
    product_img: "img/new/رمـــان.png",
    product_P: "14",
    product_K: "83",
  },
  {
    product_t: "بـــرتقال",
    product_b: "Orange",
    product_img: "img/new/بـــرتقال.png",
    product_P: "14",
    product_K: "47",
  },
  {
    product_t: "لـــيمون نـــعناع",
    product_b: "Lemon Mint",
    product_img: "img/new/لـــيمون نـــعناع.png",
    product_P: "12",
    product_K: "50",
  },
  {
    product_t: "لـــبن عـــيران",
    product_b: "Yogurt Ayran",
    product_img: "img/new/لـــبن عـــيران.png",
    product_P: "6",
    product_K: "30",
  },
];
document.getElementById("Drinks").innerHTML = "";
for (menu of Drinks) {
  var product = `<div class="col-lg-2 row g-3 m-0 p-0 border-inner">
    <div class="d-flex h-7" style="padding: 0 11px; margin-bottom: 11px;">
        <div class="flex-shrink-0">
            <img class="img-fluid" src="${menu.product_img}" alt="" style="width: 100px; height:67%">
            <h5 style="background: #fff !important;" class="bg-dark text-primary p-1 m-0"><span> <img class="img-fluid mx-2" src="img/OIP-removebg-preview.png" style="width: 15px;"></span>${menu.product_P}</h5>
        </div>
        <div class="d-flex flex-column w-100 justify-content-center bg-secondary  px-4">
            <h6 class="text-uppercase  m-0" style="color: #bd2026;">${menu.product_t}</h6>
            <span style="font-weight: 500; color: #bd2026; font-size: 14px;">${menu.product_b}</span>
            <h6 class="d-flex mt-0 justify-content-center">kcal ${menu.product_K}</h6>
        </div>
    </div>
</div>`;
  document.getElementById("Drinks").innerHTML += product;
}
// ======================= ================================================================
