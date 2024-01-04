const $site = document.querySelector('#main');

const phones = ['Iphone 15', 'Xiaomi 12X', 'Samsung Galaxy', 'Xiaomi Redmi 12', 'Honor X9a', 'OnePlus Nord 3'];
const data = {'Iphone 15': 0, 'Xiaomi 12X': 0, 'Samsung Galaxy': 0, 'Xiaomi Redmi 12': 0, 'Honor X9a': 0, 'OnePlus Nord 3': 0};

function createDiv(name, id) {
    return `
    <div class="block">
        <text class="name">${name}</text><br>
        <img src="images/${id + 1}.png" class="image" alt=""></img><br>
        <button class="plus">Добавить</button>
        <text class="counter">0</text>
        <button class="minus">Удалить</button>
    </div>`
}

phones.forEach((name, id) => {
    $site.insertAdjacentHTML('beforeend', createDiv(name, id));
});

const $blocks = document.querySelectorAll('.block');

$blocks.forEach(block => {
    let counter = block.querySelector('.counter');
    let name = block.querySelector('.name').innerHTML;
    
    block.querySelector('.plus').addEventListener('click', () => {
        let count = Number(counter.textContent) + 1;
        counter.textContent = count;

        data[name] = count;
        console.log(data);
    });

    block.querySelector('.minus').addEventListener('click', () => {
        let count = (Number(counter.textContent) || 1) - 1;
        counter.textContent = count;

        data[name] = count;
        console.log(data);
    });
});