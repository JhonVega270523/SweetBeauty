// Datos de productos (simulando base de datos)
const productos = [
    // Lencería
    {
        id: 1,
        nombre: "Conjunto Monroe con Copa",
        descripcion: "Conjunto de lencería elegante y cómodo, disponible en múltiples tallas.",
        precio: 44000,
        categoria: "lenceria",
        imagen: "assets/images/1.jpeg",
        tallas: ["S", "M", "L"]
    },
    {
        id: 2,
        nombre: "Crop Top con Ligueros",
        descripcion: "Crop top sensual con ligueros, perfecto para ocasiones especiales.",
        precio: 75000,
        categoria: "lenceria",
        imagenes: ["assets/images/2.jpeg", "assets/images/2.2.jpeg", "assets/images/2.3.jpeg", "assets/images/2.4.jpeg", "assets/images/2.5.jpeg"],
        tallas: ["S", "M", "L"]
    },
    {
        id: 3,
        nombre: "Conjunto Lui",
        descripcion: "Conjunto de lencería moderno y elegante con diseño exclusivo.",
        precio: 62000,
        categoria: "lenceria",
        imagenes: ["assets/images/3.jpeg", "assets/images/3.2.jpeg"],
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 4,
        nombre: "Conjunto Animal Print Brillos",
        descripcion: "Conjunto de lencería con estampado animal y detalles brillantes, talla única.",
        precio: 39000,
        categoria: "lenceria",
        imagen: "assets/images/4.jpeg",
        tallas: ["Única"]
    },
    {
        id: 5,
        nombre: "Conjunto Gerania",
        descripcion: "Conjunto de lencería con diseño floral elegante y cómodo.",
        precio: 0,
        categoria: "lenceria",
        imagen: "assets/images/5.jpeg",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 6,
        nombre: "Conjunto Varilla",
        descripcion: "Conjunto de lencería con varillas para mayor soporte y comodidad.",
        precio: 0,
        categoria: "lenceria",
        imagen: "assets/images/6.jpeg",
        tallas: ["32", "34", "36", "38"]
    },
    {
        id: 7,
        nombre: "Abigail",
        descripcion: "Conjunto de lencería elegante y sofisticado con diseño exclusivo.",
        precio: 35000,
        categoria: "lenceria",
        imagenes: ["assets/images/7.jpeg", "assets/images/7.2.jpeg", "assets/images/7.3.jpeg"],
        tallas: ["Única"]
    },
    {
        id: 8,
        nombre: "Mora Brasier",
        descripcion: "Brasier de lencería con diseño elegante y cómodo.",
        precio: 35000,
        categoria: "lenceria",
        imagenes: ["assets/images/8.jpeg", "assets/images/8.2.jpeg"],
        tallas: ["Única"]
    },
    {
        id: 9,
        nombre: "Conjunto con Liguero",
        descripcion: "Conjunto de lencería sensual con liguero incluido.",
        precio: 52000,
        categoria: "lenceria",
        imagen: "assets/images/9.jpeg",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 10,
        nombre: "Corset Sonia",
        descripcion: "Corset de lencería elegante con diseño exclusivo Sonia.",
        precio: 75000,
        categoria: "lenceria",
        imagenes: ["assets/images/10.jpeg", "assets/images/10.2.jpeg"],
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 11,
        nombre: "Conjunto Alejandra",
        descripcion: "Conjunto de lencería con diseño moderno y elegante Alejandra.",
        precio: 45000,
        categoria: "lenceria",
        imagen: "assets/images/11.jpeg",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 12,
        nombre: "Set Lentejuelas Davila",
        descripcion: "Set de lencería con lentejuelas elegantes y brillantes.",
        precio: 57000,
        categoria: "lenceria",
        imagen: "assets/images/12.jpeg",
        tallas: ["32", "34", "36"]
    },
    {
        id: 13,
        nombre: "Conjunto Sofia",
        descripcion: "Conjunto de lencería sofisticado con diseño exclusivo Sofia.",
        precio: 49000,
        categoria: "lenceria",
        imagen: "assets/images/13.jpeg",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 14,
        nombre: "Conjunto Copa Braleth Anik",
        descripcion: "Conjunto de lencería con copa Braleth y diseño Anik.",
        precio: 55000,
        categoria: "lenceria",
        imagenes: ["assets/images/14.jpeg", "assets/images/14.2.jpeg"],
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 15,
        nombre: "Corset con Panty Copa y Varillas",
        descripcion: "Corset de lencería con panty, copa y varillas para mayor soporte.",
        precio: 80000,
        categoria: "lenceria",
        imagenes: ["assets/images/15.jpeg", "assets/images/15.2.jpeg"],
        tallas: ["S", "M", "L"]
    },
    {
        id: 16,
        nombre: "Corset Varilla SOL",
        descripcion: "Corset de lencería con varillas y diseño SOL exclusivo.",
        precio: 67000,
        categoria: "lenceria",
        imagen: "assets/images/16.jpeg",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 17,
        nombre: "Conjunto",
        descripcion: "Conjunto de lencería elegante y cómodo.",
        precio: 55000,
        categoria: "lenceria",
        imagen: "assets/images/17.jpeg",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 18,
        nombre: "Set Brillos",
        descripcion: "Set de lencería con detalles brillantes y elegantes.",
        precio: 35000,
        categoria: "lenceria",
        imagen: "assets/images/18.jpeg",
        tallas: ["S", "M"]
    },
    {
        id: 19,
        nombre: "Corset Dulcinea",
        descripcion: "Corset de lencería elegante con diseño exclusivo Dulcinea.",
        precio: 70000,
        categoria: "lenceria",
        imagenes: ["assets/images/19.jpeg", "assets/images/19.2.jpeg"],
        tallas: ["M", "L"]
    },
    {
        id: 20,
        nombre: "Conjunto Ivy",
        descripcion: "Conjunto de lencería sofisticado con diseño exclusivo Ivy.",
        precio: 55000,
        categoria: "lenceria",
        imagenes: ["assets/images/20.jpeg", "assets/images/20.2.jpeg"],
        tallas: ["S", "M", "L"]
    },
    {
        id: 21,
        nombre: "Corset Leticia",
        descripcion: "Corset de lencería con diseño exclusivo Leticia.",
        precio: 61000,
        categoria: "lenceria",
        imagen: "assets/images/21.jpeg",
        tallas: ["32", "34", "36"]
    },
    {
        id: 22,
        nombre: "Conjunto Lorenza Mallatex",
        descripcion: "Conjunto de lencería con material Mallatex y diseño Lorenza.",
        precio: 28000,
        categoria: "lenceria",
        imagen: "assets/images/22.jpeg",
        tallas: ["Única"]
    },
    {
        id: 23,
        nombre: "Conjunto Liguero Signe",
        descripcion: "Conjunto de lencería con liguero y diseño exclusivo Signe.",
        precio: 65000,
        categoria: "lenceria",
        imagen: "assets/images/23.jpeg",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 24,
        nombre: "Conjunto Encaje Victoria",
        descripcion: "Conjunto de lencería con encaje elegante y diseño Victoria.",
        precio: 45000,
        categoria: "lenceria",
        imagen: "assets/images/24.jpeg",
        tallas: ["Única"]
    },
    {
        id: 25,
        nombre: "Corset con Panty Dulce",
        descripcion: "Corset de lencería con panty y diseño dulce y elegante.",
        precio: 58000,
        categoria: "lenceria",
        imagen: "assets/images/25.jpeg",
        tallas: ["32", "34", "36", "38"]
    },
    {
        id: 26,
        nombre: "Set Cleopatra",
        descripcion: "Set de lencería con diseño exclusivo Cleopatra.",
        precio: 68000,
        categoria: "lenceria",
        imagen: "assets/images/26.jpeg",
        tallas: ["S", "M", "L"]
    },
    {
        id: 27,
        nombre: "Set Moños",
        descripcion: "Set de lencería con detalles de moños elegantes.",
        precio: 52000,
        categoria: "lenceria",
        imagen: "assets/images/27.jpeg",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 28,
        nombre: "Conjunto Estampado Lauren",
        descripcion: "Conjunto de lencería con estampado exclusivo Lauren.",
        precio: 28000,
        categoria: "lenceria",
        imagen: "assets/images/28.jpeg",
        tallas: ["Única"]
    },
    {
        id: 29,
        nombre: "Corset Lentejuelas Nara",
        descripcion: "Corset de lencería con lentejuelas y diseño exclusivo Nara.",
        precio: 76000,
        categoria: "lenceria",
        imagen: "assets/images/29.jpeg",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 30,
        nombre: "Set Lenceria Rosas",
        descripcion: "Set de lencería con diseño de rosas elegante.",
        precio: 50000,
        categoria: "lenceria",
        imagen: "assets/images/30.jpeg",
        tallas: ["S", "M", "L"]
    },
    {
        id: 31,
        nombre: "Corset con Panty Martina",
        descripcion: "Corset de lencería con panty y diseño exclusivo Martina.",
        precio: 75000,
        categoria: "lenceria",
        imagen: "assets/images/31.jpeg",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 32,
        nombre: "Crop Top Varilla Aury",
        descripcion: "Crop top de lencería con varillas y diseño exclusivo Aury.",
        precio: 54000,
        categoria: "lenceria",
        imagen: "assets/images/32.jpeg",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 33,
        nombre: "Corset Largo ADA",
        descripcion: "Corset largo de lencería con diseño exclusivo ADA.",
        precio: 70000,
        categoria: "lenceria",
        imagen: "assets/images/33.jpeg",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 34,
        nombre: "Corset Varilla Tulia",
        descripcion: "Corset de lencería con varillas y diseño exclusivo Tulia.",
        precio: 67000,
        categoria: "lenceria",
        imagenes: ["assets/images/34.jpeg", "assets/images/34.2.jpeg"],
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 35,
        nombre: "Brasier y Cachetero",
        descripcion: "Set de brasier y cachetero de lencería elegante.",
        precio: 55000,
        categoria: "lenceria",
        imagenes: ["assets/images/35.jpeg", "assets/images/35.2.jpeg", "assets/images/35.3.jpeg"],
        tallas: ["32", "34", "36", "38"]
    },
    {
        id: 36,
        nombre: "Conjunto",
        descripcion: "Conjunto de lencería elegante y cómodo.",
        precio: 48000,
        categoria: "lenceria",
        imagenes: ["assets/images/36.jpeg", "assets/images/36.2.jpeg"],
        tallas: ["32", "34", "36", "39"]
    },
    {
        id: 37,
        nombre: "Corset Orquidea",
        descripcion: "Corset de lencería con diseño exclusivo Orquídea.",
        precio: 48000,
        categoria: "lenceria",
        imagenes: ["assets/images/37.jpeg", "assets/images/37.2.jpeg"],
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 38,
        nombre: "Conjunto Chanel",
        descripcion: "Conjunto de lencería con diseño exclusivo Chanel.",
        precio: 32000,
        categoria: "lenceria",
        imagenes: ["assets/images/38.jpeg", "assets/images/38.2.jpeg"],
        tallas: ["S"]
    },
    {
        id: 39,
        nombre: "Conjunto Destellante Victoria",
        descripcion: "Conjunto de lencería con destellos y diseño exclusivo Victoria.",
        precio: 39000,
        categoria: "lenceria",
        imagen: "assets/images/39.jpeg",
        tallas: ["Única"]
    },
    {
        id: 40,
        nombre: "Liguero Antonia",
        descripcion: "Liguero de lencería con diseño exclusivo Antonia.",
        precio: 64000,
        categoria: "lenceria",
        imagen: "assets/images/40.jpeg",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 41,
        nombre: "Set Cleo",
        descripcion: "Set de lencería con diseño exclusivo Cleo.",
        precio: 50000,
        categoria: "lenceria",
        imagenes: ["assets/images/41.jpeg", "assets/images/41.2.jpeg"],
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 42,
        nombre: "Conjunto Basico Carmen",
        descripcion: "Conjunto básico de lencería con diseño exclusivo Carmen.",
        precio: 35000,
        categoria: "lenceria",
        imagenes: ["assets/images/42.jpeg", "assets/images/42.2.jpeg"],
        tallas: ["Única"]
    },
    {
        id: 43,
        nombre: "Conjunto Solen",
        descripcion: "Conjunto de lencería con diseño exclusivo Solen.",
        precio: 64000,
        categoria: "lenceria",
        imagen: "assets/images/43.jpeg",
        tallas: ["Única"]
    },
    {
        id: 44,
        nombre: "Set Lentejuelas",
        descripcion: "Set de lencería con lentejuelas elegantes.",
        precio: 57000,
        categoria: "lenceria",
        imagen: "assets/images/44.jpeg",
        tallas: ["32", "34", "36"]
    },
    {
        id: 45,
        nombre: "Conjunto Corset-Panty Nova Largo",
        descripcion: "Conjunto de lencería con corset-panty largo y diseño Nova.",
        precio: 70000,
        categoria: "lenceria",
        imagen: "assets/images/45.jpeg",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 46,
        nombre: "Conjunto Varilla Gabriela",
        descripcion: "Conjunto de lencería con varillas y diseño exclusivo Gabriela.",
        precio: 69000,
        categoria: "lenceria",
        imagenes: ["assets/images/46.jpeg", "assets/images/46.2.jpeg"],
        tallas: ["S", "M", "L"]
    },
    {
        id: 47,
        nombre: "Lenceria Lolita",
        descripcion: "Lencería con diseño exclusivo Lolita.",
        precio: 58000,
        categoria: "lenceria",
        imagenes: ["assets/images/47.jpeg", "assets/images/47.2.jpeg"],
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 48,
        nombre: "Conjunto Cresida",
        descripcion: "Conjunto de lencería con diseño exclusivo Cresida.",
        precio: 50000,
        categoria: "lenceria",
        imagen: "assets/images/48.jpeg",
        tallas: ["S", "M", "L"]
    },
    {
        id: 49,
        nombre: "Conjunto Aurora",
        descripcion: "Conjunto de lencería con diseño exclusivo Aurora.",
        precio: 50000,
        categoria: "lenceria",
        imagenes: ["assets/images/49.jpeg", "assets/images/49.2.jpeg"],
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 50,
        nombre: "Conjunto Basico Fida",
        descripcion: "Conjunto básico de lencería con diseño exclusivo Fida.",
        precio: 25000,
        categoria: "lenceria",
        imagen: "assets/images/50.jpeg",
        tallas: ["Única"]
    },
    {
        id: 51,
        nombre: "Liguero Gala",
        descripcion: "Liguero de lencería con diseño exclusivo Gala.",
        precio: 42000,
        categoria: "lenceria",
        imagen: "assets/images/51.jpeg",
        tallas: ["Única"]
    },
    {
        id: 52,
        nombre: "Conjunto Elettra Mariposa",
        descripcion: "Conjunto de lencería con diseño de mariposa exclusivo Elettra.",
        precio: 29000,
        categoria: "lenceria",
        imagen: "assets/images/52.jpeg",
        tallas: ["Única"]
    },
    {
        id: 53,
        nombre: "Conjunto-Panty Estrellita",
        descripcion: "Conjunto-panty de lencería con diseño de estrellitas.",
        precio: 70000,
        categoria: "lenceria",
        imagen: "assets/images/53.jpeg",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 54,
        nombre: "Body Fabiana",
        descripcion: "Body de lencería con diseño exclusivo Fabiana.",
        precio: 65000,
        categoria: "lenceria",
        imagen: "assets/images/54.jpeg",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 55,
        nombre: "Conjunto Persefone",
        descripcion: "Conjunto de lencería con diseño exclusivo Persefone.",
        precio: 50000,
        categoria: "lenceria",
        imagen: "assets/images/55.jpeg",
        tallas: ["32", "34"]
    },
    {
        id: 56,
        nombre: "Conjunto",
        descripcion: "Conjunto de lencería elegante y cómodo.",
        precio: 55000,
        categoria: "lenceria",
        imagen: "assets/images/56.jpeg",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 57,
        nombre: "Conjunto Corset Hazel",
        descripcion: "Conjunto corset de lencería con diseño exclusivo Hazel.",
        precio: 60000,
        categoria: "lenceria",
        imagen: "assets/images/57.jpeg",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 58,
        nombre: "Corset-Panty Hermes",
        descripcion: "Corset-panty de lencería con diseño exclusivo Hermes.",
        precio: 66000,
        categoria: "lenceria",
        imagen: "assets/images/58.jpeg",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 59,
        nombre: "Conjunto Brillos V",
        descripcion: "Conjunto de lencería con brillos y diseño V.",
        precio: 53000,
        categoria: "lenceria",
        imagen: "assets/images/59.jpeg",
        tallas: ["Única"]
    },
    {
        id: 60,
        nombre: "Conjunto-Blusa y Semi Tanga Alia",
        descripcion: "Conjunto de lencería con blusa y semi tanga diseño Alia.",
        precio: 45000,
        categoria: "lenceria",
        imagen: "assets/images/60.jpeg",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 61,
        nombre: "Trio Cachetero, Top con Copa y Tanga Graduable",
        descripcion: "Trío de lencería con cachetero, top con copa y tanga graduable.",
        precio: 50000,
        categoria: "lenceria",
        imagen: "assets/images/61.jpeg",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 62,
        nombre: "Conjunto Jossie",
        descripcion: "Conjunto de lencería con diseño exclusivo Jossie.",
        precio: 50000,
        categoria: "lenceria",
        imagen: "assets/images/62.jpeg",
        tallas: ["Única"]
    },
    {
        id: 63,
        nombre: "Conjunto Afrodita",
        descripcion: "Conjunto de lencería con diseño exclusivo Afrodita.",
        precio: 40000,
        categoria: "lenceria",
        imagen: "assets/images/63.jpeg",
        tallas: ["S", "M", "L"]
    },
    {
        id: 64,
        nombre: "Crop Top Salome",
        descripcion: "Crop top de lencería con diseño exclusivo Salome.",
        precio: 55000,
        categoria: "lenceria",
        imagen: "assets/images/64.jpeg",
        tallas: ["S", "M"]
    },
    {
        id: 65,
        nombre: "Conjunto Blusa Michael",
        descripcion: "Conjunto de lencería con blusa diseño Michael.",
        precio: 46000,
        categoria: "lenceria",
        imagen: "assets/images/65.jpeg",
        tallas: ["Única"]
    },
    {
        id: 66,
        nombre: "Conjunto Victoria Basico",
        descripcion: "Conjunto básico de lencería con diseño Victoria.",
        precio: 45000,
        categoria: "lenceria",
        imagen: "assets/images/66.jpeg",
        tallas: ["Única"]
    },
    {
        id: 67,
        nombre: "Conjunto Raily",
        descripcion: "Conjunto de lencería con diseño exclusivo Raily.",
        precio: 45000,
        categoria: "lenceria",
        imagen: "assets/images/67.jpeg",
        tallas: ["S", "M", "L", "XL"]
    },
    // Perfumes (ejemplos eliminados)
    // Accesorios
    {
        id: 70,
        nombre: "Collar de Perlas Elegante",
        descripcion: "Collar de perlas naturales con dije de plata.",
        precio: 125000,
        categoria: "accesorios",
        imagen: "📿"
    },
    {
        id: 71,
        nombre: "Bolso de Mano Trendy",
        descripcion: "Bolso de mano con diseño moderno y espacio amplio.",
        precio: 145000,
        categoria: "accesorios",
        imagen: "👜"
    },
    // Maquillaje
    {
        id: 72,
        nombre: "Kit de Maquillaje Profesional",
        descripcion: "Kit completo con sombras, labiales y base de alta calidad.",
        precio: 189000,
        categoria: "maquillaje",
        imagen: "💄"
    },
    {
        id: 73,
        nombre: "Paleta de Sombras Premium",
        descripcion: "Paleta con 12 sombras de colores neutros y vibrantes.",
        precio: 95000,
        categoria: "maquillaje",
        imagen: "🎨"
    },
    // Pijamas
    {
        id: 74,
        nombre: "Pijama de Seda Comfort",
        descripcion: "Pijama de seda suave para noches cómodas y elegantes.",
        precio: 210000,
        categoria: "pijamas",
        imagen: "👘"
    },
    {
        id: 75,
        nombre: "Conjunto Pijama Algodón",
        descripcion: "Pijama de algodón 100% orgánico, cómodo y transpirable.",
        precio: 75000,
        categoria: "pijamas",
        imagen: "🛌"
    },
    // Vestidos de Baño
    {
        id: 76,
        nombre: "Bikini Elegante",
        descripcion: "Bikini de dos piezas con diseño moderno y ajuste perfecto.",
        precio: 135000,
        categoria: "vestidos-bano",
        imagen: "👙"
    },
    {
        id: 77,
        nombre: "Traje de Baño Entero",
        descripcion: "Traje de baño de una pieza con corte clásico y elegante.",
        precio: 155000,
        categoria: "vestidos-bano",
        imagen: "🏊‍♀️"
    },
    // Nuevos productos de lencería
    {
        id: 78,
        nombre: "Corset con Brillos Brigitte",
        descripcion: "Corset elegante con detalles brillantes y diseño exclusivo Brigitte.",
        precio: 72000,
        categoria: "lenceria",
        imagenes: ["assets/images/68.jpeg", "assets/images/68.2.jpeg"],
        tallas: ["S", "M", "L"]
    },
    {
        id: 79,
        nombre: "Corset Madison",
        descripcion: "Corset sofisticado con diseño exclusivo Madison.",
        precio: 65000,
        categoria: "lenceria",
        imagenes: ["assets/images/69.jpeg", "assets/images/69.2.jpeg"],
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 80,
        nombre: "Corset Encaje Katia",
        descripcion: "Corset de encaje elegante con diseño exclusivo Katia.",
        precio: 65000,
        categoria: "lenceria",
        imagenes: ["assets/images/70.jpeg", "assets/images/70.2.jpeg", "assets/images/70.3.jpeg", "assets/images/70.4.jpeg", "assets/images/70.5.jpeg", "assets/images/70.6.jpeg"],
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 81,
        nombre: "Colegiala Cuadros",
        descripcion: "Conjunto colegiala con estampado de cuadros, perfecto para ocasiones especiales.",
        precio: 54000,
        categoria: "lenceria",
        imagenes: ["assets/images/71.jpeg", "assets/images/71.2.jpeg"],
        tallas: ["Única"]
    },
    {
        id: 82,
        nombre: "Conjunto Flot",
        descripcion: "Conjunto de lencería con diseño Flot elegante y cómodo.",
        precio: 30000,
        categoria: "lenceria",
        imagenes: ["assets/images/72.jpeg", "assets/images/72.2.jpeg"],
        tallas: ["Única"]
    },
    {
        id: 83,
        nombre: "Conjunto Cachetero",
        descripcion: "Conjunto de lencería con cachetero incluido, diseño moderno y elegante.",
        precio: 40000,
        categoria: "lenceria",
        imagenes: ["assets/images/73.jpeg", "assets/images/73.2.jpeg", "assets/images/73.3.jpeg"],
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 84,
        nombre: "Conjunto",
        descripcion: "Conjunto de lencería elegante y cómodo con diseño exclusivo.",
        precio: 42000,
        categoria: "lenceria",
        imagenes: ["assets/images/74.jpeg", "assets/images/74.2.jpeg", "assets/images/74.3.jpeg"],
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 85,
        nombre: "Panty",
        descripcion: "Panty de lencería básico y cómodo.",
        precio: 14000,
        categoria: "lenceria",
        imagen: "assets/images/75.jpeg",
        tallas: ["Única"]
    },
    {
        id: 86,
        nombre: "Panty Grueso",
        descripcion: "Panty grueso de lencería para mayor comodidad y soporte.",
        precio: 18000,
        categoria: "lenceria",
        imagenes: ["assets/images/76.jpeg", "assets/images/76.2.jpeg"],
        tallas: ["Única"]
    },
    {
        id: 87,
        nombre: "Panty",
        descripcion: "Panty de lencería elegante y cómodo.",
        precio: 13000,
        categoria: "lenceria",
        imagen: "assets/images/77.jpeg",
        tallas: ["Única"]
    },
    {
        id: 88,
        nombre: "Cachetero",
        descripcion: "Cachetero de lencería elegante y cómodo.",
        precio: 15000,
        categoria: "lenceria",
        imagenes: ["assets/images/78.jpeg", "assets/images/78.2.jpeg"],
        tallas: ["M", "L", "XL"]
    },
    {
        id: 89,
        nombre: "Cachetero",
        descripcion: "Cachetero de lencería elegante y cómodo.",
        precio: 15000,
        categoria: "lenceria",
        imagen: "assets/images/79.jpeg",
        tallas: ["S"]
    },
    {
        id: 90,
        nombre: "Tanga Bordada",
        descripcion: "Tanga de lencería con bordados elegantes y delicados.",
        precio: 8000,
        categoria: "lenceria",
        imagenes: ["assets/images/80.jpeg", "assets/images/80.2.jpeg", "assets/images/80.3.jpeg"],
        tallas: ["Única"]
    },
    {
        id: 91,
        nombre: "Boxer Dama",
        descripcion: "Boxer de lencería para dama, cómodo y elegante.",
        precio: 10000,
        categoria: "lenceria",
        imagenes: ["assets/images/81.jpeg", "assets/images/81.2.jpeg"],
        tallas: ["S", "M", "L"]
    },
    {
        id: 92,
        nombre: "Panty Grueso Graduable",
        descripcion: "Panty grueso graduable de lencería para mayor comodidad.",
        precio: 18000,
        categoria: "lenceria",
        imagenes: ["assets/images/82.jpeg", "assets/images/82.2.jpeg"],
        tallas: ["Única"]
    },
    {
        id: 93,
        nombre: "Panty Licrada con Brillos Audry",
        descripcion: "Panty licrado con brillos y diseño exclusivo Audry.",
        precio: 23000,
        categoria: "lenceria",
        imagen: "assets/images/83.jpeg",
        tallas: ["Única"]
    },
    {
        id: 94,
        nombre: "Tanga Victoria Secret 2",
        descripcion: "Tanga de lencería con diseño exclusivo Victoria Secret.",
        precio: 23000,
        categoria: "lenceria",
        imagen: "assets/images/84.jpeg",
        tallas: ["Única"]
    },
    {
        id: 95,
        nombre: "Delfina",
        descripcion: "Conjunto de lencería con diseño exclusivo Delfina.",
        precio: 10000,
        categoria: "lenceria",
        imagenes: ["assets/images/85.jpeg", "assets/images/85.2.jpeg"],
        tallas: ["Única"]
    },
    {
        id: 96,
        nombre: "Moño Lentejuelas",
        descripcion: "Accesorio de lencería con moño y lentejuelas elegantes.",
        precio: 10000,
        categoria: "lenceria",
        imagenes: ["assets/images/86.jpeg", "assets/images/86.2.jpeg"],
        tallas: ["Única"]
    },
    {
        id: 97,
        nombre: "Gloria",
        descripcion: "Conjunto de lencería con diseño exclusivo Gloria.",
        precio: 10000,
        categoria: "lenceria",
        imagenes: ["assets/images/87.jpeg", "assets/images/87.2.jpeg"],
        tallas: ["Graduable"]
    },
    {
        id: 98,
        nombre: "Esperanza",
        descripcion: "Conjunto de lencería con diseño exclusivo Esperanza.",
        precio: 10000,
        categoria: "lenceria",
        imagenes: ["assets/images/88.jpeg", "assets/images/88.2.jpeg", "assets/images/88.3.jpeg", "assets/images/88.4.jpeg"],
        tallas: ["Única"]
    },
    {
        id: 99,
        nombre: "Esperanza Lazos",
        descripcion: "Conjunto de lencería con lazos y diseño exclusivo Esperanza.",
        precio: 8000,
        categoria: "lenceria",
        imagen: "assets/images/89.jpeg",
        tallas: ["Graduable"]
    },
    {
        id: 100,
        nombre: "Panty Antonella",
        descripcion: "Panty de lencería con diseño exclusivo Antonella.",
        precio: 9000,
        categoria: "lenceria",
        imagenes: ["assets/images/90.jpeg", "assets/images/90.2.jpeg", "assets/images/90.3.jpeg"],
        tallas: ["Graduable"]
    },
    {
        id: 101,
        nombre: "Panty Alma",
        descripcion: "Panty de lencería con diseño exclusivo Alma.",
        precio: 10000,
        categoria: "lenceria",
        imagenes: ["assets/images/91.jpeg", "assets/images/91.2.jpeg"],
        tallas: ["Graduable"]
    },
    {
        id: 102,
        nombre: "Panty Victoria",
        descripcion: "Panty de lencería con diseño exclusivo Victoria.",
        precio: 15000,
        categoria: "lenceria",
        imagen: "assets/images/92.jpeg",
        tallas: ["Única"]
    },
    {
        id: 103,
        nombre: "Panty Encaje",
        descripcion: "Panty de lencería con encaje elegante y delicado.",
        precio: 15000,
        categoria: "lenceria",
        imagen: "assets/images/93.jpeg",
        tallas: ["Única"]
    }
];

