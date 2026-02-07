import React from 'react';
import {FlatList, Image, Pressable, StatusBar, StyleSheet, Text, View} from "react-native";
import {fakeDataUser, FakeDataUserType} from "@/app/data/fackeDataUser";
import {SafeAreaView} from "react-native-safe-area-context";
import {useRouter} from "expo-router";

export default function Homework() {
    const router = useRouter();
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={fakeDataUser}
                renderItem={({item}) =>
                    <Pressable onPress={() => router.push({
                        pathname: "/homework/user", params: {
                            id: item.id,
                        }
                    })}><User
                        dataUser={item} key={item.id}/>
                    </Pressable>}
                keyExtractor={item => item.id.toString()}
            />
        </SafeAreaView>
    );
};

type UserPropsType = {
    dataUser: FakeDataUserType;
}

const User = ({dataUser}: UserPropsType) => (
    <View style={styles.item}>
        <View>
            <Image
                style={styles.tinyLogo}
                source={{uri: `${dataUser.avatar}`}}
            />
        </View>

        <Text style={styles.title}>{dataUser.firstName}</Text>
        <Text style={styles.title}>{dataUser.lastName}</Text>
    </View>
);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        borderWidth: 2,
        borderColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#fad96d',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    tinyLogo: {
        width: 50,
        height: 50,
        borderRadius: '50%'
    },
    logo: {
        width: 66,
        height: 58,
    },
});
