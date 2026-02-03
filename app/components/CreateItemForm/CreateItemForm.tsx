import {useState} from "react"
import {StyleSheet, TextInput, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";

type Props = {
    onCreateItem: (title: string) => void
    disabled?: boolean
}

export const CreateItemForm = ({onCreateItem, disabled}: Props) => {
    const [title, setTitle] = useState("")
    const [error, setError] = useState<string | null>(null)

    const createItemHandler = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle !== "") {
            onCreateItem(trimmedTitle)
            setTitle("")
        } else {
            setError("Title is required")
        }
    }

    const changeTitleHandler = (text: string) => {
        setTitle(text)
        setError(null)
    }


    return (
        <View style={[{flexDirection: "row", alignItems: "center", justifyContent: "center"}]}>
            <TextInput style={[styles.input]}
                       value={title}
                       onChangeText={changeTitleHandler}
                // onKeyDown={createItemOnEnterHandler}
                       placeholder={title}

            />
            <TouchableOpacity>
                <Ionicons name="add-circle" size={24} color="white" onPress={createItemHandler}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#f3bf98',
        width: 200,
        padding: 10,
    },
})