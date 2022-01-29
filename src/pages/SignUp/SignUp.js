import {View, Text} from 'react-native';
import React from 'react';
import styles from './SignUp.style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Formik} from 'formik';
const SignUp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Code Talks</Text>
      </View>
      <View style={styles.inputContainer}>
        <Input placeHolder="e-postanızı giriniz" />
        <Input placeHolder={'Şifrenizi giriniz'} />
        <Input placeHolder={'Şifrenizi tekrar giriniz'} />
        <Button title="Kayıt Ol" theme={'primary'} />
        <Button title="Geri" theme={'secondary'} />
      </View>
    </View>
  );
};

export default SignUp;
