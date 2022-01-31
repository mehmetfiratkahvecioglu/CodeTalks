import {View, TextInput} from 'react-native';
import React, {useState} from 'react';
import Button from '../../Button';
import Modal from 'react-native-modal';
const ContentInputModal = ({visible, onClose, onSend}) => {
  const [text, setText] = useState('');
  return (
    <Modal
      isVisible={visible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackbuttonPress={onClose}>
      <View>
        <TextInput placeholder="Mesaj yaz." onChangeText={setText} />
        <Button
          title={'Gönder'}
          theme={'primary'}
          onPress={() => onSend(text)}
        />
      </View>
    </Modal>
  );
};

export default ContentInputModal;
