function InputForm() {
    let data = '[{"name":"beach", "url":"./Images/beach.jpg"}, {"name":"fountain", "url":"./Images/fountain.jpg"}]';
    let nameText;
    let h1;
    let temp;
    let imageCount = 1;

    function clearInput() {
        return function (p1: React.MouseEvent<HTMLButtonElement>) {
            let form = document.querySelector('#inputForm');
            form.reset();
        };
    }

    // function add() {
    //     return function (p1: React.MouseEvent<HTMLButtonElement>) {
    //         document.getElementById('addButton').onclick = function () {
    //             h1 = document.createElement('h1');
    //             nameText = document.getElementById('inputName').value;
    //             h1.appendChild(document.createTextNode(nameText));
    //             document.getElementById("cardBox").appendChild(h1);
    //
    //             imageCount += 1;
    //             let img;
    //             img = document.createElement('img');
    //             img.src = document.getElementById('inputURL').value;
    //             document.getElementById("cardBox").appendChild(img);
    //             temp = JSON.parse(data);
    //             temp.push({name: nameText, url: img.src});
    //             data = JSON.stringify(temp);
    //         };
    //     }
    // }

    return (
        <form id="inputForm">
            <label>
                <input id={"inputName"} type={"text"} placeholder={"Name"} name={"name"}/>
            </label>
            <label>
                <input id={"inputURL"} type={"text"} placeholder={"Image URL"} name={"imageURL"}/>
            </label>
            <button onClick={clearInput()} type={"button"}>Clear Input Fields</button>
            <button onClick={add()} type={"button"}>Add</button>
        </form>
    )
}

export default InputForm;