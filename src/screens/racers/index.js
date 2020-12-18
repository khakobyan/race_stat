import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect, useSelector } from 'react-redux';
import styles from './styles';
import { fetchRacers } from '../../actions';
import { DataTable } from 'react-native-paper';
import { Loading } from '../../components';

function RacersScreen({fetchRacers, navigation}) {
  const [fields, setFields] = useState(['Name', 'Nationality', 'Races']);
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(0);
  const { racers, total, loading } = useSelector(({racers, total, loading}) => racers);

  const from = page * limit;
  const to = (page + 1) * limit;

  useEffect(() => {
    fetchRacers(limit, page);
  }, [])

  const changePage = (page) => {
    fetchRacers(limit, limit * page)
    setPage(page);
  }

  return (
    <View style={styles.container}>
      { loading ? <Loading /> :
        <ScrollView>
          <DataTable >
            <DataTable.Header>
              { fields.map(field => (
                <DataTable.Title key={field} style={styles.header}>
                  <Text style={styles.headerTitle}>
                    {field}
                  </Text>
                </DataTable.Title>
              ))}
            </DataTable.Header>
            { racers.map(racer => (
              <DataTable.Row key={racer.driverId}>
                <DataTable.Cell
                  style={styles.cell}
                  onPress={() => navigation.navigate('Racer', {racer_id: racer.driverId, racer_name: `${racer.givenName} ${racer.familyName}`})}
                >
                  {racer.givenName} {racer.familyName}
                </DataTable.Cell>
                <DataTable.Cell style={styles.cell}>{racer.nationality}</DataTable.Cell>
                <DataTable.Cell
                  style={styles.cell}
                  onPress={() => navigation.navigate('Races', {racer_id: racer.driverId, racer_name: `${racer.givenName} ${racer.familyName}`})}
                >
                  See
                </DataTable.Cell>
              </DataTable.Row>
            ))}
            <DataTable.Pagination
              page={page}
              style={styles.pagination}
              numberOfPages={Math.floor(total / limit)}
              onPageChange={page => changePage(page)}
              label={`${from + 1}-${to} of ${total}`}
            />
          </DataTable>
        </ScrollView>
      }
    </View>
  );
}

export default connect(null, {fetchRacers})(RacersScreen);
