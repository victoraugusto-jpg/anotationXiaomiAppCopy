import { useState } from "react";
import styled from "styled-components/native";
import DevelopmentScreen from "../components/developmentScreen";

export default function App() {
    const [currentScreen, setCurrentScreen] = useState("Home");

    if (currentScreen === "Development") {
        return <DevelopmentScreen onGoBack={() => setCurrentScreen("Home")} />;
    }

    return <SafeArea>{}</SafeArea>;
}

const SafeArea = styled.SafeAreaView`
    flex: 1;
    background-color: #000000;
`;
