import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ListRenderItemInfo,
  Button,
} from 'react-native';
import {TodoItemProps} from './todo-input';

interface Props {
  data: ListRenderItemInfo<TodoItemProps>;
  onDelete: () => void;
}

export const TodoItem: React.FunctionComponent<Props> = ({data, onDelete}) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listItemText}>{data.item.value}</Text>

      <TouchableOpacity style={styles.buttonWrapper} activeOpacity={0.8}>
        <Button color="white" title="X" onPress={onDelete} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    paddingVertical: 6,
    paddingHorizontal: 6,
    marginHorizontal: 0,
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 6,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemText: {
    flex: 1,
  },
  buttonWrapper: {
    backgroundColor: 'black',
  },
});

export default TodoItem;
