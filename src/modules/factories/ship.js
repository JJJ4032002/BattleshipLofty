/* eslint-disable no-param-reassign */
import shipdtls from "../info/ship-info";

export default function Ship(shipType, position) {
	// Imports ship details
	const { name, length } = shipdtls[shipType];
	let { axis } = shipdtls[shipType];

	const changeAxis = axe => {
		if (axe) axis = axe;
		axis = axis === "x" ? "y" : "x";
	};

	// hit( index ) -> Marks index as hit
	const hitArr = Array(length).fill(false);
	const hits = i => {
		if ( ( i >= 0 ) && ( i < length ) ) hitArr[i] = true;
	};

	// isSunk() -> Check sink
	const isSunk = () => hitArr.reduce(prev => prev === true);

	return { name, position, axis, length, hitArr, changeAxis, hits, isSunk };
}
