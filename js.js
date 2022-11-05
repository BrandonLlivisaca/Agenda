window.addEventListener('load', (e)=>{
    document.getElementById('container').classList.add('light_mode');
})


/* 
var new_note = document.getElementById('new_note');
new_note.addEventListener('keypress', function(e){
    if (e.key == ''){
        e.preventDefault();
        alert('asd');
    }
}) */



const mode = () =>{
    const light_mode = document.getElementById('mode');
    const container = document.getElementById('container');
    if (light_mode.checked){
        container.classList.remove('light_mode');
        container.classList.add('dark_mode');
    }else{
        container.classList.remove('dark_mode');
        container.classList.add('light_mode');
    }
}

let array = [];
let cont = 0;
const add_note = () => {
    cont+=1;
    const nota = document.getElementById('nota');
    let new_note = document.getElementById('new_note');
    array.push(new_note.value);
    nota.innerHTML += "<p class=\"nota_add\" id=\"p_"+cont+"\">"+ cont+". "+new_note.value +"</p>"+"<input type=\"checkbox\" class=\"nota_final\"name=\"\" id=\"ch_"+cont+"\" onchange=\"status("+cont+")\"></input>"+"<button id=\"btn"+ cont +"\" class=\"delete_note fa-solid fa-trash-can\" onclick=\"delete_node("+cont+")\"></button";
    new_note.value = "";
}

/* CHANGE STATUS */
function status(int){
    let id_p = "p_"+int;
    let id_check = "ch_"+int;
    let check = document.getElementById(id_check);
    let p = document.getElementById(id_p);
    if (check.checked){
        p.classList.add('nota_final_ready');
    }else{
        p.classList.remove('nota_final_ready');
    }
}

/* DELETE NOTE */
function delete_node(int){
    array.splice(int-1,1);
    nota.innerHTML = "";
    cont = 0;
    for(let i=0;i<array.length;i++){  
        cont += 1;      
        /*nota.innerHTML += "<h5 class=\"nota_add\">"+ (i+1)+". "+array[i] +"</h5>"+"<button id=\"btn"+ cont +"\" class=\"delete_note fa-solid fa-trash-can\" onclick=\"delete_node("+cont+")\"></button";*/
        
        nota.innerHTML += "<h5 class=\"nota_add\">"+ (i+1)+". "+array[i] +"</h5>"+"<button id=\"btn"+ cont +"\" class=\"delete_note fa-solid fa-trash-can\" onclick=\"delete_node("+cont+")\"></button";

    };
}

const clean_all = () =>{
    array = [];
    cont = 0;
    const nota = document.getElementById('nota');
    nota.innerHTML = '';
}

var input = document.getElementById("new_note");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        add_note();
    }
});
/* const delete_node = () => {
    /* buttons.forEach(element => {
        element.addEventListener('click', e=>{
            console.log(e.)
        })
    }); */
    /* if (button != null){
        button.addEventListener('click', e=>{
            console.log('a');
        })
    }
}  */


    /* const nota = document.getElementById('nota');
    nota.innerHTML = "";
    for(let i=0;i<array.length;i++){        
        nota.innerHTML += "<h5 class=\"nota_add\">"+ (i+1)+". "+array[i] +"</h5>"+"<button class=\"delete_note fa-solid fa-trash-can\" onclick=\"delete_node()\"></button";
    }; */
//}
