class ConsultationRequest {
    constructor(name, email, agreement) {
        this.name = name;
        this.email = email;
        this.agreement = agreement;
    }

    print() {
        console.log(
            `Заявка на консультацию\nИмя: ${this.name}\nПочта: ${this.email}`
        );
    }
}

const form = document.getElementById('request-form');
const statusMessage = document.getElementById('request-status');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('request-name').value.trim();
    const email = document.getElementById('request-email').value.trim();
    const agreement = document.getElementById('request-agreement').checked;

    statusMessage.textContent = '';
    statusMessage.classList.remove('request-form__status_error');

    if (!name) {
        showError('Укажите имя.', 'request-name');
        return;
    }

    if (!agreement) {
        showError('Подтвердите согласие на обработку персональных данных.', 'request-agreement');
        return;
    }

    const request = new ConsultationRequest(name, email, agreement);
    request.print();

    statusMessage.textContent = 'Спасибо за заявку!';
    form.reset();
});

function showError(message, fieldId) {
    statusMessage.textContent = message;
    statusMessage.classList.add('request-form__status_error');
    document.getElementById(fieldId).focus();
}
