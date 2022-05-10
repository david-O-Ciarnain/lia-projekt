import React, { Component } from 'react'
import { View } from 'react-native'
import SelectMultiple from 'react-native-select-multiple'
import ByggstadFonsterArray from '../Lists/ByggstadFonsterArray'

const fruits = ['Apples', 'Oranges', 'Pears']
// --- OR ---
// const fruits = [
//   { label: 'Apples', value: 'appls' },
//   { label: 'Oranges', value: 'orngs' },
//   { label: 'Pears', value: 'pears' }
// ]

class App extends Component {
    state = { selectedFruits: [] }

    onSelectionsChange = (selectedFruits) => {
        // selectedFruits is array of { label, value }
        this.setState({ selectedFruits })
        console.log(selectedFruits)
    }

    render() {
        return (
            <View>
                <SelectMultiple
                    items={ByggstadFonsterArray}
                    selectedItems={this.state.selectedFruits}
                    onSelectionsChange={this.onSelectionsChange} />
            </View>
        )
    }
}
export default App