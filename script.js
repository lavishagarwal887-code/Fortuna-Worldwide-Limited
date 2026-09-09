/* =========================================================
   FORTUNA WORLDWIDE LIMITED
   GEMSTONE WEBSITE JAVASCRIPT
========================================================= */


/* =========================================================
   PHOTO SYSTEM

   Normal:
   stonecolour1.jpg
   stonecolour2.jpg
   stonecolour3.jpg
   stonecolour4.jpg

   Emerald:
   emerald1.jpg
   emerald2.jpg
   emerald3.jpg
   emerald4.jpg
   emerald5.jpg
========================================================= */

function photoNames(baseName, numberOfPhotos = 4) {

    const photos = [];

    for (let i = 1; i <= numberOfPhotos; i++) {
        photos.push(baseName + i + ".jpg");
    }

    return photos;
}


/* =========================================================
   GEMSTONE DATABASE
========================================================= */

const gemstones = [

    /* ================= PRECIOUS ================= */

    {
        name: "Emerald",
        displayName: "Emerald",
        type: "finished",
        category: "precious",
        description:
            "A classic green beryl gemstone known for its rich colour, natural character and distinctive inclusions.",
        colours: {
            "Green": photoNames("emerald", 5)
        }
    },

    {
        name: "Ruby",
        displayName: "Ruby",
        type: "finished",
        category: "precious",
        description:
            "A corundum gemstone valued for its vibrant colour, brilliance and distinctive natural character.",
        colours: {
            "Red": photoNames("ruby"),
            "Pink": photoNames("pinkruby")
        }
    },

    {
        name: "Burma Ruby",
        displayName: "Burma Ruby",
        type: "finished",
        category: "precious",
        description:
            "Ruby associated with the historic Burma source, recognised for its distinctive red colour and character.",
        colours: {
            "Red": photoNames("burmaruby")
        }
    },

    {
        name: "Sapphire",
        displayName: "Sapphire",
        type: "finished",
        category: "precious",
        description:
            "A durable corundum gemstone available in a broad range of colours and natural appearances.",
        colours: {
            "Blue": photoNames("sapphire"),
            "Grey": photoNames("greysapphire"),
            "Pink": photoNames("pinksapphire"),
            "Yellow": photoNames("yellowsapphire"),
            "Green": photoNames("greensapphire"),
            "Purple": photoNames("purplesapphire"),
            "White": photoNames("whitesapphire"),
            "Padparadscha": photoNames("padparadschasapphire")
        }
    },

    {
        name: "Spinel",
        displayName: "Spinel",
        type: "finished",
        category: "precious",
        description:
            "A naturally occurring gemstone known for its strong colour, clarity and lively brilliance.",
        colours: {
            "Red": photoNames("redspinel"),
            "Pink": photoNames("pinkspinel"),
            "Blue": photoNames("bluespinel"),
            "Purple": photoNames("purplespinel"),
            "Black": photoNames("blackspinel")
        }
    },

    {
        name: "Alexandrite",
        displayName: "Alexandrite",
        type: "finished",
        category: "precious",
        description:
            "A distinctive gemstone known for its remarkable colour-changing appearance under different lighting.",
        colours: {
            "Green / Red Change": photoNames("alexandrite")
        }
    },

    {
        name: "Star Sapphire",
        displayName: "Star Sapphire",
        type: "finished",
        category: "precious",
        description:
            "Sapphire displaying a distinctive star-like optical effect across the surface of the stone.",
        colours: {
            "Blue": photoNames("starsapphire"),
            "Other Colours": photoNames("otherstarsapphire")
        }
    },

    {
        name: "Star Ruby",
        displayName: "Star Ruby",
        type: "finished",
        category: "precious",
        description:
            "Ruby displaying a natural star-like optical effect when viewed across its polished surface.",
        colours: {
            "Red": photoNames("starruby"),
            "Pink": photoNames("pinkstarruby")
        }
    },


    /* ================= COLOURED GEMSTONES ================= */

    {
        name: "Tourmaline",
        displayName: "Tourmaline",
        type: "finished",
        category: "coloured",
        description:
            "A highly versatile gemstone family found in a remarkable range of colours and natural appearances.",
        colours: {
            "Pink": photoNames("pinktourmaline"),
            "Green": photoNames("greentourmaline"),
            "Blue": photoNames("bluetourmaline"),
            "Paraiba": photoNames("paraibatourmaline"),
            "Red / Rubellite": photoNames("rubellite"),
            "Yellow": photoNames("yellowtourmaline"),
            "Bi-colour": photoNames("bicolourtourmaline"),
            "Watermelon": photoNames("watermelontourmaline"),
            "Black": photoNames("blacktourmaline")
        }
    },

    {
        name: "Aquamarine",
        displayName: "Aquamarine",
        type: "finished",
        category: "coloured",
        description:
            "A blue to blue-green variety of beryl known for its clear appearance and ocean-inspired colour.",
        colours: {
            "Light Blue": photoNames("lightblueaquamarine"),
            "Blue": photoNames("aquamarine"),
            "Blue-Green": photoNames("bluegreenaquamarine")
        }
    },

    {
        name: "Topaz",
        displayName: "Topaz",
        type: "finished",
        category: "coloured",
        description:
            "A crystalline gemstone occurring in clear, blue, yellow, golden and other attractive colours.",
        colours: {
            "Colourless": photoNames("topaz"),
            "Blue": photoNames("bluetopaz"),
            "Yellow": photoNames("yellowtopaz"),
            "Golden": photoNames("goldentopaz"),
            "Imperial": photoNames("imperialtopaz"),
            "Pink": photoNames("pinktopaz")
        }
    },

    {
        name: "Zircon",
        displayName: "Zircon",
        type: "finished",
        category: "coloured",
        description:
            "A naturally occurring gemstone recognised for its brilliance and range of natural colours.",
        colours: {
            "Blue": photoNames("bluezircon"),
            "White / Colourless": photoNames("zircon"),
            "Yellow": photoNames("yellowzircon"),
            "Orange": photoNames("orangezircon"),
            "Red": photoNames("redzircon"),
            "Green": photoNames("greenzircon")
        }
    },

    {
        name: "Garnet",
        displayName: "Garnet",
        type: "finished",
        category: "coloured",
        description:
            "A gemstone family with numerous varieties, offering a broad spectrum of colours and appearances.",
        colours: {
            "Red": photoNames("redgarnet"),
            "Rhodolite": photoNames("rhodolite"),
            "Tsavorite Green": photoNames("tsavorite"),
            "Spessartite Orange": photoNames("spessartite"),
            "Hessonite": photoNames("hessonite"),
            "Almandine": photoNames("almandinegarnet"),
            "Purple": photoNames("purplegarnet")
        }
    },

    {
        name: "Tanzanite",
        displayName: "Tanzanite",
        type: "finished",
        category: "coloured",
        description:
            "A distinctive blue to violet gemstone appreciated for its elegant colour and pleochroic appearance.",
        colours: {
            "Blue": photoNames("tanzanite"),
            "Blue-Purple": photoNames("bluepurpletanzanite"),
            "Violet": photoNames("violettanzanite")
        }
    },

    {
        name: "Peridot",
        displayName: "Peridot",
        type: "finished",
        category: "coloured",
        description:
            "A naturally green gemstone with a fresh, distinctive colour produced by its mineral composition.",
        colours: {
            "Green": photoNames("peridot")
        }
    },

    {
        name: "Morganite",
        displayName: "Morganite",
        type: "finished",
        category: "coloured",
        description:
            "A delicate variety of beryl known for soft pink, peach and salmon tones.",
        colours: {
            "Pink": photoNames("pinkmorganite"),
            "Peach": photoNames("peachmorganite"),
            "Salmon": photoNames("salmonmorganite")
        }
    },

    {
        name: "Kunzite",
        displayName: "Kunzite",
        type: "finished",
        category: "coloured",
        description:
            "A transparent gemstone recognised for its attractive pink to lilac colour range.",
        colours: {
            "Pink": photoNames("pinkkunzite"),
            "Lilac": photoNames("lilackunzite")
        }
    },

    {
        name: "Iolite",
        displayName: "Iolite",
        type: "finished",
        category: "coloured",
        description:
            "A blue to violet gemstone with attractive colour variation and natural pleochroic character.",
        colours: {
            "Blue": photoNames("blueiolite"),
            "Violet": photoNames("violetiolite")
        }
    },

    {
        name: "Citrine",
        displayName: "Citrine",
        type: "finished",
        category: "coloured",
        description:
            "A quartz gemstone recognised for its warm yellow to golden colour range.",
        colours: {
            "Yellow": photoNames("yellowcitrine"),
            "Golden": photoNames("goldencitrine")
        }
    },

    {
        name: "Amethyst",
        displayName: "Amethyst",
        type: "finished",
        category: "coloured",
        description:
            "A purple variety of quartz known for its transparent appearance and range of violet tones.",
        colours: {
            "Light Purple": photoNames("lightpurpleamethyst"),
            "Purple": photoNames("amethyst"),
            "Deep Purple": photoNames("deeppurpleamethyst")
        }
    },

    {
        name: "Rose Quartz",
        displayName: "Rose Quartz",
        type: "finished",
        category: "coloured",
        description:
            "A quartz gemstone recognised for its soft pink colour and gentle translucent appearance.",
        colours: {
            "Pink": photoNames("rosequartz")
        }
    },

    {
        name: "Sunstone",
        displayName: "Sunstone",
        type: "finished",
        category: "coloured",
        description:
            "A feldspar gemstone known for warm colours and attractive internal light effects.",
        colours: {
            "Orange": photoNames("orangesunstone"),
            "Peach": photoNames("peachsunstone"),
            "Red": photoNames("redsunstone")
        }
    },

    {
        name: "Labradorite",
        displayName: "Labradorite",
        type: "finished",
        category: "coloured",
        description:
            "A feldspar gemstone recognised for its characteristic flashes of blue, green and other colours.",
        colours: {
            "Blue Flash": photoNames("bluelabradorite"),
            "Green Flash": photoNames("greenlabradorite"),
            "Multi-colour": photoNames("multicolourlabradorite")
        }
    },


    /* ================= SPECIALITY ================= */

    {
        name: "Turquoise",
        displayName: "Turquoise",
        type: "finished",
        category: "speciality",
        description:
            "An opaque gemstone known for its distinctive blue to blue-green colour and natural matrix patterns.",
        colours: {
            "Blue": photoNames("turquoise"),
            "Blue-Green": photoNames("bluegreenturquoise"),
            "Green": photoNames("greenturquoise")
        }
    },

    {
        name: "Opal",
        displayName: "Opal",
        type: "finished",
        category: "speciality",
        description:
            "A distinctive gemstone known for its varied body colours and, in many varieties, natural play-of-colour.",
        colours: {
            "White Opal": photoNames("whiteopal"),
            "Black Opal": photoNames("blackopal"),
            "Fire Opal": photoNames("fireopal"),
            "Ethiopian Opal": photoNames("ethiopianopal"),
            "Australian Opal": photoNames("australianopal")
        }
    },

    {
        name: "Moonstone",
        displayName: "Moonstone",
        type: "finished",
        category: "speciality",
        description:
            "A feldspar gemstone known for its soft appearance and characteristic moon-like optical sheen.",
        colours: {
            "White": photoNames("whitemoonstone"),
            "Blue Flash": photoNames("bluemoonstone"),
            "Peach": photoNames("peachmoonstone")
        }
    },

    {
        name: "Lapis Lazuli",
        displayName: "Lapis Lazuli",
        type: "finished",
        category: "speciality",
        description:
            "A deep blue ornamental stone often recognised for its natural mineral patterns and character.",
        colours: {
            "Blue": photoNames("lapislazuli")
        }
    },

    {
        name: "Larimar",
        displayName: "Larimar",
        type: "finished",
        category: "speciality",
        description:
            "A distinctive blue ornamental gemstone known for its natural white and blue patterns.",
        colours: {
            "Blue": photoNames("larimar"),
            "Blue-White": photoNames("bluewhitelarimar")
        }
    },

    {
        name: "Jade",
        displayName: "Jade",
        type: "finished",
        category: "speciality",
        description:
            "A valued ornamental gemstone occurring in several colours and recognised for its smooth appearance.",
        colours: {
            "Green": photoNames("greenjade"),
            "Lavender": photoNames("lavenderjade"),
            "White": photoNames("whitejade"),
            "Yellow": photoNames("yellowjade")
        }
    },

    {
        name: "Chrysoprase",
        displayName: "Chrysoprase",
        type: "finished",
        category: "speciality",
        description:
            "A green variety of chalcedony known for its attractive translucent colour.",
        colours: {
            "Green": photoNames("chrysoprase")
        }
    },

    {
        name: "Malachite",
        displayName: "Malachite",
        type: "finished",
        category: "speciality",
        description:
            "A copper mineral recognised for its vivid green colour and distinctive natural banding.",
        colours: {
            "Green": photoNames("malachite")
        }
    },

    {
        name: "Azurite",
        displayName: "Azurite",
        type: "finished",
        category: "speciality",
        description:
            "A naturally occurring copper mineral recognised for its deep blue colour and mineral character.",
        colours: {
            "Blue": photoNames("azurite")
        }
    },

    {
        name: "Moldavite",
        displayName: "Moldavite",
        type: "finished",
        category: "speciality",
        description:
            "A natural green tektite recognised for its distinctive surface texture and unusual origin.",
        colours: {
            "Green": photoNames("moldavite")
        }
    },

    {
        name: "Phenakite",
        displayName: "Phenakite",
        type: "finished",
        category: "speciality",
        description:
            "A rare transparent gemstone valued for its clarity, brilliance and distinctive crystal character.",
        colours: {
            "Colourless": photoNames("phenakite")
        }
    },

    {
        name: "Danburite",
        displayName: "Danburite",
        type: "finished",
        category: "speciality",
        description:
            "A transparent gemstone known for its clarity, brightness and range of subtle colours.",
        colours: {
            "Colourless": photoNames("colourlessdanburite"),
            "Yellow": photoNames("yellowdanburite"),
            "Pink": photoNames("pinkdanburite")
        }
    },

    {
        name: "Fluorite",
        displayName: "Fluorite",
        type: "finished",
        category: "speciality",
        description:
            "A colourful mineral valued for its transparent appearance and range of natural colours.",
        colours: {
            "Green": photoNames("greenfluorite"),
            "Purple": photoNames("purplefluorite"),
            "Blue": photoNames("bluefluorite"),
            "Yellow": photoNames("yellowfluorite")
        }
    },

    {
        name: "Rhodochrosite",
        displayName: "Rhodochrosite",
        type: "finished",
        category: "speciality",
        description:
            "A distinctive mineral recognised for its pink to red colour and natural patterns.",
        colours: {
            "Pink": photoNames("pinkrhodochrosite"),
            "Red": photoNames("redrhodochrosite")
        }
    },

    {
        name: "Sugilite",
        displayName: "Sugilite",
        type: "finished",
        category: "speciality",
        description:
            "A distinctive purple mineral known for its rich colour and ornamental appeal.",
        colours: {
            "Purple": photoNames("sugilite")
        }
    },


    /* ================= ROUGH STONES ================= */

    {
        name: "Rough Emerald",
        displayName: "Rough Emerald",
        type: "rough",
        category: "precious",
        description:
            "Natural emerald material in rough form, retaining its original crystal shape and surface character.",
        colours: {
            "Green": photoNames("roughemerald")
        }
    },

    {
        name: "Rough Ruby",
        displayName: "Rough Ruby",
        type: "rough",
        category: "precious",
        description:
            "Natural ruby material in rough form, showing its original mineral structure and character.",
        colours: {
            "Red": photoNames("roughruby"),
            "Pink": photoNames("roughpinkruby")
        }
    },

    {
        name: "Rough Sapphire",
        displayName: "Rough Sapphire",
        type: "rough",
        category: "precious",
        description:
            "Natural sapphire material in rough form and available across several colour varieties.",
        colours: {
            "Blue": photoNames("roughsapphire"),
            "Grey": photoNames("greysapphirerough"),
            "Pink": photoNames("pinksapphirerough"),
            "Yellow": photoNames("yellowsapphirerough"),
            "Green": photoNames("greensapphirerough")
        }
    },

    {
        name: "Rough Tourmaline",
        displayName: "Rough Tourmaline",
        type: "rough",
        category: "coloured",
        description:
            "Natural tourmaline crystals in rough form, available in a wide range of colours and crystal appearances.",
        colours: {
            "Pink": photoNames("pinktourmalinerough"),
            "Green": photoNames("greentourmalinerough"),
            "Blue": photoNames("bluetourmalinerough"),
            "Paraiba": photoNames("paribatourmalinerough"),
            "Rubellite": photoNames("rubellitetourmalinerough"),
            "Yellow": photoNames("yellowtourmalinerough"),
            "Bi-colour": photoNames("bicolourtourmalinerough"),
            "Watermelon": photoNames("watermelontourmalinerough"),
            "Black": photoNames("blacktourmalinerough")
        }
    },

    {
        name: "Rough Topaz",
        displayName: "Rough Topaz",
        type: "rough",
        category: "coloured",
        description:
            "Natural topaz crystals in rough form, showing their original crystal structure and colour.",
        colours: {
            "Colourless": photoNames("topazrough"),
            "Blue": photoNames("bluetopazrough"),
            "Yellow": photoNames("yellowtopazrough"),
            "Golden": photoNames("goldentopazrough"),
            "Imperial": photoNames("imperialtopazrough")
        }
    },

    {
        name: "Rough Aquamarine",
        displayName: "Rough Aquamarine",
        type: "rough",
        category: "coloured",
        description:
            "Natural aquamarine crystals in rough form, displaying blue to blue-green colour and crystal character.",
        colours: {
            "Blue": photoNames("blueaquamarinerough"),
            "Blue-Green": photoNames("bluegreenaquamarinerough")
        }
    },

    {
        name: "Rough Garnet",
        displayName: "Rough Garnet",
        type: "rough",
        category: "coloured",
        description:
            "Natural garnet material in rough form, available in several colour varieties.",
        colours: {
            "Red": photoNames("redgarnetrough"),
            "Green": photoNames("greengarnetrough"),
            "Orange": photoNames("orangegarnetrough"),
            "Purple": photoNames("purplegarnetrough")
        }
    },

    {
        name: "Rough Spinel",
        displayName: "Rough Spinel",
        type: "rough",
        category: "precious",
        description:
            "Natural spinel crystals in rough form, available in several attractive colours.",
        colours: {
            "Red": photoNames("redspinelrough"),
            "Pink": photoNames("pinkspinelrough"),
            "Blue": photoNames("bluespinelrough"),
            "Purple": photoNames("purplespinelrough")
        }
    },

    {
        name: "Rough Zircon",
        displayName: "Rough Zircon",
        type: "rough",
        category: "coloured",
        description:
            "Natural zircon material in rough form, showing original crystal shapes and colour.",
        colours: {
            "Blue": photoNames("bluezirconrough"),
            "Red": photoNames("redzirconrough"),
            "Yellow": photoNames("roughyellowzircon"),
            "Green": photoNames("greenzirconrough")
        }
    },

    {
        name: "Rough Amethyst",
        displayName: "Rough Amethyst",
        type: "rough",
        category: "coloured",
        description:
            "Natural amethyst material in rough form, displaying its original crystal character and purple colour.",
        colours: {
            "Purple": photoNames("amehystrough")
        }
    },

    {
        name: "Rough Peridot",
        displayName: "Rough Peridot",
        type: "rough",
        category: "coloured",
        description:
            "Natural peridot material in rough form with its characteristic green colour and crystal character.",
        colours: {
            "Green": photoNames("peridotrough")
        }
    },

    {
        name: "Rough Opal",
        displayName: "Rough Opal",
        type: "rough",
        category: "speciality",
        description:
            "Natural opal material in rough form, retaining its original surface and natural character.",
        colours: {
            "White": photoNames("whiteopalrough"),
            "Black": photoNames("blackopalrough"),
            "Fire": photoNames("fireopalrough")
        }
    },

    {
        name: "Rough Turquoise",
        displayName: "Rough Turquoise",
        type: "rough",
        category: "speciality",
        description:
            "Natural turquoise material in rough form, showing its original colour, matrix and surface character.",
        colours: {
            "Blue": photoNames("blueturquoiserough"),
            "Blue-Green": photoNames("bluegreenturquoiserough"),
            "Green": photoNames("greenturquoiserough")
        }
    },

    {
        name: "Rough Moonstone",
        displayName: "Rough Moonstone",
        type: "rough",
        category: "speciality",
        description:
            "Natural moonstone material in rough form, retaining its original mineral structure and appearance.",
        colours: {
            "White": photoNames("whitemoonstonerough"),
            "Peach": photoNames("peachmoonstonerough")
        }
    },

    {
        name: "Rough Iolite",
        displayName: "Rough Iolite",
        type: "rough",
        category: "coloured",
        description:
            "Natural iolite material in rough form with characteristic blue to violet colour.",
        colours: {
            "Blue": photoNames("blueioliterough"),
            "Violet": photoNames("violetioliterough")
        }
    },

    {
        name: "Rough Kunzite",
        displayName: "Rough Kunzite",
        type: "rough",
        category: "coloured",
        description:
            "Natural kunzite material in rough form, showing its original crystal structure and colour.",
        colours: {
            "Pink": photoNames("pinkkunziterough"),
            "Lilac": photoNames("lilackunziterough")
        }
    },

    {
        name: "Rough Morganite",
        displayName: "Rough Morganite",
        type: "rough",
        category: "coloured",
        description:
            "Natural morganite material in rough form, available in attractive pink and peach tones.",
        colours: {
            "Pink": photoNames("pinkmorganiterough"),
            "Peach": photoNames("peachmorganiterough")
        }
    },


    /* ================= SPECIALITY PRODUCTS ================= */

    {
        name: "Gemstone Parcels",
        displayName: "Gemstone Parcels",
        type: "other",
        category: "speciality",
        description:
            "Curated gemstone parcels assembled according to colour, material or selection for sourcing and trade.",
        colours: {
            "Mixed Colours": photoNames("gemstoneparcel")
        }
    },

    {
        name: "Calibrated Stones",
        displayName: "Calibrated Stones",
        type: "other",
        category: "speciality",
        description:
            "Gemstones prepared to standardised dimensions for applications requiring consistent shape and sizing.",
        colours: {
            "Mixed Colours": photoNames("calibratedstones")
        }
    },

    {
        name: "Cabochons",
        displayName: "Cabochons",
        type: "other",
        category: "speciality",
        description:
            "Smooth polished gemstones with curved surfaces designed to highlight colour, pattern and optical character.",
        colours: {
            "Mixed Colours": photoNames("cabochons")
        }
    },

    {
        name: "Collector Specimens",
        displayName: "Collector Specimens",
        type: "other",
        category: "speciality",
        description:
            "Distinctive natural mineral and gemstone specimens selected for their formation, character and collector appeal.",
        colours: {
            "Mixed": photoNames("collectorspecimens")
        }
    }

];


