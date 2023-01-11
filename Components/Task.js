import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Task = (props) => {
  return (
    <View style={Styles.task}>
      <Text style={{ fontSize: 18, color: "darkblue", lineHeight: 25 }}>
        {props.text}
      </Text>
    </View>
  );
};

export default Task;

const Styles = StyleSheet.create({
  task: {
    // borderWidth: 1,
    width: "80%",
    paddingHorizontal: 5,
  },
});
