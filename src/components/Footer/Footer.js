import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';


const currentDate = moment();
const currentYear = currentDate.year();
const prevDay = moment().subtract(2, 'days');

const Footer = function(props) {
    const [appState, setAppState] = useState({
        loading: false,
        covidData: null,
    });

    useEffect(() => {
        const covidDataUrl = 'https://api.covid19api.com/total/country/united-states/status/confirmed';
        fetch(covidDataUrl)
          .then(response => response.json())
          .then(function(data) {
                let todayCases = data.filter(dataObj => {
                    return moment(dataObj.Date).dayOfYear() === prevDay.dayOfYear();
                });
                todayCases = todayCases.length === 0 ? todayCases : todayCases[0];
            setAppState({ loading: false, covidData: todayCases });
          })
    }, [ setAppState ]);
    

    return (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        { appState.covidData && appState.covidData.Cases && (
        <p className="covid_data">
            <small>
            Total confirmed US Covid Cases as of { moment(appState.covidData.Date).format('dddd, MMMM Do YYYY, h:mm:ss a') }: <b>{ appState.covidData.Cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</b>.<br />
            Data Provided by <a href="https://covid19api.com/">COVID 19 API</a>
            </small>
        </p>
        ) }
        <p role="contentinfo" className="copyright">&copy; <span className="copyright-year">{currentYear}</span> Judd Franklin; Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a> using Dimension Starter. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
    </footer>
    )
}

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
