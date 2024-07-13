import React from "react";
import { Image, Text, View } from "react-native";

export const Logo = (props: any) => {
  return (
    <View>
      {
        props.name === "main" ? (
          <View>
            {
              props.focused ? (
                <Image source={require("./img/main_01.png")} style={{ width: props.sizes, height: props.sizes }} />
              ) : (
                <Image source={require("./img/main_02.png")} style={{ width: props.sizes, height: props.sizes }} />
              )
            }
          </View>
        ) : null
      }
      {
        props.name === "nurse" ? (
          <View>
            {
              props.focused ? (
                <Image source={require("./img/nurse_01.png")} style={{ width: props.sizes, height: props.sizes }} />
              ) : (
                <Image source={require("./img/nurse_02.png")} style={{ width: props.sizes, height: props.sizes }} />
              )
            }
          </View>
        ) : null
      }
      {
        props.name === "guide" ? (
          <View>
            {
              props.focused ? (
                <Image source={require("./img/guide_01.png")} style={{ width: props.sizes, height: props.sizes }} />
              ) : (
                <Image source={require("./img/guide_02.png")} style={{ width: props.sizes, height: props.sizes }} />
              )
            }
          </View>
        ) : null
      }
      {
        props.name === "mine" ? (
          <View>
            {
              props.focused ? (
                <Image source={require("./img/mine_01.png")} style={{ width: props.sizes, height: props.sizes }} />
              ) : (
                <Image source={require("./img/mine_02.png")} style={{ width: props.sizes, height: props.sizes }} />
              )
            }
          </View>
        ) : null
      }
    </View>
  );
};