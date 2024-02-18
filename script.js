// Написать цикл, который создает множество параграфов с 
// каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50).
//  Добавить созданные параграфы в div с классом numbers.



// const numbersContainer = document.querySelector('.numbers');

// for (let i = 100; i >= 50; i -= 10) {
//     const paragraph = document.createElement('p');
//     paragraph.innerText = i;
//     numbersContainer.appendChild(paragraph);
// }



// // Написать цикл, который проходится по массиву строк,
// //  для каждой строки создает параграф и добавляет его в div с 
// классом strings_container.
// //   Строки взять произвольные.


// const strings = ["About you", "My job", "My hobby"];

// const stringsContainer = document.querySelector('.strings_container');
// for (let i = 0; i < strings.length; i++) {
//     const paragraph = document.createElement('p');
//     paragraph.innerText = strings[i];
//     stringsContainer.appendChild(paragraph);
// }


// Написать цикл, который проходится по массиву с объектами -
//  у объектов свойства first_name, last_name и  age (данные взять произвольные) -
//   и создает карточки только для совершеннолетних пользователей. 
//   Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. 
//   Добавить все карточки в div с классом users_container.


  let users = [
        {
            firstname: 'Emma',
            lastname: 'Smith',
            age: 29   
        },
        {
            firstname: 'Maikl',
            lastname: 'Williams',
            age: 25  
        },
        {
            firstname: 'Clara',
            lastname: 'Jones',
            age: 15 
        },
        {
            firstname: 'Tom',
            lastname: 'Johnson',
            age: 32  
        },
        {
            firstname: 'Ben',
            lastname: 'Harris',
            age: 38  
        }
    ]
    
    function createCards(object){
        let card = document.createElement('div');
        card.innerText = `${object.firstname}, ${object.lastname}. ${object.age}`
        document.querySelector('.users_container').appendChild(card); 
    }
    for(let i=0; i<users.length; i++){
        if(users[i].age > 18){
            createCards(users[i]);
        }
    }
    
    