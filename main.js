

async function clickedEvent(img_index, item_index) {
    
    let pieceId = document.getElementsByTagName('img')[img_index].attributes[1].value

    let request = new Request (`https://api.artic.edu/api/v1/artworks/${pieceId}?fields=title,date_end,artist_title,place_of_origin`,  {
        method: 'GET',
    });

    let result = await fetch (request);

    let response = await result.json();

    console.log(response)

    alert(document.innerHTML= JSON.stringify(response));

}

function getInfo(id, event){
    switch(id){
        case 'fig1': {
        clickedEvent(0, 1)
        break;
        }
        case 'fig2': {
        clickedEvent(1,1)
        break;
        }
        case 'fig3': {
        clickedEvent(2,1)
        break;
        }
        case 'fig4': {
        clickedEvent(3,1)
        break;
        }
        case 'fig5': {
        clickedEvent(4,1)
        break;
        }   
        case 'fig6': {
        clickedEvent(5,1)
        break;
        }
    }
}