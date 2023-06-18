import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

axios.defaults.baseURL = "https://648ee64775a96b66444471b0.mockapi.io/";

const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, { rejectWithValue }) => {
	try {
		const { data } = axios.get("contacts");
		return data;
	} catch (e) {
		return rejectWithValue(e.message);
	}
});

const addContact = createAsyncThunk("contacts/addTask", async ({ name, number }, { rejectWithValue }) => {
	try {
		const { data } = await axios.post("contacts", { name, phone: number });
		return data;
	} catch (e) {
		return rejectWithValue(e.message);
	}
});

export { fetchContacts, addContact };
