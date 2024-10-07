

const RENDER_EVENT = "RENDER_EVENT"


const main = () => {
    function getAllData() {
        fetch('./data/DATA.json')
    .then(response => response.json())
    .then(data => data.restaurants)
    .catch(error => console.warn("ERROR FETCHING: ", error))
    
    }

    function createCardElement (cardItem) {
        const cardElement = document.createElement('card-item')

        cardElement.setAttribute("id", cardItem.id);
        cardElement.setAttribute("pictureId", cardItem.pictureId);
        cardElement.setAttribute("name", cardItem.name);
        cardElement.setAttribute("city", cardItem.city);
        cardElement.setAttribute("rating", cardItem.rating);
        cardElement.setAttribute("description", cardItem.description);

        return cardElement;

    }
    document.addEventListener(RENDER_EVENT, async function () {
        const cardList = document.getElementById("card-lists");

        const DATA = await getAllData();
        console.warn("GETTING ALL DATA: ", DATA)
     try {
        for (const cardItem of DATA) {
            cardList.append(createCardElement(cardItem))
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
