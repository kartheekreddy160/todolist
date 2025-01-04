const inputText=document.getElementById("taskInput");

const form=document.getElementById("task-form");

const ul=document.getElementById("task-list");


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    onSubmmit();
});

function onSubmmit() {

    const task=inputText.value.trim();

    if (task.length===0) {
        alert("Please enter a task");
        return;
    }
    const li=document.createElement('li');
    li.textContent=task;

    const deleteBtn=document.createElement('button');
    deleteBtn.textContent='delete';
    deleteBtn.addEventListener('click',()=>{
        li.remove();
    })

    const editBtn=document.createElement('button');
    editBtn.textContent='Edit';
    editBtn.addEventListener('click',()=>{

        const editinput=document.createElement('input');
        editinput.type='text';
        editinput.value=li.firstChild.textContent;

        const saveBtn=document.createElement('button');
        saveBtn.textContent='Save';
        saveBtn.addEventListener('click',()=>{
            const updateText=editinput.value.trim();
            if (updateText.length===0) {
                alert("Please enter a task");
                return;
            }
            li.firstChild.textContent=updateText;
            li.removeChild(editinput);
            li.removeChild(saveBtn);
            li.appendChild(editBtn);
        });

        li.removeChild(editBtn);
        li.appendChild(editinput);
        li.appendChild(saveBtn);

    })


    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    ul.appendChild(li);

    inputText.value=''; 
    inputText.focus(); 
    
}

