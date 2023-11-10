import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

const CartScreen = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const cartTotal = () => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.item.cost * item.quantity;
    });
    return total;
  };
  const renderFooter = () => (
    <View style={style.TitleTotal}>
      <View style={style.column}>
        <Text style={style.Text}>Cart Total</Text>
      </View>
      <View style={style.column}>
        <Text style={style.TextTotal}>{cartTotal()}</Text>
      </View>
    </View>
  );
  return (
    <View>
      <View style={style.Titlerow}>
        <View style={style.column}>
          <Text style={style.Text}>Title</Text>
        </View>
        <View style={style.column}>
          <Text style={style.Text}>Cost</Text>
        </View>
        <View style={style.column}>
          <Text style={style.Text}>Quantity</Text>
        </View>
        <View style={style.column}>
          <Text style={style.Text}>Total</Text>
        </View>
      </View>
      <FlatList
        data={cartItems}
        renderItem={({item}) => {
          return (
            <View>
              <View style={style.row}>
                <View style={style.column}>
                  <Text style={style.Text}>{item.item.title}</Text>
                </View>
                <View style={style.column}>
                  <Text style={style.Text}>{item.item.cost}</Text>
                </View>
                <View style={style.column}>
                  <Text style={style.Text}>{item.quantity}</Text>
                </View>
                <View style={style.column}>
                  <Text style={style.Text}>
                    {item.item.cost * item.quantity}
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  column: {
    flex: 1,
    // height: 80,
  },
  Titlerow: {
    backgroundColor: '#D40818',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 5,
    marginTop: 5,
  },
  TitleTotal: {
    backgroundColor: '#D40818',
    flexDirection: 'row',
    flex: 1,
    marginBottom: 5,
    marginTop: 5,

    alignItems: 'center',
  },
  Text: {
    margin: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  TextTotal: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  TextTitle: {
    margin: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  row: {
    marginBottom: 5,
    backgroundColor: '#08d4c4',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
export default CartScreen;
