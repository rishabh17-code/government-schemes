function findSchemes() {
    const income = parseInt(document.getElementById("income").value);
    const education = document.getElementById("education").value;
    const region = document.getElementById("region").value;
    const profession = document.getElementById("profession").value;

    const filteredSchemes = schemes.filter(scheme =>
        income <= scheme.income &&
        education === scheme.education &&
        region === scheme.region &&
        profession === scheme.profession
    );

    const schemesList = document.getElementById("schemes-list");
    schemesList.innerHTML = "";

    if (filteredSchemes.length > 0) {
        filteredSchemes.forEach(scheme => {
            const li = document.createElement("li");
            li.textContent = scheme.name;
            schemesList.appendChild(li);
        });
    } else {
        schemesList.innerHTML = "<li>No schemes found for your criteria</li>";
    }
}