/* =========================================================
   WEBSITE ELEMENTS
========================================================= */

const productsContainer =
    document.getElementById("products");

const modal =
    document.getElementById("modal");

const modalClose =
    document.getElementById("modalClose");

const modalName =
    document.getElementById("modalName");

const modalDescription =
    document.getElementById("modalDescription");

const colourButtons =
    document.getElementById("colourButtons");

const modalImage =
    document.getElementById("modalImage");

const selectedColour =
    document.getElementById("selectedColour");

const photoCounter =
    document.getElementById("photoCounter");

const thumbnails =
    document.getElementById("thumbnails");

const previousPhoto =
    document.getElementById("previousPhoto");

const nextPhoto =
    document.getElementById("nextPhoto");

const emailButton =
    document.getElementById("emailButton");


/* =========================================================
   STATE
========================================================= */

let currentProduct = null;
let currentColour = null;
let currentPhotos = [];
let currentPhotoIndex = 0;

let currentMainFilter = "finished";
let currentCategory = "all";


/* =========================================================
   DISPLAY NAME
========================================================= */

function getDisplayName(product) {

    return product.displayName || product.name;

}


/* =========================================================
   COLOUR DOT COLOUR
========================================================= */

function getColourDot(colour) {

    const lower = colour.toLowerCase();

    if (lower.includes("pink")) {
        return "#e69ab2";
    }

    if (lower.includes("green")) {
        return "#3d9b61";
    }

    if (lower.includes("blue")) {
        return "#4c9fd1";
    }

    if (lower.includes("red")) {
        return "#a93447";
    }

    if (lower.includes("yellow")) {
        return "#dfc04e";
    }

    if (lower.includes("orange")) {
        return "#d98a45";
    }

    if (
        lower.includes("purple") ||
        lower.includes("violet") ||
        lower.includes("lilac")
    ) {
        return "#855aa5";
    }

    if (lower.includes("black")) {
        return "#252525";
    }

    if (
        lower.includes("white") ||
        lower.includes("colourless")
    ) {
        return "#eeeeee";
    }

    return "#aaa";

}


