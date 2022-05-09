import { View, Image, Text } from 'react-native'
import { Calendar, CalendarList, Agenda, Arrow } from 'react-native-calendars';

export default function Kalender() {
    return (
        <View>
            <Image source={require("../../assets/arbetsmiljöhandbok.png")} />
            <Text>Kalender</Text>
            <Calendar
                enableSwipeMonths={true}
            />
        </View>
    )
}