// function to load task from storage
// function to add Task
// function to delete Task
// function to edit task

//function to mark task as complete or incomplete
let addInput = document.querySelector('addInput'); // add input
let addbtn = document.getElementById('addBtn'); // add btn variable
let saveBtn = document.getElementById('save'); // save variable

function loadTaskFromStorage(){
    const tasks = JSON.parse(localStorage.getItem('task')) || []; // Array of stored elements
    const task = document.querySelector(); // ul
    tasks.forEach(element => {
        // Pass innerHtml of list
        task.innerHTML += `
        <li>${element}</li>
        `
    })
}

function addTask($addBtn){
    const addBtn = document.getElementById($addBtn);
    addBtn.addEventListener('click', function(){
        const tasks = JSON.parse(localStorage.getItem('task')) || [];
        tasks.push(document.querySelector('.addInput').value.toLowerCase());
        localStorage.setItem('task', JSON.stringify(tasks));
    })
}



function search(li){
    const input = document.getElementById('searchInput');

    input.addEventListener('input', e =>{
        const taskArray = Array.from(document.querySelectorAll(li)) // Create an array from all li element
        const searchTerm = e.target.value.toLowerCase()

        taskArray.forEach(element => {
            const $element = element.textContent.toLowerCase()
            if($element.includes(searchTerm)){
                element.style.display = 'block'
            }else{
                element.style.display = 'none'
            }
        })
    })
}
search()


function deleteTask(countDelete){
    const deleteBtn = document.getElementById('deleteBtn')
    const checkedBox = Array.from(document.querySelectorAll('.checkedBox')); // select all checkbox
    const $countDelete = document.getElementById(countDelete)

    deleteBtn.addEventListener('click', function(){

        checkedBox.forEach(element =>{
        $countDelete.innerHTML = checkedBox.length; // Count the number of items to delete
        const li = element.parentElement; // Parent element

        let tasks = JSON.parse(localStorage.getItem('task')) || []; // get stored task from local storage
        tasks = tasks.filter(task => task !== li.textContent.trim()) // keep every element that doesn't match li.textContent
        JSON.stringify(localStorage.setItem('task', tasks));
        li.remove()

        })

    })
    $countDelete.textContent = 0;
}


function editTask(){
    const li = document.querySelectorAll('li');
    let taskToEdit = null;
        li.forEach(element => {
            element.addEventListener('click', e =>{
                e.target.classList.add('editTask');

                //Show the output and fill it with current text
                addInput.parentElement.style.display = 'block';
                addInput.value = e.target.textContent.trim() // set input value to li text content

                //Store task to edit
                taskToEdit = e.target.textContent.trim()

                // check if li has the class editTask before adding an eventlistener to the button

            })
                
        })
            saveBtn.addEventListener('click', function(){
                if(!taskToEdit) return // no task selected

                let tasks = JSON.parse(localStorage.getItem('task')) || []; // Get the task array
                const indexOfli = tasks.indexOf(taskToEdit) // get the index of li content in the array

                if(indexOfli !== -1){
                    tasks[indexOfli] = addInput.value // replace text
                    localStorage.setItem('task', JSON.stringify(tasks)); // save changes
                }

                // Update ui

                document.querySelectorAll('li').forEach(li =>{
                    if(li.textContent.trim() === taskToEdit){
                        li.textContent = addInput.value.trim();
                        li.classList.remove('editTask')
                    }
                })

                addInput.value = ''
                addInput.parentElement.style.display = 'none'
                taskToEdit = null
                
            })
     
}





function selectTask(){
    const li = document.querySelectorAll('li')
        li.forEach( element=>{

            let longPress;
            element.addEventListener('mousedown', function(){
                longPress = setTimeout(()=>{
                    console.log('long press');
                },800)
            })

            element.addEventListener('mouseup', function(){
                clearTimeout(longPress);
            })

            element.addEventListener('click', function(){
                clearTimeout(longPress);
            })
        })
};