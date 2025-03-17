const Header = (props) => {
    return (
      <h2>
        {props.courseName}
      </h2>
    )
  }
  
  const Part = (props) => {
    return (
      <p>
        {props.cpname} {props.cpex}
      </p>
    )
  }
  
  const Content = (props) => {
    return (
      <>
        {props.courseParts.map((cP) => (
          <Part cpkey={cP.id} cpname={cP.name} cpex={cP.exercises} />
        ))}
      </>
    )
  }
  
  const Total = (props) => {
    return (
      <p> Total of &nbsp;
        {props.courseParts.reduce(function(sum, cP) {
          return sum += cP.exercises
        },0)} exercises
      </p>
    )
  }
  
  const Course = (props) => {
    return (
      <>
        <Header courseName={props.course.name}/>
        <Content courseParts={props.course.parts}/>
        <Total courseParts={props.course.parts}/>
      </>
    )
  }

  export default Course