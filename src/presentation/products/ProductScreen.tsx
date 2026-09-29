import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { saveProduct } from "../../application/services/productService";

export default function ProductScreen() {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function handleSave() {
    saveProduct(name, Number(price));
    setName("");
    setPrice("");
  }

  return (
    <View>
      <Text>Product Register</Text>

      <TextInput
        placeholder="Product name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Price"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      <Button
        title="Save Product"
        onPress={handleSave}
      />
    </View>
  );
}