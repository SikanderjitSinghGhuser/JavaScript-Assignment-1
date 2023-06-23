function circleArea() {
    var radius = document.getElementById('radius').value.trim();
    radius = parseFloat(radius);

    var area = Math.PI * radius * radius;

    document.getElementById('circle-area').value = area;
}
function triangleArea() {
    var base = document.getElementById('base').value.trim();
    var height = document.getElementById('height').value.trim();
    base = parseFloat(base);
    height = parseFloat(height);

    var area = 0.5 * (base * height);

    document.getElementById('triangle-area').value = area;
}
function squareArea() {
    var side = document.getElementById('side').value.trim();

    side = parseFloat(side);


    var area = side * side;

    document.getElementById('square-area').value = area;
}


function rectangleArea() {
    var length = document.getElementById('length').value.trim();
    var breath = document.getElementById('breath').value.trim();

    length = parseFloat(length);
    breath = parseFloat(breath);

    var area = length * breath;

    document.getElementById('rectangle-area').value = area;


}