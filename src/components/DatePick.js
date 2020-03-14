import React, { Component } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { DateTimePicker,MuiPickersUtilsProvider } from '@material-ui/pickers';

class Picker extends Component {
    constructor(id){
        super(id);
    
        this.state = {
            id: id,
            isOpen: false,
            setIsOpen: false,
            todayDate: new Date(),
        }
    }

    toggleOn() {
        this.setState({ setIsOpen: true, isOpen: true });
    }
    toggleOff() {
        this.setState({ setIsOpen: false, isOpen: false });
    }
    setDate(date) {
        console.log(Date);
        this.props.onChangeTime(this.state.id.id, date.valueOf());
    }

    render(){
        return(
            <div className="todo-calendar">
                <span role="img" aria-label="timer" onClick={this.toggleOn.bind(this)}>⏲️</span>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DateTimePicker 
                        open={this.state.isOpen}
                        onOpen={this.toggleOn.bind(this)}
                        onClose={this.toggleOff.bind(this)}
                        value={this.state.todayDate} 
                        onChange={(date) => this.setDate(date)}
                        TextFieldComponent={() => null}
                        minDate={new Date()}
                        format="yyyy/MM/dd HH:mm"
                    />
                </MuiPickersUtilsProvider>
            </div>
        )
    }
}

export default Picker;