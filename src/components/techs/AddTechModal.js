import React, { useState } from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import PropTypes from 'prop-types'

import { addTech } from '../../action/TechAction';

const AddTechModal = ({addTech}) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [tech, setTech] = useState('');

	const onSubmit = () => {
		if (firstName === '' || lastName === '') {
			M.toast({ html: 'Please enter the First and Last Name' });
		} else {
			addTech({
				firstName,
				lastName
			})
			setFirstName('');
			setLastName('');

			M.toast({ html: `Technician added` });
		}
	};
	return (
		<div id='add-tech-modal' className='modal' style={modalStyle}>
			<div className='modal-content'>
				<h4>New Technician</h4>
				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='firstName'
							value={firstName}
							onChange={(event) => setFirstName(event.target.value)}
						/>
						<label htmlFor='firstName' className='active'>
							First Name
						</label>
					</div>
				</div>
				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='lastName'
							value={lastName}
							onChange={(event) => setLastName(event.target.value)}
						/>
						<label htmlFor='lastName' className='active'>
							Last Name
						</label>
					</div>
				</div>
			</div>
			<div className='modal-footer'>
				<a
					href='#!'
					onClick={onSubmit}
					className='modal-close waves-effect waves-green btn blue'
				>
					Enter
				</a>
			</div>
		</div>
	);
};

const modalStyle = {
	width: '75%',
	height: '75%'
};

AddTechModal.propType = {
	addTech: PropTypes.func.isRequired,
}

export default connect(null, { addTech })(AddTechModal);
