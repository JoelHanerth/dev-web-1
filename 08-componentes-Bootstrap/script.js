function abrirModal(titulo, texto) {
    document.getElementById("modalTitulo").innerText = titulo;
    document.getElementById("modalTexto").innerText = texto;

    const modal = new bootstrap.Modal(document.getElementById("modalInfo"));
    modal.show();
}

function abrirSobre() {
    document.getElementById("modalTitulo").innerText = "Sobre o site";
    document.getElementById("modalTexto").innerText = 
        "Este site foi criado para treinar Bootstrap, HTML, CSS e JavaScript básico.";

    const modal = new bootstrap.Modal(document.getElementById("modalInfo"));
    modal.show();
}
