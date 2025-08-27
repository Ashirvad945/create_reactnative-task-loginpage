import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function DashboardScreen({ navigation }) {
  const handleSignOut = () => {
    // Reset navigation to Login screen
    navigation.replace("Login");
  };

  return (
    <ScrollView style={styles.container}>
      {/* Custom Header */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>

        <Text style={styles.topTitle}>Dashboard</Text>

        <TouchableOpacity onPress={handleSignOut}>
          <Ionicons name="log-out-outline" size={26} color="#FF7F50" />
        </TouchableOpacity>
      </View>

      {/* Greeting Section */}
      <View style={styles.header}>
        <View>
          <Text style={styles.welcome}>Welcome back,</Text>
          <Text style={styles.username}>Amanda 👋</Text>
        </View>
        <Image
          source={{ uri: "https://i.pravatar.cc/100" }}
          style={styles.avatar}
        />
      </View>

      {/* Feature Cards */}
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="home-outline" size={28} color="#FF7F50" />
          <Text style={styles.cardText}>Properties</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Ionicons name="card-outline" size={28} color="#FF7F50" />
          <Text style={styles.cardText}>Payments</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Ionicons name="notifications-outline" size={28} color="#FF7F50" />
          <Text style={styles.cardText}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Ionicons name="settings-outline" size={28} color="#FF7F50" />
          <Text style={styles.cardText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    padding: 20,
    marginTop:20,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 70,
  },
  topTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  welcome: {
    fontSize: 18,
    color: "#666",
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#fff",
    width: "47%",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  cardText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
});

