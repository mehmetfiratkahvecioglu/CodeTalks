import {View, Text, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import FloatingButton from '../../components/FloatingButton';
import ContentInputModal from '../../components/Modals/ContentInputModal';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import parseContentData from '../../utils/parseContentData';
import ContentInputCard from '../../components/Cards/ContentInputCard';
import styles from './Messages.style';
const Messages = () => {
  const [isInputModalVisible, setisInputModalVisible] = useState(false);
  const [contentList, setContentList] = useState([]);
  useEffect(() => {
    database()
      .ref('messages')
      .on('value', snapshot => {
        const contentData = snapshot.val();

        if (!contentData) {
          return;
        }

        const parsedContentData = parseContentData(contentData);
        setContentList(parsedContentData);
      });
  }, []);

  const handleModalToggle = () => {
    setisInputModalVisible(!isInputModalVisible);
  };
  const handleSend = content => {
    sendContent(content);
  };

  const sendContent = content => {
    const userName = auth().currentUser.email;
    const contentObj = {
      text: content,
      name: userName.split('@')[0],
      date: new Date().toISOString(),
    };

    database().ref('messages').push(contentObj);
  };
  const renderItem = ({item}) => <ContentInputCard message={item} />;
  return (
    <View style={styles.container}>
      <FlatList data={contentList} renderItem={renderItem} />
      <ContentInputModal
        onSend={handleSend}
        onClose={handleModalToggle}
        visible={isInputModalVisible}
      />
      <FloatingButton onPress={handleModalToggle} />
    </View>
  );
};

export default Messages;
