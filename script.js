//use moment js to display date and time from moment js docs

const format = "LLLL";

const result = moment().format(format);

//console.log(result);

// append date to currentDay

const currentDay = $("#currentDay").append(result);


// $('.btn-secondary').on('click', function(){

//     $('input[type="text"]').each(function(){    
//         var id = $(this).attr('id');
//         var value = $(this).val();
//        localStorage.setItem(id, value);

//     });   
// });

var text_Hour = 9;
var text_Suffix = ":00am";



const lastNotes = JSON.parse(localStorage.getItem("notes"));
$("#textArea1").append(lastNotes.text1);
$("#textArea2").append(lastNotes.text2);
$("#textArea3").append(lastNotes.text3);
$("#textArea4").append(lastNotes.text4);
$("#textArea5").append(lastNotes.text5);
$("#textArea6").append(lastNotes.text6);
$("#textArea7").append(lastNotes.text7);
$("#textArea8").append(lastNotes.text8);
$("#textArea9").append(lastNotes.text9);
$("#textArea10").append(lastNotes.text10);



    const saveBtn = $(".btn");

    saveBtn.on("click", function() {
        event.preventDefault();

    

    const savedNotes = {
        text1 : $("#textArea1").val().trim(),
        text2 : $("#textArea2").val().trim(),
        text3 : $("#textArea3").val().trim(),
        text4 : $("#textArea4").val().trim(),
        text5 : $("#textArea5").val().trim(),
        text6 : $("#textArea6").val().trim(),
        text7 : $("#textArea7").val().trim(),
        text8 : $("#textArea8").val().trim(),
        text9 : $("#textArea9").val().trim(),
        text10 : $("#textArea10").val().trim(),
    }

    localStorage.setItem("notes", JSON.stringify(savedNotes));
})