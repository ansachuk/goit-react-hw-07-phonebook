import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
	{ name: "an", number: "380123123123", id: 1 },
	{ name: "na", number: "380123123123", id: 2 },
];

const contactsSlice = createSlice({
	name: "contacts",
	initialState,
	reducers: {
		addContact: {
			reducer(contacts, { payload }) {
				return [...contacts, payload];
			},
			prepare({ name, number }) {
				return {
					payload: {
						name,
						number,
						id: nanoid(),
					},
				};
			},
		},

		removeContact: (contacts, { payload }) => contacts.filter(contact => contact.id !== payload),
	},
});

export const { addContact, removeContact, setFromLS } = contactsSlice.actions;

export default contactsSlice.reducer;
