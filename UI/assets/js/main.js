// Modal functionality for user_menu.html
const modal = document.getElementById('myModal');
const btnClick = () => modal.style.display = "block";

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};  

