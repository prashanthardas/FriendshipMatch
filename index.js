function Matcher() {
    var x = document.getElementById('inp1').value;
    var y = document.getElementById('inp2').value;
    var z = document.getElementById('inp3').value;

    var a = document.getElementById('inpu1').value;
    var b = document.getElementById('inpu2').value;
    var c = document.getElementById('inpu3').value;
    if (x === '' || y === '' || z === '' || a === '' || b === '' || c === '') {
        alert("please enter value");
        return;
    }
    if (x === a || x === b || x === c) {
        var li1 = document.createElement('li');
        li1.innerText = x;
        document.getElementById('show').appendChild(li1);
    }
    if (y === a || y === b || y === c) {
        var li2 = document.createElement('li');
        li2.innerText = y;
        document.getElementById('show').appendChild(li2);
    }
    if (z === a || z === b || z === c) {
        var li3 = document.createElement('li');
        li3.innerText = z;
        document.getElementById('show').appendChild(li3);
    }
}
document.getElementById('btn').onclick = Matcher;
document.getElementById('btn').onmouseover = () => {
    document.getElementById('heart').style.color = 'crimson';
}
