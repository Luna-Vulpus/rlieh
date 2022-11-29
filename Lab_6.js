function setRussian() {
    let name = document.getElementById('student');
    name.innerHTML = 'Никита Карпунин';
    let footer = document.getElementById('footer');
    footer.innerHTML = 'Факультет Бизнеса, ФБИ-03, 3 курс, 2022';

    document.getElementById('your-name').innerHTML = 'Ваше имя';
    document.getElementById('input-name').placeholder = 'Введите имя';

    document.getElementById('your-surname').innerHTML = 'Ваша фамилия';
    document.getElementById('input-surname').placeholder = 'Введите фамилию';

    document.getElementById('your-age').innerHTML = 'Ваш возвраст';
    document.getElementById('input-age').placeholder = 'Введите возвраст';
}
function setEnglish() {
    let name = document.getElementById('student');
    name.innerHTML = 'Nikita Karpunin';
    let footer = document.getElementById('footer');
    footer.innerHTML = 'Faculty of Business, FBI-03, 3rd year, 2022';

    document.getElementById('your-name').innerHTML = 'Your name';
    document.getElementById('input-name').placeholder = 'Enter your name';

    document.getElementById('your-surname').innerHTML = 'Your surname';
    document.getElementById('input-surname').placeholder = 'Enter your surname';

    document.getElementById('your-age').innerHTML = 'Your age';
    document.getElementById('input-age').placeholder = 'Enter your age';
}