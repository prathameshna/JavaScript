// Arrays

let cars = ['BMW', 'Volvo', 'Honda', 'Skoda', 'Hyundai'];

document.querySelector('.array').textContent = ` Cars : {${cars}}`;

$("#closeButton").click(function () {
    $('#myModal').modal('hide');
});


// Array Methods
document.getElementById('length').addEventListener('click', function () {
    document.querySelector('.modal-title').textContent = `Length of array`;
    document.querySelector('.modal-body').textContent = `The length of the array is ${cars.length}.`;
    $('#myModal').modal('show');
});

document.getElementById('push').addEventListener('click', function () {
    cars.push('Toyota');
    document.querySelector('.array').textContent = ` Cars : {${cars}}`;
});

document.getElementById('pop').addEventListener('click', function () {
    cars.pop();
    document.querySelector('.array').textContent = ` Cars : {${cars}}`;
});

document.getElementById('unshift').addEventListener('click', function () {
    cars.unshift('Mercedes');
    document.querySelector('.array').textContent = ` Cars : {${cars}}`;
});

document.getElementById('shift').addEventListener('click', function () {
    cars.shift();
    document.querySelector('.array').textContent = ` Cars : {${cars}}`;
});

document.getElementById('sort').addEventListener('click', function () {
    cars.sort();
    document.querySelector('.array').textContent = ` Cars : {${cars}}`;
});

document.getElementById('slice').addEventListener('click', function () {
    document.querySelector('.modal-title').textContent = `Slice Method`;
    document.querySelector('.modal-body').textContent = `The slice array is Cars: {${cars.slice(1, 4)}}.`;
    $('#myModal').modal('show');
});

document.getElementById('splice').addEventListener('click', function () {
    document.querySelector('.modal-title').textContent = `Splice Method`;
    document.querySelector('.modal-body').textContent = `The splice array is Cars: {${cars.splice(4)}}.`;
    document.querySelector('.array').textContent = ` Cars : {${cars}}`;
    $('#myModal').modal('show');
});

document.getElementById('reverse').addEventListener('click', function () {
    cars.reverse();
    document.querySelector('.array').textContent = ` Cars : {${cars}}`;
});

document.getElementById('join').addEventListener('click', function () {
    document.querySelector('.modal-title').textContent = `Join Method`;
    document.querySelector('.modal-body').textContent = `Cars: ${cars.join(' - ')}`;
    $('#myModal').modal('show');
});

document.getElementById('toString').addEventListener('click', function () {
    document.querySelector('.modal-title').textContent = `to String Method`;
    document.querySelector('.modal-body').textContent = `Cars: ${cars.toString()}`;
    $('#myModal').modal('show');
});

// Strings 
const worldString = "Hello, world";

document.querySelector('.string').textContent = `worldString : "${worldString}"`;

// Strings Methods
document.getElementById('strLength').addEventListener('click', function () {
    document.querySelector('.modal-title').textContent = `Length Method`;
    document.querySelector('.modal-body').textContent = `The worldString length is ${worldString.length}.`;
    $('#myModal').modal('show');
});

document.getElementById('indexOf').addEventListener('click', function () {
    document.querySelector('.modal-title').textContent = `IndexOf Method`;
    document.querySelector('.modal-body').textContent = `The index of 'o' is ${worldString.indexOf('o')}.`;
    $('#myModal').modal('show');
});

document.getElementById('lastIndexOf').addEventListener('click', function () {
    document.querySelector('.modal-title').textContent = `IndexOf Method`;
    document.querySelector('.modal-body').textContent = `The index of 'o' is ${worldString.lastIndexOf('o')}.`;
    $('#myModal').modal('show');
});

document.getElementById('toLowerCase').addEventListener('click', function () {
    document.querySelector('.modal-title').textContent = `Lower Case Method`;
    document.querySelector('.modal-body').textContent = `${worldString.toLowerCase()}.`;
    $('#myModal').modal('show');
});

document.getElementById('toUpperCase').addEventListener('click', function () {
    document.querySelector('.modal-title').textContent = `Upper Case Method`;
    document.querySelector('.modal-body').textContent = `${worldString.toUpperCase()}.`;
    $('#myModal').modal('show');
});

document.getElementById('charAt').addEventListener('click', function () {
    document.querySelector('.modal-title').textContent = `charAt Method`;
    document.querySelector('.modal-body').textContent = `Character at 7th position is : "${worldString.charAt(7)}".`;
    $('#myModal').modal('show');
});

document.getElementById('replace').addEventListener('click', function () {
    document.querySelector('.modal-title').textContent = `Replace Method`;
    document.querySelector('.modal-body').textContent = `Replace ', ' with '_' : "${worldString.replace(', ', '_')}".`;
    $('#myModal').modal('show');
});

document.getElementById('replaceAll').addEventListener('click', function () {
    document.querySelector('.modal-title').textContent = `Replace All Method`;
    document.querySelector('.modal-body').textContent = `Replace all 'o' with 'O' : "${worldString.replaceAll('o', 'O')}".`;
    $('#myModal').modal('show');
});

document.getElementById('strSlice').addEventListener('click', function () {
    document.querySelector('.modal-title').textContent = `Slice Method`;
    document.querySelector('.modal-body').textContent = `"${worldString.slice(2,11)}".`;
    $('#myModal').modal('show');
});

document.getElementById('includes').addEventListener('click', function () {
    document.querySelector('.modal-title').textContent = `Includes Method`;
    document.querySelector('.modal-body').textContent = `"${worldString.includes('world')}".`;
    $('#myModal').modal('show');
});

document.getElementById('startsWith').addEventListener('click', function () {
    document.querySelector('.modal-title').textContent = `startsWith Method`;
    document.querySelector('.modal-body').textContent = `"${worldString.startsWith('Hel')}".`;
    $('#myModal').modal('show');
});

document.getElementById('split').addEventListener('click', function () {
    const [firstWorld, lastworld] = worldString.split(', ');
    document.querySelector('.modal-title').textContent = `Split Method`;
    document.querySelector('.modal-body').textContent = `${firstWorld} everyone, the ${lastworld} is so beautiful :)`;
    console.log(worldString.split(','));
    $('#myModal').modal('show');
});

document.getElementById('padStart').addEventListener('click', function () {
    document.querySelector('.modal-title').textContent = `padStart Method`;
    document.querySelector('.modal-body').textContent = `${worldString.padStart(20, '*')}`;
    $('#myModal').modal('show');
});

document.getElementById('padEnd').addEventListener('click', function () {
    document.querySelector('.modal-title').textContent = `padEnd Method`;
    document.querySelector('.modal-body').textContent = `${worldString.padEnd(20, '*')}`;
    $('#myModal').modal('show');
});

document.getElementById('trim').addEventListener('click', function () {
    document.querySelector('.modal-title').textContent = `Trim Method`;
    document.querySelector('.modal-body').textContent = `${worldString.trim()}`;
    console.log(worldString.trim())
    $('#myModal').modal('show');
});