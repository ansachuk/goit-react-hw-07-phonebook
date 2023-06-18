import { createSlice, nanoid } from "@reduxjs/toolkit";

import { fetchContacts } from "./operations";

const initialState = {
	items: [],
	isLoading: false,
	error: null,
};

const contactsSlice = createSlice({
	name: "contacts",
	initialState,
	reducers: {
		addContact: {
			reducer(state, { payload }) {
				return { ...state, items: [...state.items, payload] };
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

		removeContact: (state, { payload }) => {
			const filteredContacts = state.items.filter(contact => contact.id !== payload);

			return { ...state, items: filteredContacts };
		},
	},
	extraReducers: {
		[fetchContacts.pending]: ({ isLoading }) => {
			isLoading = true;
		},

		[fetchContacts.fulfilled]: ({ isLoading, error, items }, { payload }) => {
			isLoading = false;
			error = null;
			items = payload;
		},

		[fetchContacts.rejected]: ({ isLoading, error }, { payload }) => {
			isLoading = false;
			error = payload;
		},
	},
});

export const { addContact, removeContact } = contactsSlice.actions;

export default contactsSlice.reducer;
