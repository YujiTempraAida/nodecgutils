import {NodeCG} from "./nodecg";
import Database from "better-sqlite3";
import {YugiohCards} from "../nodecg/generated";

export const yugiohDb = (nodecg: NodeCG) => {
	// 今後の実装でなんかあったらログ出すようにする
	const log = new nodecg.Logger("yugiohDb");

	const yugiohDbPath = "./assets/YuGiOh-Database-main/sql.db"; //rootからの相対パス
	const db = new Database(yugiohDbPath);
	const queryData = db.prepare(`SELECT CardName, id FROM YuGiOhDB`).all();
	const typedData: YugiohCards = queryData as YugiohCards;
	const yugiohCardsRep = nodecg.Replicant("yugiohCards");
	yugiohCardsRep.value = typedData;

	log.info("Db loaded");
	log.info(yugiohCardsRep.value);

	const yugiohCardRep = nodecg.Replicant("yugiohCard");
	const defaultYugiohCard = {
		CardName: "NoCardName",
		id: 1145148101919,
	};
	yugiohCardRep.value = defaultYugiohCard;
};
