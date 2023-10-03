import {FC, SyntheticEvent, useState} from "react";
import styled from "styled-components";
import {BorderedBox} from "../lib/bordered-box";
import {Button, Switch} from "@mui/material";
import {useReplicant} from "../../../use-replicant";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
// import { YugiohCards } from "../../../../nodecg/generated";

const Container = styled(BorderedBox)`
	padding: 16px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: 1fr;
	grid-gap: 8px;
	user-select: none;
`;

const ikuRep = nodecg.Replicant("iku");
const yugiohCardRep = nodecg.Replicant("yugiohCard");

type CardItem = {
	label: string;
	id: number;
};

const defaultCardItem: CardItem = {
	label: "",
	id: 1145148101919,
};

export const YugiohTelop: FC = () => {
	const iku = useReplicant("iku");
	const yugiohCards = useReplicant("yugiohCards");
	const yugiohCard = useReplicant("yugiohCard");
	const [value, setValue] = useState(defaultCardItem);

	if (yugiohCards == null || yugiohCard == null) {
		return <>error: db load failed</>;
	}

	const cardNameOptions = yugiohCards.map((e) => {
		return {label: e.CardName, id: e.id};
	});

	const handleValueChange = (
		event: SyntheticEvent<Element, Event>,
		value: CardItem | null,
	) => {
		if (value == null) {
			console.log(event); //第一引数eventどう使っていいか分からん
			return;
		}
		setValue(value);
	};

	const updateCard = (cardItem: CardItem) => {
		if (yugiohCardRep.value == undefined) {
			console.log("replicant update failed");
			return;
		}
		yugiohCardRep.value.CardName = cardItem.label;
		yugiohCardRep.value.id = cardItem.id;
		console.log("yugiohCard.CardName: " + yugiohCardRep.value.CardName);
		console.log("yugiohCard.id: " + yugiohCardRep.value.id);
	};

	// useEffect(() => {
	//   console.log(`再レンダーされました`)
	// },[])

	return (
		<Container>
			<Switch
				checked={iku?.isIku}
				onChange={(e) => {
					if (ikuRep.value == undefined) {
						ikuRep.value = {isIku: false};
					}
					ikuRep.value.isIku = e.currentTarget.checked;
				}}
			/>

			<Autocomplete
				disablePortal
				id='combo-box-demo'
				options={cardNameOptions}
				value={value}
				onChange={(e, v) => handleValueChange(e, v)}
				// inputValue={inputValue}
				// onInputChange={(e,v) => handleInputValueChange(e,v)}
				sx={{width: 300, height: 300}}
				renderInput={(params: any) => {
					return <TextField {...params} label='Card' />;
				}}
			/>
			<Button variant='contained' onClick={() => updateCard(value)}>
				Update
			</Button>
		</Container>
	);
};
