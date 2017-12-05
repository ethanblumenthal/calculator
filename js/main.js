var text = document.querySelector('h1');

document.querySelectorAll('button').forEach(function(e) {
    e.onclick = function() {
        text.innerHTML += this.innerHTML;
    };
});

document.getElementById('equal').onclick = function() {
    text.innerHTML = eval(text.innerHTML);
}

document.getElementById('clear').onclick = function() {
    text.innerHTML = '';
}