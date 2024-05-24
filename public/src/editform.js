
function submitWithDifferentAction(action) {
    var form = document.getElementById('mainForm');
    form.action = action;
    form.submit();
}

