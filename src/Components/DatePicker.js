import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css"

function DatePick() {

    const [selectedDate,setSelectedDate] = useState(null)
    return(
        <DatePicker className = {"datepicker"}
            selected = {selectedDate}
            onChange = {date => setSelectedDate(date)}
            dateFormat = 'dd/MM/yyyy'
            showYearDropdown
            scrollableMonthYearDropdown
            isClearable
        />
    )
        ;
}
export default DatePick;

