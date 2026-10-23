const monthH1 = document.querySelector(".month h1");
const dateP = document.querySelector(".date p");
const daysQS = document.querySelector(".days");

const month = new Date()
const monthName = {
    month: "long"
}
const date = new Date()
const dateOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric"
}

const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

let days = "";
const today = date.getDate()

for (let days = 0; days < firstDay; days++)  {
    daysQS.innerHTML += `<div class="empty"></div>`
}   for (let days = 1; days <= lastDay; days++) {
    if (days === today) {
        daysQS.innerHTML += `<div class="active">${days}</div>`
    } else {
        daysQS.innerHTML += `<div>${days}</div>`
    }
}


dateP.textContent = date.toLocaleString('en-US', dateOptions).replaceAll(",","");
monthH1.textContent = month.toLocaleString('en-US', monthName).toUpperCase();
