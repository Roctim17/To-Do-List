let count = 0;
document.getElementById('basic-addon2').addEventListener("click", function () {
    const inputValue = document.getElementById("input-list").value;
    count++;
    if (inputValue == "") {
        alert("Ore bolod List lakbo k...");
    }
    else if (inputValue == parseInt(inputValue)) {
        alert("Oi bolod Number disos  ken...");
    }
    else {
        const listItem = document.getElementById('list-item');
        // const singleItem = document.getElementById('single-list');
        const createTR = document.createElement('tr');
        createTR.innerHTML = `<th scope="row">${count}</th>
        <td id="inValue">${inputValue}</td>
        <td>
        <button class="delete btn btn-danger rounded-3 text-light "><img src="icon/trash.png"
        alt="" style="width: 25px;height: 25px;"></button>
<button class="done btn btn-success rounded-3 text-light"><img src="icon/tick.png"
        alt="" style="width: 25px;height: 25px;"></button>
<button class="btn btn-success rounded-3 text-light"><img src="icon/pencil.png"
        alt="" style="width: 25px;height: 25px;"></button>
        </td>`
        listItem.appendChild(createTR);
        document.getElementById("input-list").value = '';
        const deleteBtn = document.getElementsByClassName('delete');
        const doneBtn = document.getElementsByClassName('done');
        for (const button of deleteBtn) {
            button.addEventListener("click", function (e) {
                e.target.parentNode.parentNode.style.display = "none";
            });
        }
        for (const button of doneBtn) {
            button.addEventListener("click", function (e) {
                e.target.parentNode.parentNode.style.textDecoration = "line-through";
            })
        }
    }

})