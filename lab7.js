function showAlert() {
    let userName = document.getElementById('input-name').value;
    let userSurname = document.getElementById('input-surname').value; 
    let userAge = document.getElementById('input-age').value; 
    let userSex = document.getElementById('your-sex').value; 
    if(userAge <= 17) {
        greeting = 'Здравствуй ';
        if(userSex == 'female') {
            greeting = 'девочка ';
       }
        else {
            greeting = 'малчик ';
       }
   }
    else {
        greeting = 'Здравствуйте ';
        if(userSex == 'female') {
            greeting = 'госпожа ';
       }
        else {
            greeting = 'господин ';
       }
   }
   alert(greeting + userName + ' ' + ' ' + userSurname + '\n' + 'Ваш возвраст ' + userAge);
 
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let color = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById('user-data').style.backgroundColor = color;
}