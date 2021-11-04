import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import AppointmentAvaille from './AppointmentAvaile/AppointmentAvaille';
import AppointmentHeader from './AppointmentHeader/AppointmentHeader';


const Appointment = () => {


    const [date, setDate] = React.useState(new Date());

    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader date={date} setDate={setDate}
            ></AppointmentHeader>
            <AppointmentAvaille date={date}></AppointmentAvaille>
        </div>
    );
};

export default Appointment;