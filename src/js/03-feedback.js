// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.
import  throttle from "lodash.throttle";

const LOCALSTORANGE_KEY = 'feedback-form-state';
const feedbackForm = document.querySelector('.feedback-form');

initForm();

feedbackForm.addEventListener('input', evt => {
    evt.preventDefault();
    const formData = new FormData(feedbackForm);
    formData.forEach((value, name) => console.log(value, name));
});

feedbackForm.addEventListener('change', throttle(onThottle, 500));

feedbackForm.addEventListener('submit', evt => {
    localStorage.removeItem(LOCALSTORANGE_KEY);
}
);

function onThottle (evt){
    let persistedFilters = localStorage.getItem(LOCALSTORANGE_KEY);
    persistedFilters = persistedFilters ? JSON.parse(persistedFilters) : {};
    persistedFilters[evt.target.name] =evt.target.value;
    localStorage.setItem(LOCALSTORANGE_KEY, JSON.stringify(persistedFilters));
}

function initForm(){
let persistedFilters = localStorage.getItem(LOCALSTORANGE_KEY);
if(persistedFilters){
    persistedFilters = JSON.parse(persistedFilters);
    Object.entries(persistedFilters).forEach(([name, value]) => {
        feedbackForm.elements[name].value = value;
    });
}
}