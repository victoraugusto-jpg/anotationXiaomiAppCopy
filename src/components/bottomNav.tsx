import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";

interface BottomNavProps {
    onNavigate: (tela: string) => void;
}

export default function BottomNav({ onNavigate }: BottomNavProps) {
    return (
        <NavContainer>
            <NavButton onPress={() => onNavigate("Home")} activeOpacity={0.7}>
                <Ionicons name="document-text" size={24} color="#FFFFFF" />
                <NavTextActive>Anotações</NavTextActive>
            </NavButton>

            <NavButton
                onPress={() => onNavigate("Development")}
                activeOpacity={0.7}
            >
                <Ionicons name="checkbox-outline" size={24} color="#AAAAAA" />
                <NavText>Tarefas</NavText>
            </NavButton>
        </NavContainer>
    );
}

const NavContainer = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #000000;
    padding-top: 12px;
    padding-bottom: 12px;
    border-top-width: 1px;
    border-top-color: #222222;
`;

const NavButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
`;

const NavTextActive = styled.Text`
    color: #ffffff;
    font-size: 12px;
    margin-top: 4px;
`;

const NavText = styled.Text`
    color: #aaaaaa;
    font-size: 12px;
    margin-top: 4px;
`;
