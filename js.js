window.addEventListener('load', (e)=>{
    document.getElementById('container').classList.add('light_mode');
})

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
    nota.innerHTML += "<p class=\"nota_add\">"+ cont+". "+new_note.value +"</p>"+"<button id=\"btn"+ cont +"\" class=\"delete_note fa-solid fa-trash-can\" onclick=\"delete_node("+cont+")\"></button";
    new_note.value = "";
}

/* DELETE NOTE */
function delete_node(int){
    array.splice(int-1,1);
    nota.innerHTML = "";
    cont = 0;
    for(let i=0;i<array.length;i++){  
        cont += 1;   
        nota.innerHTML += "<h5 class=\"nota_add\">"+ (i+1)+". "+array[i] +"</h5>"+"<button id=\"btn"+ cont +"\" class=\"delete_note fa-solid fa-trash-can\" onclick=\"delete_node("+cont+")\"></button";
    };
}

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
