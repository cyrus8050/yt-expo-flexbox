import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Flex1 = () => {
    return (
        <View style={styles.container}>
            {/* <Text>something</Text>
            <Text>something2</Text> */}
            <Text style={styles.content1}>1</Text>
            <Text style={styles.content2}>2</Text>
            <Text style={styles.content3}>3</Text>
            <Text style={styles.content4}>4</Text>
            <Text style={styles.content5}>5</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'pink',
        // justifyContent: 'space-around',
        // alignItems: 'stretch',

    },
    content1: {
        flex: 3,
        // padding: 10,
        backgroundColor: 'red',

    },
    content2: {
        flex: 1,
        // padding: 20,
        backgroundColor: 'orange',

    },
    content3: {
        flex: 1,
        // padding: 30,
        backgroundColor: 'yellow',

    },
    content4: {
        flex: 1,
        // padding: 40,
        backgroundColor: 'green',

    },
    content5: {
        flex: 1,
        // padding: 50,
        backgroundColor: 'blue',

    },
});
export default Flex1
