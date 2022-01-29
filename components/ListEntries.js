import React from 'react';
import {
    StyleSheet, 
    Button, 
    View
} from 'react-native';
import { ListItem } from 'react-native-elements';

const ListEntries = () => {
    return(
        <View>
            <ListItem>
                <ListItem.Content>
                    <ListItem.Title style={styles.titleFont}>11:37 PM</ListItem.Title>
                    <ListItem.Subtitle>1/28/2022</ListItem.Subtitle>
                </ListItem.Content>
                <Button 
                    title = 'Remove'
                    color = 'red'
                    onPress={() => {
                        
                    }}
                
                />
            </ListItem>
        </View>
    );
}

const styles= StyleSheet.create({
    titleFont:{
        fontWeight: 'bold',
        fontSize: 30
    }

})
export default ListEntries;