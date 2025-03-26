var modal = document.getElementById('modal');

var buttonO = document.getElementById('button');

var buttonC = document.getElementsByClassName('close')[0];

buttonO.onclick = function() {
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');
}

buttonC.onclick = function() {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
    }
}