import { View } from "react-native";
import { LittleLemonFooter } from "./components/LittleLemonFooter";
import { LittleLemonHeader } from "./components/LittleLemonHeader";
import { LittleLemonWelcome } from "./components/LittleLemonWelcome";
import palette from "./utils/palette";
export default function App() {
  return (
    <View style={{
      flex:1,
      backgroundColor:`${palette.green}`,
      justifyContent:'space-between',

    }}>
      <LittleLemonHeader />
      <LittleLemonWelcome />
      <LittleLemonFooter />
    </View>
  );
}