// Productos de subcategoría: Disfraces (dentro de Lencería)
productos.push(
    {
        id: 104,
        nombre: "Disfraz Enfermera",
        descripcion: "Set de disfraz estilo enfermera.",
        precio: 68000,
        categoria: "lenceria",
        subcategoria: "disfraces",
        imagenes: ["assets/images/94.jpeg", "assets/images/94.2.jpeg"],
        tallas: ["Única"]
    },
    {
        id: 105,
        nombre: "Colegiala Rosada",
        descripcion: "Conjunto colegiala en tono rosado.",
        precio: 68000,
        categoria: "lenceria",
        subcategoria: "disfraces",
        imagenes: ["assets/images/95.jpeg", "assets/images/95.2.jpeg"],
        tallas: ["Única"]
    },
    {
        id: 106,
        nombre: "Monja",
        descripcion: "Disfraz tipo monja.",
        precio: 68000,
        categoria: "lenceria",
        subcategoria: "disfraces",
        imagenes: ["assets/images/96.jpeg", "assets/images/96.2.jpeg"],
        tallas: ["Única"]
    },
    {
        id: 107,
        nombre: "Mucama",
        descripcion: "Set de disfraz de mucama.",
        precio: 68000,
        categoria: "lenceria",
        subcategoria: "disfraces",
        imagen: "assets/images/97.jpeg",
        tallas: ["Única"]
    },
    {
        id: 108,
        nombre: "Vaquita",
        descripcion: "Conjunto de disfraz de vaquita.",
        precio: 68000,
        categoria: "lenceria",
        subcategoria: "disfraces",
        imagenes: ["assets/images/98.jpeg", "assets/images/98.2.jpeg"],
        tallas: ["Única"]
    }
);

