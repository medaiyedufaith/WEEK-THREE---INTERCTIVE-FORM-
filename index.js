function decrBtn() {
    var value = parseInt(document.getElementsByClassName('disp-people').value, 10);
    value = isNaN(value) ? 0: value;
    value++
    document.getElementsByClassName('disp-people').value = value + " " + "people"
}

function incrBtn() {
    var value = parseInt(document.getElementsByClassName('disp-people').value, 10);
    value = isNaN(value) ? 0: value;
    value--
    document.getElementsByClassName('disp-people').value = value + " " + "people"
}
function submitBtn() {
    swal("Good job!", "Your Space have been reserved", "success");
}