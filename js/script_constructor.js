let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

let cartCount = cartItems.length;
document.getElementById("total-quantity").textContent = cartCount;


window.addEventListener('load', function() {
    checkWindowSize();
});

window.addEventListener('resize', function() {
    checkWindowSize();
});

function checkWindowSize() {
    var windowWidth = window.innerWidth;

    if (windowWidth < 1000) {
        document.querySelector("main .list-wrapper").style.display = 'none';
        document.querySelector("main .constructor-wrapper").style.display = 'none';
        document.querySelector("main .error-message").style.display = 'flex';
        document.querySelector("main .finals").style.display = 'none';


    } else {
        document.querySelector("main .list-wrapper").style.display = 'block';
        document.querySelector("main .constructor-wrapper").style.display = 'block';
        document.querySelector("main .error-message").style.display = 'none';
        document.querySelector("main .finals").style.display = 'block';
    }
}


let CPUs = [{id: 'cpu1', src: 'images/cpu/cpu1.png', alt: 'image'},
    {id: 'cpu2', src: 'images/cpu/cpu2.png', alt: 'image'}];
let GPUs = [{id: 'gpu1', src: 'images/gpu/gpu1.png', alt: 'image'},
    {id: 'gpu2', src: 'images/gpu/gpu2.png', alt: 'image'}];
let HDDs = [{id: 'hdd1', src: 'images/hdd/hdd1.png', alt: 'image'},
    {id: 'hdd2', src: 'images/hdd/hdd2.png', alt: 'image'},
    {id: 'hdd3', src: 'images/hdd/hdd3.png', alt: 'image'},
    {id: 'hdd4', src: 'images/hdd/hdd4.png', alt: 'image'}]
let SSDs = [{id: 'ssd1', src: 'images/ssd/ssd1.png', alt: 'image'},
    {id: 'ssd2', src: 'images/ssd/ssd2.png', alt: 'image'},
    {id: 'ssd3', src: 'images/ssd/ssd3.png', alt: 'image'},
    {id: 'ssd4', src: 'images/ssd/ssd4.png', alt: 'image'}]
let PSUs = [{id: 'power1', src: 'images/power/power1.png', alt: 'image'},
    {id: 'power2', src: 'images/power/power2.png', alt: 'image'},
    {id: 'power3', src: 'images/power/power3.png', alt: 'image'}]
let Coolers = [{id: 'cooler1', src: 'images/cooler/cooler1.png', alt: 'image'},
    {id: 'cooler2', src: 'images/cooler/cooler2.png', alt: 'image'},
    {id: 'cooler3', src: 'images/cooler/cooler3.png', alt: 'image'}]
let RAMs = [{id: 'ram1', src: 'images/ram/ram1.png', alt: 'image'},
    {id: 'ram2', src: 'images/ram/ram2.png', alt: 'image'},
    {id: 'ram3', src: 'images/ram/ram3.png', alt: 'image'},
    {id: 'ram4', src: 'images/ram/ram4.png', alt: 'image'}]


let finalList = [];

const cpuZone = document.querySelector(".container .cpu");
const gpuZone = document.querySelector(".gpu");
const hddZone = document.querySelector(".hdd");
const ssdZone = document.querySelector(".ssd");
const psuZone = document.querySelector(".power-supply");
const coolerZone = document.querySelector(".cooler");
const ramZone = document.querySelector(".ram");


const listZone = document.querySelector(".list");

cpuZone.ondragover = allowDrop;
gpuZone.ondragover = allowDrop;
hddZone.ondragover = allowDrop;
ssdZone.ondragover = allowDrop;
psuZone.ondragover = allowDrop;
coolerZone.ondragover = allowDrop;
ramZone.ondragover = allowDrop;

function allowDrop(event) {
    event.preventDefault();
}

function swapArrays(sourceArray, targetArray, idToReplace) {
    const indexToRemove = sourceArray.findIndex(element => element.id === idToReplace);

    if (indexToRemove !== -1) {
        targetArray.push(sourceArray.splice(indexToRemove, 1)[0]);
    }
}

cpuZone.ondrop = dropCpu;
gpuZone.ondrop = dropGpu;
hddZone.ondrop = dropHdd;
ssdZone.ondrop = dropSsd;
psuZone.ondrop = dropPSU;
coolerZone.ondrop = dropCooler;
ramZone.ondrop = dropRAM;

function findIdsByPartialWord(list, partialWord) {
    const matchingIds = list.filter(element => element.id.includes(partialWord))
        .map(element => element.id);

    return matchingIds;
}

function updateList(list)
{
    listZone.innerHTML = '';

    list.forEach(data => {
        var img = document.createElement('img');
        img.src = data.src;
        img.alt = data.alt;
        img.id = data.id
        img.draggable = true;
        img.ondragstart = drag;
        listZone.appendChild(img);
    });
}

function drag(event) {
    event.dataTransfer.setData('id', event.target.id);
    console.log("dragged " + event.target.id)
}

function dropCpu(event) {
    let itemId = event.dataTransfer.getData('id');

    console.log(event.currentTarget.children.length + " dropped " + itemId);
    if (itemId.includes('cpu')) {
        if (event.currentTarget.children.length > 0) {
            swapArrays(finalList, CPUs, event.currentTarget.children[0].id);
            cpuZone.innerHTML = "";
        }

        swapArrays(CPUs, finalList, itemId);

        cpuZone.appendChild(document.getElementById(itemId));
        updateList(CPUs);
    } else {
        alert("Этот элемент не должен быть здесь");
    }
}

