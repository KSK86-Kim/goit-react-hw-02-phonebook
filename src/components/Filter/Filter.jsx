import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

class Filter extends Component {
    render() {
        const { filterHandler } = this.props;
        return (
            <div className={styles['filter']}>
                <label className={styles['filter-label']}>
                    Find contacts by name
                    <br />
                    <input
                        className={styles['filter-input']}
                        type="text"
                        onChange={filterHandler}
                    />
                </label>
            </div>
        );
    }
}

Filter.propTypes = {
    filterHandler: PropTypes.func,
};

export default Filter;
