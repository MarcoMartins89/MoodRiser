import resultService from "../service/resultService.js";
import resultView from "../view/resultView.js";

async function init(args) {
    console.log(args);
    const message = await resultService.get(args[0]);
   
    resultView.render(message.playlist_id);
   
}

export default { init };