let dataBase = {};

function initCount(){
    let fieldDate = document.querySelector('#data')
    
    let year = fieldDate.value.split('-')[0];
    let month = fieldDate.value.split('-')[1];
    let day = fieldDate.value.split('-')[2];

    dataBase.userDay = day;
    dataBase.userMonth = month;
    dataBase.userYear = year;
    localStorage.setItem('dataBase', JSON.stringify(dataBase));
    location = 'contador.html';
}

