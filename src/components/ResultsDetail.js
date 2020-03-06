import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState, useEffect } from "react";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{result.name}</Text>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text>{result.rating} Stars, {result.review_count} Review</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    marginLeft:15,
  },
    image:{
        width:250,
        borderRadius:4,
        height:120,
    },
    name:{
        fontWeight:"bold",
    }
});

export default ResultsDetail;
