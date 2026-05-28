import MaterialSymbol from "@/shared/components/ui/MaterialSymbol";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Icon, PaperProvider } from "react-native-paper";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Icon source="star" size={24} />
    </View>
  );
}

const RootStack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return (
    <PaperProvider
      settings={{
        icon: (props) => <MaterialSymbol {...props} />,
      }}
    >
      <Navigation />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
