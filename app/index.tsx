import {View} from "react-native";
import TodoOld from "@/app/todo/todo";

export default function Index() {


    return (
        <View style={[{flex: 1}]}>
            <TodoOld/>
            {/*<Todolists/>*/}
        </View>

    );
}

