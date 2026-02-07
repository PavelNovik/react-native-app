import {Button, Image, StyleSheet, Text, View} from "react-native";
import {router, Stack, useLocalSearchParams} from "expo-router";
import {fakeDataUser} from "@/app/data/fackeDataUser";
import React from "react";


export default function UserDetails() {
    const {id} = useLocalSearchParams<{
        id: string;
    }>()
    const userData = fakeDataUser.find(u => u.id === +id)
    return <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Stack.Screen
            options={{
                title: `User: ${userData?.firstName} ${userData?.lastName}`,
                headerStyle: {backgroundColor: 'lightblue'},
            }}
        />
        <Text>Details screen for userId = {id}</Text>
        <Image
            style={[{width: 200, height: 200}, styles.logo]}
            source={{uri: `${userData!.avatar}`}}
            resizeMode="cover"
            onError={(e) => {
                console.log("IMAGE ERROR", e.nativeEvent);
            }}
        />
        <View style={{flexDirection: 'row', gap: 10}}>
            <Text>{userData?.firstName}</Text>
            <Text>{userData?.lastName}</Text>
        </View>
        <Text>{userData?.role}</Text>
        <Text>{userData?.location.country}</Text>
        <Text>{userData?.location.city}</Text>
        {userData?.skills.map((skill, index) => (<Text key={index}>{skill}</Text>))}
        <Button title={'Back'} onPress={() => router.back()}/>
    </View>;
}

const styles = StyleSheet.create({
    logo: {
        // width: 100,
        // height: 100,
        borderRadius: 500
    }
})