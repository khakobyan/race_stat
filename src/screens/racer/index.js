import React, { useEffect } from 'react';
import { View } from 'react-native';
import { connect, useSelector } from 'react-redux';
import styles from './styles';
import { fetchRacer } from '../../actions';
import {CustomLink, Info, Loading} from '../../components';

function RacerScreen({navigation, route, fetchRacer}) {
  const { racer, loading } = useSelector(({racer, loading}) => racer);
  
  useEffect(() => {
    const { racer_id } = route.params;
    fetchRacer(racer_id);
  }, [])

  return (
      loading ? <Loading /> :
      <View style={styles.container}>
        <Info label='Given Name' info={racer.givenName}/>
        <Info label='Family Name' info={racer.familyName}/>
        <Info label='Date Of Birth' info={racer.dateOfBirth}/>
        <Info label='Nationality' info={racer.nationality}/>
        { racer.url &&
          <CustomLink
            title='More Info'
            onPress={() => navigation.navigate('MoreInfo', {url: racer.url, racer_name: `${racer.givenName} ${racer.familyName}`})}
          />
        }
        <CustomLink
          title='See Races List'
          onPress={() => navigation.navigate('Races', {racer_id: racer.driverId, racer_name: `${racer.givenName} ${racer.familyName}`})}
        />
      </View>
  );
}

export default connect(null, {fetchRacer})(RacerScreen);
