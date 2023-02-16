
function press(){
    if(document.querySelector(".task-input input").value.length == 0){
        alert("Write a task");
    }
    else{

            document.querySelector(".tasksList").innerHTML += `
            <div class="taskname" >
                <input type="checkbox">
                <span>
                    ${document.querySelector('.task-input input').value}
                </span>
                
                <button class="btn">
                    <i class="fa fa-trash"></i>
                </button>
             
            </div>
        `;
        document.querySelector(".task-input input").value = "";
        var current_tasks = document.querySelectorAll(".btn");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
    }
}


