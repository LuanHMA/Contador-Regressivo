let dataBase = {};

function initCount(){
    let fieldDate = document.querySelector('#data')
    let date = new Date();
    let year = fieldDate.value.split('-')[0];
    let month = fieldDate.value.split('-')[1];
    let day = fieldDate.value.split('-')[2];
    
    if(year > date.getFullYear() || year == '' || month =='' || day == ''){
        alert('Preencha os campos corretamente!')
    }
    else{
        dataBase.userDay = day;
        dataBase.userMonth = month;
        dataBase.userYear = year;
        localStorage.setItem('dataBase', JSON.stringify(dataBase));
        location = 'contador.html';
    }
    
    
}

