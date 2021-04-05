const plan = document.querySelectorAll('.real-radio');
const licensePlan = document.querySelector('.license-plan');
const planValue = document.querySelectorAll('.real-radio');
const dataValue = document.querySelectorAll('[data-value]');
const numberOfLicenses = document.querySelector('.select-number');
const totalPrice = document.querySelector('.total');
let c = 13;

for (let i = 0; i < plan.length; i++) {

    plan[i].addEventListener('click', function() {

        if (!(this.parentNode.classList.contains('active'))) {

            for(j = 0; j < plan.length; j++) {
                plan[j].parentNode.classList.remove('active');

            }

            for (d = 0; d < planValue.length; d++) {

                if (planValue[d].checked) licensePlan.innerHTML = planValue[d].value;
                totalPrice.textContent = this.dataset.value;
                let c = 13;
                c = this.dataset.value;

                numberOfLicenses.addEventListener('input', () => {

                    let a = numberOfLicenses.value * c;

                    totalPrice.textContent = a;
        
                    })
                
            }

            this.parentNode.classList.add('active');
            
        }
    })
    
}
