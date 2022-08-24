// créer un tableau et transmettre le nombre, les questions, les options et les réponses
let questions = [
   // chaque question est un objet key:value
    {
        numb: 1,
        question:"ما هو أكبر عضو في جسم الإنسان ؟",
        answer: "الجلد",
        options: [
          "الدماغ",
          "الجلد",
          "الكبد",
          "الرئتين"
        ]
    },
    {
        numb: 2,
    question: "ما هو متوسط ضربات القلب للأنسان العادي ", 
    answer: "72 ضربة",
    options: [
     "72 ضربة",
     "100 ضربة",
     "120 ضربة",
     "92 ضربة",
      
    ]
  },
    {
        numb: 3,
    question: "كم تستغرق رحلة الدم من القلب إلى أصابع القدمين و العودة ؟",
    answer: "18 ثانية",
    options: [
      "18 ثانية",
      "30 ثانية",
      "40 ثانية",
      "60 ثانية"
    ]
  },
    {
    numb: 4,
    question: "ما هو الفيتامين الذي يأخذه الجسم من أشعة الشمس ؟",
    answer:  "فيتامين د",
    options: [
      "فيتامين د",
      "فيتامين ج",
      "فيتامين ب",
      "فيتامين أ",
    ]
  },
  {
  numb: 5,
  question: "أين توجد البلازما في الجسم ؟",
  answer: "توجد في الدم",
  options: [
     "توجد في العظام",
     "توجد في الدم",
     "توجد في الجلد",
     "توجد في العين"
  ]
},
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];