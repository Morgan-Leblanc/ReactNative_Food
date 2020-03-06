import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }
  console.log("---------------------", result);

  return (
    <View>
      <Text style={{ fontSize: 30 }}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item, index }) => {
          return (
            <View>
              <Image style={styles.image} source={{ uri: item }} />
              {index === 0 ? <Text>{result.phone}</Text> : null }
            </View>
          );
        }}
      />
    </View>
  );
};

export default ResultsShowScreen;

const styles = StyleSheet.create({
  image: {
    width: "auto",
    borderRadius: 4,
    height: 150,
    margin: 10
  }
});
