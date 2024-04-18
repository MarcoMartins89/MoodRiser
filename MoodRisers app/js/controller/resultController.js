import resultService from "../service/resultService.js";
import resultView from "../view/resultView.js";

async function init(args) {
    console.log(args);
    //const message = await resultService.get(args[0]);
   const message = "37i9dQZF1DXdPec7aLTmlC";
    //resultView.render(message.playlist_id);
    resultView.render(message);
   
}

export default { init };