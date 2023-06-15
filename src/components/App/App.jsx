import { useSelector } from "react-redux";

import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";

import css from "./App.module.css";

export function App() {
	const contacts = useSelector(({ contacts }) => contacts);

	return (
		<>
			<h1 className={css.title}>Phone Book</h1>

			<ContactForm />
			<h2 className={css.subtitle}>Contacts</h2>

			<Filter />
			{contacts.length ? <ContactList /> : <p className={css.message}>You have no contacts yet!</p>}
		</>
	);
}
