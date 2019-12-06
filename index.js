function dropDown() {
    document.getElementById('dropDown').classList.toggle('show');
}

window.onclick = function(event) {
    if (!event.target.matches('.k-img')){
        document.getElementById('kb').classList.toggle('hide');
        let dropdowns = document.getElementsByClassName('dropdown-content');
        let i;
        for(i = 0; i < dropdowns.length; i++){
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}