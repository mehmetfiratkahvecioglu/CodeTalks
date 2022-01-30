import {View, Text} from 'react-native';
import React, {useState} from 'react';
import styles from './SignIn.style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
const SignIn = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const handleSignIn = async formValues => {
    if (!formValues.usermail && !formValues.password) {
      showMessage({
        message: 'E-posta veya şifre boş bırakılamaz.',
        type: 'danger',
      });
      return;
    }

    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(
        formValues.email,
        formValues.password,
      );
      setLoading(false);
    } catch (error) {
      showMessage({
        message: error.code,
        type: 'danger',
      });
      setLoading(false);
    }
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
                loading={loading}
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
