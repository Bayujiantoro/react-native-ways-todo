import React from 'react';
import { View, Image, Text, Button } from 'native-base';

export default function Welcome ({navigation}) {
    return (
        <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
            <Image width={350} source={require('../assets/accept-request1.png')}/>

            <Image marginTop={10} width={300} height={55} source={require('../assets/WaysToDO.png')} />

            <Text textAlign={"center"} width={350} marginTop={10}>Ways ToDO
                Write your activity and finish your activity.
                Fast, Simple and Easy to Use
                Login
                Register</Text>

            <Button
                bg="error.500"
                width="80%"
                marginTop={60}
                _hover={{ backgroundColor: "error.600" }}
                py={3}
                _text={{
                    fontSize: "md",
                    fontWeight: "bold",
                }}
                onPress={() => navigation.navigate("Login")}
            >
                Login
            </Button>

            <Button
                bg="muted.400"
                width="80%"
                marginTop={5}
                _hover={{ backgroundColor: "muted.500" }}
                py={3}
                _text={{
                    fontSize: "md",
                    fontWeight: "bold",
                }}
                onPress={() => navigation.navigate("Register")}
            >
                Register
            </Button>

        </View>
    );
};




