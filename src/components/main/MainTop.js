import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProjectTitle from './ProjectTitle'
import GoogleLogin from './GoogleLogin'
import styles from '../../css/MainTop.module.css';
// className = {styles.(클래스명)}
export default class MainTop extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <div className={styles.container}>
                    <section className={styles.section}>
                        <ProjectTitle></ProjectTitle>
                        <GoogleLogin></GoogleLogin>
                    </section>
                </div>
            </div>
        )
    }
}