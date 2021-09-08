
function calculateAge(birthYear)
{
    return new Date().getFullYear - birthYear;
}


var age = calculateAge(new Date('8/9/1990'));

console.log(age);