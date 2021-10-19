function submit();
{
   var displaystudentarray = [] /* These box brackets "[]" basically tell the program that its an array*/

   for (var j = 1; j<=4; j++) /* "for" means that it will loop certain amont of time. For this example j = 1. 
   And the j = <=4 (its a less than symbol) and that means if its either equal to four or less than four then j = j++ or basically j + 1.*/
   {
       var name_of_the_student = document.getElementById("name_of_the_student_"+j).value;
       console.log(name_of_the_student);

       name_of_the_student_array.push(name_of_the_student);
   }

    console.log(name_of_the_student_array);

    var lenght_of_name_of_student_array = name_of_the_student_array.length
   console.log(lenght_of_name_of_student_array);

   for (var k = 0; k < lenght_of_name_of_student_array; k++)
   {
       display_student_array.push("<h4>NAME - "+ name_of_the_student_array[k] + "</h4");
        console.log(display_student_array);
    }
}