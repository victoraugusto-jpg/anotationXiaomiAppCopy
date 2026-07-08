import { useState } from "react";
import { Modal } from "react-native";
import styled from "styled-components/native";

interface AddNoteModalProps {
    visible: boolean;
    onClose: () => void;
    onSave: (title: string, content: string, time: string) => void;
}

export default function AddNoteModal({
    visible,
    onClose,
    onSave,
}: AddNoteModalProps) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSave = () => {
        const now = new Date();
        const currentTime = now.getHours() + ":" + now.getMinutes();

        let finalTitle = title;
        if (title === "") {
            finalTitle = "Sem título";
        }

        let finalContent = content;
        if (content === "") {
            finalContent = "Sem conteúdo";
        }

        onSave(finalTitle, finalContent, currentTime);

        setTitle("");
        setContent("");
    };

    const handleClose = () => {
        setTitle("");
        setContent("");
        onClose();
    };

    return (
        <Modal
            transparent={true}
            animationType="fade"
            visible={visible}
            onRequestClose={handleClose}
        >
            <Overlay>
                <DialogContainer>
                    <HeaderTitle>Nova Anotação</HeaderTitle>

                    <InputTitle
                        placeholder="Título"
                        placeholderTextColor="#666666"
                        value={title}
                        onChangeText={setTitle}
                    />

                    <InputContent
                        placeholder="Escreva sua anotação aqui..."
                        placeholderTextColor="#666666"
                        value={content}
                        onChangeText={setContent}
                        multiline={true}
                        textAlignVertical="top"
                    />

                    <ButtonsContainer>
                        <CancelButton onPress={handleClose} activeOpacity={0.7}>
                            <CancelButtonText>Cancelar</CancelButtonText>
                        </CancelButton>

                        <SaveButton onPress={handleSave} activeOpacity={0.7}>
                            <SaveButtonText>Salvar</SaveButtonText>
                        </SaveButton>
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
    background-color: #222222;
    border-radius: 16px;
    padding: 20px;
`;

const HeaderTitle = styled.Text`
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 16px;
`;

const InputTitle = styled.TextInput`
    background-color: #333333;
    color: #ffffff;
    font-size: 16px;
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 12px;
`;

const InputContent = styled.TextInput`
    background-color: #333333;
    color: #ffffff;
    font-size: 14px;
    border-radius: 8px;
    padding: 12px;
    height: 120px;
    margin-bottom: 20px;
`;

const ButtonsContainer = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    gap: 12px;
`;

const CancelButton = styled.TouchableOpacity`
    padding: 10px 16px;
    border-radius: 8px;
    background-color: transparent;
`;

const CancelButtonText = styled.Text`
    color: #aaaaaa;
    font-size: 16px;
    font-weight: bold;
`;

const SaveButton = styled.TouchableOpacity`
    padding: 10px 20px;
    border-radius: 8px;
    background-color: #ffb100;
`;

const SaveButtonText = styled.Text`
    color: #000000;
    font-size: 16px;
    font-weight: bold;
`;
