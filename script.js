var modal = document.getElementById('modal');
var buttonO = document.getElementById('button');
var buttonC = document.getElementsByClassName('close')[0];
var cancelBtn = document.getElementById('cancel-btn');
var confirmBtn = document.getElementById('confirm-btn');

buttonO.onclick = function() {
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
}

buttonC.onclick = closeModal;
cancelBtn.onclick = closeModal;

confirmBtn.onclick = function() {
    alert('Action confirmed!');
    closeModal();
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}