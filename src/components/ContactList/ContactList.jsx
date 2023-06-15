import { useDispatch, useSelector } from "react-redux";
import { removeContact } from "redux/contactsSlice";

import css from "./ContactList.module.css";
import { Notify } from "notiflix";

const ContactList = () => {
	const [filter, contacts] = useSelector(({ filter, contacts }) => [filter, contacts]);
	const disp = useDispatch();

	return (
		<ul className={css.list}>
			{contacts
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
				))}
		</ul>
	);
};

export default ContactList;
