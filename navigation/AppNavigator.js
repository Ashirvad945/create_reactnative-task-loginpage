// import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import LoginScreen from "../screens/LoginScreen";
// import DashboardScreen from "../screens/DashboardScreen";

// const Stack = createStackNavigator();

// export default function AppNavigator() {
//   return (
//     <Stack.Navigator initialRouteName="Login">
//       <Stack.Screen name="Login" component={LoginScreen} />
//       <Stack.Screen name="Dashboard" component={DashboardScreen} />
//     </Stack.Navigator>
//   );
// }



import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import DashboardScreen from "../screens/DashboardScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen 
        name="Login" 
        component={LoginScreen}
        options={{ headerShown: false }}   // 👈 ye line header hata degi
      />
      <Stack.Screen 
        name="Dashboard" 
        component={DashboardScreen}
        options={{ headerShown: false }}   // Agar dashboard ka bhi header nahi chahiye
      />
    </Stack.Navigator>
  );
}

