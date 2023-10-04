let index = ["home", "contact me!", "feedback", "perfect pike patty", "sudoku analyzer", "secret template"]
let address = ["ji_home.html", "ji_contact.html", "ji_guest.html", "ji_project_patties.html", "ji_project_sudoku.html", "ji_project_temp.html"]

function searchFor(){
    let text = document.getElementById("search").value.trim().toLowerCase();
    let ref = ""

    for (let i = 0; i < index.length; i++){
        if (index[i].includes(text)){
            location.href = address[i]
        }
    }
}