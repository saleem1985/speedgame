function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5toz4DtrcEN":
        Script1();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var player = GetPlayer()

// General Varaibles
player.SetVar("Language","Arabic"); //Arabic or English
player.SetVar("Num_Qestions","7");

// Question 1
player.SetVar("Q_1","1.نشاط له تاريخ بدء مبكر ،2 ، وتاريخ إنتهاء متأخر .18 مدة النشاط 5 أيام أي من العبارات التالية صحيحة بخصوص هذا النشاط ؟");
player.SetVar("Q_1_Option_1", "النشاط يقع على المسار الحرج.");
player.SetVar("Q_1_Option_2", "فائض المشروع 11 يوماً");
player.SetVar("Q_1_Option_3", "المشروع سوف يتأخر");
player.SetVar("Q_1_Option_N4", "النشاط لا يقع على المسار الحرج");
player.SetVar("Q_1_Option_5", "فائض المشروع 12 يوماً");

// Question 2
player.SetVar("Q_2","أنت تدير مشروع تطوير منتج. عميلتك تخبرك أن عليك أن تخطط ليبدأ فريق المراجعة عملية المراجعة بحيث تنتهي تماماً قبل أن تبدأ عملية التوثيق. ولكن بخلاف ذلك، قالت أنها يمكن أن تبدأ في وقت متأخر من المشروع حسب الضرورة. ما هي العلاقة بين نشاط المراجعة ونشاط  التوثيق؟");
player.SetVar("Q_2_Option_1", "بداية الى نهاية (SF)");
player.SetVar("Q_2_Option_N2", "نهاية الى بداية (FS)");
player.SetVar("Q_2_Option_3", "نهاية الى نهاية (FF)");
player.SetVar("Q_2_Option_4", "بداية الى بداية (SS)");
player.SetVar("Q_2_Option_5", "نهاية الى نهاية (EE)");

// Question 3
player.SetVar("Q_3","أنت مدير لمشروع به فائض مشروع 35 ماذا يجب عليك أن تفعل ؟");
player.SetVar("Q_3_Option_1", "إستخدام أعضاء فريق أقل خبرة.");
player.SetVar("Q_3_Option_2", "طلب تمديد الموعد المقرر للمشروع.");
player.SetVar("Q_3_Option_N3", "التتابع السريع للمشروع اذا كانت مخاطر المشروع الكلية منخفضة.");
player.SetVar("Q_3_Option_4", "الحصول على المزيد من الموارد لأنشطة المسار الحرج إذا كان المشروع قد تجاوز الميزانية. ");
player.SetVar("Q_3_Option_5", "إستخدام أعضاء فريق أكثر خبرة");

// Question 4
player.SetVar("QN_4","ليزا تدير مشروع انشاءات المشروع هو إنشاء مبنى إداري والمشروع هام جداً بالنسبة للعميل. وقد قام فريق المشروع بحساب مدة المسار الحرج، وتم إبلاغ العميل بأن المشروع سيستغرق سنة واحدة وأبلغ العميل ليزا أن مدة المشروع طويلة جداً وينبغي إفتتاح المبنى بإحتفال رسمي بعد عشرة أشهر. ماذا يجب أن تفعل ؟");
player.SetVar("Q_4_Option_1", "تصعيد الموضوع وطلب إرشادات من راعي المشروع.");
player.SetVar("Q_4_Option_2", "إبلاغ العميل أن المسار الحرج هو أقل مدة للمشروع وليس به أي مرونة.");
player.SetVar("Q_4_Option_3", "القيام بالتتابع السريع لأنشطة المسار الحرج إذا كانت المخاطر الإجمالية للمشروع مرتفعة.");
player.SetVar("Q_4_Option_4", "طلب تمديد الموعد المقرر للمشروع");
player.SetVar("Q_4_Option_N5", "إضافة موارد إلى بعض أنشطة المسار الحرج لضبط تاريخ انتهاء المشروع لتلبية التاريخ المفروض من قبل العميل.");

