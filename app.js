var magician = ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore'];
function make_great(magicianArry) {
    for (var i = 0; i < magicianArry.length; i++) {
        magician[i] = 'the Great ' + magicianArry[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(function (element) {
        console.log(element);
    });
}
make_great(magician);
show_magicians(magician);
