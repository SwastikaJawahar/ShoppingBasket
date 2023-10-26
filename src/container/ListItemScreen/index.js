import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';

function ListItemScreen(props) {
  let dataitem = [
    {
      title: 'IPhone 15 Pro',
      desc: 'iPhone 15 Pro Max. Forged in titanium and featuring the groundbreaking A17 Pro chip, a customisable Action button and the most powerful iPhone camera system ever.',
    },
    {
      title: 'Iphone 14 Pro Max',
      desc: 'Apple iPhone 14 with Super Retina XDR 6.1‑inch display. iPhone 14 colours - Yellow, Midnight, Purple, Starlight, (PRODUCT)RED and Blue.',
    },
    {
      title: 'Oneplus 10 Pro',
      desc: 'It features a 1440p LTPO OLED panel that’s gently curved on the long edges. Its 20:9 aspect ratio is a hair taller than the S22 Plus and Pixel 6 Pro’s displays, and it matches their top refresh rate of 120Hz.',
    },
  ];
  const [itemList, setItemList] = useState(dataitem);
  const [mobileName, setMobileName] = useState('');
  const [mobileModel, setMobileModel] = useState('');
  const [detaildesc, setDetailDesc] = useState('');

  let newlist = {title: mobileName + ' ' + mobileModel, desc: detaildesc};

  function addItemFunction() {
    setItemList([...itemList, newlist]);
    setMobileName('');
    setMobileModel('');
    setDetailDesc('');
  }
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <FlatList
        keyExtractor={(itemList, index) => index.toString()}
        data={itemList}
        renderItem={({item}) => {
          return (
            <View>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('DetailDesc', {
                    title: item.title,
                    desc: item.desc,
                  });
                }}
                style={styles.TouchableOpacity}>
                <Text style={styles.Text}>{item.title}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <View style={styles.itemView}>
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
        <TouchableOpacity
          onPress={addItemFunction}
          style={styles.addItemButton}>
          <Text style={styles.Text}>Add Item</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default ListItemScreen;
