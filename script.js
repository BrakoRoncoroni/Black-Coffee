// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({
        behavior: 'smooth'
      });
  });
});

// Enviar WhatsApp
function enviarWhatsApp() {
  const nombre = document.getElementById('nombre').value.trim();
  const direccion = document.getElementById('direccion').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  if (!nombre || !direccion || !mensaje) {
    alert('Por favor completá todos los campos.');
    return;
  }

  const texto = `*Nombre:* ${nombre}%0A*Dirección:* ${direccion}%0A*Pedido:* ${mensaje}`;
  const numero = '5492235945731';
  window.open(`https://wa.me/${numero}?text=${texto}`, '_blank');
}