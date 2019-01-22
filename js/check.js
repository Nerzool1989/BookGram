var fBananas = {        //объект со свойствами и методами товара Бананы
    priceKg: 100,       //руб. Вообще здесь переменная зависящая от тенденции рынка
    number: 20,         //номер товара в накладных ?
    currentPrice: function() {          //метод подсчета цены от веса
        return console.log(this.priceKg * (this.currentWeight / 1000));
    },
    currentWeight: 700, //вес в граммах (входная переменная с весов)
}

setTimeout(fBananas.currentPrice.bind(fBananas), 100);

// for future
//карточка бронирования
var userTemplate = document.getElementsByTagName('template')[0].content.querySelector('.map__card');
console.log(userTemplate);
var childrenTempl = userTemplate.children; //html node
for(var i = 0; i < userTemplate.children.length; i++) {
    var copyEl = childrenTempl[i];
    
}


//получение значения шаблона
var artcileTemplate = document.getElementsByTagName('template')[0].content.querySelector('.map__card');
console.log(img);
//картинка
var img = artcileTemplate.querySelector('.popup__avatar');
img.setAttribute('src', users[0].avatar);
console.log(img);

//находим место куда будет добавлять
var mapPins = document.querySelector('.map__pin');
//добавляем элемент
mapPins.appendChild(img);