/* =========================================================
   FIND FIRST EXISTING IMAGE
========================================================= */

function findFirstImage(photoList, callback) {

    if (!photoList || photoList.length === 0) {
        callback(null);
        return;
    }

    let index = 0;

    function testNext() {

        if (index >= photoList.length) {
            callback(null);
            return;
        }

        const image = new Image();

        image.onload = function() {
            callback(photoList[index]);
        };

        image.onerror = function() {
            index++;
            testNext();
        };

        image.src = photoList[index];
    }

    testNext();
}


/* =========================================================
   DISPLAY PRODUCTS
========================================================= */

function displayProducts() {

    if (!productsContainer) {
        return;
    }

    productsContainer.innerHTML = "";

    const filteredProducts = gemstones.filter(function(product) {

        if (product.type !== currentMainFilter) {
            return false;
        }

        if (currentCategory === "all") {
            return true;
        }

        return product.category === currentCategory;

    });


    filteredProducts.forEach(function(product) {

        const card =
            document.createElement("div");

        card.className = "product";


        const colourNames =
            Object.keys(product.colours);


        let firstImage = null;

        for (
            let i = 0;
            i < colourNames.length;
            i++
        ) {

            const photos =
                product.colours[colourNames[i]];

            if (
                photos &&
                photos.length > 0
            ) {

                firstImage = photos[0];
                break;

            }

        }


        let imageHTML = "";


        if (firstImage) {

            imageHTML = `
                <img
                    src="${firstImage}"
                    alt="${getDisplayName(product)}"
                    onerror="this.style.display='none';"
                >
            `;

        } else {

            imageHTML = `
                <div class="no-image">
                    ${getDisplayName(product)}
                    <br>
                    <small>Photos coming soon</small>
                </div>
            `;

        }


        let dots = "";


        colourNames.forEach(function(colour) {

            dots += `
                <span
                    class="colour-dot"
                    title="${colour}"
                    style="background:${getColourDot(colour)}">
                </span>
            `;

        });


        const typeText =
            product.type === "rough"
            ? "ROUGH STONE"
            : product.type === "other"
            ? "PARCEL / SPECIALITY"
            : "FINISHED STONE";


        card.innerHTML = `

            <div class="product-image">
                ${imageHTML}
            </div>

            <div class="product-info">

                <div class="product-type">
                    ${typeText}
                </div>

                <h3>
                    ${getDisplayName(product)}
                </h3>

                <p>
                    ${colourNames.length}
                    colour option${colourNames.length !== 1 ? "s" : ""}
                    · Click to explore
                </p>

                <div class="colour-preview">
                    ${dots}
                </div>

            </div>

        `;


        card.addEventListener(
            "click",
            function() {
                openProduct(product);
            }
        );


        productsContainer.appendChild(card);

    });

}


