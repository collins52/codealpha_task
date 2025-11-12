const date = new Date() // Get date object
let currentYear = date.getFullYear()
let currentMonth = date.getMonth()
let currentMonthDate = date.getDate()

const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'] // Months array

const birthYear = 2010;
let birthDate = 19;
const month = 'july'
const birthMonth = month.toLowerCase()
const $birthMonth = months.indexOf(birthMonth)
let count = 0

for(let i = $birthMonth; ;i = (i + 1) % months.length){

    if($birthMonth === currentMonth){
        if(birthDate == currentMonthDate){
            console.log(`You are: ${currentYear -  birthYear} yrs, ${$birthMonth - currentMonth} and ${birthDate - currentMonthDate} days old`)
        }else if(currentMonthDate > birthDate){
            console.log(`You are: ${currentYear -  birthYear} yrs, ${$birthMonth - currentMonth} and ${currentMonthDate - birthDate} days old`)
        }else if(currentMonthDate < birthDate){
            console.log(`You are: ${(currentYear -  birthYear) - 1} yrs, 11 months and ${currentMonthDate - birthDate} days old`)
        }
        break
    } // if currently we are in your birthMonth Calculate age

    else if($birthMonth > currentMonth){
        if(months[i] === months[currentMonth]){
            console.log(`${(currentYear -  birthYear) - 1} yrs old, ${count - 1} months, ${currentMonthDate} days old`)
            break
        }else{
            if(count === 15){
                console.log(i)
                break
            }
        }
        
    }
    
    else if($birthMonth < currentMonth){
        console.log(`count is: ${count}`)
        if(i === currentMonth){
            console.log(`${currentYear - birthYear} yrs, ${count - 1} months, ${currentMonthDate} days old`)
            break
        }else{
            if(count === 15){
                break
            }
        }
    }else{
        console.log('Not still working')
        break
    }
    
    count++
}