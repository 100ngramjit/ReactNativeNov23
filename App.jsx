/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Modal,
  ActivityIndicator,
  Alert,
  Switch,
  TextInput,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function Section({children, title}) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [count, setCount] = useState([0]);
  const [isEnabled, setIsEnabled] = useState(false);
  const [text, setText] = useState('');

  const handleSubmit = () => {
    Alert.alert('You entered: ' + text);
  };

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView>
        <Text style={styles.sectionTitle}>The Red Banana</Text>
        <Text style={styles.headerCustom}>{count}</Text>
        <TouchableOpacity
          style={{
            borderColor: 'black',
            borderRadius: 12,
            backgroundColor: 'teal',
            borderWidth: 5,
            maxWidth: 75,
            padding: 2,
            marginHorizontal: 160,
          }}
          onPress={() => setCount([...count, count[count.length - 1] + 1])}>
          <Text>click here</Text>
        </TouchableOpacity>

        <Button title="open modal" onPress={() => setIsModalVisible(true)} />

        <Modal
          visible={isModalVisible}
          animationType="fade"
          presentationStyle="pageSheet">
          <View style={{flex: 1, backgroundColor: 'black'}}>
            <Text style={{color: 'white'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse posuere sit amet elit sed congue. Vestibulum
              ullamcorper lectus metus, sit amet vehicula metus fermentum sed.
              Aliquam sollicitudin lacus vel justo lobortis, et pulvinar diam
              gravida. Donec tincidunt accumsan eros, id ultricies nibh tempus
              in. Quisque quis tincidunt eros. Vestibulum ex risus, consectetur
              vel molestie vel, dignissim a augue. Pellentesque nec suscipit
              purus. Nam dui sapien, dictum in ultricies in, auctor vitae arcu.
              In ligula felis, volutpat vel ligula vel, lobortis feugiat est.
              Curabitur ultrices ultricies ultrices. Maecenas tristique
              imperdiet metus vitae malesuada. Curabitur pharetra turpis quis
              eros pellentesque, in elementum lacus tempus. Ut quis vehicula
              quam. Pellentesque vitae nulla sit amet mi luctus fringilla
              scelerisque a risus. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nulla in nisl pretium, ornare purus at, fringilla
              sem. Aenean pellentesque, augue non pellentesque gravida, dui ante
              hendrerit nunc, a vestibulum dui urna id quam. Vivamus sagittis
              vel est quis porttitor. Vivamus ac mi condimentum, dictum nunc at,
              condimentum quam. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Mauris efficitur erat
              in metus sollicitudin congue. Nam arcu tortor, efficitur nec mi
              sed, dapibus fermentum ex. Nulla bibendum mollis justo, at
              fermentum ante auctor ullamcorper. Nam viverra a nisl eu gravida.
              Nam euismod efficitur tempor.
            </Text>
            <Button
              title="close modal"
              onPress={() => setIsModalVisible(false)}
            />
          </View>
        </Modal>
        <ActivityIndicator size="large" />
        <Button title="Alert" onPress={() => Alert.alert('Close this alert')} />
        <Text>Enable Feature:</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={text => setText(text)}
          value={text}
          placeholder="Enter text here"
        />
        <Button onPress={handleSubmit} title="Submit" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    backgroundColor: 'purple',
    color: 'white',
    padding: 25,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  headerCustom: {
    fontSize: 100,
    fontWeight: '700',
    color: 'teal',
  },
});

export default App;