/* =========================================================
   OPEN PRODUCT
========================================================= */

function openProduct(product) {

    currentProduct = product;

    currentColour = null;

    currentPhotos = [];

    currentPhotoIndex = 0;


    modalName.textContent =
        getDisplayName(product);


    modalDescription.textContent =
        product.description;


    createColourButtons();


    if (modal) {

        modal.classList.add("show");

    }


    document.body.style.overflow =
        "hidden";


    const colours =
        Object.keys(product.colours);


    if (colours.length > 0) {

        selectColour(colours[0]);

    }

}


/* =========================================================
   CREATE COLOUR BUTTONS
========================================================= */

function createColourButtons() {

    colourButtons.innerHTML = "";


    const colours =
        Object.keys(currentProduct.colours);


    colours.forEach(function(colour, index) {

        const button =
            document.createElement("button");


        button.className =
            "colour-button";


        button.textContent =
            colour;


        if (index === 0) {

            button.classList.add("active");

        }


        button.addEventListener(
            "click",
            function() {

                selectColour(colour);

            }
        );


        colourButtons.appendChild(button);

    });

}


/* =========================================================
   SELECT COLOUR
========================================================= */

function selectColour(colour) {

    currentColour = colour;

    currentPhotos =
        currentProduct.colours[colour] || [];

    currentPhotoIndex = 0;


    document
        .querySelectorAll(".colour-button")
        .forEach(function(button) {

            if (
                button.textContent === colour
            ) {

                button.classList.add("active");

            } else {

                button.classList.remove("active");

            }

        });


    selectedColour.textContent =
        colour;


    createThumbnails();

    showPhoto();

}


