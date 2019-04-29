// Populate dropdown with junk categories
const junkCats = API.getCategories()
    .then(categoryArray => {
        categoryArray.forEach(obj => {
            const catDropdown = document.querySelector("#catDropdown");
            let newOption = document.createElement("option"); 
            newOption.textContent = `${obj.name}`;
            catDropdown.appendChild(newOption);
            newOption.value = obj.id;
    });
});


// Event listener to build junk object
document.querySelector("#btn-saveJunk").addEventListener("click", event => {
    let junkName = document.querySelector("#junk__name").value;
    let catValue = document.querySelector("#catDropdown").value;

    API.getCategoryWithJunk()
    .then(obj => {
        const junkObj = {
            name: `${junkName}`,
            categoryId: `${catValue}`
        };

        API.saveJunk(junkObj)
        .then(parsedResult => {
            console.log("saved obj", parsedResult);
        });
        });
});