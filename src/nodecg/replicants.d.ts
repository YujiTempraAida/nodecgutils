import {Scoreboard, YugiohDb} from "./generated";
import {Iku} from "./generated";
import {YugiohCard} from "./generated";
import {YugiohCards} from "./generated";

type YugiohCard = YugiohCards[number];

type ReplicantMap = {
	scoreboard: Scoreboard;
	iku: Iku;
	yugiohCard: YugiohCard;
	yugiohCards: YugiohCards;
	// yugiohCard: readonly unknown;
	// yugiohCards: readonly unknown[];
};

export type {ReplicantMap, Scoreboard, Iku, YugiohCards, YugiohCard};
