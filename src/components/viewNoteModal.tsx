import { Modal } from "react-native";
import styled from "styled-components/native";

interface Note {
    id: string;
    title: string;
    content: string;
    time: string;
}

interface ViewNoteModalProps {
    visible: boolean;
    onClose: () => void;
    note: Note | null;
}

export default function ViewNoteModal({
    visible,
    onClose,
    note,
}: ViewNoteModalProps) {
    if (!note) {
        return null;
    }

    return (
        <Modal
            transparent={true}
            animationType="fade"
            visible={visible}
            onRequestClose={onClose}
        >
            <Overlay>
                <DialogContainer>
                    <HeaderTitle>{note.title}</HeaderTitle>

                    <TimeText>Criado às {note.time}</TimeText>

                    <ScrollArea>
                        <ContentText>{note.content}</ContentText>
                    </ScrollArea>

                    <ButtonsContainer>
                        <CloseButton onPress={onClose} activeOpacity={0.7}>
                            <CloseButtonText>Fechar</CloseButtonText>
                        </CloseButton>
                    </ButtonsContainer>
                </DialogContainer>
            </Overlay>
        </Modal>
    );
}

const Overlay = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.7);
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

const DialogContainer = styled.View`
    width: 100%;
    max-height: 80%;
    background-color: #222222;
    border-radius: 16px;
    padding: 20px;
`;

const HeaderTitle = styled.Text`
    color: #ffffff;
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 4px;
`;

const TimeText = styled.Text`
    color: #666666;
    font-size: 12px;
    margin-bottom: 16px;
`;

const ScrollArea = styled.ScrollView`
    margin-bottom: 20px;
`;

const ContentText = styled.Text`
    color: #dddddd;
    font-size: 16px;
    line-height: 24px;
`;

const ButtonsContainer = styled.View`
    flex-direction: row;
    justify-content: flex-end;
`;

const CloseButton = styled.TouchableOpacity`
    padding: 10px 20px;
    border-radius: 8px;
    background-color: #ffb100;
`;

const CloseButtonText = styled.Text`
    color: #000000;
    font-size: 16px;
    font-weight: bold;
`;
