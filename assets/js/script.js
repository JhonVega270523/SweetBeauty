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
    // Perfumes
    {
        id: 19,
        nombre: "Perfume Floral Exclusivo",
        descripcion: "Fragancia floral suave y duradera para el día a día.",
        precio: 125000,
        categoria: "perfumes",
        imagen: "🌸"
    },
    {
        id: 20,
        nombre: "Eau de Parfum Nocturno",
        descripcion: "Fragancia intensa y seductora para ocasiones especiales.",
        precio: 180000,
        categoria: "perfumes",
        imagen: "🌙"
    },
    // Accesorios
    {
        id: 21,
        nombre: "Collar de Perlas Elegante",
        descripcion: "Collar de perlas naturales con dije de plata.",
        precio: 125000,
        categoria: "accesorios",
        imagen: "📿"
    },
    {
        id: 22,
        nombre: "Bolso de Mano Trendy",
        descripcion: "Bolso de mano con diseño moderno y espacio amplio.",
        precio: 145000,
        categoria: "accesorios",
        imagen: "👜"
    },
    // Maquillaje
    {
        id: 23,
        nombre: "Kit de Maquillaje Profesional",
        descripcion: "Kit completo con sombras, labiales y base de alta calidad.",
        precio: 189000,
        categoria: "maquillaje",
        imagen: "💄"
    },
    {
        id: 24,
        nombre: "Paleta de Sombras Premium",
        descripcion: "Paleta con 12 sombras de colores neutros y vibrantes.",
        precio: 95000,
        categoria: "maquillaje",
        imagen: "🎨"
    },
    // Pijamas
    {
        id: 25,
        nombre: "Pijama de Seda Comfort",
        descripcion: "Pijama de seda suave para noches cómodas y elegantes.",
        precio: 210000,
        categoria: "pijamas",
        imagen: "👘"
    },
    {
        id: 26,
        nombre: "Conjunto Pijama Algodón",
        descripcion: "Pijama de algodón 100% orgánico, cómodo y transpirable.",
        precio: 75000,
        categoria: "pijamas",
        imagen: "🛌"
    },
    // Vestidos de Baño
    {
        id: 27,
        nombre: "Bikini Elegante",
        descripcion: "Bikini de dos piezas con diseño moderno y ajuste perfecto.",
        precio: 135000,
        categoria: "vestidos-bano",
        imagen: "👙"
    },
    {
        id: 28,
        nombre: "Traje de Baño Entero",
        descripcion: "Traje de baño de una pieza con corte clásico y elegante.",
        precio: 155000,
        categoria: "vestidos-bano",
        imagen: "🏊‍♀️"
    }
];

// Variables globales
let categoriaActual = 'todos';
let ordenPrecioActual = '';

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

// Función para inicializar carrusel del modal
function inicializarCarruselModal(carrusel) {
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
}

// Cargar productos en la página
function cargarProductos(categoria = 'todos', ordenPrecio = '') {
    const container = document.getElementById('productos-container');
    container.innerHTML = '';
    
    let productosFiltrados = categoria === 'todos' 
        ? productos 
        : productos.filter(p => p.categoria === categoria);
    
    // Aplicar ordenamiento por precio si está seleccionado
    if (ordenPrecio === 'menor-mayor') {
        productosFiltrados.sort((a, b) => a.precio - b.precio);
    } else if (ordenPrecio === 'mayor-menor') {
        productosFiltrados.sort((a, b) => b.precio - a.precio);
    }
    
    productosFiltrados.forEach(producto => {
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
        cargarProductos(categoria, ordenPrecioActual);
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
    }, 500);
}

// Filtrar por precio
document.getElementById('ordenPrecio').addEventListener('change', function() {
    ordenPrecioActual = this.value;
    cargarProductos(categoriaActual, ordenPrecioActual);
});

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
        if (producto.imagenes && producto.imagenes.length > 1) {
            // Producto con múltiples imágenes - crear carrusel en modal
            modalImg.innerHTML = `
                <div class="modal-carrusel" data-producto-id="${producto.id}">
                    ${producto.imagenes.map((img, index) => 
                        `<img src="${img}" alt="${producto.nombre}" class="modal-producto-imagen carrusel-img ${index === 0 ? 'active' : ''}" data-index="${index}">`
                    ).join('')}
                </div>
            `;
            // Inicializar carrusel del modal
            inicializarCarruselModal(modalImg.querySelector('.modal-carrusel'));
        } else if (producto.imagen && producto.imagen.includes('assets/')) {
            modalImg.innerHTML = `<img src="${producto.imagen}" alt="${producto.nombre}" class="modal-producto-imagen">`;
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