import {View, Text} from 'react-native';
import React from 'react';
import FloatingButton from '../../components/FloatingButton';
import ContentInputModal from '../../components/Modals/ContentInputModal';
const Messages = () => {
  return (
    <View style={{flex: 1}}>
      <Text>Messages</Text>
      
      <ContentInputModal onSend={() => {}} onClose={()=>{}} visible={} />
      <FloatingButton />
    </View>
  );
};

export default Messages;