// Más disfraces
productos.push(
    {
        id: 109,
        nombre: "Blanca Nieves",
        descripcion: "Disfraz inspirado en Blanca Nieves.",
        precio: 68000,
        categoria: "lenceria",
        subcategoria: "disfraces",
        imagenes: ["assets/images/99.jpeg", "assets/images/99.2.jpeg", "assets/images/99.3.jpeg"],
        tallas: ["Única"]
    },
    {
        id: 110,
        nombre: "Jessy",
        descripcion: "Disfraz Jessy con tiras graduables.",
        precio: 68000,
        categoria: "lenceria",
        subcategoria: "disfraces",
        imagen: "assets/images/100.jpeg",
        tallas: ["Graduable"]
    },
    {
        id: 111,
        nombre: "Caperucita Roja",
        descripcion: "Disfraz clásico de Caperucita Roja.",
        precio: 68000,
        categoria: "lenceria",
        subcategoria: "disfraces",
        imagen: "assets/images/101.jpeg",
        tallas: ["Graduable"]
    },
    {
        id: 112,
        nombre: "Mucama Rosada",
        descripcion: "Disfraz de mucama en color rosado.",
        precio: 68000,
        categoria: "lenceria",
        subcategoria: "disfraces",
        imagen: "assets/images/102.jpeg",
        tallas: ["Única"]
    },
    {
        id: 113,
        nombre: "Conejita Rosada",
        descripcion: "Disfraz de conejita en tono rosado.",
        precio: 68000,
        categoria: "lenceria",
        subcategoria: "disfraces",
        imagenes: ["assets/images/103.jpeg", "assets/images/103.2.jpeg", "assets/images/103.3.jpeg"],
        tallas: ["Única"]
    }
);

