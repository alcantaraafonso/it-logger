import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getTechs, setLoading } from '../../action/TechAction';

const TechSelectOption = ({ getTechs, setLoading, techStore: { techs, loading }}) => {

    useEffect(() => {
        setLoading();
        getTechs();
        //eslint-disable-next-line
    }, [])

    return (
        !loading && techs !== null && techs.map(tech => <option key={tech.id} value={`${tech.firstName} ${tech.lastName}`}>
            {tech.firstName} {tech.lastName}
        </option>)
    )
}

TechSelectOption.propType = {
	getTechs: PropTypes.func.isRequired,
	setLoading: PropTypes.func.isRequired,
	techStore: PropTypes.object.isRequired
};

const mapStateToPros = (state) => ({
	techStore: state.techStore
});

export default connect(mapStateToPros, { getTechs, setLoading })(TechSelectOption);
