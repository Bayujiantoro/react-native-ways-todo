import React, { Component } from "react";
import { Form, Stack, Box, FormControl,ScrollView, View, Text, Image, Item, Input, Label, Heading, VStack, Link, Button, HStack } from "native-base";
import { Header } from "@react-navigation/stack";

export default function Register({ navigation }) {
    return (


        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Image width="85%" height={260} source={require('../assets/LoginIcon.png')} />

            <Image marginTop={10} width={300} height={55} source={require('../assets/WaysToDO.png')} />
            
            <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                color: "warmGray.50"
            }}>
                Register
            </Heading>
            <View width={300}>

                <FormControl >
                    <FormControl.Label >Email</FormControl.Label>
                    <Input placeholder="Email" />
                </FormControl>
                <FormControl >
                    <FormControl.Label >Name</FormControl.Label>
                    <Input placeholder="Name" />
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
                onPress={() => navigation.navigate("Login")}
            >
                Login
            </Button>



        </View>
    )
}