function get(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criarLinha(post){
    linha = document.createElement("tr");
    tduserId = document.createElement("td");
    tdid = document.createElement("td");
    tdTitle = document.createElement("td");
    tdBody = document.createElement("td");
    
    tduserId.innerHTML = post.userId
    tdid.innerHTML = post.id
    tdTitle.innerHTML = post.title
    tdBody.innerHTML = post.body

    linha.appendChild(tduserId);
    linha.appendChild(tdid);
    linha.appendChild(tdTitle);
    linha.appendChild(tdBody);

    return linha;
}

function main(){
    let dados = get("https://jsonplaceholder.typicode.com/posts")
    let posts = JSON.parse(dados);
    let tabela = document.getElementById("tabela")

    posts.forEach(element => {
        let linha = criarLinha(element);
        tabela.appendChild(linha);
    });
}

main()