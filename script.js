let myLeads = [];
const saveBtn = document.getElementById("save-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const clearBtn = document.getElementById("clear-btn");
const saveTabBtn = document.getElementById("savetab-btn");

let leadsFromStorage = localStorage.getItem("myLeads")
leadsFromStorage = JSON.parse(leadsFromStorage);

if (leadsFromStorage) {
    myLeads = leadsFromStorage;
    renderLeads(myLeads);
}


    

saveTabBtn.addEventListener("click", function() {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads));
        renderLeads(myLeads)
      });

    
})


function renderLeads(leads) {
    let listLead = ""

    for (let i = 0; i < leads.length; i++) {
        listLead += `<li>
                        <a href ='${leads[i]}' target='_blank'>
                        ${leads[i]}
                        </a>
                    </li>`
    } 

    ulEl.innerHTML = listLead

}


clearBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    myLeads = [];
    ulEl.innerHTML = null;
})


saveBtn.addEventListener("click",function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    renderLeads(myLeads);
})




//7:09:30