import {View, TextInput} from 'react-native';
import React, {useState} from 'react';
import Button from '../../Button';
import Modal from 'react-native-modal';
import styles from './ContentInputModal.style';
const ContentInputModal = ({visible, onClose, onSend}) => {
  const [text, setText] = useState('');
  const handleSendContent = () => {
    if (text.length > 0) {
      onSend(text);
      onClose();
      setText('');
    }
  };
  return (
    <Modal
      style={styles.modalContainer}
      isVisible={visible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.innerContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            value={text}
            placeholder="Mesaj yaz."
            onChangeText={setText}
            multiline
          />
        </View>
        <Button title={'Gönder'} onPress={handleSendContent} />
      </View>
    </Modal>
  );
};

export default ContentInputModal;
