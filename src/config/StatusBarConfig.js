import { StatusBar, Platform } from "react-native";

//"letras" brancas
StatusBar.setBarStyle("light-content");

if (Platform.OS === "android") {
  StatusBar.setBackgroundColor("#111");
}
