import React, {useState} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Button,
  ListRenderItemInfo,
} from 'react-native';
import TodoInput, {TodoItemProps} from './components/todo-input';
import TodoItem from './components/todo-item';

const App: React.FunctionComponent = () => {
  const [todos, setTodo] = useState<Array<TodoItemProps>>([]);
  const [visible, setVisibility] = useState<boolean>(false);

  const addTodoHandler = (todo: string) => {
    setTodo([...todos, {id: Math.random().toString(), value: todo}]);
    setVisibility(false);
  };

  const removeTodoHandler = (id: string) => {
    setTodo([...todos.filter((todo: TodoItemProps) => todo.id !== id)]);
  };

  const cancelAddTodoHandler = () => {
    setVisibility(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          color="white"
          title="Add todo"
          onPress={() => setVisibility(true)}
        />
      </View>

      <TodoInput
        onCancel={cancelAddTodoHandler}
        handler={addTodoHandler}
        visible={visible}
      />

      <FlatList
        data={todos}
        keyExtractor={(data: TodoItemProps) => data.id}
        renderItem={(data: ListRenderItemInfo<TodoItemProps>) => (
          <TodoItem
            onDelete={() => removeTodoHandler(data.item.id)}
            data={data}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: 'white',
  },
  buttonContainer: {
    marginTop: 64,
    marginBottom: 10,
    backgroundColor: 'black',
  },
});

export default App;
