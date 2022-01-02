import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Keyboard,
	ScrollView
} from 'react-native';
import Task from './Task';
import NewTask from './NewTask';

export default function TaskList() {
	const [task, setTask] = useState();
	const [taskItems, setTaskItems] = useState([]);

	const handleAddTask = () => {
		Keyboard.dismiss();
		setTaskItems([...taskItems, task]);
		setTask(null);
	}

	const completeTask = (index) => {
		let itemsCopy = [...taskItems];
		itemsCopy.splice(index, 1);
		setTaskItems(itemsCopy);
	}

	return (
		<ScrollView
			contentContainerStyle={{
				flexGrow: 1
			}}
			keyboardShouldPersistTaps='handled'
		>
			<View style={styles.tasksWrapper}>
				<View style={styles.items}>
					{taskItems.map((item, index) => {
						return (
							<TouchableOpacity key={index} onPress={() => completeTask(index)}>
								<Task text={item} />
							</TouchableOpacity>
						)
					})
					}
				</View>
			</View>
			<NewTask
				task={task}
				setTask={setTask}
				handleAddTask={handleAddTask}
			/>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	tasksWrapper: {
		paddingTop: 10,
		paddingHorizontal: 20
	},
	items: {
		marginTop: 30,
	}
});