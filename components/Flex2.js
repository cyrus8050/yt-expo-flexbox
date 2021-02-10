import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const Flex2 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>Header</Text>
            </View>
            <View style={styles.content1}><Text>content1</Text>
                <ScrollView style={styles.content2}>
                    <Text style={styles.text}>Apple</Text>
                    <Text style={styles.text}>Apple</Text>
                    <Text style={styles.text}>Apple</Text>
                    <Text style={styles.text}>Apple</Text>
                    <Text style={styles.text}>Apple</Text>
                    <Text style={styles.text}>Apple</Text>
                    <Text style={styles.text}>Apple</Text>
                    <Text style={styles.text}>Apple</Text>
                    <Text style={styles.text}>Apple</Text>
                    <Text style={styles.text}>Apple</Text>
                    <Text style={styles.text}>Apple</Text>
                    <Text style={styles.text}>Apple</Text>
                    <Text style={styles.text}>Apple</Text>
                    <Text style={styles.text}>Apple</Text>
                    <Text style={styles.text}>Apple</Text>
                    <Text style={styles.text}>Apple</Text>
                    <Text style={styles.text}>Apple</Text>
                    <Text style={styles.text}>Apple</Text>
                    <Text style={styles.text}>Apple</Text>
                    <Text style={styles.text}>Apple</Text>

                    <Text style={styles.text}>Orange</Text>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 200,
    },
    container: {
        flex: 1,
        backgroundColor: 'blue',

    },
    content1: {
        flex: 1,
        backgroundColor: 'red',
        padding: 20

    },
    content2: {

        backgroundColor: 'yellow',


    },
    text: {
        backgroundColor: 'pink',
        margin: 30,
        fontSize: 100
    }
});
export default Flex2
