import React from 'react';
import ReactDOM from 'react-dom';


class Game extends React.Component {
    render() {
        retutn (
            <table>
            <Raw name="1" value={2} suffix={'Elefants'} />
            </table>
        );
    }
}

const Raw = (props) => {
    // console.log(props);
    return (
        <tr>
            <td>
                { props.name }
            </td>
            <td>
                { props.value }
            </td>
            <td>
                { props.sufix }
            </td>
        </tr>
    );
};

const Games = () => {
    return (
        
        <table style = { { backgroundColor: 'yellow', fontSize: "22px" } }>
            <Raw name="№" value={'Quantity'} suffix={'Enimals'} />
            <Raw name="1" value={2} suffix={'Elefants'} />
            <Raw name="2" value={4} suffix={'Tigers'} />
            <Raw name="3" value={7} suffix={'Foxes'} />
            <Raw name="4" value={15} suffix={'Monkeys'} />
            <Raw name="5" value={2} suffix={'Girafes'} />
        </table>
    );
}

ReactDOM.render(
    <Game />,  
    document.getElementById('root'),
);
