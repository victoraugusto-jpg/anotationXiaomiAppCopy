import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import DevelopmentScreen from "../components/developmentScreen";
import Header from "../components/header";

export default function App() {
    const [currentScreen, setCurrentScreen] = useState("Home");

    if (currentScreen === "Development") {
        return <DevelopmentScreen onGoBack={() => setCurrentScreen("Home")} />;
    }

    return (
        <SafeArea>
            <Header onNavigate={() => setCurrentScreen("Development")} />
        </SafeArea>
    );
}

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    background-color: #000000;
`;
