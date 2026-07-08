import { Ionicons } from "@expo/vector-icons";
import { Alert } from "react-native";
import styled from "styled-components/native";

interface NoteCardProps {
    title: string;
    content: string;
    time: string;
    onDelete: () => void;
    onView: () => void;
}

export default function NoteCard({
    title,
    content,
    time,
    onDelete,
    onView,
}: NoteCardProps) {
    const confirmarExclusao = () => {
        Alert.alert("Excluir Nota", "Tem certeza que quer excluir?", [
            {
                text: "Não",
                style: "cancel",
            },
            {
                text: "Sim",
                onPress: onDelete,
            },
        ]);
    };

    return (
        <CardContainer>
            <ClickableArea onPress={onView} activeOpacity={0.7}>
                <Title>{title}</Title>
                <ContentText numberOfLines={2}>{content}</ContentText>
                <TimeText>{time}</TimeText>
            </ClickableArea>

            <DeleteButton onPress={confirmarExclusao} activeOpacity={0.7}>
                <Ionicons name="trash-outline" size={24} color="#FF5252" />
            </DeleteButton>
        </CardContainer>
    );
}

const CardContainer = styled.View`
    background-color: #222222;
    border-radius: 12px;
    padding: 16px;
    margin-bottom: 12px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const ClickableArea = styled.TouchableOpacity`
    flex: 1;
    margin-right: 12px;
`;

const DeleteButton = styled.TouchableOpacity`
    padding: 4px;
`;

const Title = styled.Text`
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 6px;
`;

const ContentText = styled.Text`
    color: #aaaaaa;
    font-size: 14px;
    margin-bottom: 12px;
`;

const TimeText = styled.Text`
    color: #666666;
    font-size: 12px;
`;
