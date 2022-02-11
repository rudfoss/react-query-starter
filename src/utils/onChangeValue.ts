export const onChangeValue =
	(onChange: (value: string) => unknown) => (evt: React.ChangeEvent<HTMLInputElement>) => {
		onChange(evt.target.value)
	}
