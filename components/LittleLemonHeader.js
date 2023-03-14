import React from "react";
import { StyleSheet, Text, View } from "react-native";
import strings from "../utils/constants";
import palette from "../utils/palette";
export const LittleLemonHeader = () => {
	const _str = strings.en;

	return (
		<View style={headerStyles.container}>
			<Text style={headerStyles.headerText}>{_str.little_lemon_header}</Text>
		</View>
	);
};

const headerStyles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: `${palette.yellow}`,
	},
	headerText: {
		padding: 16,
		fontSize: 30,
		color: `${palette.black}`,
	},
});
