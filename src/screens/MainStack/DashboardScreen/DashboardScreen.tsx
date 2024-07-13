import React from "react";
import { Text, StyleSheet, ImageBackground, View, Image } from "react-native";
import { ScreenDefaultContainer } from "../../../components/atoms";

const image = { uri: "https://static.aiwobeauty.com/server/hardware_wxapp/main_bg2.jpg" };
const imageLogo = { uri: "https://static.aiwobeauty.com/server/hardware_wxapp/main_hair.png" };

export function DashboardScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <ScreenDefaultContainer>
          <View style={styles.box}>
            <View style={styles.content}>
              <View style={styles.left}>
                <Text style={styles.title}>毛囊检测</Text>
                <Text style={styles.dec}>焕发效果随时看</Text>
                <View style={styles.boxBtn}>
                  <Text style={styles.boxBtnText}>去检测</Text>
                </View>
              </View>
              <View style={styles.right}>
                <Image style={styles.imageLogo} source={imageLogo} />
              </View>
            </View>
          </View>
        </ScreenDefaultContainer>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  box: {
    alignItems: "center",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 110,
  },
  content: {
    width: 343,
    height: 154,
    backgroundColor: "#fff",
    borderRadius: 24,
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    color: "#120E0E",
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 24,
    marginLeft: 32,
  },
  dec: {
    color: "#949292",
    fontSize: 12,
    marginTop: 6,
    marginLeft: 32,
  },
  boxBtn: {
    width: 64,
    height: 28,
    backgroundColor: "#f8e9e8",
    borderRadius: 14,
    marginTop: 34,
    marginLeft: 32,
  },
  boxBtnText: {
    color: "#120e0e",
    fontSize: 12,
    textAlign: "center",
    lineHeight: 28,
  },
  imageLogo: {
    width: 154,
    height: 154,
  },
  left: {
    width: 154,
    height: 154,
  },
  right: {
    width: 154,
    height: 154,
    marginLeft: 40,
  },
});
