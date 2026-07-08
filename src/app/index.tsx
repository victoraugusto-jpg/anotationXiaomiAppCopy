import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import DevelopmentScreen from "../components/developmentScreen";
import FloatingButton from "../components/floatingButton";
import Header from "../components/header";
import NotesList from "../components/notesList";

interface Note {
    id: string;
    title: string;
    content: string;
    time: string;
}

export default function App() {
    const [currentScreen, setCurrentScreen] = useState("Home");
    const [notes, setNotes] = useState<Note[]>([]);

    const addNote = () => {
        const newNote: Note = {
            id: Date.now().toString(),
            title: "anotation",
            content: "anotationr",
            time: "21:03",
        };
        setNotes((prevNotes) => [newNote, ...prevNotes]);
    };

    const deleteNote = (id: string) => {
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    };

    if (currentScreen === "Development") {
        return <DevelopmentScreen onGoBack={() => setCurrentScreen("Home")} />;
    }

    return (
        <SafeArea>
            <Header onNavigate={() => setCurrentScreen("Development")} />
            <ContentWrapper>
                <NotesList notes={notes} onDeleteNote={deleteNote} />
                <FloatingButton onPress={addNote} />
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
    margin-top: 20px;
`;
