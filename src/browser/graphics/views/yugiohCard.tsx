import "modern-normalize";
import "../styles/adobe-fonts.js";
import {useRef} from "react";
import {Fade} from "@mui/material";
import {OmnEgao} from "../components/omn.js";
import {setup} from "../styles/colors.js";
import {useFitViewport} from "../components/lib/use-fit-viewport.js";
import {render} from "../../render.js";
import {useReplicant} from "../../use-replicant.js";

type Props = {
	width: number;
	height: number;
	left: string;
	top: string;
	id: number;
};

const props: Props = {
	width: 421,
	height: 614,
	left: "10px",
	top: "10px",
	id: 1145148101919,
};

const App = () => {
	const ref = useRef<HTMLDivElement>(null);
	useFitViewport(ref);
	const ikuRep = useReplicant("iku");
	const yugiohCard = useReplicant("yugiohCard");

	if (yugiohCard == null) {
		return <>load failed</>;
	}

	props.id = yugiohCard?.id;

	return (
		<div
			ref={ref}
			style={{
				position: "absolute",
				width: "1920px",
				height: "1080px",
				overflow: "hidden",
				color: setup.text,
			}}
		>
			<Fade in={ikuRep?.isIku ?? false}>
				<div>
					<OmnEgao {...props} />
				</div>
			</Fade>
		</div>
	);
};

render(<App />);
