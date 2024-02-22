// Необходимо написать скрипт, который выводит карточки с информацией о товаре.

// У карточек с товаром должен быть класс, который позволяет их стилизовать
// Если товар кончился (count равен 0) то нужно вместо кол-ва вывести фразу "Товар кончился"
// Добавьте кнопку к каждой карточке при нажатии на которую цвет заднего фона карточки меняется на случайный.


const products = [
    { id: 1, title: 'Футбольный мяч', price: 25.99, count: 15 },
    { id: 2, title: 'Наушники Bluetooth', price: 59.99, count: 20 },
    { id: 3, title: 'Ноутбук Dell Inspiron', price: 899.99, count: 0 },
    { id: 4, title: 'Смартфон Samsung Galaxy S21', price: 799.99, count: 10 },
    { id: 5, title: 'Кофеварка Nespresso', price: 149.99, count: 8 },
    { id: 6, title: 'Книга "Мастер и Маргарита"', price: 12.99, count: 30 },
    { id: 7, title: 'Фотоаппарат Canon EOS R5', price: 3499.99, count: 0 },
    { id: 8, title: 'Спортивные кроссовки Nike Air Max', price: 129.99, count: 12 },
    { id: 9, title: 'Умный термостат Nest', price: 199.99, count: 0 },
    { id: 10, title: 'Пылесос Dyson V11', price: 499.99, count: 6 }
];

const productCardsContainer = document.getElementById('productCards');

products.forEach(product => {
    const card = createProductCard(product);
    productCardsContainer.appendChild(card);
});

function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');
    if (product.count === 0) {
        card.textContent = 'Товар кончился';
    } else {
        card.innerHTML = `
            <h3>${product.title}</h3>
            <p>Цена: ${product.price.toFixed(2)} $</p>
            <p>Осталось: ${product.count}</p>
        `;
    }
    card.addEventListener('click', () => {
        card.style.backgroundColor = getRandomColor();
    });
    return card;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}