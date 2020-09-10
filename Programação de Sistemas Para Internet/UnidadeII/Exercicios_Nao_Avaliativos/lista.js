document.getElementById('add').addEventListener('click', add);
document.getElementById('remove').addEventListener('click', del);
document.getElementById('clear').addEventListener('click', clear);
document.getElementById('list').addEventListener('click', list);

function add() {  
    let itemList = document.createElement('li');
    document.querySelector('.list-items').appendChild(itemList);

    let contLi = document.querySelectorAll('li').length;
    contLi -= 1;

    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.className = 'checkBox';
    document.querySelectorAll('li')[contLi].appendChild(checkBox);

    let span = document.createElement('span');
    span.innerText = document.querySelector('#list-item').value;
    document.querySelectorAll('li')[contLi].appendChild(span);
}

function del() {
    let contCheckBox = document.querySelectorAll('.checkBox').length;
    let checkBoxHTMLCollection = document.querySelectorAll('.checkBox');

    for (let index = 0; index < contCheckBox; index += 1){
        if (checkBoxHTMLCollection[index].checked) {
            document.querySelector('.list-items').removeChild(document.querySelectorAll('li')[index]);
        }
    }
}

function clear() {
    let contLi = document.querySelectorAll('li').length;

    for (let index = 0; index < contLi; index += 1){
        document.querySelector('.list-items').removeChild(document.querySelectorAll('li')[0]);
    }
}

function list() {
    
}