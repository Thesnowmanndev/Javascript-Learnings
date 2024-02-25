document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('#checklistMenu a').forEach((link) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const checklistFile = this.getAttribute('data-checklist');
            fetchChecklist(`/data/${checklistFile}`);
        });
    });

    function fetchChecklist(filePath) {
        fetch(filePath)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                return response.json();
            })
            .then((data) => {
                const storedChecklist =
                    JSON.parse(localStorage.getItem(filePath)) || data;
                initializeChecklist(storedChecklist);
                localStorage.setItem('currentChecklist', filePath);
            })
            .catch((error) =>
                console.error('Error loading checklist: ', error)
            );
    }

    function initializeChecklist(checklistData) {
        renderChecklist(checklistData);
        document
            .querySelectorAll('input[type="checkbox"]')
            .forEach((checkbox) => {
                checkbox.addEventListener('change', (e) =>
                    updateProgress(e, checklistData)
                );
            });
    }

    function renderChecklist(checklist) {
        const title = document.getElementById('checklistTitle');
        const description = document.getElementById('checklistDescription');
        const itemsList = document.getElementById('checklistItems');

        title.textContent = checklist.title;
        description.textContent = checklist.description;
        itemsList.innerHTML = ``;

        checklist.items.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
            <label>
                <input type="checkbox" ${
                    item.checked ? 'checked' : ''
                } data-index="${index}">
                ${item.name}
            </label>
            `;

            itemsList.appendChild(listItem);
        });

        updateProgressDisplay(checklist);
    }

    function updateProgress(e, checklist) {
        const index = e.target.dataset.index;
        checklist.items[index].checked = e.target.checked;

        const currentChecklistPath = localStorage.getItem('currentChecklist');

        localStorage.setItem(currentChecklistPath, JSON.stringify(checklist));
        updateProgressDisplay(checklist);
    }

    function updateProgressDisplay(checklist) {
        const totalItems = checklist.items.length;
        const checkedItems = checklist.items.filter(
            (item) => item.checked
        ).length;
        const progressPercentage = Math.round(
            (checkedItems / totalItems) * 100
        );
        document.getElementById(
            'progressPercentage'
        ).textContent = `${progressPercentage}%`;
    }
});
