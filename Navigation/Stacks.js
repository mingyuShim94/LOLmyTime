import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import NameSearch from "../Screens/NameSearch";
import DateSetting from "../Screens/DateSetting";
import Results from "../Screens/Results";
const NativeStack = createNativeStackNavigator();

const Stacks = ({ navigation }) => (
  <NativeStack.Navigator>
    <NativeStack.Screen
      name="NameSearch"
      component={NameSearch}
      options={{
        headerStyle: {
          backgroundColor: "slateblue",
        },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    />
    <NativeStack.Screen
      name="DateSetting"
      component={DateSetting}
      options={{
        headerStyle: {
          backgroundColor: "slateblue",
        },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    />
    <NativeStack.Screen
      name="Results"
      component={Results}
      options={{
        headerStyle: {
          backgroundColor: "slateblue",
        },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    />
  </NativeStack.Navigator>
);

export default Stacks;
