import { Button } from "react-native";
import styled from "styled-components/native";
interface DevelopmentScreenProps {
    onGoBack: () => void;
}

export default function DevelopmentScreen({
    onGoBack,
}: DevelopmentScreenProps) {
    return (
        <Container>
            <Message>Em Desenvolvimento</Message>
            <Button title="Voltar" onPress={onGoBack} color="#FFB100" />
        </Container>
    );
}

const Container = styled.View`
    flex: 1;
    background-color: #000000;
    justify-content: center;
    align-items: center;
`;

const Message = styled.Text`
    color: #ffffff;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
`;
