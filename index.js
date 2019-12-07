function dropDown() {
    document.getElementById('dropDown').classList.toggle('show');
    document.getElementById('kb').classList.toggle('hide');
    if (!event.target.matches('.k-img' || '.close')){
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

// window.onclick = function(event) {
//     if (!event.target.matches('.k-img')){
//         document.getElementById('kb').classList.toggle('hide');
//         let dropdowns = document.getElementsByClassName('dropdown-content');
//         let i;
//         for(i = 0; i < dropdowns.length; i++){
//             let openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }