import {StyleSheet, TextInput} from "react-native";
import {useState} from "react";

type InputProps = {
    title: string;
    taskId: number;
    changeTaskTitle: (taskId: number, title: string) => void;
}

const Input = (props: InputProps) => {
    const [title, setTitle] = useState<string>(props.title);
    return (
        <TextInput style={[styles.input]} value={title} onChangeText={setTitle}
                   onBlur={() => props.changeTaskTitle(props.taskId, title)}/>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#f3bf98',
        width: 100,
        padding: 5,
    },
})

export default Input;