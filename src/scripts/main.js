

const RENDER_EVENT = "RENDER_EVENT"


const main = () => {
    function getAllData() {
       return fetch('./data/DATA.json')
    .then(response => response.json())
    .then(data => data.restaurants)
    .catch(error => console.warn("ERROR FETCHING: ", error))
    
    }

    function createCardElement(cardItem, index) {
        const cardElement = document.createElement('card-item')

        cardElement.setAttribute("id", cardItem.id);
        cardElement.setAttribute("pictureId", cardItem.pictureId);
        cardElement.setAttribute("name", cardItem.name);
        cardElement.setAttribute("city", cardItem.city);
        cardElement.setAttribute("rating", cardItem.rating);
        cardElement.setAttribute("description", cardItem.description);
        bookElement.setAttribute("index", index);

        return cardElement;

    }
    document.addEventListener(RENDER_EVENT, async function () {
        const cardList = document.querySelector("card-lists");


     try {
        const DATA = await getAllData();
        console.table(DATA)

        for (const cardItem of DATA) {
            cardList.append(createCardElement(cardItem, index));
            index++
        }

     }catch(err) {
        console.warn('ERROR AT GETTING DATA: ',err)
     }

    })

    document.addEventListener("DOMContentLoaded", async () => {
        document.dispatchEvent(new Event(RENDER_EVENT))
    })



// getAllData()




};



export default main;
