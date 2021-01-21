ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.938635, 30.323118],
            zoom: 14,
            controls: [],
            behaviors: ["drag", "dblClickZoom", "rightMouseButtonMagnifier", "multiTouch"],
            autoFitToViewport: 'always'
        }),

        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

      htmlAcademyPlacemark = new ymaps.Placemark([59.938635, 30.323118], {
            hintContent: 'Почему в макете указали этот адрес?',
            balloonContent: 'Тут видимо рисовали макет для HTML Academy'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map-pin.png',
            // Размеры метки.
            iconImageSize: [60, 60],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(htmlAcademyPlacemark);
});
