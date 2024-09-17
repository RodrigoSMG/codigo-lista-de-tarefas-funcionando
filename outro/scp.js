document.getElementById('bt_tarefa').addEventListener('click',addTarefa)
document.getElementById('')


function addTarefa(){
    
    const inputTarefa = document.getElementById('input_tarefa').value
    console.log(inputTarefa)
    if(!inputTarefa){
       alert('o input esta vazio')
    }
    const elemento_tarefa = document.createElement('li')
    elemento_tarefa.className = 'item_tarefa'
    const conteudoTarefa = document.createElement('p')
    conteudoTarefa.textContent = inputTarefa
    const botaoDeletar = document.createElement('button')
    botaoDeletar.textContent = 'Deletar Tarefa'
    botaoDeletar.addEventListener('click',() =>{
     elemento_tarefa.remove()
 })
 const botaoCompletar = document.createElement('button')
 botaoCompletar.textContent = 'Completar Tarefa'
 botaoCompletar.addEventListener('click',() =>{
    conteudoTarefa.classList.toggle('completada')
 })
    elemento_tarefa.appendChild(conteudoTarefa)
    elemento_tarefa.appendChild(botaoDeletar)
    elemento_tarefa.appendChild(botaoCompletar)
    document.getElementById('lista_tarefas').appendChild(elemento_tarefa)
    
}