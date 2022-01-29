import {View, Text} from 'react-native';
import React from 'react';
import styles from './SignIn.style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Formik} from 'formik';
const SignIn = ({navigation}) => {
  const handleSignIn = xx => {
    console.log(xx);
  };

  const handleNavigation = () => {
    navigation.navigate('SignUp');
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Code Talks</Text>
      </View>
      <View style={styles.inputContainer}>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={handleSignIn}>
          {({handleChange, handleSubmit, values}) => (
            <>
              <Input
                placeHolder="e-postanızı giriniz"
                onChangeText={handleChange('email')}
                value={values.email}
              />
              <Input
                placeHolder={'Şifrenizi giriniz'}
                onChangeText={handleChange('password')}
                value={values.password}
              />
              <Button
                title="Giriş Yap"
                theme={'primary'}
                onPress={handleSubmit}
              />
              <Button
                title="Kayıt Ol"
                theme={'secondary'}
                onPress={handleNavigation}
              />
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};
export default SignIn;