// Nuevos productos - Categoría: Perfumes (solo nombre, precio, imagen)
productos.push(
    { id: 114, nombre: "Splash Chic", precio: 25000, categoria: "perfumes", imagen: "assets/images/104.jpeg" },
    { id: 115, nombre: "Splash Seducción", precio: 25000, categoria: "perfumes", imagen: "assets/images/105.jpeg" },
    { id: 116, nombre: "Splash Blue Kiss", precio: 25000, categoria: "perfumes", imagen: "assets/images/106.jpeg" },
    { id: 117, nombre: "Splash Coco Nut", precio: 25000, categoria: "perfumes", imagen: "assets/images/107.jpeg" },
    { id: 118, nombre: "Splash Sandía", precio: 25000, categoria: "perfumes", imagen: "assets/images/108.jpeg" },
    { id: 119, nombre: "Splash Bon Bon", precio: 25000, categoria: "perfumes", imagen: "assets/images/109.jpeg" },
    { id: 120, nombre: "Exfoliante Corporal Bon Bon", precio: 25000, categoria: "perfumes", imagen: "assets/images/110.jpeg" },
    { id: 121, nombre: "Exfoliante Corporal Sandía", precio: 25000, categoria: "perfumes", imagen: "assets/images/111.jpeg" },
    { id: 122, nombre: "Exfoliante Corporal Exploción Tropical", precio: 25000, categoria: "perfumes", imagen: "assets/images/112.jpeg" },
    { id: 123, nombre: "Mantequilla Chic", precio: 25000, categoria: "perfumes", imagen: "assets/images/113.jpeg" },
    { id: 124, nombre: "Mantequilla Sandía", precio: 25000, categoria: "perfumes", imagen: "assets/images/114.jpeg" },
    { id: 125, nombre: "Mantequilla Coco Nut", precio: 25000, categoria: "perfumes", imagen: "assets/images/115.jpeg" },
    { id: 126, nombre: "Mantequilla Blue Kiss", precio: 25000, categoria: "perfumes", imagen: "assets/images/116.jpeg" },
    { id: 127, nombre: "Mantequilla Seducción", precio: 25000, categoria: "perfumes", imagen: "assets/images/117.jpeg" },
    { id: 128, nombre: "Iluminador Pink", precio: 25000, categoria: "perfumes", imagen: "assets/images/118.jpeg" },
    { id: 129, nombre: "Iluminador Gold", precio: 25000, categoria: "perfumes", imagen: "assets/images/119.jpeg" },
    { id: 130, nombre: "Iluminador Bronze", precio: 25000, categoria: "perfumes", imagen: "assets/images/120.jpeg" },
    // Nuevos mini splash
    { id: 131, nombre: "Mini Splash Blue Kiss", precio: 16000, categoria: "perfumes", imagen: "assets/images/122.jpeg" },
    { id: 132, nombre: "Mini Splash Coco Nut", precio: 16000, categoria: "perfumes", imagen: "assets/images/123.jpeg" },
    { id: 133, nombre: "Mini Splash Sandía", precio: 16000, categoria: "perfumes", imagen: "assets/images/124.jpeg" },
    { id: 134, nombre: "Mini Splash Bon Bon", precio: 16000, categoria: "perfumes", imagen: "assets/images/125.jpeg" },
    { id: 135, nombre: "Mini Splash Seducción", precio: 16000, categoria: "perfumes", imagen: "assets/images/126.jpeg" },
    // Nuevos splash infantiles
    { id: 136, nombre: "Splash Infantil", precio: 12000, categoria: "perfumes", imagen: "assets/images/127.jpeg" },
    { id: 137, nombre: "Splash Unicornio", precio: 12000, categoria: "perfumes", imagen: "assets/images/128.jpeg" },
    { id: 138, nombre: "Splash Capricho", precio: 12000, categoria: "perfumes", imagen: "assets/images/129.jpeg" },
    { id: 139, nombre: "Splash Princess", precio: 12000, categoria: "perfumes", imagen: "assets/images/130.jpeg" },
    { id: 140, nombre: "Splash Bon Bon Infantil", precio: 12000, categoria: "perfumes", imagen: "assets/images/131.jpeg" },
    { id: 141, nombre: "Splash Sirena", precio: 12000, categoria: "perfumes", imagen: "assets/images/132.jpeg" }
);

