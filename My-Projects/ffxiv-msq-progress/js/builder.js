document.getElementById('buildBtn').addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const itemsInput = document.getElementById('items').value;
    const items = itemsInput
        .split(',')
        .map((item) => ({ name: item.trim(), checked: false }));

    const checklistJSON = JSON.stringify(
        {
            title,
            description,
            items,
        },
        null,
        2
    );

    downloadJSON(
        checklistJSON,
        `${title.toLowerCase().replace(/\s+/g, '-')}-checklist.json`
    );
});

document.getElementById('clearBtn').addEventListener('click', () => {
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('items').value = ``;
});

function downloadJSON(content, fileName) {
    const blob = new Blob([content], { type: 'application/json ' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
