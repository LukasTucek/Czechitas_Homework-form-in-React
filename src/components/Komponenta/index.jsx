import React, {useState} from 'react';
import './style.css';

const Komponenta = () => {

	const [name, setName] = useState('________');
	const [souhlas, setSouhlas] = useState(false);
	const [mesto, setMesto] = useState('Brno');

	const handleChange = (e) => {
		setName(e.target.value); //ptám se na hodnotu prvku, který tu událost vyvolal
	}

	return (
		<div className="komponenta">
			<h3>Napiš své jméno</h3>
			<input type="text" onChange={handleChange} /> 

			<p>Jméno je <strong>{name}</strong></p>

			{name.length < 5 && <p>Jméno musí být nejméně 5 písmen</p>}
			{name.length > 10 && <p>Máš moc dlouhé jméno</p>}

			<hr />


			<select value={mesto} onChange={ (e) => {setMesto(e.target.value)}}>
				<option value="PHA">Praha</option> 
				<option value="BRN">Brno</option>
				<option value="OVA">Ostrava</option>
			</select>

			<p>Vybrané město je <strong>{mesto}</strong></p>

			<label>
				<input 
					type="checkbox" 
					checked={souhlas} 
					onChange={ (e) => {setSouhlas(e.target.checked)}}  //podle toho, jestli je nebo neni zaškrtlé, nastavuju stav
				/>
				Souhlasím s podmínkami
			</label>
			<br />
			<button disabled={!souhlas}>Objednat</button>

		</div>
	)
}

export default Komponenta;
