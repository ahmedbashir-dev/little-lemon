import { View, Text } from "react-native";
import palette from "../utils/palette";
import strings from "../utils/constants";
export const LittleLemonWelcome = () => {
	const _str = strings.en;
	return (
		<View style={{ padding:24, flex:0.7,gap:40, justifyContent:'flex-start'}}>
			<View style={{justifyContent:'center', alignItems:'center'}}>
				<Text style={{color: `${palette.white}`, fontSize:34, textAlign:'center'}}>Welcome to Little Lemon</Text>
			</View>
			<Text
				style={{
					fontSize: 24,
                    textAlign:'center',
                    color: `${palette.white}`
				}}
			>
				{_str.little_lemon_welcome}
			</Text>
		</View>
	);
};
