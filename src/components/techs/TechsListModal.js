import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TechItem from './TechItem';
import { getTechs, setLoading } from '../../action/TechAction';

const TechsListModal = ({ getTechs, setLoading, techStore: { techs, loading } }) => {
	useEffect(() => {
		setLoading();
		getTechs();
		//eslint-disable-next-line
	}, []);

	// if (loading || techs === null) {
	// 	return <h4>Loading...</h4>;
	// }

	return (
		<div id='tech-list-modal' className='modal' style={modalStyle}>
			<div className='modal-content'>
				<h4>Technician List</h4>
				<ul className='collection'>
					{!loading && techs !== null && (
						techs.map((tech) => <TechItem tech={tech} key={tech.id} />)
					)}
				</ul>
			</div>
		</div>
	);
};

const modalStyle = {
	width: '75%',
	height: '75%'
};

TechsListModal.propType = {
	getTechs: PropTypes.func.isRequired,
	setLoading: PropTypes.func.isRequired,
	techStore: PropTypes.object.isRequired
};

const mapStateToPros = (state) => ({
	techStore: state.techStore
});

export default connect(mapStateToPros, { getTechs, setLoading })(TechsListModal);
