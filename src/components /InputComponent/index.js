import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';
import {Controller} from 'react-hook-form';

export default function InputComponent({error, control, placeholder, name}) {
  const {colors} = useTheme();
  return (
    <View>
      <Controller
        name={name}
        control={control}
        rules={{required: true, validate: true}}
        render={({field: {onChange, value}}) => {
          return (
            <TextInput
              style={[
                styles.textInput,
                {
                  color: colors.text,
                },
              ]}
              placeholder={placeholder}
              placeholderTextColor={'#666666'}
              onChangeText={onChange}
              value={value}
            />
          );
        }}
      />

      {error && error?.message?.length > 0 && (
        <Text style={styles.errorStyle}>{error.message}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  errorStyle: {
    marginHorizontal: 10,
    color: 'red',
  },
});
