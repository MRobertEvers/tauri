let totalClicks: number = 0;

function onready() : void {
    let clickButton: HTMLElement = document.getElementById('my-button');
    let clickCountDiv: HTMLElement = document.getElementById('my-click-count');

    clickButton.addEventListener('click', (ev: MouseEvent) => {
        totalClicks += 1;
        clickCountDiv.innerHTML = totalClicks.toString();

        let w = window as any;
        w.__TAURI_INVOKE_HANDLER__({
            cmd: "myCustomCommand",
            argument: "this long text hello"
        });
    });
}

onready();