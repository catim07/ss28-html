function diem(students){
    return students.filter((num)=>{
        let diem=(num.scores.math+num.scores.english+num.scores.literature)/3;
        return diem>=8;
       })
}
let  students=[

    { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature : 7 } },

    { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature : 5} },

    { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature : 9 } }

   ];
   console.log(diem(students));