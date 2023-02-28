let input = document.getElementById('the-input'),
    buttonSpans = document.querySelectorAll('.buttons span'),
    resultSpan = document.querySelector('.results > span');
buttonSpans.forEach((span) => {
    span.addEventListener('click', function (e) {
        if (e.target.classList.contains('check-item')) {
            checkItem();
        }
        if (e.target.classList.contains('add-item')) {
            addItem();
        }
        if (e.target.classList.contains('delete-item')) {
            deleteItem();
        }
        if (e.target.classList.contains('show-item')) {
            showItem();
        }
    })
})
function cheackInput() {
    if (input.value === '') {
        resultSpan.innerHTML = 'Input Cant Be Empty'
    }
}
function checkItem() {
    if (input.value !== '') {
        if (localStorage.getItem(input.value)) {
            resultSpan.innerHTML = `Found Local Storage Item Called <span>${input.value}</span>`
        } else {
                resultSpan.innerHTML = `No Local Storage Item With The Name <span>${input.value}</span>`;
        }
    } else {
        cheackInput()
    }
}
function addItem() {
    if (input.value !== '') {
        localStorage.setItem(input.value, 'test')
            resultSpan.innerHTML = `Local Storage Set Item <span>${input.value}</span> Added`
        input.value = '';
    } else {
        cheackInput()
    }
}
function deleteItem() {
    if (input.value !== '') {
        if (localStorage.getItem(input.value)) {
            localStorage.removeItem(input.value)
            resultSpan.innerHTML = `Local Storage Item Called <span>${input.value}</span> Deleted`
            input.value = '';
        } else {
            resultSpan.innerHTML = `No Local Storage Item With The Name <span>${input.value}</span>`;
        }
    } else {
        cheackInput()
    }
}
function showItem() {
    if (localStorage.length) {
        resultSpan.innerHTML = '';
        console.log(`Found Elements ${localStorage.length}`)
        for (let [key, value] of Object.entries(localStorage)) {
            resultSpan.innerHTML += `<span class="keys">${key}</span>`
        }
    }else {
        resultSpan.innerHTML = 'No Local Storage Items'
    }
}