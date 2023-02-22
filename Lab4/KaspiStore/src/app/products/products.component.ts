import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  items = [
    {
      name: "Heimish All Clean Balm бальзам 120 мл",
      description: "All Clean Balm - это просто находка для любителей декоративной косметики, так как смыть толстые слои косметики всегда не легко." +
        "Бальзам мягко и быстро растворяет даже самые сильные водостойкие средства. " +
        "Имеет легкую, нежную щербетную текстуру. Не нужно смешивать с водой при нанесении! " +
        "Просто нанесите поверх макияжа, нежными массажными движениями смойте макияж и умойтесь теплой водой. " +
        "Средство не сушит и не стягивает кожу, а наоборот, увлажняет и заботится о ней. " +
        "Масло Ши, входящее в состав, глубоко увлажняет и повышает эластичность кожи. " +
        "Масло Цитрусовых успокаивает и снимает стресс. Масло кокоса смягчает и улучшает состояние кожи, а комплекс из белых цветов улучшает кожный баланс и тон.",
      currentImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he3/h7a/32773972426782/heimish-all-clean-balm-mnogofunkcionalnyj-dla-lica-120-ml-100341040-1-Container.jpg",
      link: "https://kaspi.kz/shop/p/heimish-all-clean-balm-bal-zam-120-ml-100341040/?c=750000000#!/item",
      gallery: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he3/h7a/32773972426782/heimish-all-clean-balm-mnogofunkcionalnyj-dla-lica-120-ml-100341040-1-Container.jpg",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h29/h9f/49837555187742/heimish-all-clean-balm-balzam-120-ml-100341040-2.jpg",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb2/h4d/49837555646494/heimish-all-clean-balm-balzam-120-ml-100341040-3.jpg"],
      rating: "Rating: "+ 5
    },
    {name: "CROME BB Snail Cream BB крем бежевый 50 мл",
      description: "Улиточный BB крем для лица Crome Snail BB cream это средство с улиточным муцином. " +
        "Муцин славится своими регенерирующими способностями, так как содержит аллантоин (заживляет и регенерирует ткани), медные пептиды (стимулируют выработку коллагена), " +
        "антимикробные пептиды (уменьшает воспаления), комплекс витаминов и белков, способствующих питанию и обновлению кожи. " +
        "Crome Snail BB cream выпускается в одном цвете с примесью перламутровых частиц, подсвечивающих лицо. " +
        "Крем так же может применяться в качестве базы под макияж. " +
        "Пахнет приятно и не вызовет отторжения даже у аллергиков. " +
        "Распределяется по коже легко, обладает осветляющим эффектом. Максимальная солнцезащита на уровне SPF 50 защищает от UVA/UVB лучей. Хорошо выравнивает тон кожи, оставляя после себя тонкое покрытие",
      currentImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h22/h6a/31731057950750/crome-bb-snail-cream-50-ml-17500176-1-Container.jpg",
      link: "https://kaspi.kz/shop/p/crome-bb-snail-cream-bb-krem-bezhevyi-50-ml-17500176/?c=750000000#!/item",
      gallery: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h22/h6a/31731057950750/crome-bb-snail-cream-50-ml-17500176-1-Container.jpg",
      "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3d/h88/50231378182174/crome-bb-snail-cream-bb-krem-bezevyj-50-ml-17500176-2.jpg",
      "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7b/h01/50231378640926/crome-bb-snail-cream-bb-krem-bezevyj-50-ml-17500176-3.jpg"], rating: "Rating: "+ 4.9},
    {name: "Farmstay All-In-One Collagen and Hyaluronic Acid Ampoule",
      description: "Многофункциональная сыворотка для лица с витаминами и гиалуроновой кислотой. " +
        "Она активно увлажняет кожу, устраняет шелушения, снимает отёчность, сокращает морщины, осветляет пигментные пятна и борется с преждевременными возрастными признаками.",
      currentImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf4/h24/49069796392990/farmstay-all-in-one-collagen-hyaluronic-acid-ampoule-250-ml-100028087-1-Container.jpg",
      link: "https://kaspi.kz/shop/p/farmstay-all-in-one-collagen-and-hyaluronic-acid-ampoule-syvorotka-250-ml-100028087/?c=750000000#!/item",
      gallery: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf4/h24/49069796392990/farmstay-all-in-one-collagen-hyaluronic-acid-ampoule-250-ml-100028087-1-Container.jpg",
      "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he0/hed/46948063903774/farmstay-all-in-one-collagen-hyaluronic-acid-ampoule-250-ml-100028087-4-Container.jpg",
      "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3f/h13/31672318165022/farmstay-all-in-one-collagen-hyaluronic-acid-ampoule-250-ml-100028087-5-Container.jpg"], rating: "Rating: "+ 5},
    {name: "Тушь для ресниц Loreal Paris Telescopic Explosion для объема, удлиняющая черный",
      description: "Удлиняющая тушь от LOreal Paris с гибкой пластиковой щеточкой-расческой для густых, объемных и мягких ресниц. Мега длина и разделение. Дарит ресницам насыщенный, глубокий цвет, укрепляет и защищает. " +
        "Взгляд выразительный и притягательный. " +
        "Гибкая Щеточка-Расческа высокой точности захватывает и разделяет каждую ресничку. " +
        "Удлиняющая и укрепляющая формула придает ресницам потрясающую длину до + 60%!",
      currentImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5a/h1a/61684658274334/l-oreal-paris-telescopic-explosion-dla-ob-ema-udlinausaa-cernyj-17400312-2.jpg",
      link: "https://kaspi.kz/shop/p/loreal-paris-telescopic-explosion-dlja-ob-ema-udlinjajuschaja-chernyi-17400312/?c=750000000#!/item",
      gallery: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5a/h1a/61684658274334/l-oreal-paris-telescopic-explosion-dla-ob-ema-udlinausaa-cernyj-17400312-2.jpg",
      "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc9/hf8/61684658733086/l-oreal-paris-telescopic-explosion-dla-ob-ema-udlinausaa-cernyj-17400312-3.jpg"],
      rating: "Rating: "+ 5},
    {name: "FFLEUR подводка кувшинчик черный",
      description: "Тканевая 2-х ступенчатая пилинг-маска удаляет ороговевший слой кожи, ускоряет процессы обновления, способствует заживлению воспалений. " +
        "Во время процедуры пузырьки кислорода проникают глубоко в кожу, очищают и способствует ускорению регенерации.",
      currentImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf0/h6a/51132180496414/dermask-ultra-jet-peeling-solution-dr-jart-103572620-1.jpg",
      link: "https://kaspi.kz/shop/p/dr-jart-tkanevaja-peeling-solution-25-ml-103572620/?c=750000000#!/item",
      gallery: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf0/h6a/51132180496414/dermask-ultra-jet-peeling-solution-dr-jart-103572620-1.jpg"],
      rating: "Rating: "+ 5},
    {name: "Topface Instyle прессованные 019",
      description: "Палетка идеальна и для тех, кто уже знает, какие оттенки наилучшим образом подчеркивают и раскрывают их внешность, и тех, кто только ищет свои цвета. " +
        "Высокая пигментированность, отличная стойкость, большой объем рефилов, идеально подобранные сочетания самых красивых и практичных оттенков и текстур.",
      currentImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h89/hfc/46570310729758/-topface-cosmetics-pt501-teni-dla-vek-5-cvet-019ktl-102591198-1.jpg",
      link: "https://kaspi.kz/shop/p/topface-instyle-pressovannye-019-102591198/?c=750000000#!/item",
      gallery: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h89/hfc/46570310729758/-topface-cosmetics-pt501-teni-dla-vek-5-cvet-019ktl-102591198-1.jpg"],
      rating: "Rating: "+ 5},
    {name: "ECOTONE набор кистей Belle 14 шт",
      description: "Набор кистей для макияжа в футляре от Ecotone превратит Вашу бьюти-рутину и макияж в сплошное удовольствие! В комплект входит 14 различных видов кистей и удобная переносная сумочка. " +
        "Кисточки изготовлены из высококачественных материалов. " +
        "Рукоятки кисточек выполнены из дерева и алюминиевого сплава. " +
        "Набор состоит из всех базовых кистей.",
      currentImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/had/h80/34423457021982/ecotone-belle-14-st-101871223-1-Container.jpg",
      link: "https://kaspi.kz/shop/p/ecotone-nabor-kistei-belle-14-sht-101871223/?c=750000000#!/item",
      gallery: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/had/h80/34423457021982/ecotone-belle-14-st-101871223-1-Container.jpg",
      "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h22/haf/34423461183518/ecotone-belle-14-st-101871223-2-Container.jpg",
      "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hea/h42/34423465508894/ecotone-belle-14-st-101871223-3-Container.jpg"], rating: "Rating: "+ 4.7},
    {name: "Belor design Multitalent Bronzer бронзер 1",
      description: "Нежная кремово - пудровая текстура равномерно распределяется и быстро фиксируется на поверхности кожи, под дается тщательной растушевке, что позволяет добиться естественного финиша.",
      currentImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2f/h57/50362807451678/belor-design-multitalent-bronzer-bronzer-104654846-1.jpg",
      link: "https://kaspi.kz/shop/p/belor-design-multitalent-bronzer-bronzer-1-104654846/?c=750000000#!/item",
      gallery: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2f/h57/50362807451678/belor-design-multitalent-bronzer-bronzer-104654846-1.jpg"], rating: "Rating: "+ 5},
    {name: "Тушь для ресниц Loreal Paris Telescopic Explosion для объема, удлиняющая черный",
      description: "Удлиняющая тушь от LOreal Paris с гибкой пластиковой щеточкой-расческой для густых, объемных и мягких ресниц. Мега длина и разделение. Дарит ресницам насыщенный, глубокий цвет, укрепляет и защищает. " +
        "Взгляд выразительный и притягательный. " +
        "Гибкая Щеточка-Расческа высокой точности захватывает и разделяет каждую ресничку. " +
        "Удлиняющая и укрепляющая формула придает ресницам потрясающую длину до + 60%!",
      currentImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5a/h1a/61684658274334/l-oreal-paris-telescopic-explosion-dla-ob-ema-udlinausaa-cernyj-17400312-2.jpg",
      link: "https://kaspi.kz/shop/p/loreal-paris-telescopic-explosion-dlja-ob-ema-udlinjajuschaja-chernyi-17400312/?c=750000000#!/item",
      gallery: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5a/h1a/61684658274334/l-oreal-paris-telescopic-explosion-dla-ob-ema-udlinausaa-cernyj-17400312-2.jpg",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc9/hf8/61684658733086/l-oreal-paris-telescopic-explosion-dla-ob-ema-udlinausaa-cernyj-17400312-3.jpg"],
      rating: "Rating: "+ 5},
    {name: "Topface Instyle прессованные 019",
      description: "Палетка идеальна и для тех, кто уже знает, какие оттенки наилучшим образом подчеркивают и раскрывают их внешность, и тех, кто только ищет свои цвета. " +
        "Высокая пигментированность, отличная стойкость, большой объем рефилов, идеально подобранные сочетания самых красивых и практичных оттенков и текстур.",
      currentImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h89/hfc/46570310729758/-topface-cosmetics-pt501-teni-dla-vek-5-cvet-019ktl-102591198-1.jpg",
      link: "https://kaspi.kz/shop/p/topface-instyle-pressovannye-019-102591198/?c=750000000#!/item",
      gallery: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h89/hfc/46570310729758/-topface-cosmetics-pt501-teni-dla-vek-5-cvet-019ktl-102591198-1.jpg"],
      rating: "Rating: "+ 5},
  ]

  changeCurrentImg(i: number,j: number){
    this.items[i].currentImg = this.items[i].gallery[j];
  }

  goToRealPage(i: number){
    document.location.href = this.items[i].link;
  }

  shareWithTelegram(i: number) {
    document.location.href = "https://t.me/share/url?url=" + this.items[i].link
  }
}
