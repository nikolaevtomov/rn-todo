import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ListRenderItemInfo,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {TodoItemProps} from './todo-input';

interface Props {
  data: ListRenderItemInfo<TodoItemProps>;
  onDelete: () => void;
}

export const TodoItem: React.FunctionComponent<Props> = ({data, onDelete}) => {
  return (
    <TouchableOpacity onPress={onDelete} activeOpacity={0.8}>
      <View style={styles.listItem}>
        <Text>{data.item.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    paddingVertical: 6,
    paddingHorizontal: 4,
    marginHorizontal: 24,
    borderWidth: 1,
    borderColor: Colors.dark,
    marginVertical: 4,
  },
});

export default TodoItem;
