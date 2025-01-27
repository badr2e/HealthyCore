import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    marginTop: 50,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#666",
    marginBottom: 30,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: "#f5f5f5",
    color: "#333",
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
    marginBottom: 5,
  },
  dateInput: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 15,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    marginBottom: 15,
  },
  dateInputPlaceholder: {
    fontSize: 14,
    color: "#aaa",
  },
  dateInputText: {
    fontSize: 14,
    color: "#333",
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  genderButton: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 4,
    backgroundColor: "#f5f5f5",
  },
  genderButtonSelected: {
    backgroundColor: "#6B8EFF",
    borderColor: "#6B8EFF",
  },
  genderButtonText: {
    color: "#666",
    fontSize: 14,
  },
  genderButtonTextSelected: {
    color: "#fff",
  },
  button: {
    backgroundColor: "#6B8EFF",
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  orText: {
    textAlign: "center",
    marginVertical: 20,
    color: "#666",
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkboxBox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    marginRight: 10,
    borderRadius: 4,
  },
  checked: {
    backgroundColor: "#6B8EFF",
  },
  checkboxText: {
    flex: 1,
    fontSize: 12,
    color: "#666",
  },
  forgotPassword: {
    textAlign: "right",
    color: "#666",
    marginTop: -10,
    marginBottom: 20,
    textDecorationLine: "underline",
  },
  loginLink: {
    textAlign: "center",
    marginTop: 30,
    marginBottom: 50,
    color: "#666",
  },
  signupLink: {
    textAlign: "center",
    marginTop: 30,
    marginBottom: 50,
    color: "#666",
  },
  linkText: {
    color: "#6B8EFF",
    fontWeight: "bold",
  },
  loginForm: {
    marginTop: 20,
  },
  errorText: {
    color: "#FF4444",
    fontSize: 12,
    marginTop: -10,
    marginBottom: 15,
    marginLeft: 5,
  },
  socialButtonsContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
});
