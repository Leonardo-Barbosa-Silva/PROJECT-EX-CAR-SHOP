import { useState } from "react";

import { useDispatch } from "react-redux";

import { setCar } from "../../store/actions/fetchActions";
import { addMessage } from "../../store/actions/alerts";




export default function Add() {

	const [ form, setForm ] = useState({ name: '', url: '' })

	function onChangeForm(e) {
		setForm({...form, [e.target.name]: e.target.value})
	}

	const dispatch = useDispatch()

	function onSubmit(e) {
		e.preventDefault()

		dispatch(setCar(form))

		setForm({ name: '', url: '' })

		dispatch(addMessage('Successfully added car'))
	}

	return (
		<form className="container mt-5" onSubmit={onSubmit}>
			<div className="form-group">
				<label>Name</label>
				<input 
					type="text" 
					name="name" 
					className="form-control" 
					placeholder="name" 
					value={form.name}
					onChange={onChangeForm}
				/>
			</div>
			<div className="form-group">
				<label>URL:</label>
				<input 
					type="text" 
					name="url" 
					className="form-control" 
					placeholder="https://cars" 
					value={form.url}
					onChange={onChangeForm}
				/>
			</div>
			<button type="submit" className="btn btn-primary">
				Adicionar
			</button>
		</form>
	);
}