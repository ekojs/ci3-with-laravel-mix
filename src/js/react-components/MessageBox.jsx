import React from 'react';
import PropTypes from 'prop-types';

export default class MessageBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modalCss: props.modalCss,
            btn_action_name: props.btn_action_name,
            btn_action_func: props.btn_action_func,
            title: props.title,
            content: props.content
        };
        this.showModal = this.showModal.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleAction = this.handleAction.bind(this);
    }

    showModal(){
        this.$el.modal('show');
    }

    handleClose(){
        this.$el.modal('hide');
    }

    handleAction(){
        this.state.btn_action_func();
    }

    componentDidMount(){
        this.$el = $(this.el);
    }

    componentWillUnmount(){
        this.$el.remove();
    }

    render(){
        let modalCss = this.state.modalCss?this.state.modalCss:"modal-primary";
        let btn_action = null;
        if(this.state.btn_action_name !== ""){
            btn_action = <button type="button" className="btn btn-primary pull-left" onClick={this.handleAction}>{this.state.btn_action_name}</button>;
        }

        return (
            <React.Fragment>
                <div ref={el => this.el = el} className={'modal modal-'+modalCss+' fade'}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title">{this.state.title}</h4>
                            </div>
                            <div className="modal-body">{this.state.content}</div>
                            <div className="modal-footer">
                                {btn_action}
                                <button type="button" className={'btn btn-'+modalCss} data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <button className={'btn btn-'+modalCss} onClick={this.showModal}>Show Me !!!</button>
            </React.Fragment>
        );
    }
}

MessageBox.propTypes = {
    modalCss: PropTypes.string,
    btn_action_name: PropTypes.string,
    btn_action_func: PropTypes.func,
    title: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.string,PropTypes.element])
}

MessageBox.defaultProps = {
    modalCss: 'primary',
    btn_action_name: '',
    btn_action_func: null,
    title: 'Message Box title',
    content: 'Message Box content'
}