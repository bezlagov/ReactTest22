const FunctionComponent = ({ name, age = 100 }) => {
/*const {name, age} = props;*/

    return (
        <div>
            <h2>Hi, {name} I am {age}</h2>
        </div>
    );
}

export default FunctionComponent;