/* =========================================================
   SHOW PHOTO
========================================================= */

function showPhoto() {

    if (!currentPhotos || currentPhotos.length === 0) {

        modalImage.removeAttribute("src");

        modalImage.alt =
            "Photos coming soon";

        photoCounter.textContent =
            "PHOTOS COMING SOON";

        previousPhoto.style.display =
            "none";

        nextPhoto.style.display =
            "none";

        thumbnails.innerHTML = "";

        return;

    }


    modalImage.style.display =
        "block";


    modalImage.src =
        currentPhotos[currentPhotoIndex];


    modalImage.alt =
        getDisplayName(currentProduct)
        + " - "
        + currentColour;


    photoCounter.textContent =
        (currentPhotoIndex + 1)
        + " / "
        + currentPhotos.length;


    if (currentPhotos.length > 1) {

        previousPhoto.style.display =
            "block";

        nextPhoto.style.display =
            "block";

    } else {

        previousPhoto.style.display =
            "none";

        nextPhoto.style.display =
            "none";

    }


    updateThumbnails();

}


/* =========================================================
   CREATE THUMBNAILS
========================================================= */

function createThumbnails() {

    thumbnails.innerHTML = "";


    currentPhotos.forEach(
        function(photo, index) {

            const thumbnail =
                document.createElement("img");


            thumbnail.src =
                photo;


            thumbnail.alt =
                currentColour;


            thumbnail.className =
                "thumbnail";


            thumbnail.addEventListener(
                "click",
                function() {

                    currentPhotoIndex =
                        index;

                    showPhoto();

                }
            );


            thumbnail.addEventListener(
                "error",
                function() {

                    this.remove();

                }
            );


            thumbnails.appendChild(
                thumbnail
            );

        }
    );

}


