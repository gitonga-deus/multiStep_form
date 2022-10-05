import { FormEvent, useState } from "react";
import { useMultiStepForm } from "./useMultiStepForm"

import AccountForm from "./components/AccountForm";
import UserForm from "./components/UserForm";
import AddressForm from "./components/AddressForm";

type FormData = {
	firstName: string,
	lastName: string,
	age: string,
	street: string,
	city: string,
	country: string,
	code: string,
	email: string,
	password: string
}

function App() {
	const INITIAL_DATA: FormData = {
		firstName: "",
		lastName: "",
		age: "",
		street: "",
		city: "",
		country: "",
		code: "",
		email: "",
		password: "",
	}

	const [data, setData] = useState(INITIAL_DATA);

	const updateFields = (fields: Partial<FormData>) => {
		setData(prev => ({ ...prev, ...fields }))
	}

	const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } = useMultiStepForm([
		<UserForm {...data} updateField={updateFields} />,
		<AddressForm {...data} updateField={updateFields} />,
		<AccountForm {...data} updateField={updateFields} />
	]);

	function onSubmit(e: FormEvent) {
		e.preventDefault()
		if (!isLastStep) return next()
		console.log(data)
	}

	return (
		<div style={{
			position: "relative",
			maxWidth: "max-content",
			background: "white",
			border: "1px solid #000",
			padding: "2rem",
			margin: "1rem",
			borderRadius: "2px",
			fontFamily: "Satoshi"
		}}>
			<form onSubmit={onSubmit}>
				<div style={{
					position: "absolute",
					top: ".5rem",
					right: ".5rem"
				}}>
					{currentStepIndex + 1} / {steps.length}
				</div>
				{step}
				<div style={{
					marginTop: "1rem",
					display: "flex",
					gap: ".5rem",
					justifyContent: "flex-end"
				}}>
					{!isFirstStep && (
						<button
							type="button"
							onClick={back}
						>
							Back
						</button>
					)}
					<button
						type="submit"
					>
						{isLastStep ? "Finish" : "Next"}
					</button>
				</div>
			</form>
		</div>
	)
}

export default App
