const formCard = document.querySelector('.register-form')
const formSuccess = document.querySelector('.register-success')
const form = document.getElementById('form')
const emailField = form.querySelector('#email')
const dismissBtn = document.getElementById('dismiss-btn')

function validateEmail(email) {
    if (!email) return 'Email not provided'

    const isValidEmail = /^\S+@\S+$/g
    if (!isValidEmail.test(email)) return 'Please provide a valid email'
    return '';
}

function handleSubmit(e) {
    e.preventDefault()

    //STEP1 : 
    //METHOD 1 : USING AN OBJECT FOR DATA
    // const data = {};
    // const fields = e.target.querySelectorAll("input") //ADD OTHER ELEMENTS FOR COMPLEX FORMS

    // for (const field of fields) {
    //     data[field.name] = field.value
    // }

    // console.log(data)

    //METHOD 2 : USING FORMDATA
    const formData = new FormData(e.target);
    const { email } = Object.fromEntries(formData)

    console.log(email)

    //DISPLAY ERROR MESSAGE
    const errorMessage = validateEmail(email)

    if (errorMessage && !document.querySelector('.error-message')) {
        const errorNode = document.createElement('div')
        errorNode.textContent = errorMessage
        errorNode.classList.add('error-message')
        
        form.insertBefore(errorNode, form.childNodes[2])
        
        emailField.classList.add('error')
    }

    if (errorMessage.length == 0) {
        formCard.remove()
        formSuccess.classList.remove('hidden')
        formSuccess.querySelector('p').textContent = `A confirmation email has been sent to ${email}. 
      Please open it and click the button inside to confirm your subscription.`
            
    }
}

// CLEAR THE FIELD FROM ERROR MESSAGES
function clearInput() {
    const errorNode = document.querySelector('.error-message')
    errorNode.remove()
    emailField.classList.remove('error')
}
// REFRESH PAGE
function refreshPage() {
    location.reload()
}

form.addEventListener('submit', handleSubmit)
emailField.addEventListener('focus', clearInput)
dismissBtn.addEventListener('click', refreshPage)