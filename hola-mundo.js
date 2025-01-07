
const form1=document.getElementById("form1");
const lista=document.getElementById("task-list");
loadTareas();

form1.addEventListener("submit",(event)=> {
    event.preventDefault();
    const input=document.getElementById("tareas");
    const tarea=input.value;
    if (tarea) {
        lista.append(crearElemento(tarea));
        historiaTareasEnLocalStorage(tarea);
        input.value="";
    }
});


function crearElemento(tarea) {
    const li=document.createElement("li");
    li.textContent=tarea;
    li.append(crearBoton("❌","delete-btn"),crearBoton("🖍","editar-btn"));
    return li; 
}
function crearBoton(text,className) {
    const btn=document.createElement("span");
    btn.textContent=text;
    btn.className=className;
    return btn;
}

lista.addEventListener("click",(event)=>{
    const borrar= event.target;
    if(borrar.classList.contains("delete-btn")){
        borrarTarea(event.target.parentElement);
    } else if (borrar.classList.contains("editar-btn")) {
        editarTarea(event.target.parentElement);
    }

});

function borrarTarea(taskItem) {
    if(confirm("Estas seguro de borrar este elemento")){
    taskItem.remove();
    };
};
function editarTarea(taskItem) {
    const nuevaTarea=prompt("Edita la tarea:", taskItem.firstChild.textContent);

    if (nuevaTarea!==null) {
        taskItem.firstChild.textContent=nuevaTarea;
    }
};
function historiaTareasEnLocalStorage(tarea) {
    const tareas= JSON.parse(localStorage.getItem("tareas")||"[]");
    tareas.push(tarea);
    localStorage.setItem("tareas",JSON.stringify(tareas));
};
function loadTareas() {
    const tareas=JSON.parse(localStorage.getItem("tareas")||"[]");
    tareas.forEach((tarea) => {
        lista.appendChild(crearElemento(tarea));
    });
    
};

const themeToogleButton=document.getElementById("butt");
const currentTheme=localStorage.getItem("theme");

themeToogleButton.addEventListener("click",()=>{
    document.body.classList.toggle("dark-theme");

    const theme=document.body.classList.contains("dark-theme")? "darkblue":"aliceblue";
    localStorage.setItem("theme",theme);

});

