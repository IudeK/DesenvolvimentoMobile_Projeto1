import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function TabScreen4() {
    var [result, setResult] = useState('');

    function setOperation(string){
        setResult(result + string);
    }

    function cleanOperation(){
        setResult('');
    }

    function evaluateOperation(){
        setResult(eval(result))
    }

    return (
        <View style={styles.container}>
            <View style={styles.resultContainer}>
                <Text style={styles.resultText}>{result}</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <View style={styles.numberButtons}>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity
                            style={styles.numberButton}
                            onPress={() => cleanOperation()}
                        >
                            <Text style={styles.numberButtonText}>AC</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity
                            style={styles.numberButton}
                            onPress={() => setOperation('7')}
                        >
                            <Text style={styles.numberButtonText}>7</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.numberButton}
                            onPress={() => setOperation('8')}
                        >
                            <Text style={styles.numberButtonText}>8</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.numberButton}
                            onPress={() => setOperation('9')}
                        >
                            <Text style={styles.numberButtonText}>9</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity
                            style={styles.numberButton}
                            onPress={() => setOperation('4')}
                        >
                            <Text style={styles.numberButtonText}>4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.numberButton}
                            onPress={() => setOperation('5')}
                        >
                            <Text style={styles.numberButtonText}>5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.numberButton}
                            onPress={() => setOperation('6')}
                        >
                            <Text style={styles.numberButtonText}>6</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity
                            style={styles.numberButton}
                            onPress={() => setOperation('1')}
                        >
                            <Text style={styles.numberButtonText}>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.numberButton}
                            onPress={() => setOperation('2')}
                        >
                            <Text style={styles.numberButtonText}>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.numberButton}
                            onPress={() => setOperation('3')}
                        >
                            <Text style={styles.numberButtonText}>3</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity
                            style={styles.numberButton}
                            onPress={() => setOperation('0')}
                        >
                            <Text style={styles.numberButtonText}>0</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.numberButton}
                            onPress={() => setOperation('.')}
                        >
                            <Text style={styles.numberButtonText}>.</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.operationButtons}>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity
                            style={styles.operationButton}
                            onPress={() => setOperation('/')}
                        >
                            <Text style={styles.operationButtonText}>/</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity
                            style={styles.operationButton}
                            onPress={() => setOperation('*')}
                        >
                            <Text style={styles.operationButtonText}>*</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity
                            style={styles.operationButton}
                            onPress={() => setOperation('-')}
                        >
                            <Text style={styles.operationButtonText}>-</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity
                            style={styles.operationButton}
                            onPress={() => setOperation('+')}
                        >
                            <Text style={styles.operationButtonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity
                            style={styles.operationButton}
                            onPress={() => evaluateOperation()}
                        >
                            <Text style={styles.operationButtonText}>=</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333', 
    },
    resultContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    resultText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white', 
        marginRight: 20,
        marginBottom: 10,
    },
    buttonsContainer: {
        flexDirection: 'row',
        flex: 2,
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
    },
    numberButtons: {
        flex: 2,
    },
    operationButtons: {
        flex: 0.985,
        backgroundColor: '#333', 
        borderRadius: 10,
        marginRight: 0,
    },
    buttonRow: {
        flexDirection: 'row',
    },
    numberButton: {
        flex: 1,
        aspectRatio: 1.38,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white', 
        margin: 0, 
        borderRadius: 0,
        borderWidth: 1,
        borderColor: '#ccc', 
    },
    operationButton: {
        flex: 1,
        aspectRatio: 1.37,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange', 
        margin: 1, 
        borderRadius: 0,
        borderWidth: 1,
        borderColor: '#ccc', 
    },
    numberButtonText: {
        color: 'black', 
        fontSize: 24,
    },
    operationButtonText: {
        color: 'black', 
        fontSize: 24,
    },
});

export default TabScreen4;
