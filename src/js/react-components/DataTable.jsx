import React from 'react';
import PropTypes from 'prop-types';

/**
 * Data Table Component
 * 
 * @param dataItems {url,header,data}
 */
export default class DataTable extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: ("#" === props.dataItems.url?true:false),
            url: props.dataItems.url,
            header: props.dataItems.header,
            lsItems: props.dataItems.data
        };
        this.loadData = this.loadData.bind(this);
    }

    loadData(){
        if("#" !== this.state.url){
            $.ajax({
                url: this.state.url,
                dataType: "json",
                success: function(data,status,xhr){
                    if(typeof(data) !== 'undefined'){
                        this.setState({
                            isLoaded: true,
                            lsItems: data
                        });
                    }
                }.bind(this),
                error: function(xhr,status,e){
                    this.setState({error: e.toString(),isLoaded: false});
                }.bind(this)
            });
        }
    }

    componentDidMount(){
        this.loadData();
    }

    render(){
        const {error,isLoaded,lsItems} = this.state;
        return (
            isLoaded ? (
                <table className="table table-responsive">
                    <thead>
                        <tr>
                            {this.state.header.map(
                                v => {
                                    return <th key={v}>{v}</th>;
                                }
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {lsItems.map(
                            (v,i) => {
                                return (
                                    <tr key={'tr-'+i}>
                                        <td>{i+1}</td>
                                        {Object.keys(v).map(
                                            (x,idx) => {
                                                return <td key={'tr-'+i+'.td-'+idx}>{v[x].toString()}</td>;
                                            }
                                        )}
                                    </tr>
                                );
                            }
                        )}
                    </tbody>
                </table>
            ):(
                error ? (
                    <p>Fetch data error : {error}</p>
                ):null
            )
        );
    }
}

DataTable.propTypes = {
    dataItems: PropTypes.object
}

DataTable.propTypes = {
    dataItems: PropTypes.shape({
        url: PropTypes.url,
        header: PropTypes.array,
        data: PropTypes.array
    })
}

DataTable.defaultProps = {
    dataItems: {
        url: "#",
        header: ['#','Category','Name','Price','Stock'],
        data: [{"category":"Sporting Goods","name":"Football","price":"$49.99","stocked":true},{"category":"Sporting Goods","name":"Basket ball","price":"$29.99","stocked":true},{"category":"Electronics","name":"Iphone 6","price":"$399.99","stocked":false}]
    }
}