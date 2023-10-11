
import { useState, useEffect } from "react";
import { Text, Pressable, StyleSheet, View, FlatList, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BlockRGB from "./components/BlockRGB";

function HomeScreen({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
    headerRight: () => <Button onPress={addColor} title="Add colour" />
    });
    });
    







  const [colorArray, setColorArray] = useState([
    { red: 255, green: 0, blue: 0, id: "0" },
    { red: 0, green: 255, blue: 0, id: "1" },
    { red: 0, green: 0, blue: 255, id: "2" }
  ]);
  


 





  function renderItem({ item }) {
    return (

      <Pressable
      onPress={() => {
      navigation.navigate("Details", item);
      }}>
    
    <BlockRGB red={item.red} green={item.green} blue={item.blue} />
  </Pressable>
    );
  }
  
  
 


  
  function addColor() {
    setColorArray([
      ...colorArray,
      {
        red: Math.floor(Math.random() * 256),
        green: Math.floor(Math.random() * 256),
        blue: Math.floor(Math.random() * 256),
        id: `${colorArray.length}`
      }
    ]);
  }
  
  
  
  function resetColors() {
    setColorArray ([]);
  }
  
  
  
  
  return (
    <View style={styles.container}>
    
    <Pressable
    style={{ height: 40, justifyContent: "center" }}
    onPress={addColor}>
    <Text style={{ color: "red" }}>Add colour</Text>
    </Pressable>


    <Pressable
    style={{ height: 40, justifyContent: "center" }}
    onPress={resetColors}>

    <Text style={{ color: "red" }}>Reset</Text>


    </Pressable>

    
    
    
    
    <FlatList
    style={{ width: "100%" }}
    data={colorArray}
    renderItem={renderItem}
    keyExtractor={(item) => item.id}
    />
    </View>
    );
  }


  function DetailsScreen({ route }) {
    const { red, green, blue } = route.params;
    
    
    return (
    <View
    style={[
    styles.container,
    { backgroundColor: `rgb(${red}, ${green}, ${blue})` }
    ]}>
    <View style={{ padding: 30 }}>
    <Text style={{ fontSize: 20, padding: 10 }}>Red: {red}</Text>
    <Text style={{ fontSize: 20, padding: 10 }}>Green: {green}</Text>
    <Text style={{ fontSize: 20, padding: 10 }}>Blue: {blue}</Text>
    </View>
    </View>
    );
    }
    
    




  const Stack = createStackNavigator();
  
  export default function App() {
    return (
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Colour List" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
      </NavigationContainer>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        
        backgroundColor: "#fff",
        alignItems: "center",
      },
      list: {
        width: "100%"
      }
    });
    