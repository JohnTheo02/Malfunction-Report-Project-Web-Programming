
function confirmDelete(id) {
    var result = confirm("Είστε σίγουρος/η ότι θέλετε να διαγράψετε τη δήλωση;");

    if (result) {
        window.location.href = "/adminViewForm/delete/" + id;
    }
}
