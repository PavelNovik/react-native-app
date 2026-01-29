import {View} from "react-native";
import TodoOld from "@/app/todo/todo";
import {Todolists} from "@/app/features/todolists/ui/Todolists/Todolists";

export default function Index() {


    return (
        <View style={[{flex: 1}]}>
            <TodoOld/>
            <Todolists/>
        </View>

    );
}

