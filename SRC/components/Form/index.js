import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultImc from "./ResultImc";


export default function Form(){

const [height, setHeight] = useState(null)
const [weight, setWeight] = useState(null)
const [message, setMessage] = useState("preencha o peso e altura");
const [imc, setImc] = useState(null)
const [textButton, setTextButton] = useState("Calcular ")

function imcCalcular(){
    return setImc((weight/(height*height)).toFixed(2))
}
function validationImc(){
    if(weight != null && height != null){
        imcCalcular()
        setHeight(null)
        setWeight(null)
        setMessage("seu IMC é = ")
        setTextButton("Calcular Novamente")
        return
    }
    setTextButton("Preencha novamente o peso e altura")
}

    return(
        <View>

        <View>
                <Text>Altura</Text>
                <TextInput
                onChange={setHeight}
                value={height}
                placeholder="Ex. 1.75'"
                keyboardType="numeric"    
                />
                <Text>peso</Text>
                <TextInput
                onChange={setWeight}
                value={weight}
                placeholder="75.865"
                keyboardType="numeric"
                />
                <Button
                onpress={() => validationImc}              
                title={textButton}
                color= "#61dafb"
                />

            
            </View>
            <ResultImc messageResultImc={message} ResultImc={imc}/>
        </View>   


    );
}