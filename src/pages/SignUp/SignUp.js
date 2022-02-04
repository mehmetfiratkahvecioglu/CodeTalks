import {View, Text} from 'react-native';
import React, {useState} from 'react';
import styles from './SignUp.style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
const SignUp = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const handleSignUp = async formValues => {
    if (formValues.password !== formValues.repassword) {
      showMessage({
        message: 'Parolalar uyuşmuyor.',
        type: 'danger',
      });
      return;
    }
    try {
      setLoading(true);
      await auth().createUserWithEmailAndPassword(
        formValues.email,
        formValues.password,
      );
      setLoading(false);
      navigation.navigate('SignIn');
      showMessage({
        message: 'Kayıt Oluşturuldu',
        type: 'success',
      });
    } catch (error) {
      showMessage({
        message: error.code,
        type: 'danger',
      });
      setLoading(false);
    }
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
                loading={loading}
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
