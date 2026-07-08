import { FlatList } from "react-native";
import styled from "styled-components/native";
import NoteCard from "./noteCard";

interface Note {
    id: string;
    title: string;
    content: string;
    time: string;
}

interface NotesListProps {
    notes: Note[];
    onDeleteNote: (id: string) => void;
}

export default function NotesList({ notes, onDeleteNote }: NotesListProps) {
    return (
        <Container>
            <ListHeader>
                <ListTitle>Todas as notas</ListTitle>
                <Counter>{notes.length} notas</Counter>
            </ListHeader>

            <FlatList
                data={notes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <NoteCard
                        title={item.title}
                        content={item.content}
                        time={item.time}
                        onDelete={() => onDeleteNote(item.id)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            />
        </Container>
    );
}

const Container = styled.View`
    flex: 1;
`;

const ListHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
`;

const ListTitle = styled.Text`
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
`;

const Counter = styled.Text`
    color: #aaaaaa;
    font-size: 14px;
`;
