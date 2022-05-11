import React, { Component } from 'react'
import { View, Button, Text } from 'react-native'
import SelectMultiple from 'react-native-select-multiple'
import ByggstadFonsterArray from '../Lists/ByggstadFonsterArray'
import ByggstadHissArray from '../Lists/ByggstadHissArray'

//Hämta från databasen

//städ uppgifter till den användaren, generera ut uppgifter med boolean värde t/f, onpress ändra värdet, en knapp för att uppdatera databasen,

class TestChecView extends Component {
    state = { selectedTasks: [] }

    onSelectionsChange = (selectedTasks) => {

        this.setState({ selectedTasks })

    }

    render() {
        return (
            <View>
                <SelectMultiple
                    items={ByggstadFonsterArray}
                    selectedItems={this.state.selectedTasks}
                    onSelectionsChange={this.onSelectionsChange} />
                <Text>Shitttt</Text>
                <SelectMultiple
                    items={ByggstadHissArray}
                    selectedItems={this.state.selectedTasks}
                    onSelectionsChange={this.onSelectionsChange} />
                <Button
                    title='Klicak'
                    onPress={() => console.log(this.state.selectedTasks)} />
            </View>
        )
    }
}
export default TestChecView
