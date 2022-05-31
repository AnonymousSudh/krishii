import React from 'react'
import SimpleReactCalendar from 'simple-react-calendar'
import { Calendar } from 'react-calendar';
import '../style/calender.css'
// import 'react-calendar/dist/Calendar.css';



function Calender_menu() {

    // #calendar.evoCalendar();

    return (<>
        <div className='calen'>
            <Calendar />
        </div>
    </>
    )
}

export default Calender_menu;