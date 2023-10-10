let index = ["janne's place", "contact me!", "perfect pike patty", "sudoku solver", "secret template"]
let address = ["index.html", "ji_contact.html", "ji_project_patties.html", "ji_project_sudoku.html", "ji_project_temp.html"]
let titles = ["Janne's Place", "Contact me!", "The Pike Patties", "Sudoku Solver", "Project Template"]

function searchFor() {
    let text = document.getElementById("search").value.trim().toLowerCase();
    let results = "<input type=\"button\" value=\"X\" onClick=\"hideResults()\" style=\"color:red;\">" +
        "<h2 style=\"text-align: center\">Search Results:</h2><ul style=\"padding-bottom: 0.5cm\">";
    let matches = 0;
    let ref = "";

    if (text == "") {
        results = "<input type=\"button\" value=\"X\" onClick=\"hideResults()\" style=\"color:red;\"> <p style=\"text-align: center; padding-bottom: 0.5cm\">Please type something to search!</p>"
        document.getElementById("results").innerHTML = results;
        return;
    }
    else {
        for (let i = 0; i < index.length; i++) {
            if (index[i].includes(text)) {
                results = results + "<li> <a href=" + address[i] + ">" + titles[i] + "</a></li>"
                matches++;
            }
        }
    }
    results = results + "</ul>";
    if (matches == 0) {
        results = "<input type=\"button\" value=\"X\" onClick=\"hideResults()\" style=\"color:red;\"> <h2 style=\"text-align: center; padding-bottom: 0.5cm\">Nothing Found</h2>"
    }
    document.getElementById("results").innerHTML = results;
}

function hideResults() {
    document.getElementById("results").innerHTML = "";
}