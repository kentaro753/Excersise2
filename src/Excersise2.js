import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CustomNavigationBar from "./CustomNavigationBar";
import HomeScreen from "./HomeScreen";
import DetailScreen from "./DetailScreen";
import React from "react";

export default function Excersise2(){
    const Stack = createStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{header: (props) => <CustomNavigationBar {...props}/>}}>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Detail" component={DetailScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}