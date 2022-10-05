import { FormWrapper } from "./FormWrapper";

type AccountData = {
	email: string,
	password: string
}

type AccountFormProps = AccountData & {
	updateField: (fields: Partial<AccountData>) => void
}

const AccountForm = ({ email, password, updateField }: AccountFormProps) => {
	return (
		<FormWrapper title="Account Creation">
			<label htmlFor="email">Email</label>
			<input
				type="email"
				autoFocus
				required
				value={email}
				onChange={e => updateField({ email: e.target.value })}
			/>
			<label htmlFor="password">Password</label>
			<input
				type="password"
				required
				value={password}
				onChange={e => updateField({ password: e.target.value })}
			/>
		</FormWrapper>
	)
}

export default AccountForm;