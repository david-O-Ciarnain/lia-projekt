import React, { useState } from "react";
import {Text, StyleSheet, View } from "react-native";
//import CheckBox from "@react-native-community/checkbox";
import BouncyCheckbox from "react-native-bouncy-checkbox";



export default function Checkbox() {

  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <BouncyCheckbox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
          fillColor="yellowgreen"
        />
        <Text style={styles.label}>Klar?</Text>
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
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});
