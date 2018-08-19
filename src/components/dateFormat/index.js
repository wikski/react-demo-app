import React from 'react'
import moment from 'moment'

const DateFormat = props => ([
    <span key="a">{ moment(props.date).format('D MMM YYYY').toString() } </span>, 
    <span className="text-muted small" key="b">{ moment(props.date).format('h:mma').toString() }</span>
])

export default DateFormat