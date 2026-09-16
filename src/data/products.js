// src/data/products.js

const categoriesData = {
  "إكسسوارات أيفون": {
    names: ["كفر ماج سيف شفاف لأيفون 15 برو", "حماية شاشة زجاج مقوى أيفون 14", "عدسة حماية كاميرا أيفون 13 برو ماكس", "مسكة هاتف مغناطيسية للأيفون", "ستاند ومحفظة ماج سيف للأيفون"],
    images: [
      "https://images.unsplash.com/photo-1603313040162-bb04791d29c3?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&auto=format&fit=crop&q=60"
    ],
    desc: "إكسسوارات أصلية ومميزة صُممت خصيصاً لحماية هاتفك الأيفون بأناقة وبأعلى معايير الجودة."
  },
  "قرم - GARM": {
    names: ["شاحن جداري GARM 65 واط بتقنية GaN", "كيبل شحن قرم تايب سي إلى تايب سي 1 متر", "قاعدة شحن لاسلكية سريعة GARM 3 في 1", "بنك طاقة (باور بانك) GARM بسعة 20000 ملي أمبير", "شاحن سيارة سريع GARM بمنفذين بي دي"],
    images: [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1619685236024-9490920246a2?w=500&auto=format&fit=crop&q=60"
    ],
    desc: "منتجات علامة قرم (GARM) الغنية عن التعريف، قوة وثبات وأمان تام في الشحن السريع لكافة أجهزتك."
  },
  "منتجات إكس وولف (X-Wolf)": {
    names: ["كفر حماية صدمات إكس وولف العسكري", "حماية شاشة نانو سيراميك إكس وولف", "مسكة دركسون وحامل جوال للسيارة إكس وولف", "حقيبة ظهر مقاومة للماء لإكسسوارات الأجهزة", "قاعدة مكتبية متعددة الاستخدامات إكس وولف"],
    images: [
      "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1603313040162-bb04791d29c3?w=500&auto=format&fit=crop&q=60"
    ],
    desc: "سلسلة منتجات إكس وولف المتينة المخصصة لتحمل الصدمات القوية وظروف الاستخدام الشاقة."
  },
  "الساعات الذكية": {
    names: ["ساعة ذكية أوراكل برو (Oracle Pro)", "سوار ساعة سيليكون رياضي بديل", "سوار ساعة معدني أنيق فئة الفخامة", "قاعدة شحن مغناطيسية لاسلكية للساعات", "ساعة ذكية رياضية تتبع اللياقة"],
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&auto=format&fit=crop&q=60"
    ],
    desc: "تشكيلة واسعة من الساعات الذكية والإكسسوارات الخاصة بها لمتابعة صحتك ونشاطك الرياضي."
  },
  "الصوتيات": {
    names: ["سماعة أذن لاسلكية ترو وايرلس بعزل الضوضاء", "مكبر صوت بلوتوث محمول مقاوم للماء", "سماعة رأس ألعاب (Gaming Headset) بإضاءة RGB", "ميكروفون تسجيل بودكاست احترافي", "سماعة سلكية بمنفذ تايب سي"],
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&auto=format&fit=crop&q=60"
    ],
    desc: "استمتع بنقاء صوت استثنائي وعميق مع أحدث السماعات ومكبرات الصوت المعتمدة."
  },
  "بطاريات وكيابل وشواحن": {
    names: ["كيبل شحن قماشي مقاوم للقطع 2 متر", "باور بانك نحيف بحجم البطاقة الشخصية", "رأس شاحن منزلي ثلاثي بي دي سريع", "قاعدة شحن سيارة لاسلكية أوتوماتيكية", "منصة شحن جماعية متعددة المنافذ"],
    images: [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1585338107529-13afc5f02c86?w=500&auto=format&fit=crop&q=60"
    ],
    desc: "حلول الطاقة المتكاملة من كيابل وبطاريات وشواحن تضمن لك عدم انقطاع أجهزتك أبداً."
  }
};

const categoryKeys = Object.keys(categoriesData);

export const products = Array.from({ length: 500 }, (_, index) => {
  const id = index + 1;
  const currentCategoryKey = categoryKeys[index % categoryKeys.length];
  const catData = categoriesData[currentCategoryKey];
  
  const randomNameItem = catData.names[index % catData.names.length];
  const productName = `${randomNameItem} (إصدار ${id})`;
  const price = Math.floor(Math.random() * 450) + 40;
  
  return {
    id: id,
    name: productName,
    category: currentCategoryKey,
    price: price,
    oldPrice: price + 60,
    rating: (Math.random() * (5.0 - 4.3) + 4.3).toFixed(1),
    images: catData.images,
    description: `${catData.desc} - المنتج مصمم بعناية ليلبي كافة الاحتياجات اليومية بكفاءة عالية، مع ضمان جودة التصنيع والأداء المستقر.`,
    features: [
      "تصميم أصلي 100% ومقاوم للتلف",
      "ضمان استبدال معتمد لمدة سنتين",
      "متوافق تماماً مع معايير الأمان والجودة العالمية"
    ]
  };
});
