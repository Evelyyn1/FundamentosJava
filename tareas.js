const inputTareas = document.getElementById('inputTarea');
const listaTareas = document.querySelector('#tareas ul');

const tareas = [];
function addTarea(){
    const dato = inputTareas.value;
    const tiempo = inputTiempo.value;
    if(dato){

    }    tareas.push({tarea:dato, time: tiempo});
    inputTareas.value = '';
    showTareas();
}

function showTareas(){
    const tareasLi = tareas.map(tarea => `<li>${tarea} - ,${tarea.time}</li>`);
    listaTareas.innerHTML = tareasLi.join('');
}