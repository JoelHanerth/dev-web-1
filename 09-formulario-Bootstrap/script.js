document.getElementById("cep").addEventListener("blur", async function () {
    let cep = this.value.replace(/\D/g, "");

    if (cep.length !== 8) return;

    try {
        let res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let data = await res.json();

        if (data.erro) return;

        document.getElementById("logradouro").value = data.logradouro;
        document.getElementById("bairro").value = data.bairro;
        document.getElementById("cidade").value = data.localidade;
        document.getElementById("estado").value = data.uf;

    } catch (err) {
        console.log("Erro ao buscar CEP:", err);
    }
});
