const main = () => {
//   const hamburgerButtonElement = document.querySelector("#hamburger");
//   const drawerElement = document.querySelector("#drawer");
//   const mainElement = document.querySelector("main-page");

//   hamburgerButtonElement.addEventListener("click", (event) => {
//     drawerElement.classList.toggle("open");
//     event.stopPropagation();
//   });

//   mainElement.addEventListener("click", (event) => {
//     drawerElement.classList.remove("open");
//     event.stopPropagation();
//   });
function getAllData (){
    fetch('./data/DATA.json')
.then(response => response.json())
.then(data => console.table(data.restaurants))
.catch(error => console.log(error))

}
getAllData()


};



export default main;
