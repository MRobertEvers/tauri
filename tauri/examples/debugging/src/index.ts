let totalClicks: number = 0;

function onready() : void {
    let clickButton: HTMLElement = document.getElementById('my-button');
    let clickCountDiv: HTMLElement = document.getElementById('my-click-count');

    clickButton.addEventListener('click', (ev: MouseEvent) => {
        totalClicks += 1;
        clickCountDiv.innerHTML = totalClicks.toString();
    });
}

onready();