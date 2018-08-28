import React from 'react';
import PropTypes from 'prop-types';

/**
 * Panel Item Component
 * 
 * @param dataItems {title,body,footer}
 */
export default class PanelItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
            show: false
        });
    }

    render(){
        return (
            this.state.show ? (
                <div className="panel panel-primary">
                <div className="panel-heading">
                    <div className="pull-right" style={{cursor: 'pointer'}} onClick={this.handleClick}>x</div>
                    <div className="panel-title">{this.props.dataItems.title}</div>
                </div>
                <div className="panel-body">{this.props.dataItems.body}</div>
                <div className="panel-footer">{this.props.dataItems.footer}</div>
            </div>
            ):null
        );
    }
}

PanelItem.propTypes = {
    dataItems: PropTypes.object
}

PanelItem.propTypes = {
    dataItems: PropTypes.shape({
        title: PropTypes.oneOfType([PropTypes.string,PropTypes.element]),
        body: PropTypes.oneOfType([PropTypes.string,PropTypes.element]),
        footer: PropTypes.oneOfType([PropTypes.string,PropTypes.element])
    })
}

PanelItem.defaultProps = {
    dataItems: {
        title: 'Panel Title',
        body: 'Body Content',
        footer: 'Panel Footer'
    }
}