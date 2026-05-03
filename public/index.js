const form =document.getElementById("logForm");

if(form){
form.addEventListener("submit", (e)=>{
    e.preventDefault();
        const logType = document.querySelector('input[name="logType"]:checked')?.value;
        const workType = document.querySelector('input[name="workType"]:checked')?.value;
        const project = document.getElementById("project").value;
        const fromTime = document.getElementById("fromTime").value;
        const toTime = document.getElementById("toTime").value;
        const task = document.getElementById("task").value;
        const message = document.getElementById("message").value;
        
        const logData = {
        logType,
        project,
        workType,
        fromTime,
        toTime,
        task,
        message
    };
    fetch("http://localhost:3000/Logtype",{ 
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(logData)})
    
    .then(response=>{
        if(!response.ok){
            throw new Error("Failed to save log");
        }
        return response.json();
    })
    .then(data=>{
        (data);
    })
    .catch(error=>{
        console.error(error);
    })
    })
    }
const filters=document.querySelector(".filters");

  fetch("http://localhost:3000/Logtype")
  .then(response => response.json())
  .then(data => {
    console.log(data);
      const tbody=document.querySelector("#logsTable");
      tbody.innerHTML = ""; //clearing the table. 
      data.forEach(item=>{
        
      })
      console.log(tbody)
  })
  .catch(error => {
    console.error(error);
  });

