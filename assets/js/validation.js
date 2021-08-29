const inputNome = document.querySelector(".name");
const inputMail = document.querySelector(".email");
const inputSubject = document.querySelector(".subject");
const inputMessage = document.querySelector(".message");

function nameValidation(event) {
    if (inputNome.value.length === 0) {
        inputNome.placeholder = 'Name is mandatory!';
        return;
    } else {
        inputNome.placeholder = '';
    }
}

function mailValidation(event) {
    const correctedMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (inputMail.value.length === 0) {
        inputMail.placeholder = 'Email is mandatory!';
        return;
    }

    if (!correctedMail.test(inputMail.value)) {
        inputMail.value = 'The email is not correct!';
        return;
    }
}

function subjectValidation(event) {
    if (inputSubject.value.length === 0) {
        inputSubject.placeholder = 'Subject is mandatory!';
        return;
    } else {
        inputSubject.placeholder = '';
    }
}

function messageValidation(event) {
    if (inputMessage.value.length === 0) {
        inputMessage.placeholder = 'Message is mandatory!';
        return;
    } else {
        inputMessage.placeholder = '';
    }
}

inputNome.addEventListener('focusout', nameValidation);
inputMail.addEventListener('focusout', mailValidation);
inputSubject.addEventListener('focusout', subjectValidation);
inputMessage.addEventListener('focusout', messageValidation);