const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd() {
    // 1. 사용자가 입력한 텍스트를 받아옴.
    const text = input.value;

    if(text === '') {
        input.focus();
        return;
    }
    // 2. 새로운 아이템을 만듬 (텍스트 + 삭제 버튼)
    const item = createItem(text);
    // 3. items 컨테이너 안에 새로 만든 아이템을 추가한다.
    items.appendChild(item);
    // 4. 새로 추가된 아이템으로 스크롤링
    item.scrollIntoView({ block: 'center'});
    // 5. 인풋을 초기화 한다.
    input.value = '';
    input.focus();
}

let id = 0; // UUID
function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');
        itemRow.innerHTML = `

        <div class="item data-id=${id}">
            <span class="item__name">${text}</span>
            <button class="item__delete" data-id=${id}>
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
        <div class="item__divider"></div>
        `;
        id++;
    return itemRow;
}
addBtn.addEventListener('click', () => {
    onAdd();
})

input.addEventListener('keypress', event => {
    if(event.key === 'Enter') {
        onAdd();
    }
})

items.addEventListener('click', event => {
    if(event.target.nodeName === 'I') {
        console.log('he');
    }

})