// function decrBtn() {
//     var count = document.querySelector('.disp-people').value;
//     console.log(count, "0000000")
//     count = isNaN(count) ? 0: count;
//     console.log(count, "88888888888")
//     count--
//     console.log(document.getElementsByClassName('disp-people'))
//     document.querySelector('.disp-people').textContent = count + " " + "people"
// }

// function incrBtn() {
//     var count = parseInt(document.getElementsByClassName('disp-people').value, 10);
//     count = isNaN(count) ? 0: count;
//     count++
//     document.getElementsByClassName('disp-people')[0].value = count + " " + "people"

// }

function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function decrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('number').value = value + " " + "people";
}


function submitBtn() {
    swal("Good job!", "Your Space has been reserved", "success");
}