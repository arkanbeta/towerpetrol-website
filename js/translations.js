/*
  Tower Petrol website text and editable content.
  Edit this file when you want to change Arabic, Kurdish Sorani, or English wording.
  Keep the keys the same, and change only the text values.
*/

"use strict";

    const phone = "9647501421972";
    const messages = {
      ar: "مرحبًا تاور بترول، أود الاستفسار عن خدماتكم ومناقشة مشروع.",
      ku: "سڵاو تاوەر پێترۆل، دەمەوێت پرسیار لەسەر خزمەتگوزارییەکانتان بکەم و پڕۆژەیەک تاوتوێ بکەم.",
      en: "Hello Tower Petrol, I would like to ask about your services and discuss a project."
    };

    const text = {
      ar: {
        "nav.home":"الرئيسية","nav.about":"من نحن","nav.services":"الخدمات","nav.gallery":"المعرض","nav.contact":"تواصل معنا",
        "hero.eyebrow":"خدمات ميدانية في العراق",
        "hero.title":"تاور بترول <span class=\"accent\">للتجارة العامة المحدودة</span>",
        "hero.lead":"خدمات موثوقة في مجالات النفط، الحفر، الإنشاءات، خطوط الأنابيب، مشاريع المياه، وتأجير المعدات الثقيلة.",
        "hero.cta":"ناقش مشروعك","hero.call":"اتصل الآن","hero.noteTitle":"معدات قوية، عمل واضح","hero.noteText":"دعم عملي للمشاريع التي تحتاج إلى تنفيذ ميداني منظم.",
        "stats.one":"خبرة ميدانية تمتد لعقود","stats.two":"مقر الشركة في أربيل، العراق","stats.three":"خدمات للقطاع النفطي والإنشائي","stats.four":"معدات ثقيلة لدعم المشاريع",
        "about.kicker":"من نحن","about.title":"شركة ميدانية بخبرة عملية",
        "about.p1":"تاور بترول للتجارة العامة المحدودة تعمل في تقديم خدمات ميدانية للمشاريع النفطية، الإنشائية، الصناعية، ومشاريع المياه في العراق.",
        "about.p2":"تستند الشركة إلى خبرة عملية تراكمت عبر عقود في مواقع العمل، من خلال التعامل مع أعمال الحفر، تشغيل ودعم المعدات الثقيلة، تجهيز المواقع، مناولة الأنابيب، وتنفيذ أعمال تحتاج إلى دقة وتنظيم ومعدات مناسبة.",
        "about.p3":"نركز على فهم احتياج العميل، اختيار الآلية المناسبة، وتقديم دعم ميداني واضح يساعد المشروع على التقدم بثقة.",
        "services.kicker":"الخدمات والقدرات","services.title":"خدمات واضحة بدل قائمة مزدحمة","services.intro":"رتبنا الخدمات في أربع مجموعات حتى يعرف الزائر بسرعة ما الذي تقدمه الشركة، وما نوع المعدات التي يمكن توفيرها حسب طبيعة المشروع.",
        "gallery.kicker":"معرض الأعمال","gallery.title":"لقطات من العمل الميداني","gallery.intro":"صور مختارة تعطي الزائر فكرة سريعة عن طبيعة المعدات والأعمال، بدون ازدحام أو صور ضعيفة.",
        "contact.title":"تواصل مع تاور بترول","contact.text":"للاستفسار عن الخدمات، مناقشة مشروع، طلب معدات، أو معرفة إمكانية تنفيذ عمل ميداني معين، يمكنكم التواصل مباشرة.",
        "contact.whatsapp":"ناقش مشروعك عبر واتساب","contact.call":"اتصل الآن","contact.emailButton":"أرسل بريدًا إلكترونيًا","contact.phoneLabel":"الهاتف والواتساب","contact.emailLabel":"البريد الإلكتروني","contact.locationLabel":"الموقع","contact.location":"أربيل، العراق",
        "footer.copy":"© تاور بترول. جميع الحقوق محفوظة."
      },
      ku: {
        "nav.home":"سەرەکی","nav.about":"دەربارەی ئێمە","nav.services":"خزمەتگوزارییەکان","nav.gallery":"گەلەری","nav.contact":"پەیوەندی",
        "hero.eyebrow":"خزمەتگوزاری مەیدانی لە عێراق",
        "hero.title":"تاوەر پێترۆل <span class=\"accent\">بۆ بازرگانی گشتی سنووردار</span>",
        "hero.lead":"خزمەتگوزاریی باوەڕپێکراو بۆ بواری نەوت، حفاری، بیناسازی، هێڵی بۆری، پڕۆژەکانی ئاو، و کرێدانی ئامێری قورس.",
        "hero.cta":"پڕۆژەکەت تاوتوێ بکە","hero.call":"ئێستا پەیوەندی بکە","hero.noteTitle":"ئامێری بەهێز، کاری ڕوون","hero.noteText":"پشتیوانی کرداری بۆ پڕۆژەکان کە پێویستیان بە جێبەجێکردنی مەیدانی ڕێکخراو هەیە.",
        "stats.one":"ئەزموونی مەیدانی بۆ چەندین دەیە","stats.two":"بنکەی کۆمپانیا لە هەولێر، عێراق","stats.three":"خزمەتگوزاری بۆ بواری نەوت و بیناسازی","stats.four":"ئامێری قورس بۆ پشتیوانی پڕۆژەکان",
        "about.kicker":"دەربارەی ئێمە","about.title":"کۆمپانیایەکی مەیدانی بە ئەزموونی کرداری",
        "about.p1":"تاوەر پێترۆل بۆ بازرگانی گشتی سنووردار خزمەتگوزاری مەیدانی پێشکەش دەکات بۆ پڕۆژەکانی نەوت، بیناسازی، پیشەسازی، و پڕۆژەکانی ئاو لە عێراق.",
        "about.p2":"کۆمپانیا پشت بە ئەزموونی کرداری چەندین دەیە دەبەستێت لە شوێنی کار، لەوانە کاری حفاری، پشتیوانی و بەکارهێنانی ئامێری قورس، ئامادەکردنی شوێن، مامەڵەکردن لەگەڵ بۆری، و کارە مەیدانییەکان کە پێویستیان بە پلان، ئامێری گونجاو، و جێبەجێکردنی ڕێکخراو هەیە.",
        "about.p3":"ئێمە گرنگی دەدەین بە تێگەیشتن لە پێویستی کڕیار، هەڵبژاردنی ئامێری گونجاو، و پێشکەشکردنی پشتیوانی مەیدانی ڕوون کە یارمەتی پڕۆژە دەدات بە متمانە بەرەوپێش بچێت.",
        "services.kicker":"خزمەتگوزاری و تواناکان","services.title":"خزمەتگوزاری ڕوون، نەک لیستی قەرەباڵغ","services.intro":"خزمەتگوزارییەکان بە چوار گرووپ ڕێکخراون بۆ ئەوەی سەردانکەر بە خێرایی تێبگات کۆمپانیا چی دەکات و چ جۆرە ئامێرێک دەتوانرێت بەپێی پێویستی پڕۆژە دابین بکرێت.",
        "gallery.kicker":"گەلەری کار","gallery.title":"وێنەی هەڵبژێردراو لە کاری مەیدانی","gallery.intro":"کۆمەڵێک وێنەی هەڵبژێردراو دیدێکی ڕوون دەدات بە سەردانکەر لەسەر جۆری ئامێر و کارەکان، بەبێ قەرەباڵغکردنی پەڕەکە.",
        "contact.title":"پەیوەندی بە تاوەر پێترۆل بکە","contact.text":"بۆ پرسیار لەسەر خزمەتگوزاری، تاوتوێکردنی پڕۆژە، داواکردنی ئامێر، یان زانیاری لەسەر ئەنجامدانی کارێکی مەیدانی، ڕاستەوخۆ پەیوەندی بە تاوەر پێترۆل بکە.",
        "contact.whatsapp":"پڕۆژەکەت لە واتساپ تاوتوێ بکە","contact.call":"ئێستا پەیوەندی بکە","contact.emailButton":"ئیمەیڵ بنێرە","contact.phoneLabel":"تەلەفۆن و واتساپ","contact.emailLabel":"ئیمەیڵ","contact.locationLabel":"شوێن","contact.location":"هەولێر، عێراق",
        "footer.copy":"© تاوەر پێترۆل. هەموو مافەکان پارێزراون."
      },
      en: {
        "nav.home":"Home","nav.about":"About","nav.services":"Services","nav.gallery":"Gallery","nav.contact":"Contact",
        "hero.eyebrow":"Field services across Iraq",
        "hero.title":"Tower Petrol <span class=\"accent\">General Trading Ltd.</span>",
        "hero.lead":"Reliable services for oilfield, drilling, construction, pipeline, water projects, and heavy equipment rental.",
        "hero.cta":"Discuss Your Project","hero.call":"Call Now","hero.noteTitle":"Strong equipment, clear work","hero.noteText":"Practical support for projects that need organized field execution.",
        "stats.one":"Decades of field experience","stats.two":"Based in Erbil, Iraq","stats.three":"Oilfield and construction services","stats.four":"Heavy equipment for project support",
        "about.kicker":"About","about.title":"A field company with practical experience",
        "about.p1":"Tower Petrol General Trading Ltd. provides field services for oilfield, construction, industrial, and water related projects in Iraq.",
        "about.p2":"The company is built on decades of practical field experience, including drilling work, heavy equipment support, site preparation, pipe handling, and field operations that require planning, suitable machinery, and organized execution.",
        "about.p3":"We focus on understanding the client’s needs, choosing the right equipment, and providing clear field support that helps each project move forward with confidence.",
        "services.kicker":"Services and capabilities","services.title":"Clear services, not a crowded list","services.intro":"The services are organized into four groups so visitors can quickly understand what the company does and what type of equipment can be provided depending on project needs.",
        "gallery.kicker":"Work gallery","gallery.title":"Selected field work visuals","gallery.intro":"A small set of selected images gives visitors a clear view of the equipment and work type, without crowding the page with weak photos.",
        "contact.title":"Contact Tower Petrol","contact.text":"For service inquiries, project discussions, equipment requests, or questions about possible field work, contact Tower Petrol directly.",
        "contact.whatsapp":"Discuss Your Project on WhatsApp","contact.call":"Call Now","contact.emailButton":"Send Email","contact.phoneLabel":"Phone and WhatsApp","contact.emailLabel":"Email","contact.locationLabel":"Location","contact.location":"Erbil, Iraq",
        "footer.copy":"© Tower Petrol. All rights reserved."
      }
    };

    const services = {
      ar: [
        {img:"service-pipes.webp", title:"خدمات النفط والحفر", body:"دعم ميداني للأعمال المتعلقة بالحقول النفطية والحفر، بما يشمل أبراج الحفر، مناولة المعدات، وتجهيز مواقع العمل حسب طبيعة المشروع.", tags:["أبراج الحفر","دعم حقول نفطية","معدات الحفر","أعمال ميدانية"]},
        {img:"service-earthworks.webp", title:"الإنشاءات والأعمال الترابية", body:"خدمات الحفر، التسوية، نقل التربة، تكسير الصخور، وتجهيز المواقع للمشاريع الإنشائية والطرق والأعمال الصناعية.", tags:["حفارات","بلدوزرات","لوادر","مطارق هيدروليكية","شاحنات قلاب"]},
        {img:"service-water-pipeline.webp", title:"خطوط الأنابيب ومشاريع المياه", body:"خدمات مرتبطة بخطوط الأنابيب ومشاريع المياه، تشمل مناولة الأنابيب، حفر الخنادق، دعم أعمال التمديد، وإزالة الطمي والرواسب من السدود والخزانات.", tags:["خطوط الأنابيب","مناولة الأنابيب","مشاريع المياه","تنظيف السدود","إزالة الرواسب"]},
        {img:"service-equipment.webp", title:"تأجير المعدات الثقيلة", body:"توفير معدات وآليات ثقيلة لدعم المشاريع النفطية، الإنشائية، الصناعية، ومشاريع المياه، حسب توفر المعدات واحتياج المشروع.", tags:["حفارات","رافعات شوكية","مداحل طرق","خلاطات خرسانة","معدات إنشائية"]}
      ],
      ku: [
        {img:"service-pipes.webp", title:"خزمەتگوزارییەکانی نەوت و حفاری", body:"پشتیوانی مەیدانی بۆ کارە پەیوەندیدارەکان بە کێڵگە نەوتییەکان و حفاری، لەوانە بڕجەکانی حفاری، مامەڵەکردن لەگەڵ ئامێر، و پشتیوانی شوێنی کار بەپێی پێویستی پڕۆژە.", tags:["بڕجی حفاری","پشتیوانی کێڵگە نەوتی","ئامێری حفاری","کاری مەیدانی"]},
        {img:"service-earthworks.webp", title:"بیناسازی و کارە خاکییەکان", body:"خزمەتگوزاریی حفاری، ڕێکخستنی ئاست، گواستنەوەی خۆڵ، شکاندنی بەرد، و ئامادەکردنی شوێن بۆ پڕۆژەکانی بیناسازی، ڕێگاوبان، و پیشەسازی.", tags:["هەڵکەندەر","بلدوزەر","لۆدەر","مەتەقەی هایدرۆلیک","شاحینی قەڵابی"]},
        {img:"service-water-pipeline.webp", title:"هێڵی بۆری و پڕۆژەکانی ئاو", body:"خزمەتگوزاری مەیدانی بۆ هێڵی بۆری و پڕۆژەکانی ئاو، لەوانە مامەڵەکردن لەگەڵ بۆری، هەڵکەندنی خەندەق، ئامادەکردنی ڕێڕەو، و لابردنی قوڕ و ڕووبارەکان لە بەنداو و خەزانەکانی ئاو.", tags:["کاری هێڵی بۆری","مامەڵەکردن بە بۆری","پڕۆژەکانی ئاو","پاککردنەوەی بەنداو","لابردنی ڕووبار"]},
        {img:"service-equipment.webp", title:"کرێدانی ئامێری قورس", body:"دابینکردنی ئامێر و ئۆتۆمبێلی قورس بۆ پشتیوانی پڕۆژەکانی نەوت، بیناسازی، پیشەسازی، و ئاو، بەپێی بەردەستبوونی ئامێر و پێویستی پڕۆژە.", tags:["هەڵکەندەر","فۆرکلیفت","مادحەلی ڕێگا","مێکسەری کۆنکرێت","ئامێری بیناسازی"]}
      ],
      en: [
        {img:"service-pipes.webp", title:"Oilfield and Drilling Services", body:"Field support for oilfield and drilling related work, including drilling rigs, equipment handling, and site support according to project requirements.", tags:["Drilling rigs","Oilfield support","Drilling equipment","Field operations"]},
        {img:"service-earthworks.webp", title:"Construction and Earthworks", body:"Excavation, leveling, soil movement, rock breaking, and site preparation for construction, road, and industrial projects.", tags:["Excavators","Bulldozers","Loaders","Hydraulic breakers","Dump trucks"]},
        {img:"service-water-pipeline.webp", title:"Pipeline and Water Projects", body:"Field services for pipeline and water projects, including pipe handling, trench excavation, route preparation, and removing silt and sediment from dams and reservoirs.", tags:["Pipeline works","Pipe handling","Water projects","Dam cleaning","Sediment removal"]},
        {img:"service-equipment.webp", title:"Heavy Equipment Rental", body:"Heavy equipment and machinery support for oilfield, construction, industrial, and water related projects, depending on availability and project needs.", tags:["Excavators","Forklifts","Road rollers","Concrete mixers","Construction machinery"]}
      ]
    };

    const gallery = {
      ar:[
        {img:"gallery-rig.webp", label:"أبراج ومعدات الحفر", cls:"tall"},
        {img:"gallery-drill-pipes.webp", label:"أنابيب ومعدات ميدانية", cls:""},
        {img:"gallery-pipeline.webp", label:"أعمال خطوط الأنابيب", cls:"wide"},
        {img:"gallery-earthworks.webp", label:"الحفر وتجهيز المواقع", cls:""},
        {img:"gallery-hydraulic-breaker.webp", label:"تكسير الصخور بالمطرقة الهيدروليكية", cls:""},
        {img:"gallery-rig-components.webp", label:"مكونات ومعدات صناعية", cls:""}
      ],
      ku:[
        {img:"gallery-rig.webp", label:"بڕج و ئامێری حفاری", cls:"tall"},
        {img:"gallery-drill-pipes.webp", label:"بۆری و کەرەستەی مەیدانی", cls:""},
        {img:"gallery-pipeline.webp", label:"کاری هێڵی بۆری", cls:"wide"},
        {img:"gallery-earthworks.webp", label:"حفاری و ئامادەکردنی شوێن", cls:""},
        {img:"gallery-hydraulic-breaker.webp", label:"شکاندنی بەرد بە مەتەقەی هایدرۆلیک", cls:""},
        {img:"gallery-rig-components.webp", label:"پارچە و ئامێری پیشەسازی", cls:""}
      ],
      en:[
        {img:"gallery-rig.webp", label:"Drilling rigs and equipment", cls:"tall"},
        {img:"gallery-drill-pipes.webp", label:"Pipes and field materials", cls:""},
        {img:"gallery-pipeline.webp", label:"Pipeline field work", cls:"wide"},
        {img:"gallery-earthworks.webp", label:"Excavation and site work", cls:""},
        {img:"gallery-hydraulic-breaker.webp", label:"Hydraulic rock breaking", cls:""},
        {img:"gallery-rig-components.webp", label:"Industrial rig components", cls:""}
      ]
    };
