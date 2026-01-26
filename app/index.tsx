import {Button, Keyboard, Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import {useState} from "react";
import {Checkbox} from "expo-checkbox";

type Task = {
    id: number;
    title: string;
    isDone: boolean;
}

export default function Index() {
    const [value, setValue] = useState<string>('');
    const [tasks, setTasks] = useState<Task[]>([
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'CSS', isDone: true},
        {id: 3, title: 'JavaScript', isDone: false},
        {id: 4, title: 'React', isDone: true},
        {id: 5, title: 'React Native', isDone: false},
    ]);
    const addTask = () => {
        if (value) {
            const id = tasks.length + 1
            const newTask = {id, title: value, isDone: false};
            const newTasks = [newTask, ...tasks];
            setTasks(newTasks)
            setValue('')
        }
    }

    return (
        <View
            style={styles.container}
        >

            <Text>Something in the way!</Text>
            <Pressable onPress={Keyboard.dismiss} style={[{width: '100%', alignItems: "center"}]}>
                {/*<HideKeyboard>*/}
                {/*    <View style={[{width: '100%', alignItems: "center"}]}>*/}
                <TextInput style={[globalStyles.border, styles.input, {fontSize: 18,}]}
                           placeholder={'Enter your name...'}
                           placeholderTextColor={'black'}
                           value={value}
                           onChangeText={setValue}/>
                {/*</View>*/}
                {/*</HideKeyboard>*/}
            </Pressable>
            <View style={styles.action}>
                <Button title={'Add Task'} onPress={addTask}/>
            </View>
            <View style={[{width: 200}]}>
                {tasks.map((task: Task) => {
                    return <View style={styles.section} key={task.id}>
                        <Checkbox style={styles.checkbox} value={task.isDone}/>
                        <Text>{task.title}</Text>
                    </View>
                })}
            </View>
            <Text>What the fuck!</Text>
            <Text>The man who sold the world</Text>
        </View>
    );
}

// const HideKeyboard = ({children}: { children: ReactNode }): ReactElement => {
//     return <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8ff6a',
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        backgroundColor: '#f3bf98',
        width: 200,
        padding: 10,
    },
    action: {
        margin: 5
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        margin: 8,
    },
})

const globalStyles = StyleSheet.create({
    border: {
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#ecad39',
    }
})