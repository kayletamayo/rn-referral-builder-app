import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/Ionicons";
import { useTheme } from 'react-native-paper';

import { APP_ROUTES } from './routes';

import { ReferralBuilder, ReferralList } from '@screens';
const Tab = createBottomTabNavigator();

const RouteIcons = {
  [APP_ROUTES.REFERRAL_BUILDER]: "document-text-outline",
  [APP_ROUTES.REFERRAL_LIST]: "briefcase-outline",
};

const AppRoutes = () => {
  const theme = useTheme();
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          return <Icon name={RouteIcons[route.name]} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary,
        headerTitle: "",
        tabBarHideOnKeyboard: true,
      })}
      >
        {/* if list has details page, we can create a separate stack for this. */}
        <Tab.Screen
          name={APP_ROUTES.REFERRAL_BUILDER}
          component={ReferralBuilder}
          options={{
            tabBarLabel: "Create",
          }}
        />
        <Tab.Screen
          name={APP_ROUTES.REFERRAL_LIST}
          component={ReferralList}
          options={{
            tabBarLabel: "View",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppRoutes;