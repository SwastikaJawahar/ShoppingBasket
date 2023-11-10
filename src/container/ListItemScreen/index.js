import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  Modal,
  Button,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addCart, removeCart, clearCart} from '../../features/cart/cartSlice';
import MaterialIcons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

function ListItemScreen(props) {
  const dispatch = useDispatch();
  let dataitem = [
    {
      title: 'IPhone 15 Pro',
      desc: 'iPhone 15 Pro Max. Forged in titanium and featuring the groundbreaking A17 Pro chip, a customisable Action button and the most powerful iPhone camera system ever.',
      cost: 150,
    },
    {
      title: 'Iphone 14 Pro Max',
      desc: 'Apple iPhone 14 with Super Retina XDR 6.1‑inch display. iPhone 14 colours - Yellow, Midnight, Purple, Starlight, (PRODUCT)RED and Blue.',
      cost: 200,
    },
    {
      title: 'Oneplus 10 Pro',
      desc: 'It features a 1440p LTPO OLED panel that’s gently curved on the long edges. Its 20:9 aspect ratio is a hair taller than the S22 Plus and Pixel 6 Pro’s displays, and it matches their top refresh rate of 120Hz.',
      cost: 100,
    },
  ];
  const [itemList, setItemList] = useState(dataitem);
  const [mobileName, setMobileName] = useState('');
  const [mobileModel, setMobileModel] = useState('');
  const [detaildesc, setDetailDesc] = useState('');
  const [cost, setCost] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  let newlist = {
    title: mobileName + ' ' + mobileModel,
    desc: detaildesc,
    cost: cost,
  };

  function addItemFunction() {
    setItemList([...itemList, newlist]);
    setMobileName('');
    setMobileModel('');
    setDetailDesc('');
    setModalOpen(false);
  }
  return (
    <View
      style={{
        flex: 1,

        justifyContent: 'flex-start',
        backgroundColor: '#e6fff7',
      }}>
      <MaterialIcons
        style={styles.MaterialAdd}
        name="add"
        size={34}
        onPress={() => {
          setModalOpen(true);
        }}
      />
      <View style={styles.Titlerow}>
        <View style={styles.Titlecolumn}>
          <Text style={styles.Text}>Title</Text>
        </View>
        <View style={styles.Titlecolumn}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 15,
              marginLeft: 30,
            }}>
            {' '}
            Cost
          </Text>
        </View>
        <View style={styles.Titlecolumn}>
          <Text style={styles.Text}>Add</Text>
        </View>
        <View style={styles.Titlecolumn}>
          <Text style={styles.Text}>Remove</Text>
        </View>
      </View>
      <FlatList
        keyExtractor={(itemList, index) => index.toString()}
        data={itemList}
        renderItem={({item}) => {
          return (
            <View style={styles.row}>
              <View style={styles.column}>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('DetailDesc', {
                      title: item.title,
                      desc: item.desc,
                    });
                  }}
                  style={styles.TouchableOpacity}>
                  <View style={styles.row}>
                    <View style={styles.column}>
                      <Text style={styles.Text}>{item.title}</Text>
                    </View>
                    <View style={styles.TextColumn}>
                      <Text style={styles.TextCost}>{item.cost}</Text>
                    </View>
                    <View style={styles.column}>
                      <MaterialIcons
                        style={styles.MaterialAdd}
                        name="add"
                        onPress={() => {
                          dispatch(addCart(item));
                        }}
                      />
                    </View>
                    <View>
                      <MaterialIcons
                        style={styles.MaterialRemove}
                        name="remove-outline"
                        onPress={() => {
                          dispatch(removeCart(item));
                        }}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
      <View>
        <Modal visible={modalOpen}>
          <View style={styles.itemView}>
            <MaterialIcons
              style={styles.MaterialClose}
              name="close"
              size={24}
              onPress={() => {
                setModalOpen(false);
              }}
            />
            <Text style={styles.ButtonText}>Mobile Name</Text>
            <TextInput
              style={styles.TextInput}
              value={mobileName}
              placeholder="Enter Brand Name"
              onChangeText={text => setMobileName(text)}
            />
            <Text style={styles.ButtonText}>Mobile Model</Text>
            <TextInput
              placeholder=" Enter Model "
              value={mobileModel}
              style={styles.TextInput}
              onChangeText={changedtext => setMobileModel(changedtext)}
            />
            <Text style={styles.ButtonText}>Detail Description</Text>
            <TextInput
              placeholder="Enter Desc of Mobile"
              value={detaildesc}
              style={styles.TextInput}
              onChangeText={changedtext => setDetailDesc(changedtext)}
            />
            <Text style={styles.ButtonText}>Cost of Mobile</Text>
            <TextInput
              placeholder="Enter Cost"
              value={cost}
              style={styles.TextInput}
              onChangeText={changedtext => setCost(changedtext)}
            />
            <TouchableOpacity
              onPress={addItemFunction}
              style={styles.addItemButton}>
              <Text style={styles.Text}>Add Item</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </View>
  );
}
export default ListItemScreen;
