import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Button, Modal} from 'react-native';

export interface TodoItemProps {
  id: string;
  value: string;
}

interface Props {
  visible: boolean;
  onCancel: () => void;
  handler: (todo: string) => void;
}

const TodoInput: React.FunctionComponent<Props> = ({
  handler,
  visible,
  onCancel,
}) => {
  const [todo, setTodo] = useState<string>('');

  const addTodoHandler = () => {
    handler(todo);
    setTodo('');
  };

  const cancelTodoHandler = () => {
    onCancel();
    setTodo('');
  };

  return (
    <Modal animationType="slide" visible={visible}>
      <View style={styles.modalWrapper}>
        <TextInput
          style={styles.textInput}
          placeholder="Todo"
          onChangeText={setTodo}
          value={todo}
        />

        <View style={styles.buttonsWrapper}>
          <View style={styles.addButtonContainer}>
            <Button title="ADD" onPress={addTodoHandler} color="white" />
          </View>

          <View style={styles.cancelButtonContainer}>
            <Button title="Cancel" onPress={cancelTodoHandler} color="white" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    marginBottom: 14,
    padding: 16,
    color: 'black',
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: '#dedede',
  },
  modalWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  buttonsWrapper: {
    flexDirection: 'row',
  },
  addButtonContainer: {
    padding: 1,
    backgroundColor: 'black',
    borderRadius: 2,
  },
  cancelButtonContainer: {
    padding: 1,
    backgroundColor: 'orange',
    borderRadius: 2,
  },
});

export default TodoInput;
