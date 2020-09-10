document.getElementById('add').addEventListener('click', add);
document.getElementById('remove').addEventListener('click', del);
document.getElementById('clear').addEventListener('click', clear);
document.getElementById('list').addEventListener('click', list);
document.getElementById('list-item').addEventListener('change', add);

let arrayList = [];

function add() {  
    arrayList.push(document.querySelector('#list-item').value);
    clearInput();
}

function del() {
    let contCheckBox = document.querySelectorAll('.checkBox').length;
    let checkBoxHTMLCollection = document.querySelectorAll('.checkBox');

    for (let index = contCheckBox-1; index >= 0; index -= 1){
        if (checkBoxHTMLCollection[index].checked) {
            arrayList.splice(index, 1);
        }
    }

    clearWindow();
    list();
}

function clearWindow() {
    let contLi = document.querySelectorAll('li').length;

    for (let index = contLi-1; index >= 0; index -= 1) {
        document.querySelector('.list-items').removeChild(document.querySelectorAll('li')[index]);
    }   
}

function clearInput () {
    document.querySelector('#list-item').value = "";
}

function clear() {

    arrayList = [];
    list();
    
}

function list() {

    clearWindow();

    arrayList.sort();

    for (let value in arrayList) {
        
        let itemList = document.createElement('li');
        document.querySelector('.list-items').appendChild(itemList);

        let contLi = document.querySelectorAll('li').length;
        contLi -= 1;

        let checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.className = 'checkBox';
        document.querySelectorAll('li')[contLi].appendChild(checkBox);

        let span = document.createElement('span');
        span.innerText = arrayList[value];
        document.querySelectorAll('li')[contLi].appendChild(span);
    }
}