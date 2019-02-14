// Modal functionality
const modal = document.getElementById('myModal');
const btnClick = () => modal.style.display = "block";

// Modal unset method
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};  

// Print current page function
const printPage = ()=> window.print();