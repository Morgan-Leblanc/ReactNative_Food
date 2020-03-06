import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions:{
      title: 'BusinessSearch'
    }
  }
);

export default createAppContainer(navigator);

//Client ID
// U6pQCdjaqLP82-VTtDw6VQ

// API Key
// 2yb0O8YsixUvWtzHUtHMlDdWRA_5PYfI9YV5XMcTCrtMiuo4NAy1r6OxFevN507na66YpSBunXuCVoyeBtme573hs04wdlXWl18L_JG2NTbqHEqhaH2G5GJCEXRWXnYx
