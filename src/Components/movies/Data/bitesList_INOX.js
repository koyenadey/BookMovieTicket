const bites = [
    {
        id: "I001",
        hallName: "INOX Cinema",
        biteType: "vegetarian",
        biteTypeImage: "https://www.clipartmax.com/png/middle/299-2998556_vegetarian-food-symbol-icon-non-veg-symbol-png.png",
        biteImage: "https://in.bmscdn.com/fnb/v3/xxhdpi/1020011_17082018145045.png",
        biteHeader: "Regular Coke 810ml",
        biteSubHeader: "Regular Coke (810ml | 238 Kcal)",
        bitePrice: "₹280",
        category: "beverages"
    },
    {
        id: "I002",
        hallName: "INOX Cinema",
        biteType: "vegetarian",
        biteTypeImage: "https://www.clipartmax.com/png/middle/299-2998556_vegetarian-food-symbol-icon-non-veg-symbol-png.png",
        biteImage: "https://in.bmscdn.com/fnb/v3/xxhdpi/1020011_17082018145045.png",
        biteHeader: "Medium Coke 675ml",
        biteSubHeader: "Medium Coke (675ml | 297 Kcal)",
        bitePrice: "₹300",
        category: "beverages"
    },
    {
        id: "I003",
        hallName: "INOX Cinema",
        biteType: "vegetarian",
        biteTypeImage: "https://www.clipartmax.com/png/middle/299-2998556_vegetarian-food-symbol-icon-non-veg-symbol-png.png",
        biteImage: "https://in.bmscdn.com/fnb/v3/xxhdpi/1020011_17082018145045.png",
        biteHeader: "Large Coke 810ml",
        biteSubHeader: "Large Coke (810ml | 356 Kcal)",
        bitePrice: "₹320",
        category: "beverages"
    },
    {
        id: "I004",
        hallName: "INOX Cinema",
        biteType: "vegetarian",
        biteTypeImage: "https://www.clipartmax.com/png/middle/299-2998556_vegetarian-food-symbol-icon-non-veg-symbol-png.png",
        biteImage: "https://in.bmscdn.com/fnb/v3/xxhdpi/1020006_06082018135441.png",
        biteHeader: "Jalapeno Nachos With Cheese & Salsa",
        biteSubHeader: "Jalapeno Nachos With Cheese & Salsa (180g | 575 Kcal)",
        bitePrice: "₹300",
        category: "snacks"
    },
    {
        id: "I005",
        hallName: "INOX Cinema",
        biteType: "vegetarian",
        biteTypeImage: "https://www.clipartmax.com/png/middle/299-2998556_vegetarian-food-symbol-icon-non-veg-symbol-png.png",
        biteImage: "https://in.bmscdn.com/fnb/v3/xxhdpi/2000095_09072021113304.png",
        biteHeader: "Regular Tub Salted Popcorn 90g",
        biteSubHeader: "Regular Tub Salted Popcorn (90g | 281 Kcal)",
        bitePrice: "₹330",
        category: "popcorn"
    },
    {
        id: "I006",
        hallName: "INOX Cinema",
        biteType: "vegetarian",
        biteTypeImage: "https://www.clipartmax.com/png/middle/299-2998556_vegetarian-food-symbol-icon-non-veg-symbol-png.png",
        biteImage: "https://in.bmscdn.com/fnb/v3/xxhdpi/2000095_09072021113304.png",
        biteHeader: "Medium Tub Salted Popcorn 135g",
        biteSubHeader: "Medium Tub Salted Popcorn (135g | 422 Kcal)",
        bitePrice: "₹410",
        category: "popcorn"
    },
    {
        id: "I007",
        hallName: "INOX Cinema",
        biteType: "vegetarian",
        biteTypeImage: "https://www.clipartmax.com/png/middle/299-2998556_vegetarian-food-symbol-icon-non-veg-symbol-png.png",
        biteImage: "https://in.bmscdn.com/fnb/v3/xxhdpi/2000095_09072021113304.png",
        biteHeader: "Large Tub Salted Popcorn 240g",
        biteSubHeader: "Large Tub Salted Popcorn (240g | 750 Kcal)",
        bitePrice: "₹490",
        category: "popcorn"
    },
    {
        id: "I008",
        hallName: "INOX Cinema",
        biteType: "vegetarian",
        biteTypeImage: "https://www.clipartmax.com/png/middle/299-2998556_vegetarian-food-symbol-icon-non-veg-symbol-png.png",
        biteImage: "https://in.bmscdn.com/fnb/v3/xxhdpi/2000095_09072021113304.png",
        biteHeader: "Regular Tub Cheese Popcorn 110g",
        biteSubHeader: "Regular Tub Cheese Popcorn (110g | 333 Kcal)",
        bitePrice: "₹360",
        category: "popcorn"
    },
    {
        id: "I009",
        hallName: "INOX Cinema",
        biteType: "vegetarian",
        biteTypeImage: "https://www.clipartmax.com/png/middle/299-2998556_vegetarian-food-symbol-icon-non-veg-symbol-png.png",
        biteImage: "https://in.bmscdn.com/fnb/v3/xxhdpi/2000095_09072021113304.png",
        biteHeader: "Medium Tub Cheese Popcorn 165g",
        biteSubHeader: "Medium Tub Cheese Popcorn (165g | 500 Kcal)",
        bitePrice: "₹360",
        category: "popcorn"
    },
    {
        id: "I0010",
        hallName: "INOX Cinema",
        biteType: "vegetarian",
        biteTypeImage: "https://www.clipartmax.com/png/middle/299-2998556_vegetarian-food-symbol-icon-non-veg-symbol-png.png",
        biteImage: "https://in.bmscdn.com/fnb/v3/xxhdpi/2000095_09072021113304.png",
        biteHeader: "Large Tub Cheese Popcorn 240g",
        biteSubHeader: "Large Tub Cheese Popcorn (240g | 883 Kcal)",
        bitePrice: "₹360",
        category: "popcorn"
    },
    {
        id: "I0011",
        hallName: "INOX Cinema",
        biteType: "vegetarian",
        biteTypeImage: "https://www.clipartmax.com/png/middle/299-2998556_vegetarian-food-symbol-icon-non-veg-symbol-png.png",
        biteImage: "https://in.bmscdn.com/fnb/v3/xxhdpi/2000095_09072021113304.png",
        biteHeader: "Regular Tub Caramel Popcorn 180g",
        biteSubHeader: "Regular Tub Caramel Popcorn (180g | 603 Kcal)",
        bitePrice: "₹360",
        category: "popcorn"
    },
    {
        id: "I0012",
        hallName: "INOX Cinema",
        biteType: "vegetarian",
        biteTypeImage: "https://www.clipartmax.com/png/middle/299-2998556_vegetarian-food-symbol-icon-non-veg-symbol-png.png",
        biteImage: "https://in.bmscdn.com/fnb/v3/xxhdpi/2000097_09072021113606.png",
        biteHeader: "Regular Tub Combo (Cheese)",
        biteSubHeader: "Regular Tub Combo Cheese Popcorn 110g + Coke 450ml (531 Kcal)",
        bitePrice: "₹580",
        category: "combos"
    },
    {
        id: "I0013",
        hallName: "INOX Cinema",
        biteType: "vegetarian",
        biteTypeImage: "https://www.clipartmax.com/png/middle/299-2998556_vegetarian-food-symbol-icon-non-veg-symbol-png.png",
        biteImage: "https://in.bmscdn.com/fnb/v3/xxhdpi/2000096_09072021113726.png",
        biteHeader: "Medium Tub Combo (Cheese)",
        biteSubHeader: "Medium Tub Combo Cheese Popcorn 165g + 2 Coke 450ml (896 Kcal)",
        bitePrice: "₹850",
        category: "combos"
    },
    {
        id: "I0014",
        hallName: "INOX Cinema",
        biteType: "vegetarian",
        biteTypeImage: "https://www.clipartmax.com/png/middle/299-2998556_vegetarian-food-symbol-icon-non-veg-symbol-png.png",
        biteImage: "https://in.bmscdn.com/fnb/v3/xxhdpi/2000097_09072021113606.png",
        biteHeader: "Regular Tub Combo (Regular)",
        biteSubHeader: "Regular Tub Combo Regular Popcorn 90g + Coke 450ml (479 Kcal)",
        bitePrice: "₹550",
        category: "combos"
    },
    {
        id: "I0015",
        hallName: "INOX Cinema",
        biteType: "vegetarian",
        biteTypeImage: "https://www.clipartmax.com/png/middle/299-2998556_vegetarian-food-symbol-icon-non-veg-symbol-png.png",
        biteImage: "https://in.bmscdn.com/fnb/v3/xxhdpi/2000096_09072021113726.png",
        biteHeader: "Medium Tub Combo (Regular)",
        biteSubHeader: "Medium Tub Combo Regular Popcorn 135g + 2 Coke 450ml (817 Kcal)",
        bitePrice: "₹820",
        category: "combos"
    },
    {
        id: "I0016",
        hallName: "INOX Cinema",
        biteType: "vegetarian",
        biteTypeImage: "https://www.clipartmax.com/png/middle/299-2998556_vegetarian-food-symbol-icon-non-veg-symbol-png.png",
        biteImage: "https://in.bmscdn.com/fnb/v3/xxhdpi/2000097_09072021113606.png",
        biteHeader: "Regular Tub Combo (Caramel)",
        biteSubHeader: "Regular Tub Combo Caramel Popcorn 180g + Coke 450ml (800 Kcal)",
        bitePrice: "₹580",
        category: "combos"
    },
    {
        id: "I0017",
        hallName: "INOX Cinema",
        biteType: "vegetarian",
        biteTypeImage: "https://www.clipartmax.com/png/middle/299-2998556_vegetarian-food-symbol-icon-non-veg-symbol-png.png",
        biteImage: "https://in.bmscdn.com/fnb/v3/xxhdpi/2000096_09072021113726.png",
        biteHeader: "Medium Tub Combo (Caramel)",
        biteSubHeader: "Medium Tub Combo Caramel Popcorn 270g + 2 Coke 450ml (1300 Kcal)",
        bitePrice: "₹850",
        category: "combos"
    },
    {
        id: "I0018",
        hallName: "INOX Cinema",
        biteType: "vegetarian",
        biteTypeImage: "https://www.clipartmax.com/png/middle/299-2998556_vegetarian-food-symbol-icon-non-veg-symbol-png.png",
        biteImage: "https://in.bmscdn.com/fnb/v3/xxhdpi/2000096_09072021113726.png",
        biteHeader: "Family Combo (Salted)",
        biteSubHeader: "Regular Tub Salted Popcorn 90g + Nachos 180g + 2 Coke 450ml (1252 Kcal)",
        bitePrice: "₹1010",
        category: "combos"
    },
    {
        id: "I0019",
        hallName: "INOX Cinema",
        biteType: "vegetarian",
        biteTypeImage: "https://www.clipartmax.com/png/middle/299-2998556_vegetarian-food-symbol-icon-non-veg-symbol-png.png",
        biteImage: "https://in.bmscdn.com/fnb/v3/xxhdpi/2000096_09072021113726.png",
        biteHeader: "Family Combo (Cheese)",
        biteSubHeader: "Regular Tub Cheese Popcorn 110g + Nachos 180g + 2 Coke 450ml (1304 Kcal)",
        bitePrice: "₹1040",
        category: "combos"
    },
    {
        id: "I0020",
        hallName: "INOX Cinema",
        biteType: "vegetarian",
        biteTypeImage: "https://www.clipartmax.com/png/middle/299-2998556_vegetarian-food-symbol-icon-non-veg-symbol-png.png",
        biteImage: "https://in.bmscdn.com/fnb/v3/xxhdpi/2000096_09072021113726.png",
        biteHeader: "Family Combo (Caramel)",
        biteSubHeader: "Regular Tub Caramel Popcorn 180g + Nachos 180g + 2 Coke 450ml (1573 Kcal)",
        bitePrice: "₹1040",
        category: "combos"
    },
    {
        id: "I0021",
        hallName: "INOX Cinema",
        biteType: "non-vegetarian",
        biteTypeImage: "https://img.favpng.com/0/2/0/computer-icons-computer-software-light-png-favpng-reQG5i4qW4zLyTtLuuYSjhBGm_t.jpg",
        biteImage: "https://s7d1.scene7.com/is/image/mcdonalds/mcnuggets-4pcs-jd:1-3-product-tile-desktop?wid=829&hei=513&dpr=off",
        biteHeader: "Chicken Nuggets",
        biteSubHeader: "Chicken Nuggets Small 100g (350 Kcal)",
        bitePrice: "₹520",
        category: "snacks"
    },
]

const getAllBites = () =>{
    return bites;
}

export default {
    getAllBites
}