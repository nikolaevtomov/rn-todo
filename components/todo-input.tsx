import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Button} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export interface TodoItemProps {
  id: string;
  value: string;
}

interface Props {
  handler: (todo: string) => void;
}

const TodoInput: React.FunctionComponent<Props> = ({handler}) => {
  const [todo, setTodo] = useState<string>('');

  return (
    <View style={styles.sectionContainer}>
      <TextInput
        style={styles.sectionTextInput}
        placeholder="Todo"
        onChangeText={setTodo}
        value={todo}
      />

      <View style={styles.buttonContainer}>
        <Button title="ADD" onPress={() => handler(todo)} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTextInput: {
    padding: 8,
    color: Colors.dark,
    borderColor: Colors.dark,
    borderWidth: 1,
    flex: 1,
  },
  sectionContainer: {
    marginTop: 34,
    padding: 24,
    flexDirection: 'row',
  },
  buttonContainer: {
    backgroundColor: 'black',
  },
});

export default TodoInput;
