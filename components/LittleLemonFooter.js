import { View, Text, StyleSheet } from "react-native";
import strings from "../utils/constants";
import palette from "../utils/palette";
export const LittleLemonFooter = () => {
	const _str = strings.en;
	return (
		<View style={styles.container}>
			<Text style={styles.footerText}>{_str.little_lemon_footer}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: `${palette.yellow}`,
		alignItems: "center",
	},
  footerText:{
    padding: 4 
  }
});
