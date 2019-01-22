//F. random for price (1000 - 1 000 000)
function priceRandom() {
    var minPow = 4;
    var maxPow = 6;
    var n = minPow - 0.5 + Math.random() * (maxPow - minPow + 1);
    n = Math.round(n);
    var rand = Math.round(Math.random() * Math.pow(10, n));
    return rand;
};
//F. random for array oject key
function arrRandom(arr) {
    var randNumb = arr[Math.floor(Math.random() * arr.length)];
    return randNumb;
};

//F. Random для локации Pins
function locRandom() {
    var minL = 130;
    var maxL = 630;
    var ran = Math.round(minL - 0.5 + Math.random()*(maxL - minL + 1));
    return ran;
}
//F. consturct для шаблона всех карточек пользователей
function UsersConstr() {
    this.avatar = "img/avatars/user0" + arrRandom(userAvat) + ".png";
    this.offer = {
        "title": arrRandom(APARTMENT),
        "addres": addres,              
        "price": priceRandom() + ' ₽/ночь',
        "type": arrRandom(type),
        "rooms": arrRandom(rooms),                         
        "guests": arrRandom(guests),                        
        "checkin": arrRandom(checkin),
        "checout": arrRandom(checout),     
        "features": arrRandom(features),
        "description": "",
        "photos": photos
    };
    this.location = { x: locRandom(), y: locRandom()}  //«x»: случайное число, координата x метки на карте. Значение ограничено размерами блока, в котором перетаскивается метка. «y»: случайное число, координата y метки на карте от 130 до 630
};

//Возможные данные UserConstr()
var userAvat = [1, 2, 3, 4, 5, 6, 7, 8]; // номера аватарок пользователей
var APARTMENT = ["Большая уютная квартира", "Маленькая неуютная квартира", "Огромный прекрасный дворец", 
                "Маленький ужасный дворец", "Красивый гостевой домик", "Некрасивый негостеприимный домик", 
                "Уютное бунгало далеко от моря", "Неуютное бунгало по колено в воде"];
var addres = [100, 100]; //location.x , location.y,
var type = ["palace" , 'flat', 'house', 'bungalo']; 
var rooms = [1, 2, 3, 4, 5]; //random from 1 to 5
var guests = [1, 2, 3, 4, 5]; // random 
var checkin = ["12:00", "13:00", "14:00"];  //one of...
var checout = ["12:00", "13:00", "14:00"];
var features = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];
var photos = ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"]

//setinterval на рипите(цикл ?)
var usersArray = [];
var ivan = new UsersConstr();
var goga = new UsersConstr();

var users = [ivan, goga];
//сделать функцией создание карточки

//КАРТА активности
 //переключает карту из активного в неактивное

var mapFaded = document.querySelector('.map');
mapFaded.classList.remove('map--faded');
var mapPinMain = document.querySelector('.map__pin');
console.log(mapPinMain);
// function buttonMouseupHandler() {
//     var mapFaded = document.querySelector('.map');
//     console.log("asdf");
//     if(mapFaded.classList.contains('map--faded')) {
//       mapFaded.classList.remove('map--faded');
//     } else {
//         mapFaded.classList.add('map--faded');
//     }
// };
// var buttonMouseupHandler1 = buttonMouseupHandler;

var asd = function() {console.log('sadf');};
mapPinMain.addEventListener("click", asd);

//TEMPLATE
var templ = document.getElementsByTagName('template')[0].content;
console.log(templ);

//F. PINS логотипы объявлений мелкие
function MapPins(num) {
    var mapPin = templ.querySelector('.map__pin').cloneNode(true);
    //разбираем элемент и вставляем данные
    mapPin.style.cssText = 'left:' + users[num].location.x + 'px; top:' + users[num].location.y + 'px';
    mapPin.firstChild.setAttribute('src', users[num].avatar);
    mapPin.firstChild.setAttribute('alt', users[num].offer.title);
    //get map__pins location for pins
    var mapPins = document.querySelector('.map__pins');
    //fragment for all
    var fragmentPins = document.createDocumentFragment();
    fragmentPins.appendChild(mapPin);
    //add map_pin to map__Pins
    mapPins.appendChild(fragmentPins);
};

var ivanPins = MapPins(0);
var gogaPins = MapPins(1);


//РАЗДЕЛ СОЗДАНИЕ карточки для логотипов
function CreateMapCard(num) {
var mapCardCopy = templ.querySelector('.map__card').cloneNode(true); //copy all

var cardAvatar = mapCardCopy.querySelector('.popup__avatar');
cardAvatar.setAttribute('src', users[num].avatar);

var cardTitle = mapCardCopy.querySelector('.popup__title');
cardTitle.textContent = users[num].offer.title;

var cardAddres = mapCardCopy.querySelector('.popup__text--address').firstElementChild;
cardAddres.textContent = users[num].offer.addres;

var cardPrice = mapCardCopy.querySelector('.popup__text--price');
cardPrice.textContent = users[num].offer.price;

var cardType = mapCardCopy.querySelector('.popup__type');
var cardTypeArr = users[num].offer.type;
switch(cardTypeArr) {
    case "palace":
        cardTypeArr = "Дворец";
        break;
    case "flat":
        cardTypeArr = "Квартира";
        break;
    case "bungalo":
        cardTypeArr = "Бунгало";
        break;
    case "house":
        cardTypeArr = "Дом";
        break;
}; 
cardType.textContent = cardTypeArr;

var cardCapacity = mapCardCopy.querySelector('.popup__text--capacity');
cardCapacity.textContent = `${users[num].offer.rooms} комнаты для ${users[num].offer.guests} гостей`;

var cardTime = mapCardCopy.querySelector('.popup__text--time');
cardTime.textContent = `Заезд после ${users[num].offer.checkin}, выезд до ${users[num].offer.checout}`;

var cardPictures = mapCardCopy.querySelector('.popup__pictures');
var cardPictureAttr = cardPictures.firstElementChild.firstElementChild;
cardPictureAttr.setAttribute('src', users[num].offer.photos[0]);
cardPictureAttr.setAttribute('width', '210px');
cardPictureAttr.setAttribute('height', '210px');

var cardPictureCopy1 = cardPictures.firstElementChild.cloneNode(true);
cardPictureCopy1.firstElementChild.removeAttribute('src');
cardPictureCopy1.firstElementChild.setAttribute('src', users[num].offer.photos[1]); 
cardPictures.insertAdjacentElement('beforeEnd', cardPictureCopy1);
var cardPictureCopy2 = cardPictures.firstElementChild.cloneNode(true);
cardPictureCopy2.firstElementChild.setAttribute('src', users[num].offer.photos[2]);
cardPictures.insertAdjacentElement('beforeEnd', cardPictureCopy2);



//Вставляем карточку в раздел перд блоком map__filters-container
var mapFilters = document.querySelector('.map__filters-container');

var fragmentMapCard = document.createDocumentFragment();
fragmentMapCard.appendChild(mapCardCopy);

mapFilters.parentElement.insertBefore(fragmentMapCard, mapFilters);
};

var ivanCard = CreateMapCard(0);
var gogaCard = CreateMapCard(1);
//В конце конструктор который при добавлении нового пользователя создает
//создает объект и карточку, добавл в общ массив пользоват  + может проверяет еще
