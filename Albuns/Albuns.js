function get(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criarLinha(alb){
    linha = document.createElement("tr");
    tduserId = document.createElement("td");
    tdid = document.createElement("td");
    tdTitle = document.createElement("td");
    
    tduserId.innerHTML = alb.userId
    tdid.innerHTML = alb.id
    tdTitle.innerHTML = alb.title

    linha.appendChild(tduserId);
    linha.appendChild(tdid);
    linha.appendChild(tdTitle);

    return linha;
}

function main(){
    let dados = get("https://jsonplaceholder.typicode.com/albums")
    let albums = JSON.parse(dados);
    let tabela = document.getElementById("tabela")

    albums.forEach(element => {
        let linha = criarLinha(element);
        tabela.appendChild(linha);
    });
}

main()