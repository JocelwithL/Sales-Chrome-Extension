let myLeads = [];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click",function() {
    myLeads.push(inputEl.value);
    renderLeads();
    inputEl.value = "";
})


function renderLeads() {
    let listLead = ""

    for (let i = 0; i < myLeads.length; i++) {
        listLead += `<li>
                        <a href ='${myLeads[i]}' target='_blank'>
                        ${myLeads[i]}
                        </a>
                    </li>`
        console.log(listLead)
    } 

    ulEl.innerHTML = listLead

}

//5:27:26