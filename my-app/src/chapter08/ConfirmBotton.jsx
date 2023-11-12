import React from "react";

class ConfirmBotton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isConfirmed: false
        };

        this.handleConfirm = this.handleConfirm.bind(this);
    }

    handleConfirm() {
        this.setState(provState => {
            isConfirmed: !provState.isConfirmed
        });
    }

    render() {
        return (
            <botton
                onClick={ this.handleConfirm }
                disabled={ this.state.isConfirmed }
            >
                { this.stats.isConfirmed ? "확인됨" : "확인하기" }
            </botton>
        )
    }
}

export default ConfirmBotton;
