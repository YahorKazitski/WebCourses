var person = prompt("Please enter your name", "Example 1");
var isNum = /\d/.test( person);/*person.match('/\d+/');*/
if ( isNum != false ){
    var person_letters = person.split('');
    person_letters = person_letters.reverse();
    person = person_letters.join("");
}
else{
    person = person.toUpperCase( );
}
document.getElementById('person').innerHTML = person;
