age = prompt('Ваш возраст?', []);
function verification(age) {
    let age_2 = 18
    let age_3 = 60
    if (age > 0) {
        if (age < age_2) {
            return("You don\’t have access cause your age is " + age + " It\’s less then")
        } else if (age >= age_2 && age < age_3) {
            return("Welcome !")
        } else if (age > age_3) {
            return("Keep calm and look Culture channel")
        }
    } else return("Technical work")
    }
    console.log(verification(age))
    