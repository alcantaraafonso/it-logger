import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import { getLogs, setLoading } from '../../action/LogAction'
import LogItens from './LogItens'
import Preloader from '../layout/Preloader';
const Logs = (props) => {

    const { logStore: {logs, loading }, getLogs, setLoading } = props;

    useEffect(() => {
        setLoading();
        getLogs();
        //eslint-disable-next-line
    }, [])

    if (loading || logs === null) {
        return <Preloader />
    }

    return (
        <ul className='collection with-header'>
            <li className='collection-header'>
                <h4 className='center'>System Logs</h4>
            </li>
            {!loading && logs.length === 0 ? (<p className='center'>No logs to show...</p>) : (
                logs.map((log) => 
                    <LogItens log={log} key={log.id} />
                )
            )}
        </ul>
    )
}

Logs.propTypes = {
    logStore: PropTypes.object.isRequired,
    getLogs: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    logStore: state.logStore
})

export default connect(mapStateToProps, {getLogs, setLoading})(Logs)
