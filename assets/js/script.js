// Datos de productos (simulando base de datos)
const productos = [
    {
        id: 1,
        nombre: "Kit de Maquillaje Profesional",
        descripcion: "Kit completo con sombras, labiales y base de alta calidad.",
        precio: 189000,
        categoria: "belleza",
        imagen: "💄"
    },
    {
        id: 2,
        nombre: "Collar de Perlas Elegante",
        descripcion: "Collar de perlas naturales con dije de plata.",
        precio: 125000,
        categoria: "accesorios",
        imagen: "📿"
    },
    {
        id: 3,
        nombre: "Conjunto de Lencería Seda",
        descripcion: "Conjunto de lencería en seda natural, cómodo y elegante.",
        precio: 165000,
        categoria: "lenceria",
        imagen: "👙"
    },
    {
        id: 4,
        nombre: "Serum Facial Hidratante",
        descripcion: "Serum con ácido hialurónico para una piel radiante.",
        precio: 95000,
        categoria: "belleza",
        imagen: "🧴"
    },
    {
        id: 5,
        nombre: "Bolso de Mano Trendy",
        descripcion: "Bolso de mano con diseño moderno y espacio amplio.",
        precio: 145000,
        categoria: "accesorios",
        imagen: "👜"
    },
    {
        id: 6,
        nombre: "Pijama de Seda Comfort",
        descripcion: "Pijama de seda suave para noches cómodas y elegantes.",
        precio: 210000,
        categoria: "lenceria",
        imagen: "👘"
    }
];

// Variables globales
let categoriaActual = 'todos';
let ordenPrecioActual = '';

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
        const productoHTML = `
            <div class="producto-card" data-categoria="${producto.categoria}" data-id="${producto.id}">
                <div class="producto-img">${producto.imagen}</div>
                <div class="producto-info">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                    <div class="producto-precio">$${producto.precio.toLocaleString('es-CO')}</div>
                    <button class="producto-btn" data-id="${producto.id}">Comprar Ahora</button>
                </div>
            </div>
        `;
        container.innerHTML += productoHTML;
    });
    
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
        document.getElementById('productoModalImg').textContent = producto.imagen;
        document.getElementById('productoModalNombre').textContent = producto.nombre;
        document.getElementById('productoModalDescripcion').textContent = producto.descripcion;
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
        
        modal.style.display = 'flex';
    }
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
    const clienteNombre = document.getElementById('clienteNombre').value;
    const clienteTelefono = document.getElementById('clienteTelefono').value;
    const clienteDireccion = document.getElementById('clienteDireccion').value;
    
    // Crear mensaje para WhatsApp
    const mensaje = `¡Hola! Quiero realizar un pedido en Sweet Beauty:%0A%0A` +
                    `*Producto:* ${productoNombre}%0A` +
                    `*Descripción:* ${productoDescripcion}%0A` +
                    `*Precio:* ${productoPrecio}%0A` +
                    `*Cantidad:* ${cantidad}%0A%0A` +
                    `*Mis datos:*%0A` +
                    `- Nombre: ${clienteNombre}%0A` +
                    `- Teléfono: ${clienteTelefono}%0A` +
                    `- Dirección: ${clienteDireccion}%0A%0A` +
                    `Por favor, confirmen mi pedido. ¡Gracias!`;
    
    // Número de WhatsApp (reemplazar con el número real)
    const numeroWhatsApp = "3003024889";
    
    // Abrir WhatsApp
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensaje}`, '_blank');
    
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