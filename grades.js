function calculateGrades (){
    const Input = prompt("Enter students marks (0-100);")
    const marks = parseFloat(Input)
      // prompt input
    if (marks>=0 &&marks <=100){
        let grade;
        if (marks  >=79 &&marks<=100){
            grade="A"; // Marks between 79 and 100 grade "A".
         }else if (marks >=60 &&marks<=79){
            grade="B"; // Marks between 60 and 79 grade "B".
         }else if (marks >=49 &&marks <=59){
            grade="c"; // Marks between 49 and 59 grade "C".
         }else if (marks >=40 &&marks <=49){
            grades="D"; /// marks between 40 and 49 grade "D".
         }else{
            grade="E";
            // Marks between 38 and 0 grade "E".
         }
            console.log(`The student's grade is:${grade}`) 
        }
    }

    calculateGrades();
   