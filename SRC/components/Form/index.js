import React from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function Form(){
    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                placeholder="Ex. 1.75'"
                keyboardType="numeric"    
                />
                <Text>peso</Text>
                <TextInput
                placeholder="75.865"
                keyboardType="numeric"
                />
                <Button
                onpress={validation()}              
                title="Calcular IMC"
                color= "#61dafb"
                />

            
            </View>
        </View>   


    );
}