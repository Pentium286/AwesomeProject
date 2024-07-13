import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const image1 = { uri: "https://static.aiwobeauty.com/server/hardware_wxapp/nurse_switch2.png" };
const image2 = { uri: "https://static.aiwobeauty.com/server/hardware_wxapp/myai_nurse_icon1.png" };
const image3 = { uri: "https://static.aiwobeauty.com/server/hardware_wxapp/nurse_icon4.png" };

export function DeviceDetailsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <View style={styles.box1Top}>
          <Image source={image1} style={styles.image1} />
          <Text style={styles.text1}>智能检测健发仪</Text>
          <View style={styles.box3}>
            <Text style={styles.text2}>连接超时</Text>
          </View>
        </View>
        <Image source={image2} style={styles.image2} />
        <View style={styles.btn1}>
          <Text style={styles.text3}>重新连接</Text>
        </View>
      </View>
      <View style={styles.box2}>
        <Image source={image3} style={styles.image3} />
        <View style={styles.box4}>
          <Text style={styles.text4}>EMS极光按摩</Text>
          <Text style={styles.text5}>7月9日 15:43:05</Text>
        </View>
        <View style={styles.box5}>
          <Text style={styles.text6}>1</Text>
          <Text style={styles.text7}>秒</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    paddingTop: 24,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    flex: 1,
  },
  box1: {
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 24,
  },
  box2: {
    backgroundColor: "#fff",
    borderRadius: 39,
    marginTop: 16,
    height: 68,
    paddingTop: 12,
    paddingRight: 20,
    paddingBottom: 12,
    paddingLeft: 14,
    flexDirection: "row",
  },
  text1: {
    fontWeight: "bold",
    fontSize: 18,
  },
  box1Top: {
    flexDirection: "row",
    position: "relative",
    marginBottom: 26,
  },
  image1: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  box3: {
    backgroundColor: "#FFE2E1",
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 3,
    position: "absolute",
    top: 2,
    right: 0,
  },
  text2: {
    color: "#FF4D43",
    fontSize: 11,
  },
  image2: {
    width: 340,
    height: 332,
    marginBottom: 64,
    alignSelf: "center",
  },
  btn1: {
    width: 128,
    height: 44,
    marginBottom: 16,
    backgroundColor: "#120E0E",
    borderRadius: 100,
    alignSelf: "center",
  },
  text3: {
    lineHeight: 44,
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
  image3: {
    width: 40,
    height: 40,
  },
  box4: {
    marginTop: 6,
    marginLeft: 12,
  },
  box5: {
    position: "absolute",
    top: 22,
    right: 24,
    flexDirection: "row",
  },
  text4: {
    color: "#120E0E",
    fontSize: 14,
  },
  text5: {
    color: "#949292",
    fontSize: 12,
  },
  text6: {
    color: "#120E0E",
    fontSize: 20,
  },
  text7: {
    color: "#949292",
    fontSize: 12,
    marginTop: 7,
  },
});