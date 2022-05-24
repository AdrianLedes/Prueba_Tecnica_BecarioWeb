const task = JSON.parse(localStorage.getItem('task')) || [];
const completed = [];

const agregar = () => {
    const tasksList = document.getElementById('new-task');
    const taskTemplate = task.map(ele => '<div class="task"> <input id="radio" type="radio">' + ele + '</div>');
    tasksList.innerHTML = taskTemplate.join('');
}

/* No funciona como deberia ya que al momento de hacer el checked si es una tarea de en medio o final,
marca las demas como terminadas y son agreagdas a la lista de completas*/
const complete = () => {
    const tkList = document.getElementById('task-completed');
    const completedTemplate = task.map(ele => '<div class="task-com"> <input id="radio" type="radio" checked >' + ele + '</div>');
    tkList.innerHTML = completedTemplate.join('');
}

/*EL localStorage no guarda los datos, pero no arroga ningun error en consola*/
const guardar = (task) => {
    const taskString = JSON.stringify(task);
    localStorage.setItem('task', taskString);
}

window.onload = () => {
    const form = document.getElementById('add-task');
    form.onsubmit = (e) => {
        e.preventDefault();
        const tasks = document.getElementById('tasks')
        const tasksText = tasks.value;
        tasks.value = '';
        task.push(tasksText);
        agregar()
    }
    const comp = document.getElementById('new-task');
    comp.onclick = (e) => {

        const tk = document.getElementById('radio')
        const tkText = tk.value;
        completed.push(tkText);
        tk.value = '';
        complete()


        /* La siguiente funcion es para eliminar cada que se agrege a la lista de tareas completas,
        solo que tengo el error de que cada que elimina una tarea depsues ya no deja agregar mas tarea a la lista*/

        /*const elements = document.querySelectorAll('#task-completed')
        elements.forEach((elements, i) => {
            elements.addEventListener('click', () => {
                elements.parentNode.removeChild(elements)
                task.splice(i, 1)
            

            })
        })*/
    }


}