// Variables globales
let categoriaActual = 'todos';
let ordenPrecioActual = '';
let paginaActual = 1;
const PRODUCTOS_POR_PAGINA = 24;
let productosFiltrados = [];

// Mostrar/ocultar botón Disfraces según categoría
function actualizarVisibilidadDisfraces() {
    const btn = document.getElementById('btnDisfraces');
    if (!btn) return;
    btn.style.display = categoriaActual === 'lenceria' ? 'inline-block' : 'none';
}

// Función para inicializar carruseles automáticos
function inicializarCarruseles() {
    const carruseles = document.querySelectorAll('.producto-carrusel');
    
    carruseles.forEach(carrusel => {
        const imagenes = carrusel.querySelectorAll('.carrusel-img');
        if (imagenes.length <= 1) return;
        
        let indiceActual = 0;
        
        // Función para cambiar imagen
        function cambiarImagen() {
            // Ocultar imagen actual
            imagenes[indiceActual].classList.remove('active');
            
            // Avanzar al siguiente índice
            indiceActual = (indiceActual + 1) % imagenes.length;
            
            // Mostrar nueva imagen
            imagenes[indiceActual].classList.add('active');
        }
        
        // Cambiar imagen cada 2 segundos
        setInterval(cambiarImagen, 2000);
    });
}

// Función para inicializar navegación móvil
function inicializarNavegacionMovil(contenedor, imagenes) {
    console.log('Inicializando navegación móvil:', contenedor);
    const img = contenedor.querySelector('.modal-producto-imagen-movil');
    const puntos = contenedor.querySelectorAll('.punto-movil');
    let indiceActual = 0;
    
    // Función para cambiar imagen
    function cambiarImagen(indice) {
        console.log('Cambiando a imagen:', indice);
        img.src = imagenes[indice];
        
        // Asegurar dimensiones consistentes
        img.style.height = '350px';
        img.style.minHeight = '350px';
        img.style.maxHeight = '350px';
        img.style.width = '100%';
        img.style.objectFit = 'cover';
        img.style.objectPosition = 'center';
        
        // Actualizar puntos
        puntos.forEach((punto, index) => {
            if (index === indice) {
                punto.classList.add('activo');
                punto.style.backgroundColor = '#f48fb1';
            } else {
                punto.classList.remove('activo');
                punto.style.backgroundColor = 'rgba(255,255,255,0.5)';
            }
        });
        
        indiceActual = indice;
    }
    
    // Agregar event listeners a los puntos
    puntos.forEach((punto, index) => {
        punto.addEventListener('click', () => {
            cambiarImagen(index);
        });
    });
    
    // Auto-cambio cada 3 segundos (opcional)
    setInterval(() => {
        const siguienteIndice = (indiceActual + 1) % imagenes.length;
        cambiarImagen(siguienteIndice);
    }, 3000);
}

// Función para inicializar carrusel del modal
function inicializarCarruselModal(carrusel) {
    console.log('Inicializando carrusel del modal:', carrusel);
    const imagenes = carrusel.querySelectorAll('.carrusel-img');
    console.log('Imágenes encontradas:', imagenes.length);
    
    // Detectar si estamos en móvil
    const esMovil = window.innerWidth <= 768;
    console.log('Es móvil:', esMovil);
    
    if (imagenes.length <= 1) {
        console.log('Solo hay 1 imagen o menos, no se inicializa carrusel');
        if (imagenes.length === 1) {
            imagenes[0].classList.add('active');
            imagenes[0].style.opacity = '1';
            imagenes[0].style.zIndex = '2';
            
            // En móvil, forzar estilos adicionales
            if (esMovil) {
                imagenes[0].style.cssText = `
                    position: absolute !important;
                    top: 0 !important;
                    left: 0 !important;
                    width: 100% !important;
                    height: 100% !important;
                    object-fit: cover !important;
                    opacity: 1 !important;
                    z-index: 2 !important;
                    display: block !important;
                    visibility: visible !important;
                    border: 2px solid green !important;
                `;
            }
        }
        return;
    }
    
    // Configurar todas las imágenes
    imagenes.forEach((img, index) => {
        img.classList.remove('active');
        img.style.opacity = '0';
        img.style.zIndex = '1';
        
        // En móvil, aplicar estilos forzados
        if (esMovil) {
            img.style.cssText = `
                position: absolute !important;
                top: 0 !important;
                left: 0 !important;
                width: 100% !important;
                height: 100% !important;
                object-fit: cover !important;
                opacity: 0 !important;
                z-index: 1 !important;
                display: block !important;
                visibility: visible !important;
                border: 2px solid red !important;
                background-image: none !important;
                background-size: cover !important;
                background-position: center !important;
                background-repeat: no-repeat !important;
            `;
            // Forzar que la imagen se cargue
            img.onload = function() {
                console.log('Imagen cargada en móvil:', img.src);
            };
            img.onerror = function() {
                console.error('Error cargando imagen en móvil:', img.src);
            };
        }
        
        if (index === 0) {
            img.classList.add('active');
            img.style.opacity = '1';
            img.style.zIndex = '2';
            
            // En móvil, forzar estilos para la imagen activa
            if (esMovil) {
                img.style.cssText = `
                    position: absolute !important;
                    top: 0 !important;
                    left: 0 !important;
                    width: 100% !important;
                    height: 100% !important;
                    object-fit: cover !important;
                    opacity: 1 !important;
                    z-index: 2 !important;
                    display: block !important;
                    visibility: visible !important;
                    border: 2px solid green !important;
                    background-image: none !important;
                    background-size: cover !important;
                    background-position: center !important;
                    background-repeat: no-repeat !important;
                `;
            }
            
            console.log('Imagen activa:', index, img.src);
        }
    });
    
    let indiceActual = 0;
    
    // Función para cambiar imagen
    function cambiarImagen() {
        console.log('Cambiando imagen, actual:', indiceActual);
        // Ocultar imagen actual
        imagenes[indiceActual].classList.remove('active');
        imagenes[indiceActual].style.opacity = '0';
        imagenes[indiceActual].style.zIndex = '1';
        
        // En móvil, forzar estilos para imagen oculta
        if (esMovil) {
            imagenes[indiceActual].style.cssText = `
                position: absolute !important;
                top: 0 !important;
                left: 0 !important;
                width: 100% !important;
                height: 100% !important;
                object-fit: cover !important;
                opacity: 0 !important;
                z-index: 1 !important;
                display: block !important;
                visibility: visible !important;
                border: 2px solid red !important;
            `;
        }
        
        // Avanzar al siguiente índice
        indiceActual = (indiceActual + 1) % imagenes.length;
        
        // Mostrar nueva imagen
        imagenes[indiceActual].classList.add('active');
        imagenes[indiceActual].style.opacity = '1';
        imagenes[indiceActual].style.zIndex = '2';
        
        // En móvil, forzar estilos para imagen activa
        if (esMovil) {
            imagenes[indiceActual].style.cssText = `
                position: absolute !important;
                top: 0 !important;
                left: 0 !important;
                width: 100% !important;
                height: 100% !important;
                object-fit: cover !important;
                opacity: 1 !important;
                z-index: 2 !important;
                display: block !important;
                visibility: visible !important;
                border: 2px solid green !important;
            `;
        }
        
        console.log('Nueva imagen activa:', indiceActual, imagenes[indiceActual].src);
    }
    
    // Cambiar imagen cada 2 segundos
    setInterval(cambiarImagen, 2000);
}

