import React from "react";
import { Button, Text, Stack, HStack, Center, Heading, Box, View, Input, Image } from "native-base";

export default function Home({navigation}) {
    const [service, setService] = React.useState("");
    return (
        <>
            <Box>

                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Heading fontSize={16} marginLeft={5} marginTop={5} flex={1}>Hi , Ujang</Heading>
                    <Image style={{ marginRight: 12, marginTop: 5}}
                        source={require('../assets/Ellipse1.png')}
                        alt="ellipse"
                    />
                </View>


                <View alignItems="center" margin={15}>
                    <Input mx="3" placeholder="Search List" w="100%" />
                </View>;
                <HStack space={3} justifyContent="center">
                    <Input mx="3" placeholder="Search List" w="26%" />
                    <Input mx="3" placeholder="Search List" w="26%" />
                    <Input mx="3" placeholder="Search List" w="26%" />
                </HStack>;

                <View style={{ alignItems: "center", justifyContent: "center", marginTop: 40 }}>

                    <Image
                        source={require('../assets/Group5.png')}
                        alt="group5"
                        width="80%"
                        height={450}
                    />

                </View>
                <Button
                bg="error.500"
                width="80%"
                marginTop={5}
                marginLeft={45}
                _hover={{ backgroundColor: "error.600" }}
                py={3}
                _text={{
                    fontSize: "md",
                    fontWeight: "bold",
                }}
                onPress={() => navigation.navigate("Add-category")}
            >
                Add Category
            </Button>
            </Box>

        </>
    )
}