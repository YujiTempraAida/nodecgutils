import {NodeCG} from "./nodecg";
import {scoreboard} from "./scoreboard";
import {yugiohDb} from "./yugiohDb";

export default (nodecg: NodeCG) => {
	scoreboard(nodecg);
	yugiohDb(nodecg);
};
