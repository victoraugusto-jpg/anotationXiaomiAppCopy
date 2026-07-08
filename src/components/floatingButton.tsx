import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";

interface FloatingButtonProps {
    onPress: () => void;
}

export default function FloatingButton({ onPress }: FloatingButtonProps) {
    return (
        <ButtonContainer onPress={onPress} activeOpacity={0.8}>
            <Ionicons name="add" size={32} color="#FFFFFF" />
        </ButtonContainer>
    );
}

const ButtonContainer = styled.TouchableOpacity`
    position: absolute;
    bottom: 40px;
    right: 20px;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: #ffb100;
    justify-content: center;
    align-items: center;
    elevation: 5;
`;
