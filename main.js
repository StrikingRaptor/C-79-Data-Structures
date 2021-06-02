student_name_array=[];
function submit(){
    var student_1=document.getElementById("student_name_1").nodeValue;
    var student_2=document.getElementById("student_name_2").nodeValue;
    var student_3=document.getElementById("student_name_3").nodeValue;
    var student_4=document.getElementById("student_name_4").nodeValue;

    student_name_array.push(student_1);
    student_name_array.push(student_2);
    student_name_array.push(student_3);
    student_name_array.push(student_4);

    console.log(student_name_array);
    document.getElementById("Display_name").innerHTML=student_name_array;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sort(){
    student_name_array.sort();
    console.log(student_name_array);
    document.getElementById("Display_name").innerHTML=student_name_array;
}

