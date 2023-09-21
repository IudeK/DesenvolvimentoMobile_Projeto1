import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function TabScreen1() {
    const [clickCount, setClickCount] = useState(0);

    const handleButtonClick = () => {
        setClickCount(clickCount + 1);
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Contagem de Cliques: {clickCount}</Text>
            <TouchableOpacity onPress={handleButtonClick}>
                <Text style={{ color: 'blue' }}>Clique para Adicionar</Text>
            </TouchableOpacity>
        </View>
    );
}



export default TabScreen1;
