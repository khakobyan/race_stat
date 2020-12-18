import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

function RacersScreen({navigation}) {
//   const { user, logout } = useContext(AuthContext);
//   const [subject, setSubject] = useState(`${user.first_name} ${user.last_name}'s info`);

//   useEffect(() => {
//     fetchEmployees();
//     fetchGroups(user.uid);
//   }, [])

  // const prepareAndSendEmail = () => {
  //   let tmp_str = '';
  //   for (var key in user) {
  //     if (user.hasOwnProperty(key) && !['key', 'uid', 'file_name'].includes(key)) {
  //       if (key == 'location') {
  //         tmp_str = tmp_str + `latitude: ${user[key].latitude}\n`+ `longitude: ${user[key].longitude}\n`
  //       } else {
  //         tmp_str = tmp_str + `${key}: ${user[key]}\n`
  //       }
  //     }
  //   }
  //   sendEmail('', subject, tmp_str)
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>22222222</Text>
      <TouchableOpacity
        // style={styles.navButton}
        onPress={() => navigation.navigate('Racer')}
      ><Text>1234</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f1'
  },
  text: {
    fontSize: 20,
    color: '#333333'
  }
});

export default connect(null, {})(RacersScreen);
