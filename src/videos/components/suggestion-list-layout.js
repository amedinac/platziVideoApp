import React from 'react';
import {View,
        Text,
        StyleSheet
       } from 'react-native';

function SuggestionListLayout(props){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container:{
            backgroundColor: 'red',
            flex: 1
        },
        title:{
            fontSize: 25,
            backgroundColor: 'blue',
            color: 'white'
        }
    }
)

export default SuggestionListLayout;