import { useDispatch, useSelector } from "react-redux";

import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";
import { Jelly } from "@uiball/loaders";

import css from "./App.module.css";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import { getError, getIsLoading, getContacts } from "redux/selectors";

export function App() {
	const disp = useDispatch();

	const contacts = useSelector(getContacts);
	const isLoading = useSelector(getIsLoading);
	const error = useSelector(getError);

	useEffect(() => {
		disp(fetchContacts());
	}, [disp]);

	return (
		<>
			<h1 className={css.title}>Phone Book</h1>
			<ContactForm />

			{!error && (
				<>
					{isLoading === true ? (
						<div className={css.backdrop} aria-live="polite" aria-busy={isLoading}>
							<Jelly color="rgb(24, 166, 166)" size={200} speed={0.8} />
						</div>
					) : (
						contacts.length > 0 && (
							<>
								<h2 className={css.subtitle}>Contacts</h2>
								<Filter />
								<ContactList />
							</>
						)
					)}
				</>
			)}
		</>
	);
}
