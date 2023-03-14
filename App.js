import { StyleSheet, View } from "react-native";
import { LittleLemonFooter } from "./components/LittleLemonFooter";
import { LittleLemonHeader } from "./components/LittleLemonHeader";
import { LittleLemonWelcome } from "./components/LittleLemonWelcome";
import palette from "./utils/palette";
export default function App() {
	return (
		<View style={styles.container}>
			<LittleLemonHeader />
			<LittleLemonWelcome />
			<LittleLemonFooter />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: `${palette.green}`,
		justifyContent: "space-between",
	},
});
