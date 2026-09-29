import { useEffect, useState } from "react";
import { View, Button } from "react-native";

import UserScreen from "./src/presentation/users/UserScreen";
import ProductScreen from "./src/presentation/products/ProductScreen";
import PersonScreen from "./src/presentation/persons/PersonScreen";

import { initializeDatabase } from "./src/infrastructure/database/sqlite";


export default function App() {

  const [screen, setScreen] = useState("menu");

  useEffect(() => {
    initializeDatabase();
  }, []);


  if (screen === "users") {
    return <UserScreen />;
  }

  if (screen === "products") {
    return <ProductScreen />;
  }

  if (screen === "persons") {
    return <PersonScreen />;
  }


  return (
    <View>

      <Button
        title="Users"
        onPress={() => setScreen("users")}
      />

      <Button
        title="Products"
        onPress={() => setScreen("products")}
      />

      <Button
        title="Persons"
        onPress={() => setScreen("persons")}
      />

    </View>
  );
}