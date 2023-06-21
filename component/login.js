import React, { Component } from "react";
import { Form, Stack, Box, FormControl, View, Text, Image, Item, Input, Label, Heading, VStack, Link, Button, HStack } from "native-base";
import { Header } from "@react-navigation/stack";

export default function Login({ navigation }) {
    return (

        // <>

        //     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        //         <Image
        //             source={require('../assets/LoginIcon.png')}
        //             alt="loginicon"
        //         />

        //         <Box safeArea p="2" py="8" w="100%" maxW="300">
        //             <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        //                 color: "warmGray.50"
        //             }}>
        //                 Login
        //             </Heading>


        //             <VStack space={3} mt="5">
        //                 <FormControl >
        //                     <FormControl.Label >Email ID</FormControl.Label>
        //                     <Input placeholder="Email" />
        //                 </FormControl>
        //                 <FormControl>
        //                     <FormControl.Label>Password</FormControl.Label>
        //                     <Input placeholder="Password" type="password" />
        //                 </FormControl>
        //                 <Button mt="2" bg="error.500" onPress={() => navigation.navigate("Home")}>
        //                     Login
        //                 </Button>
        //                 <HStack mt="6" justifyContent="center">
        //                     <Text fontSize="sm" color="coolGray.600" _dark={{
        //                         color: "warmGray.200"
        //                     }}>
        //                         I'm a new user{" "}
        //                     </Text>
        //                     <Link _text={{
        //                         color: "indigo.500",
        //                         fontWeight: "medium",
        //                         fontSize: "sm"
        //                     }} onPress={() => navigation.navigate("Register")}>
        //                         Sign Up
        //                     </Link>
        //                 </HStack>
        //             </VStack>
        //         </Box>
        //     </View>
        // </>

        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Image width="85%" height={260} marginTop={20} source={require('../assets/LoginIcon.png')} />

            <Image marginTop={10} width={300} height={55} source={require('../assets/WaysToDO.png')} />
            
            <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                color: "warmGray.50"
            }}>
                Login
            </Heading>
            <View width={300}>

                <FormControl >
                    <FormControl.Label >Email</FormControl.Label>
                    <Input placeholder="Email" />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Password</FormControl.Label>
                    <Input placeholder="Password" type="password" />
                </FormControl>
            </View>
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
                onPress={() => navigation.navigate("Home")}
            >
                Login
            </Button>



        </View>
    )
}