// Cargar productos en la página
function cargarProductos(categoria = 'todos', ordenPrecio = '', pagina = 1) {
    const container = document.getElementById('productos-container');
    container.innerHTML = '';
    
    // Filtrar productos por categoría o subcategoría
    if (categoria === 'todos') {
        productosFiltrados = [...productos];
    } else if (categoria === 'disfraces') {
        // Subcategoría explícita: solo productos con subcategoria === 'disfraces'
        productosFiltrados = productos.filter(p => p.subcategoria === 'disfraces');
    } else {
        // Filtrado normal por categoría, con excepción para Lencería:
        // en Lencería ocultamos los que pertenezcan a la subcategoría 'disfraces'
        if (categoria === 'lenceria') {
            productosFiltrados = productos.filter(p => p.categoria === 'lenceria' && p.subcategoria !== 'disfraces');
        } else {
            productosFiltrados = productos.filter(p => p.categoria === categoria);
        }
    }
    
    // Aplicar ordenamiento por precio si está seleccionado
    if (ordenPrecio === 'menor-mayor') {
        productosFiltrados.sort((a, b) => a.precio - b.precio);
    } else if (ordenPrecio === 'mayor-menor') {
        productosFiltrados.sort((a, b) => b.precio - a.precio);
    }
    
    // Calcular productos para la página actual
    const inicio = (pagina - 1) * PRODUCTOS_POR_PAGINA;
    const fin = inicio + PRODUCTOS_POR_PAGINA;
    const productosPagina = productosFiltrados.slice(inicio, fin);
    
    // Renderizar productos de la página actual
    productosPagina.forEach(producto => {
        // Determinar si usar imagen real, múltiples imágenes o emoji
        let imagenHTML;
        if (producto.imagenes && producto.imagenes.length > 1) {
            // Producto con múltiples imágenes - crear carrusel
            imagenHTML = `
                <div class="producto-carrusel" data-producto-id="${producto.id}">
                    ${producto.imagenes.map((img, index) => 
                        `<img src="${img}" alt="${producto.nombre}" class="producto-imagen carrusel-img ${index === 0 ? 'active' : ''}" data-index="${index}">`
                    ).join('')}
                </div>
            `;
        } else if (producto.imagen && producto.imagen.includes('assets/')) {
            // Producto con una sola imagen
            imagenHTML = `<img src="${producto.imagen}" alt="${producto.nombre}" class="producto-imagen">`;
        } else {
            // Producto con emoji
            imagenHTML = producto.imagen;
        }
        
        // Mostrar tallas si están disponibles
        const tallasHTML = producto.tallas 
            ? `<div class="producto-tallas">
                <span class="tallas-label">Tallas:</span>
                <div class="tallas-botones">
                    ${producto.tallas.map(talla => `<span class="talla-btn">${talla}</span>`).join('')}
                </div>
               </div>`
            : '';
        
        const productoHTML = `
            <div class="producto-card" data-categoria="${producto.categoria}" data-id="${producto.id}">
                <div class="producto-img">${imagenHTML}</div>
                <div class="producto-info">
                    <h3>${producto.nombre}</h3>
                    ${tallasHTML}
                    <div class="producto-precio">$${producto.precio.toLocaleString('es-CO')}</div>
                    <button class="producto-btn" data-id="${producto.id}">Comprar Ahora</button>
                </div>
            </div>
        `;
        container.innerHTML += productoHTML;
    });
    
    // Inicializar carruseles automáticos
    inicializarCarruseles();
    
    // Agregar event listeners a los botones de compra
    document.querySelectorAll('.producto-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation(); // Evitar que se active el click de la tarjeta
            const productoId = parseInt(this.getAttribute('data-id'));
            abrirModalPedido(productoId);
        });
    });
    
    // Agregar event listeners a las tarjetas de productos
    document.querySelectorAll('.producto-card').forEach(card => {
        card.addEventListener('click', function() {
            const productoId = parseInt(this.getAttribute('data-id'));
            abrirModalProducto(productoId);
        });
    });
    
    // Renderizar controles de paginación
    renderizarPaginacion(categoria, ordenPrecio, pagina);
}

// Función para renderizar controles de paginación
function renderizarPaginacion(categoria, ordenPrecio, pagina) {
    const totalProductos = productosFiltrados.length;
    const totalPaginas = Math.ceil(totalProductos / PRODUCTOS_POR_PAGINA);
    
    // Crear contenedor de paginación si no existe
    let paginacionContainer = document.getElementById('paginacion-container');
    if (!paginacionContainer) {
        paginacionContainer = document.createElement('div');
        paginacionContainer.id = 'paginacion-container';
        paginacionContainer.className = 'paginacion-container';
        document.getElementById('productos-container').parentNode.appendChild(paginacionContainer);
    }
    
    // Limpiar contenido anterior
    paginacionContainer.innerHTML = '';
    
    // No mostrar paginación si hay una página o menos
    if (totalPaginas <= 1) {
        return;
    }
    
    // Crear controles de paginación
    let paginacionHTML = `
        <div class="paginacion-info">
            Mostrando ${((pagina - 1) * PRODUCTOS_POR_PAGINA) + 1}-${Math.min(pagina * PRODUCTOS_POR_PAGINA, totalProductos)} de ${totalProductos} productos
        </div>
        <div class="paginacion-controls">
    `;
    
    // Botón "Anterior"
    if (pagina > 1) {
        paginacionHTML += `<button class="paginacion-btn" onclick="cambiarPagina(${pagina - 1}, '${categoria}', '${ordenPrecio}')">« Anterior</button>`;
    }
    
    // Números de página
    const inicioPagina = Math.max(1, pagina - 2);
    const finPagina = Math.min(totalPaginas, pagina + 2);
    
    if (inicioPagina > 1) {
        paginacionHTML += `<button class="paginacion-btn" onclick="cambiarPagina(1, '${categoria}', '${ordenPrecio}')">1</button>`;
        if (inicioPagina > 2) {
            paginacionHTML += `<span class="paginacion-ellipsis">...</span>`;
        }
    }
    
    for (let i = inicioPagina; i <= finPagina; i++) {
        const claseActiva = i === pagina ? 'paginacion-btn activa' : 'paginacion-btn';
        paginacionHTML += `<button class="${claseActiva}" onclick="cambiarPagina(${i}, '${categoria}', '${ordenPrecio}')">${i}</button>`;
    }
    
    if (finPagina < totalPaginas) {
        if (finPagina < totalPaginas - 1) {
            paginacionHTML += `<span class="paginacion-ellipsis">...</span>`;
        }
        paginacionHTML += `<button class="paginacion-btn" onclick="cambiarPagina(${totalPaginas}, '${categoria}', '${ordenPrecio}')">${totalPaginas}</button>`;
    }
    
    // Botón "Siguiente"
    if (pagina < totalPaginas) {
        paginacionHTML += `<button class="paginacion-btn" onclick="cambiarPagina(${pagina + 1}, '${categoria}', '${ordenPrecio}')">Siguiente »</button>`;
    }
    
    paginacionHTML += `</div>`;
    
    paginacionContainer.innerHTML = paginacionHTML;
}

