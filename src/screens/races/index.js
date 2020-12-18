import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';
import { connect, useSelector } from 'react-redux';
import { fetchRaces } from '../../actions';
import { DataTable } from 'react-native-paper';
import { Loading } from '../../components';

function RacesScreen({navigation, fetchRaces, route}) {
  const [fields, setFields] = useState(['Race Name', 'Year', 'Position', 'Constructor']);
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(0);
  const { races, total, loading } = useSelector(({races}) => races);

  const from = page * limit;
  const to = (page + 1) * limit;

  useEffect(() => {
    const { racer_id } = route.params;
    fetchRaces(racer_id, limit, page);
  }, [])

  const changePage = (page) => {
    const { racer_id } = route.params;
    fetchRaces(racer_id, limit, limit * page)
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
            { races.map((race, index) => (
              <DataTable.Row key={index}>
                <DataTable.Cell style={styles.cell}>{race.raceName}</DataTable.Cell>
                <DataTable.Cell style={styles.cell}>{race.season}</DataTable.Cell>
                <DataTable.Cell style={styles.cell}>{race.position}</DataTable.Cell>
                <DataTable.Cell style={styles.cell}>{race.constructor}</DataTable.Cell>
              </DataTable.Row>
            ))}
            <DataTable.Pagination
              page={page}
              style={styles.pagination}
              numberOfPages={Math.round(total / limit)}
              onPageChange={page => changePage(page)}
              label={`${from + 1}-${to > total ? total : to} of ${total}`}
            />
          </DataTable>
        </ScrollView>
      }
    </View>
  );
}

export default connect(null, {fetchRaces})(RacesScreen);