/* =========================================================
   UPDATE THUMBNAILS
========================================================= */

function updateThumbnails() {

    document
        .querySelectorAll(".thumbnail")
        .forEach(function(thumbnail, index) {

            if (
                index === currentPhotoIndex
            ) {

                thumbnail.classList.add(
                    "active"
                );

            } else {

                thumbnail.classList.remove(
                    "active"
                );

            }

        });

}


/* =========================================================
   NEXT PHOTO
========================================================= */

if (nextPhoto) {

    nextPhoto.addEventListener(
        "click",
        function() {

            if (
                currentPhotos.length === 0
            ) {
                return;
            }

            currentPhotoIndex++;

            if (
                currentPhotoIndex >=
                currentPhotos.length
            ) {

                currentPhotoIndex = 0;

            }

            showPhoto();

        }
    );

}


/* =========================================================
   PREVIOUS PHOTO
========================================================= */

if (previousPhoto) {

    previousPhoto.addEventListener(
        "click",
        function() {

            if (
                currentPhotos.length === 0
            ) {
                return;
            }

            currentPhotoIndex--;

            if (
                currentPhotoIndex < 0
            ) {

                currentPhotoIndex =
                    currentPhotos.length - 1;

            }

            showPhoto();

        }
    );

}


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeModal() {

    if (modal) {

        modal.classList.remove("show");

    }

    document.body.style.overflow = "";

}


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeModal
    );

}


