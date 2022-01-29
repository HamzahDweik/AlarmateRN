import React, { useState } from 'react';
import {
    Button,
    Alert
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const TimeSelect = () => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [text, setText] = useState('empty')

    const onChange = (event, selection) => {
        const currentDate = selection || date;
        setOpen(Platform.OS == 'ios')
        setDate(currentDate)

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + tempDate.getMonth() + 1 + '/' + tempDate.getFullYear();
        let fTime = 'Hours: ' + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes();
        setText(fDate + '\n' + fTime)

        console.log(fDate + '\n' + fTime)
    }
    const ShowMode = () => {
        setOpen(true)
    }

    
    {/*const [isSelect, setSelect] = useState(false);
    const showSelection = () => {
        setSelect(true);
    }
    const hideSelection = () => {
        setSelect(false);
    }
    const selection = (datetime) => {
        var currentTime = Date.now();
        {/*if (datetime.getTime() < currentTime){
            Alert.alert("Please choose a time in the future.");
            hideSelection();
            return;
        }
        hideSelection();
    }*/}
    return(
        <>
            <Button 
                title = "+ Add Alarms"
                color = "blue"
                onPress={() => {
                    setOpen(true);
                }}
            />
            <DateTimePicker 
            value = {date}
            mode = 'datetime'
            is24Hour={true}
            display= 'default'
            OnChange= {onChange}
            
            
            />

        </>
    );
}

export default TimeSelect;