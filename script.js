
function calcularPedido() {

    // ==========================================
    // 1. QUANTIDADES DOS LANCHES
    // ==========================================
    let xburguer = Number(
        document.getElementById("xburguer").value
    );


    let xtudo = Number(
        document.getElementById("xtudo").value
    );



    let cachorro = Number(
        document.getElementById("cachorro").value
    );

    let batata = Number(
        document.getElementById("batata").value
    );


    // ==========================================
    // 2. QUANTIDADES DAS BEBIDAS
    // ==========================================

    let refrigerante = Number(
        document.getElementById("refrigerante").value
    );

    let guaravita = Number(
        document.getElementById("guaravita").value
    );

    let agua = Number(
        document.getElementById("agua").value
    );


    // ==========================================
    // 3. VALIDAÇÃO DAS QUANTIDADES
    // ==========================================

    // Guarda todas as quantidades em uma lista
    let quantidades = [
        xtudo,
        xburguer,
        cachorro,
        batata,
        refrigerante,
        guaravita,
        agua
    ];

    // Verifica se existe alguma quantidade inválida
    if (quantidades.some(q => !Number.isInteger(q) || q < 0)) {

        document.getElementById("resumo").textContent =
            "Digite quantidades inteiras maiores ou iguais a zero.";

        return;

    }


    // ==========================================
    // 4. CÁLCULO DO VALOR TOTAL
    // ==========================================

    // Multiplica cada quantidade pelo seu preço
    let total =
        (xburguer * 16) +    
        (xtudo * 22) +
        (cachorro * 10) +
        (batata * 8) +
        (refrigerante * 7) +
        (guaravita * 3) +
        (agua * 4);


    // ==========================================
    // 5. MONTAGEM DO RESUMO DO PEDIDO
    // ==========================================

    // Começa com um texto vazio
    let resumo = "";

        // X-BÚRGUER
    if (xburguer > 0) {

        resumo += xburguer
            + " x X-Búrguer — R$ "
            + (xburguer * 16).toFixed(2)
            + "\n";

    }

    // X-TUDO
    if (xtudo > 0) {

        resumo += xtudo
            + " x X-Tudo — R$ "
            + (xtudo * 22).toFixed(2)
            + "\n";

    }


    // CACHORRO-QUENTE
    if (cachorro > 0) {

        resumo += cachorro
            + " x Cachorro-quente — R$ "
            + (cachorro * 10).toFixed(2)
            + "\n";

    }


    // BATATA FRITA
    if (batata > 0) {

        resumo += batata
            + " x Batata frita — R$ "
            + (batata * 8).toFixed(2)
            + "\n";

    }


    // REFRIGERANTE
    if (refrigerante > 0) {

        resumo += refrigerante
            + " x Refrigerante — R$ "
            + (refrigerante * 7).toFixed(2)
            + "\n";

    }


    // GUARAVITA
    if (guaravita > 0) {

        resumo += guaravita
            + " x Guaravita — R$ "
            + (guaravita * 3).toFixed(2)
            + "\n";

    }


    // ÁGUA
    if (agua > 0) {

        resumo += agua
            + " x Água — R$ "
            + (agua * 4).toFixed(2)
            + "\n";

    }


    // ==========================================
    // 6. VERIFICA SE O PEDIDO ESTÁ VAZIO
    // ==========================================

    if (resumo === "") {

        resumo = "Nenhum produto selecionado.\n";

    }


    // ==========================================
    // 7. ACRESCENTA O TOTAL AO RESUMO
    // ==========================================

    resumo += "\nTOTAL: R$ "
        + total.toFixed(2).replace(".", ",");


    // ==========================================
    // 8. MOSTRA O RESULTADO NA PÁGINA
    // ==========================================

    document.getElementById("resumo").textContent = resumo;

}
