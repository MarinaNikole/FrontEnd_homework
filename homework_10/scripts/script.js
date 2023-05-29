// Создать в html форму с тремя инпутами (имя, фамилия, возраст). Написать скрипт, который при отправке формы выводит собранные данные в консоль.


//Доработать процесс таким образом, чтобы при отправке формы данные из нее добавлялись в массив users в виде объекта.


//Реализовать функцию rerender. Эта функция очищает контейнер с карточками и создает множество карточек с пользователями из массива. Настроить rerender при добавлении нового пользователя.


// Доработать rerender таким образом, чтобы при двойном клике по карточке из массива удалялся пользователь по id и вызывался rerender.


let users = [];
const formElem = document.querySelector('#form');
const container = document.querySelector('#container');

formElem.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const user = Object.fromEntries(formData.entries());
    console.log(user);
    users.push(user);
    rerender();
});

function rerender() {
    container.innerHTML = '';
    users.forEach((user, index) => {
        const card = document.createElement('div');
        card.textContent = `${user.firstName} ${user.lastName}, ${user.age}`;
        card.addEventListener('dblclick', () => {
            users.splice(index, 1);
            rerender();
        });
        container.appendChild(card);
    });
}