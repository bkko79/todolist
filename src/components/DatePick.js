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
        // safari Bg Swipe Movement prevention
        document.body.style.position = 'fixed';
        document.body.style.top = `-${window.scrollY}px`;
    }
    toggleOff() {
        this.setState({ setIsOpen: false, isOpen: false });
        // safari Bg Swipe Movement prevention disabled
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
    setDate(date) {
        this.props.onChangeTime(this.state.id.id, date.valueOf());
    }

    render(){
        return(
            <div className="todo-calendar">
                <span role="img" aria-label="timer" onClick={this.toggleOn.bind(this)}>⏱️</span>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DateTimePicker 
                        open={this.state.isOpen}
                        onOpen={this.toggleOn.bind(this)}
                        onClose={this.toggleOff.bind(this)}
                        value={this.state.todayDate} 
                        onChange={(date) => this.setDate(date)}
                        TextFieldComponent={() => null}
                        minDate={new Date()}
                        ampm={false}
                        format="yyyy/MM/dd HH:mm"
                    />
                </MuiPickersUtilsProvider>
            </div>
        )
    }
}

export default Picker;