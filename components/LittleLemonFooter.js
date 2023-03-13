import { View , Text} from "react-native"
import strings from "../utils/constants";
import palette from "../utils/palette";
export const LittleLemonFooter = () => {
    const _str = strings.en;
    return (
    <View style={{backgroundColor:`${palette.yellow}`, alignItems:'center'}}>
        <Text style={{padding:4}}>{_str.little_lemon_footer}</Text>
    </View>
  )
}
