import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import { v4 as uuid } from 'uuid';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
	const [ items, setItems ] = useState([
		{ id: uuid(), text: 'Meditate for 15 Minutes' },
		{ id: uuid(), text: 'Read 10 Pages of Personal Development Book' },
		{ id: uuid(), text: 'Track & Meet Macros for the Day' },
		{ id: uuid(), text: 'Chest/Arms Workout ~ 90 Minutes' },
		{ id: uuid(), text: 'Work on E-Commerce Business for 1 Hour' },
		{ id: uuid(), text: 'Apply to 10 Developer Positions' },
		{ id: uuid(), text: 'Attend BJJ Fundamentals' },
		{ id: uuid(), text: 'Study Japanese for 1 Hour' }
	]);

	const deleteItem = (id) => {
		setItems((prevItems) => {
			return prevItems.filter((item) => item.id !== id);
		});
	};

	const addItem = (text) => {
		if (!text) {
			Alert.alert('Error!', 'Please enter a critical task', { text: 'OK' });
		} else {
			setItems((prevItems) => {
				return [ { id: uuid(), text }, ...prevItems ];
			});
		}
	};

	return (
		<View style={styles.container}>
			<Header title="The Power List" />
			<AddItem addItem={addItem} />
			<FlatList data={items} renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem} />} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

export default App;

// Alert Doesn't Work - Fix That
// Set Text Input to Blank after Submission
// Make List Items Draggable & Have Them Re-Number Themselves As Such
// Add Backend to Persist User's Data
