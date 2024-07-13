import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as screenComponents from "../../screens";
import { useCommonScreenOptions, Logo } from "../components";

export type MainStackParamList = {
  DASHBOARD_SCREEN: undefined;
  DEVICE_DETAILS_SCREEN: undefined;
  DEVICE_NRF_TEST_SCREEN: undefined;
  DEVICE_CONNECT_DISCONNECT_TEST_SCREEN: undefined;
  AUTODISCONNECT_SCREEN: undefined;
  INSTANCE_DESTROY_SCREEN: undefined;
  DEVICE_ON_DISCONNECT_TEST_SCREEN: undefined;
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

const Tab = createBottomTabNavigator();

export function MainStackComponent() {
  const commonScreenOptions = useCommonScreenOptions();

  return (
    // <MainStack.Navigator screenOptions={commonScreenOptions}>
    //   <MainStack.Screen
    //     name="DASHBOARD_SCREEN"
    //     component={screenComponents.DashboardScreen}
    //     options={{
    //       headerTitle: 'DashboardScreen'
    //     }}
    //   />
    //   <MainStack.Screen
    //     name="DEVICE_DETAILS_SCREEN"
    //     component={screenComponents.DeviceDetailsScreen}
    //     options={{
    //       headerTitle: 'DeviceDetailsScreen'
    //     }}
    //   />
    //   <MainStack.Screen
    //     name="DEVICE_NRF_TEST_SCREEN"
    //     component={screenComponents.DevicenRFTestScreen}
    //     options={{
    //       headerTitle: 'DevicenRFTestScreen'
    //     }}
    //   />
    //   <MainStack.Screen
    //     name="DEVICE_CONNECT_DISCONNECT_TEST_SCREEN"
    //     component={screenComponents.DeviceConnectDisconnectTestScreen}
    //     options={{
    //       headerTitle: 'DeviceConnectDisconnectTestScreen'
    //     }}
    //   />
    //   <MainStack.Screen
    //     name="INSTANCE_DESTROY_SCREEN"
    //     component={screenComponents.InstanceDestroyScreen}
    //     options={{
    //       headerTitle: 'InstanceDestroyScreen'
    //     }}
    //   />
    //   <MainStack.Screen
    //     name="DEVICE_ON_DISCONNECT_TEST_SCREEN"
    //     component={screenComponents.DeviceOnDisconnectTestScreen}
    //     options={{
    //       headerTitle: 'DeviceOnDisconnectTestScreen'
    //     }}
    //   />
    // </MainStack.Navigator>
    <Tab.Navigator
      screenOptions={
        ({ route }) => ({
          tabBarIcon: ({ focused }) => {
            return <Logo sizes={24} focused={focused ? 0 : 1} name={route.name} />;
          },
          tabBarActiveTintColor: "#232323",
        })
      }
    >
      <Tab.Screen
        name="main"
        component={screenComponents.DashboardScreen}
        options={{
          title: "检测",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="nurse"
        component={screenComponents.DeviceDetailsScreen}
        options={{ title: "护理" }}
      />
      <Tab.Screen
        name="guide"
        component={screenComponents.DevicenRFTestScreen}
        options={{ title: "发现" }}
      />
      <Tab.Screen
        name="mine"
        component={screenComponents.DeviceConnectDisconnectTestScreen}
        options={{ title: "我的" }}
      />
    </Tab.Navigator>
  );
}