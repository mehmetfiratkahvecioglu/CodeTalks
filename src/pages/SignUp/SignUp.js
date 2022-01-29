import {View, Text} from 'react-native';
import React from 'react';
import styles from './SignUp.style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Formik} from 'formik';
const SignUp = ({navigation}) => {
  const handleSignUp = values => {
    console.log(values);
  };

  const handleNavigation = () => {
    navigation.navigate('SignIn');
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Code Talks</Text>
      </View>
      <View style={styles.inputContainer}>
        <Formik
          initialValues={{email: '', password: '', repassword: ''}}
          onSubmit={handleSignUp}>
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

              <Input
                placeHolder={'Şifrenizi yeniden giriniz'}
                onChangeText={handleChange('repassword')}
                value={values.repassword}
              />
              <Button
                title="Kayıt Ol"
                theme={'secondary'}
                onPress={handleSubmit}
              />
              <Button
                title="Geri Dön"
                theme={'primary'}
                onPress={handleNavigation}
              />
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default SignUp;
