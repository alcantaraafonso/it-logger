import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import PropTypes from 'prop-types';
import { updateLog, clearCurrent } from '../../action/LogAction';
import TechSelectOption from '../techs/TechSelectOption';

const EditLogModal = ({ logStore: { current }, updateLog, clearCurrent }) => {
	const [message, setMessage] = useState('');
	const [attention, setAttention] = useState(false);
	const [tech, setTech] = useState('');

	const onSubmit = () => {
		if (message === '' || tech === '') {
			M.toast({ html: 'Please enter a message and tech' });
		} else {
			updateLog({
				id: current.id,
				message,
				attention,
				tech
			});
			setMessage('');
			setAttention(false);
			setTech('');
			clearCurrent();
			M.toast({ html: `Log edited by ${tech}` });
		}
	};

	useEffect(() => {
		if (current) {
			setMessage(current.message);
			setAttention(current.attention);
			setTech(current.tech);
		}
	}, [current]);

	return (
		<div id='edit-log-modal' className='modal' style={modalStyle}>
			<div className='modal-content'>
				<h4>Enter System Log</h4>
				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='message'
							value={message}
							onChange={(event) => setMessage(event.target.value)}
						/>
					</div>
				</div>
				<div className='row'>
					<div className='input-field'>
						<select
							name='tech'
							value={tech}
							className='browser-default'
							onChange={(event) => setTech(event.target.value)}
						>
							<option value='' disabled>
								Select a Technician
							</option>
							<TechSelectOption />
						</select>
					</div>
				</div>
				<div className='row'>
					<div className='input-field'>
						<p>
							<label>
								<input
									type='checkbox'
									className='filled-in'
									checked={attention}
									value={attention}
									onChange={(event) => setAttention(!attention)}
								/>
								<span>Needs Attention</span>
							</label>
						</p>
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

EditLogModal.propTypes = {
	logStore: PropTypes.object.isRequired,
	updateLog: PropTypes.func.isRequired,
	clearCurrent: PropTypes.func.isRequired

};

const mapStateToPros = (state) => ({
	logStore: state.logStore
});

export default connect(mapStateToPros, { updateLog, clearCurrent })(EditLogModal);
