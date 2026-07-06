import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
interface HeaderProps {
    onNavigate: () => void;
}

export default function Header({ onNavigate }: HeaderProps) {
    return (
        <HeaderContainer>
            <Title>Anotações</Title>

            <IconsContainer>
                <TouchableOpacity onPress={onNavigate} activeOpacity={0.7}>
                    <Ionicons name="folder-outline" size={24} color="#FFFFFF" />
                </TouchableOpacity>

                <TouchableOpacity onPress={onNavigate} activeOpacity={0.7}>
                    <Ionicons
                        name="settings-outline"
                        size={24}
                        color="#FFFFFF"
                    />
                </TouchableOpacity>
            </IconsContainer>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px 10px 20px;
    background-color: #000000;
`;

const Title = styled.Text`
    color: #ffffff;
    font-size: 32px;
    font-weight: bold;
`;

const IconsContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;
