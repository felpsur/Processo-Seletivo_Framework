function get(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criarLinha(todo){
    linha = document.createElement("tr");
    tduserId = document.createElement("td");
    tdid = document.createElement("td");
    tdTitle = document.createElement("td");
    tdCompleted = document.createElement("td");
    
    tduserId.innerHTML = todo.userId
    tdid.innerHTML = todo.id
    tdTitle.innerHTML = todo.title
    tdCompleted.innerHTML = todo.completed

    linha.appendChild(tduserId);
    linha.appendChild(tdid);
    linha.appendChild(tdTitle);
    linha.appendChild(tdCompleted);

    return linha;
}

function main(){
    let dados = get("https://jsonplaceholder.typicode.com/todos")
    let tarefas = JSON.parse(dados);
    let tabela = document.getElementById("tabela")

    tarefas.forEach(element => {
        let linha = criarLinha(element);
        tabela.appendChild(linha);
    });
}

main()