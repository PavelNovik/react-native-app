import {Tabs} from 'expo-router';
import {AntDesign, FontAwesome, Fontisto} from "@expo/vector-icons";

export default function TabLayout() {
    return (

        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Todolists',
                    tabBarIcon: ({color}) => <Fontisto name="home" size={24} color={color}/>,
                }}
            />
            <Tabs.Screen
                name="todo"
                options={{
                    title: 'Old Todo',
                    tabBarIcon: ({color}) => <AntDesign name="android" size={24} color={color}/>
                }}
            />
            <Tabs.Screen
                name="homework"
                options={{
                    title: 'Homework',
                    tabBarIcon: ({color}) =>
                        <Fontisto name="home" size={24} color={color}/>,
                }}
            />
            <Tabs.Screen
                name="learning"
                options={{
                    title: 'Learning',
                    tabBarIcon: ({color}) => <FontAwesome name="book" size={24} color={color}/>,
                }}
            />

        </Tabs>
    );
}