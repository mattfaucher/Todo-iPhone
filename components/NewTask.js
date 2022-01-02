import React from 'react';
import {
	KeyboardAvoidingView,
	TextInput,
	Text,
	TouchableOpacity,
	View,
	Platform,
	StyleSheet
} from 'react-native';

export default function NewTask(props) {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.writeTaskWrapper}
		>
			<TextInput
				style={styles.input}
				placeholder={'Add a task'}
				value={props.task}
				onChangeText={text => props.setTask(text)}
			/>
			<TouchableOpacity onPress={props.handleAddTask}>
				<View style={styles.addWrapper}>
					<Text style={styles.addText}>+</Text>
				</View>
			</TouchableOpacity>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	writeTaskWrapper: {
		position: 'absolute',
		bottom: 60,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	input: {
		backgroundColor: '#FFF',
		paddingVertical: 15,
		paddingHorizontal: 15,
		borderRadius: 60,
		borderColor: '#C0C0C0',
		borderWidth: 1,
		width: 250,
	},
	addWrapper: {
		width: 60,
		height: 60,
		backgroundColor: '#FFF',
		borderRadius: 60,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 60,
		borderColor: '#C0C0C0',
		borderWidth: 1,
	},
	addText: {
		fontSize: 20
	}
});