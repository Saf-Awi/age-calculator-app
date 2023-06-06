// INPUTS 
const dayInp = document.getElementById('day');
const monthInp = document.getElementById('month');
const yearInp = document.getElementById('year');
const submitBtn = document.querySelector('.submit');
const dayLabel = document.getElementById('day-label');
const monthLabel = document.getElementById('month-label');
const yearLabel = document.getElementById('year-label');


// OUTPUTS
const dayOut = document.getElementById('dd-span');
const monthOut = document.getElementById('mm-span');
const yearOut = document.getElementById('yy-span');

// ERROR
let isValid = false;
const dayError = document.querySelector('.error-day');
const monthError = document.querySelector('.error-month');
const yearError = document.querySelector('.error-year');


// FUNCTIONS 
submitBtn.addEventListener('click', dateCalculator)

dayInp.addEventListener('input', (e) => {
    if (+dayInp.value > 31) {
        dayError.textContent = "Must be a valid date";
        dayInp.style.borderColor = 'var(--primary-clr-Light-red)';
        dayLabel.style.color = 'var(--primary-clr-Light-red)';
        isValid = false; 
        return;
    } else {
        isValid = true;
        dayError.textContent = "";
        dayInp.style.borderColor = 'var(--neutral-clr-Light-grey)';
        dayLabel.style.color = 'var(--neutral-clr-Smokey-grey)';
        

    }

    if(+dayInp.value === 0) {
        isValid = false;
        dayError.textContent = "This field is required";
        dayInp.style.borderColor = 'var(--primary-clr-Light-red)';
        dayLabel.style.color = 'var(--primary-clr-Light-red)';
        return;

    } else {
        isValid = true;
        dayError.textContent = "";
        dayInp.style.borderColor = 'var(--neutral-clr-Light-grey)';
        dayLabel.style.color = 'var(--neutral-clr-Smokey-grey)';

    }
})

monthInp.addEventListener('input', (e) => {
    if (+monthInp.value > 12) {
        monthError.textContent = "Must be a valid month";
        monthInp.style.borderColor = 'var(--primary-clr-Light-red)';
        monthLabel.style.color = 'var(--primary-clr-Light-red)';
        isValid = false;
        return;
    } else {
        isValid = true;
        monthError.textContent = "";
        monthInp.style.borderColor = 'var(--neutral-clr-Light-grey)';
        monthLabel.style.color = 'var(--neutral-clr-Smokey-grey)';

    }

    if (+monthInp.value === 0) {
        monthError.textContent = "This field is required";
        monthInp.style.borderColor = 'var(--primary-clr-Light-red)';
        monthLabel.style.color = 'var(--primary-clr-Light-red)';
        isValid = false;
        return;
    } else {
        isValid = true;
        monthError.textContent = "";
        monthInp.style.borderColor = 'var(--neutral-clr-Light-grey)';
        monthLabel.style.color = 'var(--neutral-clr-Smokey-grey)';

    }
})

// current year

const currentYear = new Date().getFullYear();

yearInp.addEventListener('input', (e) => {
    if (+yearInp.value > currentYear) {
        yearError.textContent = "Must be a valid year";
        yearInp.style.borderColor = 'var(--primary-clr-Light-red)';
        yearLabel.style.color = 'var(--primary-clr-Light-red)';
        isValid = false;
        return;
    } else {
        isValid = true;
        yearError.textContent = "";
        yearInp.style.borderColor = 'var(--neutral-clr-Light-grey)';
        yearLabel.style.color = 'var(--neutral-clr-Smokey-grey)';


    }

    if (+yearInp.value === 0) {
        yearError.textContent = "This field is required";
        yearInp.style.borderColor = 'var(--primary-clr-Light-red)';
        yearLabel.style.color = 'var(--primary-clr-Light-red)';
        isValid = false;
        return;
    } else {
        isValid = true;
        yearError.textContent = "";
        yearInp.style.borderColor = 'var(--neutral-clr-Light-grey)';
        yearLabel.style.color = 'var(--neutral-clr-Smokey-grey)';


    }
})

function dateCalculator(event) {

    event.preventDefault();
    
    if(isValid) {
        let birthDate = `${monthInp.value}/${dayInp.value}/${yearInp.value}`;
        let birthDateObj = new Date(birthDate);
        let diffInMill = Date.now() - birthDateObj;
        let ageInDate = new Date(diffInMill);
        let ageInMonths = ageInDate.getUTCMonth(); 
        let ageInYears = ageInDate.getUTCFullYear() - 1970;
        let ageInDays = ageInDate.getUTCDate() - 1; 
        dayOut.textContent = ageInDays;
        monthOut.textContent = ageInMonths;
        yearOut.textContent = ageInYears;
    } else {
        alert('error');
    }
}