function dropGpu(event) {
    let itemId = event.dataTransfer.getData('id');

    console.log(event.currentTarget.children.length + " dropped " + itemId);
    if (itemId.includes('gpu')) {
        if (event.currentTarget.children.length > 0) {
            swapArrays(finalList, GPUs, event.currentTarget.children[0].id);
            gpuZone.innerHTML = "";
        }

        swapArrays(GPUs, finalList, itemId);

        gpuZone.appendChild(document.getElementById(itemId));
        updateList(GPUs);
    } else {
        alert("Этот элемент не должен быть здесь");
    }
}

function dropHdd(event) {
    let itemId = event.dataTransfer.getData('id');

    console.log(event.currentTarget.children.length + " dropped " + itemId);
    if (itemId.includes('hdd')) {
        if (event.currentTarget.children.length > 0) {
            swapArrays(finalList, HDDs, event.currentTarget.children[0].id);
            hddZone.innerHTML = "";
        }

        swapArrays(HDDs, finalList, itemId);

        hddZone.appendChild(document.getElementById(itemId));
        updateList(HDDs);
    } else {
        alert("Этот элемент не должен быть здесь");
    }
}

function dropSsd(event) {
    let itemId = event.dataTransfer.getData('id');

    console.log(event.currentTarget.children.length + " dropped " + itemId);
    if (itemId.includes('ssd')) {
        if (event.currentTarget.children.length > 0) {
            swapArrays(finalList, SSDs, event.currentTarget.children[0].id);
            ssdZone.innerHTML = "";
        }

        swapArrays(SSDs, finalList, itemId);

        ssdZone.appendChild(document.getElementById(itemId));
        updateList(SSDs);
    } else {
        alert("Этот элемент не должен быть здесь");
    }
}

function dropPSU(event) {
    let itemId = event.dataTransfer.getData('id');

    console.log(event.currentTarget.children.length + " dropped " + itemId);
    if (itemId.includes('power')) {
        if (event.currentTarget.children.length > 0) {
            swapArrays(finalList, PSUs, event.currentTarget.children[0].id);
            psuZone.innerHTML = "";
        }

        swapArrays(PSUs, finalList, itemId);

        psuZone.appendChild(document.getElementById(itemId));
        updateList(PSUs);
    } else {
        alert("Этот элемент не должен быть здесь");
    }
}


function dropCooler(event) {
    let itemId = event.dataTransfer.getData('id');

    console.log(event.currentTarget.children.length + " dropped " + itemId);
    if (itemId.includes('cooler')) {
        if (event.currentTarget.children.length > 0) {
            swapArrays(finalList, Coolers, event.currentTarget.children[0].id);
            coolerZone.innerHTML = "";
        }

        swapArrays(Coolers, finalList, itemId);

        coolerZone.appendChild(document.getElementById(itemId));
        updateList(Coolers);
    } else {
        alert("Этот элемент не должен быть здесь");
    }
}


function dropRAM(event) {
    let itemId = event.dataTransfer.getData('id');

    console.log(event.currentTarget.children.length + " dropped " + itemId);
    if (itemId.includes('ram')) {
        if (event.currentTarget.children.length > 0) {
            swapArrays(finalList, RAMs, event.currentTarget.children[0].id);
            ramZone.innerHTML = "";
        }

        swapArrays(RAMs, finalList, itemId);

        ramZone.appendChild(document.getElementById(itemId));
        updateList(RAMs);
    } else {
        alert("Этот элемент не должен быть здесь");
    }
}

let current = 0;
const nameList = ['Процессоры', 'Видеокарты', 'Жесткие диски', 'ССД', 'Блоки питания', 'Кулеры', 'Оперативка'];
const size = nameList.length;

function nextList() {
    current = (current+1)%size;
    document.getElementById('type').innerText = nameList[current];
    if (current === 0)
        updateList(CPUs);
    else if (current === 1)
        updateList(GPUs);
    else if (current === 2)
        updateList(HDDs);
    else if (current === 3)
        updateList(SSDs);
    else if (current === 4)
        updateList(PSUs);
    else if (current === 5)
        updateList(Coolers);
    else
        updateList(RAMs);
}


function prevList() {
    if (current === 0)
        current = size -1;
    else
        current = (current-1)%size;
    document.getElementById('type').innerText = nameList[current];
    if (current === 0)
        updateList(CPUs);
    else if (current === 1)
        updateList(GPUs);
    else if (current === 2)
        updateList(HDDs);
    else if (current === 3)
        updateList(SSDs);
    else if (current === 4)
        updateList(PSUs);
    else if (current === 5)
        updateList(Coolers);
    else
        updateList(RAMs);
}

updateList(CPUs);

function addToCart(name, model, quantity, price, imageSrc) {
    const item = { name, model, quantity, price, imageSrc };


    const indexOfElement = cartItems.findIndex(cartItem =>
        cartItem.name === item.name && cartItem.model === item.model
    );

    if (indexOfElement !== -1) {
        // Заменяем элемент новым значением
        cartItems[indexOfElement].quantity = parseInt(cartItems[indexOfElement].quantity) + 1;
    } else {
        cartItems.push(item);
    }

    updateLocalStorage();
}

function updateLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}
function addPCtoCart() {
    if (finalList.length === 7) {
        finalList.forEach(item => {
            console.log(item);
            addToCart(item.id, "Кастом", 1, "$200", item.src);
        });

        document.getElementById("total-quantity").textContent = cartCount+7;
    }
    else {

        alert("Нет всех элементов ПК");
    }
}