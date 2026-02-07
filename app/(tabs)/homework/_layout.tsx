import {Stack} from "expo-router";

export default function HomeworkLayout() {
    return <Stack screenOptions={{
        title: 'Users', headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }}/>;
}