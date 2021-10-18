function decrBtn() {
    var count = parseInt(document.getElementsByClassName('disp-people').value, 10);
    count = isNaN(count) ? 0: count;
    count--
    console.log(document.getElementsByClassName('disp-people'))
    document.getElementsByClassName('disp-people').value = count + " " + "people"
}

function incrBtn() {
    var value = parseInt(document.getElementsByClassName('disp-people').value, 10);
    value = isNaN(value) ? 0: value;
    value++
    document.getElementsByClassName('disp-people').value = value + " " + "people"
}
function submitBtn() {
    swal("Good job!", "Your Space has been reserved", "success");
}