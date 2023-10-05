let index = ["home", "contact me!", "feedback", "perfect pike patty", "sudoku analyzer", "secret template"]
let address = ["ji_home.html", "ji_contact.html", "ji_guest.html", "ji_project_patties.html", "ji_project_sudoku.html", "ji_project_temp.html"]

function searchFor(){
    let text = document.getElementById("search").value.trim().toLowerCase();
    let results = "<h2 style=\"text-align: center\">Search Results:</h2><ul>";
    let matches = 0;
    let ref = "";

    for (let i = 0; i < index.length; i++){
        if (index[i].includes(text)){
            results = results + "<li> <a href=" + address[i] + ">" + address[i] + "</a></li>"
            matches++;
        }
    }
    results = results + "</ul>"
    if (matches == 0){
        results = "<h2 style=\"text-align: center\">Nothing found<h2>"
    }
    document.getElementById("results").innerHTML = results;
}