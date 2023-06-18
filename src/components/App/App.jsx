import { useDispatch, useSelector } from "react-redux";

import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";

import css from "./App.module.css";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import { getError, getIsLoading } from "redux/selectors";

export function App() {
	const disp = useDispatch();

	const isLoading = useSelector(getIsLoading);
	const error = useSelector(getError);

	useEffect(() => {
		disp(fetchContacts());
	}, [disp]);

	return (
		<>
			<h1 className={css.title}>Phone Book</h1>

			<ContactForm />
			<h2 className={css.subtitle}>Contacts</h2>

			{isLoading && !error && <b>Request in progress...</b>}
			<Filter />
			<ContactList />
		</>
	);
}
