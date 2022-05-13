import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
//import CheckBox from "@react-native-community/checkbox";
import BouncyCheckbox from "react-native-bouncy-checkbox";



export default function Checkbox({ text }) {


  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <BouncyCheckbox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
          fillColor="#4682B4"
          size={35}
          text={text}
          onPress={() => setSelection(!isSelected)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "column",

  },
  checkbox: {
    alignSelf: "center",
    marginHorizontal: 8,
  },
  label: {
    margin: 8,

  },
});