// Función para cambiar de página
function cambiarPagina(nuevaPagina, categoria, ordenPrecio) {
    paginaActual = nuevaPagina;
    categoriaActual = categoria;
    ordenPrecioActual = ordenPrecio;
    cargarProductos(categoria, ordenPrecio, nuevaPagina);
    
    // Scroll hacia arriba
    document.getElementById('productos-container').scrollIntoView({ behavior: 'smooth' });
}

// Filtrar productos por categoría
document.querySelectorAll('.filtro-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remover clase active de todos los botones
        document.querySelectorAll('.filtro-btn').forEach(b => {
            b.classList.remove('active');
        });
        
        // Agregar clase active al botón clickeado
        this.classList.add('active');
        
        // Filtrar productos
        const categoria = this.getAttribute('data-categoria');
        categoriaActual = categoria;
        paginaActual = 1; // Reiniciar paginación
        cargarProductos(categoria, ordenPrecioActual, 1);
        actualizarVisibilidadDisfraces();
    });
});

// Función para navegar desde categorías a productos
function navegarACategoria(categoria) {
    // Scroll suave a la sección de productos
    document.getElementById('productos').scrollIntoView({ 
        behavior: 'smooth' 
    });
    
    // Activar el filtro correspondiente
    setTimeout(() => {
        // Remover clase active de todos los botones
        document.querySelectorAll('.filtro-btn').forEach(b => {
            b.classList.remove('active');
        });
        
        // Agregar clase active al botón correspondiente
        const botonCategoria = document.querySelector(`[data-categoria="${categoria}"]`);
        if (botonCategoria) {
            botonCategoria.classList.add('active');
        }
        
        // Cargar productos filtrados
        categoriaActual = categoria;
        cargarProductos(categoria, ordenPrecioActual);
        actualizarVisibilidadDisfraces();
    }, 500);
}

// Filtrar por precio
document.getElementById('ordenPrecio').addEventListener('change', function() {
    ordenPrecioActual = this.value;
    paginaActual = 1; // Reiniciar paginación
    cargarProductos(categoriaActual, ordenPrecioActual, 1);
});

// Botón rápido para subcategoría Disfraces (dentro de Lencería)
const btnDisfraces = document.getElementById('btnDisfraces');
if (btnDisfraces) {
    btnDisfraces.addEventListener('click', function() {
        // Quitar selección de los botones de la barra lateral
        document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('active'));
        categoriaActual = 'disfraces';
        paginaActual = 1;
        cargarProductos('disfraces', ordenPrecioActual, 1);
        // Hacer scroll al inicio del listado
        document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
    });
}

// Modal de confirmación
const confirmacionModal = document.getElementById('confirmacionModal');
const btnConfirmacion = document.getElementById('btnConfirmacion');

// Modal de error
const errorModal = document.getElementById('errorModal');
const btnError = document.getElementById('btnError');

// Modal de producto
const productoModal = document.getElementById('productoModal');
const closeProductoModal = document.getElementById('closeProductoModal');
const btnComprarModal = document.getElementById('btnComprarModal');

// Modal de pedido
const modal = document.getElementById('pedidoModal');
const closeBtn = document.querySelector('.close');
const closePedidoModal = document.getElementById('closePedidoModal');
const cancelBtn = document.querySelector('.btn-cancelar');
const form = document.getElementById('formPedido');

function mostrarConfirmacion() {
    confirmacionModal.style.display = 'flex';
}

function cerrarConfirmacion() {
    confirmacionModal.style.display = 'none';
}

function mostrarError() {
    errorModal.style.display = 'flex';
}

function cerrarError() {
    errorModal.style.display = 'none';
}

function abrirModalProducto(productoId) {
    const producto = productos.find(p => p.id === productoId);
    
    if (producto) {
        // Manejar imagen real, múltiples imágenes o emoji
        const modalImg = document.getElementById('productoModalImg');
        
        // Añadir clase especial para perfumes
        if (producto.categoria === 'perfumes') {
            modalImg.classList.add('perfumes-modal');
        } else {
            modalImg.classList.remove('perfumes-modal');
        }
        
        if (producto.imagenes && producto.imagenes.length > 1) {
            // Detectar si es móvil
            const esMovil = window.innerWidth <= 768;
            
            if (esMovil) {
                // En móvil, mostrar primera imagen con navegación
                modalImg.innerHTML = `
                    <div class="modal-carrusel-movil" data-producto-id="${producto.id}">
                        <img src="${producto.imagenes[0]}" alt="${producto.nombre}" class="modal-producto-imagen-movil" style="width: 100%; height: 350px; min-height: 350px; max-height: 350px; object-fit: cover; object-position: center; display: block;">
                        <div class="navegacion-movil" style="position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%); display: flex; gap: 8px; z-index: 10;">
                            ${producto.imagenes.map((_, index) => 
                                `<button class="punto-movil ${index === 0 ? 'activo' : ''}" data-index="${index}" style="width: 12px; height: 12px; border-radius: 50%; border: 2px solid white; background-color: ${index === 0 ? '#f48fb1' : 'rgba(255,255,255,0.5)'}; cursor: pointer;"></button>`
                            ).join('')}
                        </div>
                    </div>
                `;
                console.log('Móvil: Mostrando primera imagen con navegación:', producto.imagenes[0]);
                
                // Inicializar navegación móvil
                inicializarNavegacionMovil(modalImg.querySelector('.modal-carrusel-movil'), producto.imagenes);
            } else {
                // En desktop, usar carrusel
                modalImg.innerHTML = `
                    <div class="modal-carrusel" data-producto-id="${producto.id}">
                        ${producto.imagenes.map((img, index) => 
                            `<img src="${img}" alt="${producto.nombre}" class="carrusel-img ${index === 0 ? 'active' : ''}" data-index="${index}">`
                        ).join('')}
                    </div>
                `;
                // Inicializar carrusel del modal inmediatamente
                const carrusel = modalImg.querySelector('.modal-carrusel');
                if (carrusel) {
                    inicializarCarruselModal(carrusel);
                }
            }
        } else if (producto.imagen && producto.imagen.includes('assets/')) {
            modalImg.innerHTML = `<img src="${producto.imagen}" alt="${producto.nombre}" class="modal-producto-imagen" style="display: block; visibility: visible;">`;
        } else {
            modalImg.textContent = producto.imagen;
        }
        
        document.getElementById('productoModalNombre').textContent = producto.nombre;
        
        // Mostrar tallas como botones interactivos si están disponibles
        const modalDescripcion = document.getElementById('productoModalDescripcion');
        if (producto.tallas) {
            modalDescripcion.innerHTML = `
                <div class="producto-tallas">
                    <span class="tallas-label">Tallas:</span>
                    <div class="tallas-botones">
                        ${producto.tallas.map(talla => `<span class="talla-btn">${talla}</span>`).join('')}
                    </div>
                </div>
            `;
        } else {
            modalDescripcion.innerHTML = '';
        }
        
        document.getElementById('productoModalPrecio').textContent = `$${producto.precio.toLocaleString('es-CO')}`;
        
        // Guardar el ID del producto para el botón de comprar
        btnComprarModal.setAttribute('data-producto-id', productoId);
        
        productoModal.style.display = 'flex';
    }
}

function cerrarModalProducto() {
    productoModal.style.display = 'none';
}

function abrirModalPedido(productoId) {
    const producto = productos.find(p => p.id === productoId);
    
    if (producto) {
        document.getElementById('productoNombre').value = producto.nombre;
        document.getElementById('productoDescripcion').value = producto.descripcion;
        document.getElementById('productoPrecio').value = `$${producto.precio.toLocaleString('es-CO')}`;
        document.getElementById('cantidad').value = 1;
        
        // Calcular precio total inicial
        calcularPrecioTotal();
        
        modal.style.display = 'flex';
    }
}

function calcularPrecioTotal() {
    const precioUnitario = document.getElementById('productoPrecio').value;
    const cantidad = parseInt(document.getElementById('cantidad').value) || 1;
    
    // Extraer el precio numérico del string (remover $ y cualquier separador)
    const precioNumerico = parseFloat(precioUnitario.replace(/[$,.]/g, ''));
    const total = precioNumerico * cantidad;
    
    // Formatear con separadores de miles usando el mismo formato que el precio unitario
    document.getElementById('precioTotal').value = `$${total.toLocaleString('es-CO')}`;
}

function cerrarModal() {
    modal.style.display = 'none';
    form.reset();
}

// Event listeners para modal de producto
closeProductoModal.addEventListener('click', cerrarModalProducto);
btnComprarModal.addEventListener('click', function() {
    const productoId = parseInt(this.getAttribute('data-producto-id'));
    cerrarModalProducto();
    abrirModalPedido(productoId);
});

// Event listeners para modal de pedido
if (closePedidoModal) {
    closePedidoModal.addEventListener('click', cerrarModal);
}