// Question 5
player.SetVar("Q_5","أنت تدير مشروع إنشاءات حين احتاج عميلك إلى الإنتهاء من المشروع قبل الموعد المقرر بسبب الظروف الخارجية. سمع أحد أعضاء الفريق أنه في مثل هذا الوضع، يمكنك إستخدام ضغط الجدول الزمني إما عن طريق ضغط زمن المشروع أو التعاقب السريع للجدول الزمني، لكنه غير متأكد ما هو الإختيار الأفضل. ماذا ستقول له؟");
player.SetVar("Q_5_Option_N1", "ضغط زمن المشروع سيزيد التكلفة بينما التعاقب السريع سيزيد المخاطر.");
player.SetVar("Q_5_Option_2", "التعاقب السريع سيقلل دائماً المدة الكلية للمشروع");
player.SetVar("Q_5_Option_3", "عندما تضغط زمن المشروع سوف يؤدي ذلك دائماً الى تقليل المدة الكلية للمشروع.");
player.SetVar("Q_5_Option_4", "ضغط زمن المشروع سيضيف مخاطر، أما التعاقب السريع سيزيد التكلفة. ");
player.SetVar("Q_5_Option_5", "التعاقب السريع سيقلل دائماً مخاطر المشروع");

// Question 6
player.SetVar("Q_6","يدير ألان مشروع تصميم الأجهزة مؤشر أداء الجدول الزمني SPI للمشروع = 0.83 و مؤشر أداء التكلفة 1 = CPI. العميل غير سعيد بسير المشروع وطلب من آلان إعادة المشروع إلى مساره اقترح آلان أنه يمكن إزالة اختبار من خطة إدارة المشروع، وإزالة هذا الاختبار يضمن أن المشروع سوف يعود مرة أخرى على الطريق الصحيح. طلب العميل القيام بجميع الأعمال في خطة إدارة المشروع دون إضافة أي تكلفة إضافية أو قطع أي جزء من النطاق. أي مما يلي يجب على آلان فعله؟");
player.SetVar("Q_6_Option_1", "إجراء تحليل مونت كارلو");
player.SetVar("Q_6_Option_2", "المساواة بين الموارد");
player.SetVar("Q_6_Option_3", "المساواة بين الموارد");
player.SetVar("Q_6_Option_4", "تمديد زمن المشروع");
player.SetVar("Q_6_Option_N5", "إجراء التتابع السريع للمشروع");

// Question 7
player.SetVar("Q_7","سوزان هي مديرة لمشروع برمجيات جديد.. هذا النوع من المشاريع لم يتم القيام به مسبقاً في شركتها وهي لم تقم بإدارة مشروع مماثل لهذا المشروع من قبل. ما هي أفضل طريقة لتقدير مدد الأنشطة التي لم يسبق القيام بها من قبل الشركة؟");
player.SetVar("Q_7_Option_1", "التقدير بإستخدام المعاملات");
player.SetVar("Q_7_Option_2", "تحليل مونت كارلو");
player.SetVar("Q_7_Option_3", "التقدير التناظري");
player.SetVar("Q_7_Option_N4", "التقدير ثلاثي النقاط");
player.SetVar("Q_7_Option_5", "التقدير رباعي النقاط");

// Question 8
player.SetVar("QN_8","###");
player.SetVar("Q_8_Option_1", "###");
player.SetVar("Q_8_Option_2", "###");
player.SetVar("Q_8_Option_3", "###");
player.SetVar("Q_8_Option_4", "###");
player.SetVar("Q_8_Option_N5", "###");

// Question 9
player.SetVar("Q_9","###");
player.SetVar("Q_9_Option_1", "###");
player.SetVar("Q_9_Option_N2", "###");
player.SetVar("Q_9_Option_3", "###");
player.SetVar("Q_9_Option_4", "###");
player.SetVar("Q_9_Option_5", "###");

// Question 10
player.SetVar("Q_10","###");
player.SetVar("Q_10_Option_1", "###");
player.SetVar("Q_10_Option_2", "###");
player.SetVar("Q_10_Option_3", "###");
player.SetVar("Q_10_Option_N4", "###");
player.SetVar("Q_10_Option_5", "###");
}

};
