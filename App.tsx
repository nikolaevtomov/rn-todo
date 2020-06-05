import React, {useState} from 'react';

import {StyleSheet, FlatList, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import TodoInput, {TodoItemProps} from './components/todo-input';
import TodoItem from './components/todo-item';

const App: React.FunctionComponent = () => {
  const [todos, setTodo] = useState<Array<TodoItemProps>>([]);

  const addTodoHandler = (item: string) => {
    setTodo([...todos, {id: Math.random().toString(), value: item}]);
  };

  const removeTodoHandler = (id: string) => {
    setTodo([...todos.filter((todo) => todo.id !== id)]);
  };

  return (
    <View style={styles.body}>
      <TodoInput handler={addTodoHandler} />

      <FlatList
        data={todos}
        keyExtractor={(data) => data.id}
        renderItem={(data) => (
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
  body: {
    backgroundColor: Colors.white,
  },
});

export default App;