// Event listener para calcular total cuando cambie la cantidad
document.addEventListener('DOMContentLoaded', function() {
    const cantidadInput = document.getElementById('cantidad');
    if (cantidadInput) {
        cantidadInput.addEventListener('input', calcularPrecioTotal);
    }
});

// Event listeners para modal de pedido
// Event listeners para modales personalizados
btnConfirmacion.addEventListener('click', cerrarConfirmacion);
btnError.addEventListener('click', cerrarError);

// Event listeners para modal de pedido
closeBtn.addEventListener('click', cerrarModal);
cancelBtn.addEventListener('click', cerrarModal);

// Enviar pedido a WhatsApp
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const productoNombre = document.getElementById('productoNombre').value;
    const productoDescripcion = document.getElementById('productoDescripcion').value;
    const productoPrecio = document.getElementById('productoPrecio').value;
    const cantidad = document.getElementById('cantidad').value;
    const precioTotal = document.getElementById('precioTotal').value;
    const clienteNombre = document.getElementById('clienteNombre').value;
    const clienteTelefono = document.getElementById('clienteTelefono').value;
    const clienteDireccion = document.getElementById('clienteDireccion').value;
    const clienteCiudad = document.getElementById('clienteCiudad').value;
    const clienteReferencia = document.getElementById('clienteReferencia').value;
    
    // Debug: verificar que los valores se están capturando
    console.log('Ciudad:', clienteCiudad);
    console.log('Referencia:', clienteReferencia);
    
    // Crear mensaje para WhatsApp
    let mensaje = `¡Hola! Quiero realizar un pedido en Sweet Beauty:\n\n`;
    mensaje += `*Producto:* ${productoNombre}\n`;
    mensaje += `*Descripción:* ${productoDescripcion}\n`;
    mensaje += `*Precio Unitario:* ${productoPrecio}\n`;
    mensaje += `*Cantidad:* ${cantidad}\n`;
    mensaje += `*Total:* ${precioTotal}\n\n`;
    mensaje += `*Mis datos:*\n`;
    mensaje += `- Nombre: ${clienteNombre}\n`;
    mensaje += `- Teléfono: ${clienteTelefono}\n`;
    mensaje += `- Dirección: ${clienteDireccion}\n`;
    mensaje += `- Ciudad/Barrio: ${clienteCiudad}\n`;
    mensaje += `- Punto de Referencia: ${clienteReferencia || 'No especificado'}\n\n`;
    mensaje += `Por favor, confirmen mi pedido. ¡Gracias!`;
    
    // Codificar para URL
    const mensajeCodificado = encodeURIComponent(mensaje);
    
    // Debug: mostrar el mensaje completo
    console.log('Mensaje completo:', mensaje);
    
    // Número de WhatsApp (reemplazar con el número real)
    const numeroWhatsApp = "3003024889";
    
    // Abrir WhatsApp
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`, '_blank');
    
    cerrarModal();
});

// Cerrar modales al hacer clic fuera de ellos
window.addEventListener('click', function(e) {
    if (e.target === modal) {
        cerrarModal();
    }
    if (e.target === productoModal) {
        cerrarModalProducto();
    }
});

// Botón Scroll to Top
const scrollToTopBtn = document.getElementById('scrollToTop');

// Mostrar/ocultar botón según scroll
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

// Función para scroll suave en modales
function smoothScrollToTop(element) {
    console.log('Iniciando scroll suave en modal');
    console.log('Elemento:', element);
    console.log('Scroll top actual:', element.scrollTop);
    
    // Intentar primero con scrollTo si está disponible
    if (element.scrollTo) {
        console.log('Usando scrollTo nativo');
        element.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        return;
    }
    
    // Fallback con animación personalizada
    const targetPosition = 0;
    const startPosition = element.scrollTop;
    const distance = startPosition - targetPosition;
    const duration = 500; // 500ms como la página
    let start = null;

    function animation(currentTime) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        element.scrollTop = run;
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Funcionalidad del botón
scrollToTopBtn.addEventListener('click', function() {
    // Verificar si hay algún modal abierto
    const modalesAbiertos = document.querySelectorAll('.modal[style*="flex"]');
    console.log('Modales abiertos:', modalesAbiertos.length);
    
    if (modalesAbiertos.length > 0) {
        // Si hay modales abiertos, hacer scroll suave en el contenido del modal
        modalesAbiertos.forEach(modal => {
            const modalContent = modal.querySelector('.modal-content');
            console.log('Modal content encontrado:', modalContent);
            console.log('Scroll height:', modalContent ? modalContent.scrollHeight : 'N/A');
            console.log('Client height:', modalContent ? modalContent.clientHeight : 'N/A');
            
            if (modalContent) {
                // Hacer scroll independientemente del tamaño del contenido
                smoothScrollToTop(modalContent);
            }
        });
    } else {
        // Si no hay modales abiertos, hacer scroll en la página
        console.log('Haciendo scroll en la página');
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});

// Botón flotante de WhatsApp
const whatsappBtn = document.getElementById('whatsappBtn');
const whatsappOptions = document.getElementById('whatsappOptions');

if (whatsappBtn && whatsappOptions) {
    whatsappBtn.addEventListener('click', function() {
        whatsappOptions.classList.toggle('show');
    });

    // Cerrar opciones al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!whatsappBtn.contains(e.target) && !whatsappOptions.contains(e.target)) {
            whatsappOptions.classList.remove('show');
        }
    });
}

function abrirWhatsApp(numero) {
    window.open(`https://wa.me/${numero}`, '_blank');
    whatsappOptions.classList.remove('show');
}

// Sistema de calificación con estrellas
document.addEventListener('DOMContentLoaded', function() {
    cargarProductos();
    actualizarVisibilidadDisfraces();
    inicializarCalificacionEstrellas();
    inicializarMenuHamburguesa();
});

// Menú hamburguesa
function inicializarMenuHamburguesa() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Cerrar menú al hacer clic fuera de él
    document.addEventListener('click', function(e) {
        if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

function inicializarCalificacionEstrellas() {
    const estrellas = document.querySelectorAll('.estrella');
    const calificacionInput = document.getElementById('calificacionInput');
    
    estrellas.forEach((estrella, index) => {
        estrella.addEventListener('click', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            calificacionInput.value = rating;
            
            // Remover todas las clases activas
            estrellas.forEach(e => e.classList.remove('seleccionada'));
            
            // Agregar clase activa a las estrellas hasta la seleccionada
            for (let i = 0; i < rating; i++) {
                estrellas[i].classList.add('seleccionada');
            }
        });
        
        estrella.addEventListener('mouseenter', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            
            // Remover todas las clases activas
            estrellas.forEach(e => e.classList.remove('activa'));
            
            // Agregar clase activa a las estrellas hasta la hover
            for (let i = 0; i < rating; i++) {
                estrellas[i].classList.add('activa');
            }
        });
    });
    
    // Remover efectos hover al salir del contenedor
    document.querySelector('.calificacion-estrellas').addEventListener('mouseleave', function() {
        estrellas.forEach(e => e.classList.remove('activa'));
    });
}

// Manejo del formulario de calificaciones
document.getElementById('formularioCalificacion').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const botonEnviar = document.querySelector('.btn-enviar-calificacion');
    
    // Deshabilitar botón durante el envío
    botonEnviar.disabled = true;
    botonEnviar.textContent = 'Enviando...';
    
    // Enviar a Formspree
    fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Éxito - mostrar modal personalizado
            mostrarConfirmacion();
            this.reset();
            // Limpiar estrellas
            document.querySelectorAll('.estrella').forEach(e => e.classList.remove('seleccionada'));
            document.getElementById('calificacionInput').value = '';
        } else {
            throw new Error('Error al enviar el formulario');
        }
    })
    .catch(error => {
        mostrarError();
        console.error('Error:', error);
    })
    .finally(() => {
        // Rehabilitar botón
        botonEnviar.disabled = false;
        botonEnviar.textContent = 'Enviar Calificación';
    });
});

// Funciones para el modal del logo
function abrirModalLogo() {
    const logoModal = document.getElementById('logoModal');
    logoModal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevenir scroll del body
}

function cerrarModalLogo() {
    const logoModal = document.getElementById('logoModal');
    logoModal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaurar scroll del body
}

// Event listeners para el modal del logo
document.addEventListener('DOMContentLoaded', function() {
    const logoModal = document.getElementById('logoModal');
    
    // Cerrar modal al hacer clic en cualquier parte
    if (logoModal) {
        logoModal.addEventListener('click', function(e) {
            cerrarModalLogo();
        });
    }
    
    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && logoModal.style.display === 'flex') {
            cerrarModalLogo();
        }
    });
});