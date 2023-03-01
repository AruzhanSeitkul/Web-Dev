import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public categories = [
    {
      name: "Phones",
      products: [
        {
          name:"Samsung Galaxy A13 4 ГБ/128 ГБ черный",
          rating: 4.9,
          likes: 0,
          cost: 89565,
          link:"https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279/?c=750000000#!/item",
          description: "Благодаря 6.6-дюймовому экрану Infinity-V на смартфоне Galaxy A13 вы сможете увидеть все, что было скрыто от вашего взгляда." +
            " Наслаждайтесь живым четким изображением с технологией FHD+. Galaxy A13 сочетает деликатные цвета и приятную на ощупь текстуру. " +
            "Благодаря изящным изгибам его удобно держать при работе с экраном. " +
            "Galaxy A13 оснащен восьмиядерным процессором и оперативной памятью до 4 ГБ для быстрой и эффективной работы. " +
            "А со встроенной памятью 128 ГБ и картой памяти microSD до 1 ТБ у вас появится еще больше места для хранения. " +
            "Запечатлейте ценные моменты во всех деталях с основной камерой 50 Мп. ",
          img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf2/hbe/49613711933470/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-1.jpg",
          gallery: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf2/hbe/49613711933470/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-1.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h89/h78/49613712195614/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9a/h9a/49613712654366/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-4.jpg"]
        },
        {
          name: "Смартфон Apple iPhone 14 Pro Max 256Gb фиолетовый",
          rating: 5,
          likes: 0,
          cost: 689670,
          link:"https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item",
          description: "",
          img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg",
          gallery: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/had/h95/62948781293598/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-2.jpg",
          "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h75/h10/63073993293854/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-3.jpg"]
        },
        {
          name:"Смартфон Apple iPhone 13 128Gb розовый",
          rating: 5,
          likes: 0,
          cost: 377370,
          link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-rozovyi-102298145/?c=750000000#!/item",
          description: "Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. " +
            "А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.   " +
            "Apple разработали совершенно новую схему расположения камер и развернули объективы на 45 градусов. " +
            "Благодаря этому внутри корпуса поместилась лучшая система двух камер с увеличенной матрицей широкоугольной камеры. " +
            "Кроме того, освободилось место для системы оптической стабилизации изображения со сдвигом матрицы, и увеличилась скорость работы матрицы на сверхширокоугольной камере. ",
          img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha0/h0e/46392660819998/apple-iphone-13-128gb-rozovyj-102298145-1-Container.jpg",
          gallery: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha0/h0e/46392660819998/apple-iphone-13-128gb-rozovyj-102298145-1-Container.jpg",
          "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he0/h12/46392661344286/apple-iphone-13-128gb-rozovyj-102298145-3-Container.jpg",
          "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h07/hdd/46392661540894/apple-iphone-13-128gb-rozovyj-102298145-4-Container.jpg"]
        },
        {
          name:"Смартфон Xiaomi Redmi 10C 4 ГБ/128 ГБ серый",
          rating: 4.8,
          likes: 0,
          cost: 69270,
          link: "https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-128-gb-seryi-104417231/?c=750000000#!/item",
          description: "Xiaomi Redmi 10C оснащен большим дисплеем с диагональю 6.71 дюйма с защитным стеклом Corning Gorilla Glass, которое защищает экран от царапин и повреждений при падениях. " +
            "Redmi 10C позволяет создавать фотографии профессионального уровня в формате для развлечений. " +
            "Наслаждайтесь воспоминаниями благодаря камере 50 Мп, которая идеально подходит для съемки незабываемых моментов.  " +
            " Redmi 10C оснащен невероятным восьмиядерным процессором Snapdragon 680, созданным на основе флагманского техпроцесса 6 нм.",
          img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbc/h0a/49939925205022/xiaomi-redmi-10c-4-gb-128-gb-seryj-104417231-1.jpg",
          gallery: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbc/h0a/49939925205022/xiaomi-redmi-10c-4-gb-128-gb-seryj-104417231-1.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h15/h9d/51224096735262/xiaomi-redmi-10c-4-gb-128-gb-seryj-104417231-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h44/h58/51224097194014/xiaomi-redmi-10c-4-gb-128-gb-seryj-104417231-3.jpg"]
        },
        {
          name:"Смартфон OPPO Reno 7 8 ГБ/128 ГБ черный",
          rating: 5,
          likes: 0,
          cost: 152390,
          link: "https://kaspi.kz/shop/p/oppo-reno-7-8-gb-128-gb-chernyi-104705829/?c=750000000#!/item",
          description: "Премиальный, стильный и мощный. Множество опытов и экспериментов позволили создать первую в отрасли текстуру кожи из стекловолокна. " +
            "Потрясающе смотрится, потрясающая наощупь. При этом, после множества тестов можно смело говорить о гарантии долговечности." +
            " Процессор Qualcomm Snapdragon нового поколения, изготовленный по 6-нанометровому техпроцессу, обеспечивает длительную превосходную производительность при сохранении энергопотребления. " +
            "Расширение оперативной памяти, заимствующее до 5 ГБ из неиспользуемой ROM, обеспечивает плавную работу телефона, когда вы переключаетесь между любимыми приложениями." +
            " Никогда не беспокойтесь о разрядке благодаря сочетанию SUPERVOOCTM мощностью 33 Вт и большой батареи емкостью 4500 мАч.",
          img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h23/hb0/50459865022494/orro-reno-7-8-128gb-cernyj-104705829-1.jpg",
          gallery: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h23/hb0/50459865022494/orro-reno-7-8-128gb-cernyj-104705829-1.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0f/hcb/50459865251870/orro-reno-7-8-128gb-cernyj-104705829-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/heb/haf/51167477727262/orro-reno-7-8-128gb-cernyj-104705829-5.jpg"]
        }
      ]
    },
    {
      name: "Jewellery",
      products: [
        {
          name:"HUANHE подвеска Я тебя люблю на 100 языках мира r87761443315 бижутерный сплав, стекло",
          rating: 5,
          likes: 0,
          cost: 1998,
          link: "https://kaspi.kz/shop/p/huanhe-podveska-ja-tebja-ljublju-na-100-jazykah-mira-r87761443315-bizhuternyi-splav-steklo-101714183/?c=750000000#!/item",
          description: "Кулон «Я тебя люблю» – пожалуй, самый необычный и романтичный подарок из всех. Если направить на него луч света (например, от фонарика или вспышки смартфона), то в появившейся тени можно будет прочитать самую главную мантру любви, самые важные слова в жизни каждого человека " +
            "– «Я тебя люблю» на 100 языках мира, в том числе и на русском.",
          img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/he3/34047891734558/huanhe-a-teba-lublu-na-100-azykah-mira-r87761443315-bizuternyj-splav-steklo-101714183-1.jpg",
          gallery: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/he3/34047891734558/huanhe-a-teba-lublu-na-100-azykah-mira-r87761443315-bizuternyj-splav-steklo-101714183-1.jpg"]
        },
        {
          name:"Серебро России подвеска бегунки 012 2.5 г серебро, фианит",
          rating: 5,
          likes: 0,
          cost: 4950,
          link: "https://kaspi.kz/shop/p/serebro-rossii-podveska-begunki-012-2-5-g-serebro-fianit-106197156/?c=750000000#!/item",
          description: "",
          img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9b/h7c/61993413738526/serebro-rossii-podveska-begunki-012-2-5-g-serebro-fianit-106197156-1.jpg",
          gallery: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9b/h7c/61993413738526/serebro-rossii-podveska-begunki-012-2-5-g-serebro-fianit-106197156-1.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h12/h31/61993414197278/serebro-rossii-podveska-begunki-012-2-5-g-serebro-fianit-106197156-2.jpg"]
        },
        {
          name:"Felice подвеска KE00130 3.2 г серебро, цирконий",
          rating: 5,
          likes: 0,
          cost: 8900,
          link: "https://kaspi.kz/shop/p/felice-podveska-ke00130-3-2-g-serebro-tsirkonii-103883080/?c=750000000#!/item",
          description: "Утонченное и изысканное минималистичное колье выгодно подчеркнет зону декольте. " +
            "У Вас определенно должны быть базовые украшения на каждый день и на все случаи жизни. Носите с рубашкой, блузкой, платьем, топиком - украшение идеально подойдет к любому гардеробу! " +
            "Украшение на шею отлично подойдет для вечеринки, свадьбы, корпоратива, встрече нового года и любого другого яркого события в Вашей жизни.",
          img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h83/h47/67826497880094/felice-podveska-ke00130-3-2-g-serebro-tsirkonii-103883080-1.jpg",
          gallery: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h83/h47/67826497880094/felice-podveska-ke00130-3-2-g-serebro-tsirkonii-103883080-1.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc6/h2d/67826498142238/felice-podveska-ke00130-3-2-g-serebro-tsirkonii-103883080-2.jpg"]
        },
        {
          name:"Серьги SOKOLOV 87020055 2.29 г серебро, бриллиант",
          rating: 5,
          likes: 0,
          cost: 31990,
          link: "https://kaspi.kz/shop/p/sokolov-87020055-2-29-g-serebro-brilliant-102798899/?c=750000000#!/item",
          description: "SOKOLOV – международный ювелирный бренд, представленный на рынках СНГ, Европы, Ближнего Востока, Азии и Америки. " +
            "В центре внимания бренда – совершенство его произведений и принципы высочайшего качества. Ежегодно на высокотехнологичном производственном комплексе выпускается 14 000 000 ювелирных изделий и свыше 700 новинок каждый месяц." +
            " В более чем 300 флагманских магазинах бренда представлены тысячи украшений из золота и серебра, а также часы из драгоценных металлов и высококлассной стали.",
          img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he3/h81/47011081650206/sokolov-87020055-serebro-brilliant-102798899-1.jpg",
          gallery: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he3/h81/47011081650206/sokolov-87020055-serebro-brilliant-102798899-1.jpg"]
        },
        {
          name:"Колье Felice KE00115 45 см 2 г серебро, цирконий",
          rating: 5,
          likes: 0,
          cost: 6400,
          link: "https://kaspi.kz/shop/p/felice-ke00115-45-sm-2-g-serebro-tsirkonii-104291876/?c=750000000#!/item",
          description: "Утонченное и изысканное минималистичное колье выгодно подчеркнет зону декольте. " +
            "У Вас определенно должны быть базовые украшения на каждый день и на все случаи жизни. Носите с рубашкой, блузкой, платьем, топиком - украшение идеально подойдет к любому гардеробу!" +
            " Украшение на шею отлично подойдет для вечеринки, свадьбы, корпоратива, встрече нового года и любого другого яркого события в Вашей жизни.",
          img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hab/he6/62865873764382/felice-ke00115-45-sm-2-g-serebro-tsirkonii-104291876-1.jpg",
          gallery: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hab/he6/62865873764382/felice-ke00115-45-sm-2-g-serebro-tsirkonii-104291876-1.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0f/hce/62865873993758/felice-ke00115-45-sm-2-g-serebro-tsirkonii-104291876-2.jpg",
          "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he5/hd1/67807511445534/felice-ke00115-45-sm-2-g-serebro-tsirkonii-104291876-3.jpg"]
        }
      ]
    },
    {
      name: "Headphones",
      products: [
        {
          name:"Samsung Galaxy A13 4 ГБ/128 ГБ черный",
          rating: 4.9,
          likes: 0,
          cost: 89565,
          link:"https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279/?c=750000000#!/item",
          description: "Благодаря 6.6-дюймовому экрану Infinity-V на смартфоне Galaxy A13 вы сможете увидеть все, что было скрыто от вашего взгляда." +
            " Наслаждайтесь живым четким изображением с технологией FHD+. Galaxy A13 сочетает деликатные цвета и приятную на ощупь текстуру. " +
            "Благодаря изящным изгибам его удобно держать при работе с экраном. " +
            "Galaxy A13 оснащен восьмиядерным процессором и оперативной памятью до 4 ГБ для быстрой и эффективной работы. " +
            "А со встроенной памятью 128 ГБ и картой памяти microSD до 1 ТБ у вас появится еще больше места для хранения. " +
            "Запечатлейте ценные моменты во всех деталях с основной камерой 50 Мп. ",
          img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf2/hbe/49613711933470/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-1.jpg",
          gallery: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf2/hbe/49613711933470/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-1.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h89/h78/49613712195614/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9a/h9a/49613712654366/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-4.jpg"]
        },
        {
          name: "Смартфон Apple iPhone 14 Pro Max 256Gb фиолетовый",
          rating: 5,
          likes: 0,
          cost: 689670,
          link:"https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item",
          description: "",
          img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg",
          gallery: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/had/h95/62948781293598/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h75/h10/63073993293854/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-3.jpg"]
        },
        {
          name:"Смартфон Apple iPhone 13 128Gb розовый",
          rating: 5,
          likes: 0,
          cost: 377370,
          link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-rozovyi-102298145/?c=750000000#!/item",
          description: "Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. " +
            "А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.   " +
            "Apple разработали совершенно новую схему расположения камер и развернули объективы на 45 градусов. " +
            "Благодаря этому внутри корпуса поместилась лучшая система двух камер с увеличенной матрицей широкоугольной камеры. " +
            "Кроме того, освободилось место для системы оптической стабилизации изображения со сдвигом матрицы, и увеличилась скорость работы матрицы на сверхширокоугольной камере. ",
          img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha0/h0e/46392660819998/apple-iphone-13-128gb-rozovyj-102298145-1-Container.jpg",
          gallery: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha0/h0e/46392660819998/apple-iphone-13-128gb-rozovyj-102298145-1-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he0/h12/46392661344286/apple-iphone-13-128gb-rozovyj-102298145-3-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h07/hdd/46392661540894/apple-iphone-13-128gb-rozovyj-102298145-4-Container.jpg"]
        },
        {
          name:"Смартфон Xiaomi Redmi 10C 4 ГБ/128 ГБ серый",
          rating: 4.8,
          likes: 0,
          cost: 69270,
          link: "https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-128-gb-seryi-104417231/?c=750000000#!/item",
          description: "Xiaomi Redmi 10C оснащен большим дисплеем с диагональю 6.71 дюйма с защитным стеклом Corning Gorilla Glass, которое защищает экран от царапин и повреждений при падениях. " +
            "Redmi 10C позволяет создавать фотографии профессионального уровня в формате для развлечений. " +
            "Наслаждайтесь воспоминаниями благодаря камере 50 Мп, которая идеально подходит для съемки незабываемых моментов.  " +
            " Redmi 10C оснащен невероятным восьмиядерным процессором Snapdragon 680, созданным на основе флагманского техпроцесса 6 нм.",
          img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbc/h0a/49939925205022/xiaomi-redmi-10c-4-gb-128-gb-seryj-104417231-1.jpg",
          gallery: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbc/h0a/49939925205022/xiaomi-redmi-10c-4-gb-128-gb-seryj-104417231-1.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h15/h9d/51224096735262/xiaomi-redmi-10c-4-gb-128-gb-seryj-104417231-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h44/h58/51224097194014/xiaomi-redmi-10c-4-gb-128-gb-seryj-104417231-3.jpg"]
        },
        {
          name:"Смартфон OPPO Reno 7 8 ГБ/128 ГБ черный",
          rating: 5,
          likes: 0,
          cost: 152390,
          link: "https://kaspi.kz/shop/p/oppo-reno-7-8-gb-128-gb-chernyi-104705829/?c=750000000#!/item",
          description: "Премиальный, стильный и мощный. Множество опытов и экспериментов позволили создать первую в отрасли текстуру кожи из стекловолокна. " +
            "Потрясающе смотрится, потрясающая наощупь. При этом, после множества тестов можно смело говорить о гарантии долговечности." +
            " Процессор Qualcomm Snapdragon нового поколения, изготовленный по 6-нанометровому техпроцессу, обеспечивает длительную превосходную производительность при сохранении энергопотребления. " +
            "Расширение оперативной памяти, заимствующее до 5 ГБ из неиспользуемой ROM, обеспечивает плавную работу телефона, когда вы переключаетесь между любимыми приложениями." +
            " Никогда не беспокойтесь о разрядке благодаря сочетанию SUPERVOOCTM мощностью 33 Вт и большой батареи емкостью 4500 мАч.",
          img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h23/hb0/50459865022494/orro-reno-7-8-128gb-cernyj-104705829-1.jpg",
          gallery: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h23/hb0/50459865022494/orro-reno-7-8-128gb-cernyj-104705829-1.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0f/hcb/50459865251870/orro-reno-7-8-128gb-cernyj-104705829-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/heb/haf/51167477727262/orro-reno-7-8-128gb-cernyj-104705829-5.jpg"]
        }
      ]
    },
    {
      name: "Food",
      products: [
        {
          name:"Samsung Galaxy A13 4 ГБ/128 ГБ черный",
          rating: 4.9,
          likes: 0,
          cost: 89565,
          link:"https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279/?c=750000000#!/item",
          description: "Благодаря 6.6-дюймовому экрану Infinity-V на смартфоне Galaxy A13 вы сможете увидеть все, что было скрыто от вашего взгляда." +
            " Наслаждайтесь живым четким изображением с технологией FHD+. Galaxy A13 сочетает деликатные цвета и приятную на ощупь текстуру. " +
            "Благодаря изящным изгибам его удобно держать при работе с экраном. " +
            "Galaxy A13 оснащен восьмиядерным процессором и оперативной памятью до 4 ГБ для быстрой и эффективной работы. " +
            "А со встроенной памятью 128 ГБ и картой памяти microSD до 1 ТБ у вас появится еще больше места для хранения. " +
            "Запечатлейте ценные моменты во всех деталях с основной камерой 50 Мп. ",
          img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf2/hbe/49613711933470/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-1.jpg",
          gallery: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf2/hbe/49613711933470/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-1.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h89/h78/49613712195614/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9a/h9a/49613712654366/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-4.jpg"]
        },
        {
          name: "Смартфон Apple iPhone 14 Pro Max 256Gb фиолетовый",
          rating: 5,
          likes: 0,
          cost: 689670,
          link:"https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item",
          description: "",
          img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg",
          gallery: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/had/h95/62948781293598/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h75/h10/63073993293854/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-3.jpg"]
        },
        {
          name:"Смартфон Apple iPhone 13 128Gb розовый",
          rating: 5,
          likes: 0,
          cost: 377370,
          link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-rozovyi-102298145/?c=750000000#!/item",
          description: "Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. " +
            "А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.   " +
            "Apple разработали совершенно новую схему расположения камер и развернули объективы на 45 градусов. " +
            "Благодаря этому внутри корпуса поместилась лучшая система двух камер с увеличенной матрицей широкоугольной камеры. " +
            "Кроме того, освободилось место для системы оптической стабилизации изображения со сдвигом матрицы, и увеличилась скорость работы матрицы на сверхширокоугольной камере. ",
          img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha0/h0e/46392660819998/apple-iphone-13-128gb-rozovyj-102298145-1-Container.jpg",
          gallery: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha0/h0e/46392660819998/apple-iphone-13-128gb-rozovyj-102298145-1-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he0/h12/46392661344286/apple-iphone-13-128gb-rozovyj-102298145-3-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h07/hdd/46392661540894/apple-iphone-13-128gb-rozovyj-102298145-4-Container.jpg"]
        },
        {
          name:"Смартфон Xiaomi Redmi 10C 4 ГБ/128 ГБ серый",
          rating: 4.8,
          likes: 0,
          cost: 69270,
          link: "https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-128-gb-seryi-104417231/?c=750000000#!/item",
          description: "Xiaomi Redmi 10C оснащен большим дисплеем с диагональю 6.71 дюйма с защитным стеклом Corning Gorilla Glass, которое защищает экран от царапин и повреждений при падениях. " +
            "Redmi 10C позволяет создавать фотографии профессионального уровня в формате для развлечений. " +
            "Наслаждайтесь воспоминаниями благодаря камере 50 Мп, которая идеально подходит для съемки незабываемых моментов.  " +
            " Redmi 10C оснащен невероятным восьмиядерным процессором Snapdragon 680, созданным на основе флагманского техпроцесса 6 нм.",
          img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbc/h0a/49939925205022/xiaomi-redmi-10c-4-gb-128-gb-seryj-104417231-1.jpg",
          gallery: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbc/h0a/49939925205022/xiaomi-redmi-10c-4-gb-128-gb-seryj-104417231-1.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h15/h9d/51224096735262/xiaomi-redmi-10c-4-gb-128-gb-seryj-104417231-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h44/h58/51224097194014/xiaomi-redmi-10c-4-gb-128-gb-seryj-104417231-3.jpg"]
        },
        {
          name:"Смартфон OPPO Reno 7 8 ГБ/128 ГБ черный",
          rating: 5,
          likes: 0,
          cost: 152390,
          link: "https://kaspi.kz/shop/p/oppo-reno-7-8-gb-128-gb-chernyi-104705829/?c=750000000#!/item",
          description: "Премиальный, стильный и мощный. Множество опытов и экспериментов позволили создать первую в отрасли текстуру кожи из стекловолокна. " +
            "Потрясающе смотрится, потрясающая наощупь. При этом, после множества тестов можно смело говорить о гарантии долговечности." +
            " Процессор Qualcomm Snapdragon нового поколения, изготовленный по 6-нанометровому техпроцессу, обеспечивает длительную превосходную производительность при сохранении энергопотребления. " +
            "Расширение оперативной памяти, заимствующее до 5 ГБ из неиспользуемой ROM, обеспечивает плавную работу телефона, когда вы переключаетесь между любимыми приложениями." +
            " Никогда не беспокойтесь о разрядке благодаря сочетанию SUPERVOOCTM мощностью 33 Вт и большой батареи емкостью 4500 мАч.",
          img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h23/hb0/50459865022494/orro-reno-7-8-128gb-cernyj-104705829-1.jpg",
          gallery: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h23/hb0/50459865022494/orro-reno-7-8-128gb-cernyj-104705829-1.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0f/hcb/50459865251870/orro-reno-7-8-128gb-cernyj-104705829-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/heb/haf/51167477727262/orro-reno-7-8-128gb-cernyj-104705829-5.jpg"]
        }
      ]
    }
  ]
  constructor() { }
}
