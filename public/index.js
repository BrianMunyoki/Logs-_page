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
      console.log  (data);
    })
    .catch(error=>{
        console.error(error);
    })
    })
    }

const filterButton=document.querySelector("#filterButton");

filterButton.addEventListener("click",()=>{
  const project=document.querySelector("#project").value;
  const fromtime=document.querySelector("#fromTime").value;
  const totime=document.querySelector("#toTime").value;

console.log(project, fromtime, toTime);

  fetch("http://localhost:3000/Logtype")
  .then(response => response.json())
  .then(data => {
    console.log("data received", data);
    const filtered=data.filter(item=>item.project===project);
      const tbody=document.querySelector("#logsTable");
      tbody.innerHTML = ""; //clearing the table. 
      filtered.forEach(item=>{
        const tr=document.createElement("tr");
        tr.innerHTML=`
        <td>${item.project} </td>
        <td>${item.fromtime}</td>
        <td>${item.toTime}</td>
        <td>${item.message} </td>
        <td>${item.id}</td>
        `
        tbody.appendChild(tr);
      })
      console.log(tbody)
  })
  .catch(error => {
    console.error(error);
  });

})