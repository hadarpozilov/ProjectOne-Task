        let display = document.getElementById("display")
        let taskData = document.getElementById("taskData")
        let dueDate = document.getElementById("dueDate")
        let TargetTime = document.getElementById("TargetTime")
        let Notes = []
        myValidation = () => {
            if (taskData.value == "") {
                alert("You must filled all");
                script.stop
            }
        }
        addNote = () => {
            if (myValidation()) {
                console.log("invalid")
                return false;
            }
            else {
                // console.log("valid")
                let tempTask = { taskData: taskData.value, dueDate: dueDate.value, TargetTime: TargetTime.value }
                Notes.push(tempTask)
                console.log(Notes)
                clearFields()
                saveToLocaleStorage()
                loadFromLocaleStorage()
                notesDisplay()
            }
        }
        clearFields = () => {
            taskData.value = ""
            dueDate.value = ""
            TargetTime.value = ""
        }
        delItem = (i) => {
            Notes.splice(i, 1)
            notesDisplay()
            localStorage.setItem("Notes", JSON.stringify(Notes));

        }
        saveToLocaleStorage = () => {
            localStorage.setItem("Notes", JSON.stringify(Notes))
        }
        loadFromLocaleStorage = () => {
            Notes = JSON.parse(localStorage.getItem("Notes"))
            notesDisplay()
        }
        notesDisplay = () => {
            display.innerHTML = ""
            Notes.forEach((item, i) => {
                display.innerHTML += `
                <div class="flexible">
                <div class="animate__animated animate__bounce animate__backInDown">                                                    
                     <div class="displayImg">
                        <button class="delitBtn" onclick="delItem(${i})">X</button>            
                         <p class="text" style="height="30px;" >${item.taskData}</p>
                         <div class="timedate">
                         <p class="card-text">${item.dueDate}</p>
                         <p style= "color: rgb(177, 77, 77);">${item.TargetTime}</p>
                         </div>
                     </div>
               </div>
               </div>`
            })
        }