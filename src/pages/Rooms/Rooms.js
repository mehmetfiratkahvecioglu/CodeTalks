import {View, Text, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import FloatingButton from '../../components/FloatingButton';
import ContentInputModal from '../../components/Modals/ContentInputModal';
import parseRoomListData from '../../utils/parseRoomListData';
import RoomCard from '../../components/Cards/RoomCard';
import styles from './Rooms.style';
const Rooms = ({navigation}) => {
  const [roomList, setRoomList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const handleModalToggle = () => {
    setModalVisible(!modalVisible);
  };
  useEffect(() => {
    database()
      .ref('rooms')
      .on('value', snapshot => {
        const snapValue = snapshot.val();
        const parsedData = parseRoomListData(snapValue || []);
        setRoomList(parsedData);
      });
  }, []);

  const handleSendContent = content => {
    const userMail = auth().currentUser.email;
    const roomObject = {
      userMail,
      roomName: content,
      date: new Date().toISOString(),
    };

    database().ref('rooms').push(roomObject);
  };

  const handleNavigateToMessages = room => {
    navigation.navigate('Messages', {room});
  };
  const renderItem = ({item}) => (
    <RoomCard
      room={item}
      onPress={() => {
        handleNavigateToMessages(item);
      }}
    />
  );
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={roomList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
      <ContentInputModal
        visible={modalVisible}
        onClose={handleModalToggle}
        onSend={handleSendContent}
      />
      <FloatingButton onPress={handleModalToggle} />
    </View>
  );
};

export default Rooms;