if (modal) {

    modal.addEventListener(
        "click",
        function(event) {

            if (
                event.target === modal
            ) {

                closeModal();

            }

        }
    );

}


/* =========================================================
   KEYBOARD CONTROLS
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            !modal ||
            !modal.classList.contains("show")
        ) {
            return;
        }


        if (
            event.key === "ArrowRight"
        ) {

            nextPhoto.click();

        }


        if (
            event.key === "ArrowLeft"
        ) {

            previousPhoto.click();

        }


        if (
            event.key === "Escape"
        ) {

            closeModal();

        }

    }
);


/* =========================================================
   MAIN FILTERS
========================================================= */

document
    .querySelectorAll(".main-filter")
    .forEach(function(button) {

        button.addEventListener(
            "click",
            function() {

                document
                    .querySelectorAll(".main-filter")
                    .forEach(function(btn) {

                        btn.classList.remove(
                            "active"
                        );

                    });


                this.classList.add("active");


                currentMainFilter =
                    this.dataset.mainFilter;


                currentCategory =
                    "all";


                document
                    .querySelectorAll(".category-button")
                    .forEach(function(btn, index) {

                        if (index === 0) {

                            btn.classList.add(
                                "active"
                            );

                        } else {

                            btn.classList.remove(
                                "active"
                            );

                        }

                    });


                displayProducts();

            }
        );

    });


