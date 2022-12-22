const form = document.addItem;
const list = document.getElementById("list");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const newItem = form.title.value;

    form.title.value = "";

    //create list
    const listItem = document.createElement("li");
    list.append(listItem);

    // new item
    const div = document.createElement("div");
    div.textContent = newItem;
    listItem.append(div);

    //create edit button
    const newEditBtn = document.createElement("button");
    newEditBtn.textContent = "edit";
    listItem.append(newEditBtn);

    const newDelete = document.createElement("button");
    newDelete.textContent = "X";
    listItem.append(newDelete);
    newDelete.addEventListener("click", function () {
        if (listItem.parentNode) {
            listItem.parentNode.removeChild(listItem);
            newEditBtn.parentNode.removeChild(newEditBtn);
            newDelete.parentNode.removeChild(newDelete);
        }
    });
    //replace edit with save
    newEditBtn.addEventListener("click", function () {
        const newSave = document.createElement("button");

        newSave.textContent = "save";
        listItem.append(newSave);
        newEditBtn.style.display = "none";

        //create new input
        const newEdit = document.createElement("input");
        newEdit.value = div.textContent;
        listItem.append(newEdit);

        //replace old text with new
        newSave.addEventListener("click", function () {
            div.textContent = newEdit.value;
            if (newEdit.parentNode) {
                newEdit.parentNode.removeChild(newEdit);
                newSave.parentNode.removeChild(newSave);
                newEditBtn.style.display = "inline";
            }
        });
    });
});

// console.log("is it working?")

// removeChild
