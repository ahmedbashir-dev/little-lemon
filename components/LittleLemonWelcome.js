import { View, Text, ScrollView, StyleSheet } from "react-native";
import palette from "../utils/palette";
import strings from "../utils/constants";
export const LittleLemonWelcome = () => {
	const _str = strings.en;
	return (
		<ScrollView indicatorStyle={"white"} style={styles.container}>
			<Text style={styles.welcomeText}>Welcome to Little Lemon</Text>
			<Text style={styles.welcomeContent}>
				Little Lemon is a charming neighborhood bistro that serves
				simple food and classic cocktails in a lively but casual
				environment. We would love to hear more about your experience
				with us!
			</Text>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	welcomeText: {
		padding: 40,
		fontSize: 50,
		color: "#EDEFEE",
		textAlign: "center",
	},
	welcomeContent: {
		fontSize: 38,
		padding: 20,
		marginVertical: 8,
		color: "#EDEFEE",
		textAlign: "center",
	},
});
