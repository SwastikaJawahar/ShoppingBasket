import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Button,
} from 'react-native';
import {UserContextProvider, useUserContext} from '../../contexts/UserContext';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import {PersistanceHelper} from '../../helpers';
import {APIHelper} from '../../helpers';
import {kApiTodos} from '../../config/WebService';

function HomeScreen(props) {
  const [fetchData, setFetchedData] = useState([]);
  const {updatedData} = useUserContext();
  const dispatch = useDispatch();
  let fetchedval = '';
  const [data, setData] = useState([]);

  useEffect(() => {
    APIHelper.get(kApiTodos)
      .then(response => {
        setData(response);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  useEffect(async () => {
    fetchedval = await PersistanceHelper.getValue('userName');
  }, []);
  return (
    <View style={style.Container}>
      <View style={style.header}>
        <Text style={style.TextContent}>DashBoard</Text>
        <Text style={style.TextContent}>{fetchedval}</Text>
        <FlatList
          data={data}
          initialNumToRender={20}
          renderItem={({item, index}) => {
            return (
              <View>
                <TouchableOpacity style={style.flatList}>
                  <View>
                    <Text style={style.Text}>{item.userId}</Text>
                    <Text style={style.Text}>{item.title}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
      <View style={style.footer}>
        <TouchableOpacity
          style={style.TouchableOpacity}
          onPress={() => {
            props.navigation.navigate('Catagories');
          }}>
          <Text>Go to Catagories</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    flex: 3,
  },
  footer: {
    flex: 0.3,
  },
  flatList: {
    height: 40,
    backgroundColor: '#08d4c4',
    marginVertical: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  Text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'justify',
  },
  TouchableOpacity: {
    height: 40,
    width: 150,
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#08d4c4',
    marginTop: 8,
    borderWidth: 2,
  },
  TextContent: {
    color: '#08d4c4',
    backgroundColor: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 5,
    borderRadius: 2,
    textAlign: 'center',
  },
});
export default HomeScreen;
