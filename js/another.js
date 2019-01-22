var date = new Date();   //Текущая дата

var curDate = new Intl.DateTimeFormat('ru', {
    weekday: "long",
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
});
var rusDate = curDate.format(date);

//Добавим ее в элемент и поместим в наш проект + стилизуем через ксс

var datePlus = document.querySelector(".map");

var dateEl = '<div class="date">' + rusDate + '</div>';

datePlus.innerHTML = dateEl + datePlus.innerHTML;

// datePlus.querySelector('.date').style.cssText = 'border: 2px solid blue'; //запишет в элемент через атрибут
var c = window.getComputedStyle(datePlus.querySelector('.date'));
console.log(typeof(c));