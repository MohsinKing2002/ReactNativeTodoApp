import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import Task from "./Components/Task";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { useState } from "react";

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const deleteItem = (index) => {
    let temp = [...tasks];
    temp.splice(index, 1);
    setTasks(temp);
  };

  return (
    <View style={Styles.container}>
      <Text
        style={{
          color: "red",
          fontSize: 18,
          borderBottomWidth: 1,
          borderBottomColor: "white",
          textAlign: "center",
          paddingBottom: 5,
          width: "100%",
        }}
      >
        React Native Todo
      </Text>
      <View style={Styles.box}>
        <Text style={Styles.header}>Today's tasks </Text>
        <View style={Styles.items}>
          <FlatList
            data={tasks}
            keyExtractor={(key) => key}
            ListEmptyComponent={
              <View style={Styles.imgBox}>
                <Image
                  style={Styles.img}
                  source={{
                    uri: "https://us.123rf.com/450wm/betka82/betka822205/betka82220500030/betka82220500030.jpg?ver=6",
                  }}
                />
              </View>
            }
            renderItem={(item) => {
              return (
                <View style={Styles.item}>
                  <Text style={{ color: "darkblue", fontSize: 17 }}>
                    {item.index + 1}.
                  </Text>
                  <Task text={item.item} />
                  <TouchableOpacity onPress={() => deleteItem(item.index)}>
                    <Text style={[Styles.btn, Styles.deleteBtn]}> - </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>

        <View style={Styles.controllers}>
          <TextInput
            value={task}
            onChangeText={(val) => setTask(val)}
            placeholder="Type a task.."
            style={Styles.input}
          />
          <TouchableOpacity
            disabled={!task}
            onPress={() => {
              setTasks([...tasks, task]) & setTask(null);
            }}
          >
            <Text style={Styles.btn}> + </Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f4f7ff",
  },
  box: {
    // borderWidth: 1,
    height: "86%",
    width: "90%",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "darkblue",
    marginVertical: 15,
    letterSpacing: 2,
  },
  items: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "white",
    height: "80%",
  },
  item: {
    backgroundColor: "white",
    marginTop: 5,
    marginBottom: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
  },
  deleteBtn: {
    borderRadius: 0,
    elevation: 4,
    shadowColor: "black",
    paddingHorizontal: 8,
    paddingVertical: 0,
    fontSize: 25,
  },
  controllers: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    marginTop: 15,
  },
  input: {
    width: "80%",
    backgroundColor: "white",
    padding: 8,
    fontSize: 18,
    borderRadius: 10,
    elevation: 4,
    shadowColor: "dark",
  },
  btn: {
    borderRadius: 50,
    paddingHorizontal: 7,
    paddingVertical: 3,
    backgroundColor: "white",
    fontSize: 30,
    elevation: 4,
    shadowColor: "dark",
  },
  imgBox: {
    height: 550,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    height: 300,
    width: 300,
  },
});

export default App;
