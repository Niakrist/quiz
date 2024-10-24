# QuizApp

andrei
andrei_58685

# DEBUG 1

## nikosvolkov

### Исправил

- Поправить font-weight
- На странице результата после "6" лишний пробел
- Варианты ответа лучше делать через <input type='radio'>
- Папки с компонентами принято называть с большой буквы, так же, как и компоненты
- Фавиконку Вита лучше убрать мне кажется, она не относится к этому проекту
- Бэкграунд лучше сделать через linear-gradient

## grechka6286

### Исправил

- При высоте окна меньше высоты body контент обрезается сверху
- Поправить font-weight
- Бэкграунд лучше сделать через linear-gradient
- Лучше заменить s на styles. Код будет читаться совсем чуть-чуть, но лучше
- Сама папка с компонентом тоже должна быть с большой буквы
- Компонент <Container/> дублируется на каждой странице, его можно вынести в App.jsx, или вообще избавиться от него, передав функционал <main>
- Чтобы не было вот таких штук "../../../../../../" можно настроить алиасы и использовать @

### Нюансы

- Input'у в счетчике лучше задать type=number, таким образом в него нельзя будет написать буквы

* Потом отказался от type=number и сделал через type=text + валидацию цифр через регулярное выражение, так как в type=number можно было вставлять цифры типа e24

# DEBUG 2 часть 1

## dimrux

### Исправил

- Не возможно запустить проект из-за кривых импортов

* По DEBUG 1 исправлял регистры папок, но оказалось, что git не различает регистры для папок из-за этого, папки остались в нижнем регистре, а в самом проекте импорты с заглавной букву

- Не правильно настроен vite config с алиасами
- Вопросы формируются не рандомно из массива (всегда один и тот же)
- Флаг в вопросе не имеет скругления и размер не тот
- Использовать useContext, чтобы не пробрасывать пропсы с самого верха
- figure figcaption хорошо подходят по семантике для card

### Еще не реализовал

- В макете при клике на инпут пустая строка

## mihailchapurin

### Исправил

- Пропущены скругления у фотографий
- При сужении высоты контента футер и логотип соприкасаются с краем приложения
- В чек-листе есть требование о едином регистре для компонентов, сейчас в одной папке можно встретить компоненты начинающиеся по названию как с маленькой, так и с большой буквы, учитывай при исправлении, что гит не видит разницу по регистру, поэтому тебе придется сначала скопировать содержимое файла, затем создать новый и вставить контент туда, если просто исправишь первую букву, это не отправиться в репозиторий и у проверяющего будет забагованная версия при запуске
- Использовать useContext, чтобы не пробрасывать пропсы с самого верха
- Функции формирования и сортировки вопросов можно вынести в отдельную утилиты
- В App сейчас слишком много логики
- При формировании вопросов не учитывается предыдущие правильные ответы
- Доработать логику формирования вопросов, ответы не должны повторяться
- figure figcaption хорошо подходят по семантике для Question

# DEBUG 2 часть 2

## vvaasd

### Исправил

- При нажатии на Enter на странице вопросов происходит переход к третьей странице, даже если не выбран ответ
- Флаг можно выделить и скопировать ее ссылку, содержащую название флага, поэтому картинке лучше отключить user-select
- В index.html по желанию можно поменять title
- UI-компоненты, например Button можно сделать глупее, передавая им поведение через пропсы, а не дергать из контекста
- Настроить алиасы (alias)
- Реэкспорты

## vendrl1k

### Исправил

- В поле для counter можно ввести некоторые математические символы, можно добавить валидацию через регулярку
- В var.css можно добавить border-radius: 10px
- Используешь несколько вариантов обращения к контексту: useQuiz() или useContext(QuizContext)
- UI-компоненты, например Button можно сделать глупее, передавая им поведение через пропсы, а не дергать из контекста
- Логику keydown можно вынести в отдельный хук useKeyPress
- через Enter можно кликнуть по кнопке даже если ответ не выбран

# DEBUG 3

## grechka6286

### Исправил

- Счётчик неверно ограничивает по количеству вопросов, если удалить несколько вопросов из json файла, то счетчик всё равно даёт ввести 30
- На странице последнего вопроса, после проверки, в главной кнопке должно быть написано "Результат"
- На кнопке крестика отсутствует hover эффект
- После проверки, на кнопках вариантов ответов всё также присутствует hover
- Лучше не вставлять svg напрямую, а через svg sprite
- Подобный синтаксис в RadioButton ... + " " + ... лучше заменить на `${...} ${...}`
- RadioButton возвращает <li>, что противоречит компонентному подходу реакта. Радио кнопка должна возвращать радио кнопку, а не элемент списка.
- Некоторые компоненты можно "мемоизировать", например Footer. Его содержимое вообще не меняется, но рендер происходит каждый клик.
- currentQuestion гораздо красивее и читабильнее curentQuest
- удалить не используемый импорт в Card.jsx и комментарии в Answer.jsx.
- useQuiz можно вызывать непосредственно в RadioButton, а не прокидывать check, setCheck пропсом через Answer.
- в getAnswerClass сейчас двойная проверка на добавление класса answerSuccess

### Пока оставил как есть

- Для компонента Answer, отлично подойдет <ol> вместо <ul>

## mihailchapurin

- если ввести в инпут 1 или 30, то копка не станет disabled, только по клику на кнопку
- После проверки, на кнопках вариантов ответов всё также присутствует hover
- При достижении последней страницы вместо кнопки дальше, должна быть кнопка "Результат", сейчас при нажатии на ответить на финальном вопросе стразу переход на страницу результата
- Сейчас если мы отвечаем правильно, ответ убирается из возможных вариантов ответа, но есть один нюанс, если мы отвечаем неправильно, то мы подсвечиваем правильный вариант, и посколько пользователь теперь знает как например выглядит флаг Кении, даже если он ответил на этот вопрос неверно, не имеет смысл пихать этот вариант ответа дальше, так как приложение дало спойлер
- Алиасы
- Пример как грамотно сделать компонент вопроса https://doka.guide/html/figure-figcaption/
- написать аналог classnames (но не уверен, что вышло то что подразумевалось под рекомендацией)
