import { FormWrapper } from "./FormWrapper";

type AddressData = {
	street: string,
	city: string,
	country: string,
	code: string
}

type AddressFormProps = AddressData & {
	updateField: (fields: Partial<AddressData>) => void
}

const AddressForm = ({ street, city, country, code, updateField }: AddressFormProps) => {
	return (
		<FormWrapper title="User Address">
			<label htmlFor="street">Street</label>
			<input
				autoFocus
				required
				type="text"
				value={street}
				onChange={e => updateField({ street: e.target.value })}
			/>
			<label htmlFor="city">City</label>
			<input
				required
				type="text"
				value={city}
				onChange={e => updateField({ city: e.target.value })}
			/>
			<label htmlFor="age">Country</label>
			<input
				required
				type="text"
				value={country}
				onChange={e => updateField({ country: e.target.value })}
			/>
			<label htmlFor="age">Code</label>
			<input
				required
				type="text"
				value={code}
				onChange={e => updateField({ code: e.target.value })}
			/>
		</FormWrapper>
	)
}

export default AddressForm;