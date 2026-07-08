import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import DevelopmentScreen from "../components/developmentScreen";
import Header from "../components/header";
import NoteCard from "../components/noteCard";

export default function App() {
    const [currentScreen, setCurrentScreen] = useState("Home");

    if (currentScreen === "Development") {
        return <DevelopmentScreen onGoBack={() => setCurrentScreen("Home")} />;
    }

    return (
        <SafeArea>
            <Header onNavigate={() => setCurrentScreen("Development")} />

            <ContentWrapper>
                <NoteCard
                    title="teste"
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum."
                    time="22:15"
                    onDelete={() => console.log("akljçakjlçafskljç")}
                />
            </ContentWrapper>
        </SafeArea>
    );
}

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    background-color: #000000;
`;

const ContentWrapper = styled.View`
    flex: 1;
    padding: 0 20px;
    margin-top: 10px;
`;
