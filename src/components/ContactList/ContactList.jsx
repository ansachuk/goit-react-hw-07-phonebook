import { useDispatch, useSelector } from "react-redux";
import { removeContact } from "redux/contactsSlice";

import css from "./ContactList.module.css";
import { Notify } from "notiflix";
import { getContacts, getFilter } from "redux/selectors";

const ContactList = () => {
	const contacts = useSelector(getContacts);
	const filter = useSelector(getFilter);
	const disp = useDispatch();

	return (
		<ul className={css.list}>
			{contacts?.length ? (
				contacts
					.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
					.map(({ name, number, id }) => (
						<li key={name} className={css.listItem}>
							{name} :<span className={css.number}>{number}</span>
							<button
								className={css.deleteButton}
								onClick={() => {
									Notify.failure("Contact deleted!");
									return disp(removeContact(id));
								}}
							>
								Delete
							</button>
						</li>
					))
			) : (
				<p className={css.message}>You have no contacts yet!</p>
			)}
		</ul>
	);
};

export default ContactList;