/* =========================================================
   CATEGORY FILTERS
========================================================= */

document
    .querySelectorAll(".category-button")
    .forEach(function(button) {

        button.addEventListener(
            "click",
            function() {

                document
                    .querySelectorAll(".category-button")
                    .forEach(function(btn) {

                        btn.classList.remove(
                            "active"
                        );

                    });


                this.classList.add("active");


                currentCategory =
                    this.dataset.category;


                displayProducts();

            }
        );

    });


/* =========================================================
   MOBILE MENU
========================================================= */

const mobileMenu =
    document.getElementById("mobileMenu");


if (mobileMenu) {

    mobileMenu.addEventListener(
        "click",
        function() {

            const navigation =
                document.getElementById("navigation");


            if (
                navigation.style.display === "flex"
            ) {

                navigation.style.display =
                    "none";

            } else {

                navigation.style.display =
                    "flex";

                navigation.style.position =
                    "absolute";

                navigation.style.top =
                    "82px";

                navigation.style.left =
                    "0";

                navigation.style.right =
                    "0";

                navigation.style.background =
                    "#10271f";

                navigation.style.padding =
                    "25px";

                navigation.style.flexDirection =
                    "column";

            }

        }
    );

}


/* =========================================================
   ENQUIRY EMAIL
========================================================= */

if (emailButton) {

    emailButton.addEventListener(
        "click",
        function() {

            if (!currentProduct) {
                return;
            }


            const subject =
                "Enquiry - "
                + getDisplayName(currentProduct)
                + (
                    currentColour
                    ? " - " + currentColour
                    : ""
                );


            const body =
                "Hello Fortuna Worldwide Limited,"
                + "\n\n"
                + "I would like to enquire about "
                + getDisplayName(currentProduct)
                + (
                    currentColour
                    ? " in " + currentColour
                    : ""
                )
                + "."
                + "\n\n"
                + "Please provide further details."
                + "\n\n"
                + "Regards";


            emailButton.href =
                "mailto:greatfortuna29@gmail.com"
                + "?subject="
                + encodeURIComponent(subject)
                + "&body="
                + encodeURIComponent(body);

        }
    );

}


/* =========================================================
   START WEBSITE
========================================================= */

displayProducts();