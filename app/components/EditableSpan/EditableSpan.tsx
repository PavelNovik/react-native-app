import {useState} from "react"
import {StyleSheet, Text, TextInput} from "react-native";

type Props = {
    value: string
    onChange: (title: string) => void
    disabled?: boolean
    isTaskCompleted?: boolean
}

export const EditableSpan = ({value, onChange, disabled, isTaskCompleted}: Props) => {
    const [title, setTitle] = useState(value)
    const [isEditMode, setIsEditMode] = useState(false)

    const turnOnEditMode = () => {
        if (disabled) return
        setIsEditMode(true)
    }

    const turnOffEditMode = () => {
        setIsEditMode(false)
        onChange(title)
    }

    const changeTitle = (event: string) => {
        setTitle(event)
    }

    return (
        <>
            {isEditMode ? (
                <TextInput style={[styles.input]}
                           value={title} autoFocus={true} onChangeText={changeTitle} onBlur={turnOffEditMode}
                    // onChange={changeTitle}
                    // onBlur={turnOffEditMode}

                />
            ) : (
                <Text style={[isTaskCompleted ? {
                    ...styles.text,
                    opacity: 0.5,
                    textDecorationLine: "line-through"
                } : {...styles.text}]} onPress={turnOnEditMode}>{value}</Text>
            )}
        </>
    )
}
const styles = StyleSheet.create({
    input: {
        backgroundColor: '#f3bf98',
        width: 200,
        padding: 10,
    },
    text: {
        color: '#fffffe',
        fontSize: 18,
    },
})