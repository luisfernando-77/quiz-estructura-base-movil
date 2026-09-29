import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { saveUser } from "../../application/services/userService";

export default function UserScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSave() {
    saveUser(name, email);
    setName("");
    setEmail("");
  }

  return (
    <View>
      <Text>User Register</Text>

      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <Button
        title="Save User"
        onPress={handleSave}
      />
    </View>
  );
}