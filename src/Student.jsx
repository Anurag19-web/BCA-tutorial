import PropTypes from 'prop-types'

function Student(props){
    return(
        <>
        <h2>Learning Props</h2>
        <p>Name:{props.name}</p>
        <p>Age:{props.age}</p>
        <p>Field:{props.field}</p>
        <p>Result:{props.result ? 'yes' : 'no'}</p>
        </>
    )
}
Student.PropTypes={
    name:PropTypes.string,
    age:PropTypes.number,
    field:PropTypes.string,
    result:PropTypes.bool
}
Student.defaultProps={
    name:'Any',
    age:18,
    field:'Bcom',
    result:false
}
export default Student