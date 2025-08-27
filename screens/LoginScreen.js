import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { loginUser } from "../services/api";
import { validateLogin } from "../utils/validation";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);

  // Focus states
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const handleLogin = async () => {
    const error = validateLogin(email, password);
    if (error) {
      alert(error);
      return;
    }

    const response = await loginUser(email, password);
    if (response.success) {
      navigation.navigate("Dashboard");
    } else {
      alert(response.message);
    }
  };

  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>

      {/* Back Arrow */}
{/* <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
  <Text style={styles.backArrow}>{"<"}</Text>
</TouchableOpacity> */}


      {/* Title */}
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Enter your login details.</Text>

      {/* Email Field */}
      <Text style={styles.label}>Email address</Text>
      <TextInput
        style={[
          styles.input,
          { borderColor: emailFocus ? "#FF7F50" : "#ccc" },
        ]}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        onFocus={() => setEmailFocus(true)}
        onBlur={() => setEmailFocus(false)}
      />

      {/* Password Field */}
      <Text style={styles.label}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={[
            styles.input,
            { flex: 1, marginBottom: 0, borderColor: passwordFocus ? "#FF7F50" : "#ccc" },
          ]}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={secureText}
          onFocus={() => setPasswordFocus(true)}
          onBlur={() => setPasswordFocus(false)}
        />
        <TouchableOpacity
          onPress={() => setSecureText(!secureText)}
          style={styles.eyeIcon}
        >
          <Ionicons
            name={secureText ? "eye-off" : "eye"}
            size={22}
            color="#999"
          />
        </TouchableOpacity>
      </View>

      {/* Forgot Password */}
      <TouchableOpacity style={styles.forgotBtn}>
        <Text style={styles.forgot}>Forgot password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: email && password ? "#FF7F50" : "#ccc" },
        ]}
        onPress={handleLogin}
        disabled={!email || !password}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    padding: 20,
    marginTop: 20,
  },
  backBtn: {
    marginBottom: 200,
    fontWeight:"bold",
    color:"#FF7F50",
  },


  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 6,
    color: "#333",
  },
  input: {
    borderWidth: 1.5,
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  eyeIcon: {
    position: "absolute",
    right: 15,
  },
  forgotBtn: {
    alignSelf: "flex-end",
    marginBottom: 25,
  },
  forgot: {
    color: "#FF7F50",
    fontWeight: "500",
  },
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  
});



