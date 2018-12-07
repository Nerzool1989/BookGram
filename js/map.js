var userAvat = [1, 2, 3, 4, 5, 6, 7, 8]; // номера аватарок пользователей
var APARTMENT = ["Большая уютная квартира", "Маленькая неуютная квартира", "Огромный прекрасный дворец", 
                "Маленький ужасный дворец", "Красивый гостевой домик", "Некрасивый негостеприимный домик", 
                "Уютное бунгало далеко от моря", "Неуютное бунгало по колено в воде"];

var priceRandom = function() {
    var minPow = 4;
    var maxPow = 6;
    var n = minPow - 0.5 + Math.random() * (maxPow - minPow + 1);
    n = Math.round(n);
    var rand = Math.round(Math.random() * Math.pow(10, n));
    return rand;
};

var similarAds = [];  //зд1 
var mike = {
    "avatar": "img/avatars/user0" + userAvat[1] + ".png",
    "offer": {
        "title": APARTMENT[1],
        "addres": [100, 100],              //location.x , location.y,
        "price": priceRandom(),
        "type": ["palace" , 'flat', 'ho use', 'bungalo'],
        "rooms": 2,                         //random from 1 to 5
        "guests": 2,                        // random 
        "checkin": ["12:00", "13:00", "14:00"],
        "checout": ["12:00", "13:00", "14:00"],
        "features": ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"],
        "description": "",
        "photos": ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"]
    },
    "location": { x: 2, y: 2}  //«x»: случайное число, координата x метки на карте. Значение ограничено размерами блока, в котором перетаскивается метка. «y»: случайное число, координата y метки на карте от 130 до 630
}

console.log(mike['offer'].price);

var mapFaded = document.querySelector('.map--faded'); //удаление класса огр окна
console.log(mapFaded);
mapFaded.classList.remove('map--faded');

var mapTarget = document.getElementsByTagName("template")[0].content.querySelector(".map__card");
console.log(mapTarget);

var mapPins = document.querySelector('.map__pins');
console.log(mapPins);

mapPins.appendChild(mapTarget);
//формируем элемент 1  = имг по индексу или счету
var el1Template = mapTarget.children;
console.log(el1Template);