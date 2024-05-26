
//admin Control Panel buttons

document.querySelector("#top").addEventListener("click", function() {
    //when top button pressed go to completed
    window.location.href = "/adminCompleted";
});
document.querySelector("#middle").addEventListener("click", function() {
    //when middle button pressed go to InSufficient
    window.location.href = "/adminInSufficient";
});


document.querySelector("#bottom").addEventListener("click", function() {
    //when bottom button pressed go to InCompleted
    window.location.href = "/adminInCompleted";
});


