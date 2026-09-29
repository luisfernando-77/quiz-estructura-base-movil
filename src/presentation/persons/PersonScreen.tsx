import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { savePerson } from "../../application/services/personService";

export default function PersonScreen() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function handleSave() {
    savePerson(name, phone);
    setName("");
    setPhone("");
  }

  return (
    <View>
      <Text>Person Register</Text>

      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
      />

      <Button
        title="Save Person"
        onPress={handleSave}
      />
    </View>
  );
}