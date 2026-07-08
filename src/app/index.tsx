import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import AddNoteModal from "../components/addNoteModal";
import BottomNav from "../components/bottomNav";
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
    const [isModalVisible, setIsModalVisible] = useState(false);

    const mudarTela = (tela: string) => {
        setCurrentScreen(tela);
    };

    const addNote = (title: string, content: string, time: string) => {
        const newNote: Note = {
            id: Math.random().toString(),
            title: title,
            content: content,
            time: time,
        };

        setNotes([newNote, ...notes]);
        setIsModalVisible(false);
    };

    const deleteNote = (id: string) => {
        const notesFiltradas = notes.filter((note) => note.id !== id);
        setNotes(notesFiltradas);
    };

    if (currentScreen === "Development") {
        return <DevelopmentScreen onGoBack={() => setCurrentScreen("Home")} />;
    }

    return (
        <SafeArea>
            <Header onNavigate={() => mudarTela("Development")} />

            <ContentWrapper>
                <NotesList notes={notes} onDeleteNote={deleteNote} />
                <FloatingButton onPress={() => setIsModalVisible(true)} />
            </ContentWrapper>

            <BottomNav onNavigate={mudarTela} />

            <AddNoteModal
                visible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
                onSave={addNote}
            />
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
