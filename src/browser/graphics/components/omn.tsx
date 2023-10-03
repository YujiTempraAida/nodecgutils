type Props = {
	width: number;
	height: number;
	left: string;
	top: string;
	id: number;
};

const imgFolderPath =
	"../../../../../../assets/YuGiOh-Database-main/CardImages/";

export const OmnEgao = (props: Props) => {
	return (
		<img
			src={imgFolderPath + props.id + ".png"}
			width={props.width}
			height={props.height}
			style={{
				position: "absolute",
				left: props.left,
				top: props.top,
			}}
		></img>
	);
};
