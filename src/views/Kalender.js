import * as React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import moment from 'moment';
import { TouchableOpacity } from 'react-native';
import { Linking } from 'react-native';
import { TextInput } from 'react-native';


LocaleConfig.locales['sv'] = {
    monthNames: [
      'Januari',
      'Februari',
      'Mars',
      'April',
      'Maj',
      'Juni',
      'Juli',
      'Augusti',
      'September',
      'Oktober',
      'November',
      'December'
    ],
    dayNames: ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag'],
    dayNamesShort: ['Sön.', 'Mån.', 'Tis.', 'Ons.', 'Tors.', 'Fre.', 'Lör.'],
  };
  LocaleConfig.defaultLocale = 'sv';

  

export default class Kalender extends React.Component {
    

    getFromTo = (dateObject) => {

        let keys = Object.keys(dateObject)
           let x = {
                from: keys[0],
                to: keys[keys.length - 1]
            }
            return (
               "Jag önskar ha ledigt fr.o.m " + x.from + ' till och med ' + x.to
            )
        }


    state = {
        markedDates: {},
        isStartDatePicked: false,
        isEndDatePicked: false,
        startDate: ''
    }

    onDayPress = (day) => {
        if (this.state.isStartDatePicked == false) {
            let markedDates = {}
            markedDates[day.dateString] = { startingDay: true, color: '#4682B4', textColor: '#FFFFFF' };
            this.setState({
                markedDates: markedDates,
                isStartDatePicked: true,
                isEndDatePicked: false,
                startDate: day.dateString,
            });
        } else {
            let markedDates = this.state.markedDates
            let startDate = moment(this.state.startDate);
            let endDate = moment(day.dateString);
            let range = endDate.diff(startDate, 'days')
            if (range > 0) {
                for (let i = 1; i <= range; i++) {
                    let tempDate = startDate.add(1, 'day');
                    tempDate = moment(tempDate).format('YYYY-MM-DD')
                    if (i < range) {
                        markedDates[tempDate] = { color: '#91c3d9', textColor: '#FFFFFF' };
                    } else {
                        markedDates[tempDate] = { endingDay: true, color: '#4682B4', textColor: '#FFFFFF' };
                    }
                }
                this.setState({
                    markedDates: markedDates,
                    isStartDatePicked: false,
                    isEndDatePicked: true,
                    startDate: ''
                });
            } else {
                alert('Välj ett kommande datum!');
            }
        }
    }

//console.log(this.getFromTo(this.state.markedDates)


    render() {
        
        return (
    
            <View style={styles.container}>
                <Calendar
                    minDate={Date()}
                    monthFormat={"MMMM yyyy"}
                    markedDates={this.state.markedDates}
                    markingType="period"
                    hideExtraDays={true}
                   // hideDayNames={true}
                    onDayPress={this.onDayPress}
                    style={styles.kalenderStyle}
                    showWeekNumbers={true}
                    
                    
                />

                
                <View style= {styles.btnContainer}>
                <TouchableOpacity onPress={() => Linking.openURL(`mailto:JohnDoe@hotmail.com?subject=Semesteransökan&body=${this.getFromTo(this.state.markedDates)}%0D%0A%0D%0A${this.state.txtInputValue}`)}>
                <View style={styles.leftBtn}>
                    <Text style ={styles.leftBtnText}>Semsteransökan</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL(`mailto:johnDoe@hotmail.com?subject=Ledighetsansökan&body=${this.getFromTo(this.state.markedDates)}%0D%0A%0D%0A${this.state.txtInputValue}`)}>
                <View style={styles.rightBtn}>
                    <Text style ={styles.rightBtnText}>Ledighetsansökan</Text>
                </View>
                </TouchableOpacity>
                </View>
                <View>
                    <TextInput 
                        style={styles.txtInputStyle}
                        multiline = {true}
                        numberOfLines={5}
                        placeholder="Skriv en notis"
                        onChangeText={(value) => this.setState({txtInputValue: value})}
                        value={this.state.txtInputValue}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        padding: 20,
        justifyContent: 'center',
    },

    kalenderStyle: {
        borderRadius: 5,
        backgroundColor: "#4682B4",
        padding: 7
    },

    btnContainer: {
        justifyContent: "space-between",
       // backgroundColor: "blue",
        flexDirection: "row"

    },  

    leftBtn: {
        backgroundColor: "#4682B4",
        // width: 200,
        height: 40,
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        borderRadius: 5,
        color: "#FFFFFF"
    },

    leftBtnText: {
        color: '#FFFFFF',
    },

    rightBtn: {
        backgroundColor: "#4682B4",
        height: 40,
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        borderRadius: 5,

    },

    rightBtnText: {
        color: '#FFFFFF',
    },

    txtInputStyle: {
        backgroundColor: "#fff",
        marginTop: 25,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        padding: 5,
        
    }

});

