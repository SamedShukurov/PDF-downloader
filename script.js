const dataTable = document.querySelector(".data");

fetch("db.json")
    .then((res) => res.json())
    .then((data) =>
        data.map((item) => {
            dataTable.innerHTML += `
                            <li>
        <a
            title="download"
            href="${item.url}"
            download="${item.name}"
            >${item.name}</a
        
        >
    </li>`;
        })
    );
