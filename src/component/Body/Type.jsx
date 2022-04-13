// import React,{useRef} from 'react'

// export const Type = () => {
//   const myAppRef = useRef(null);
//   return (
//     <> <TypeWriterEffect
//     textStyle={{ fontFamily: 'Red Hat Display ', 
// fontWeight:'50px',
// fontSize:'1.5 em'
// }}
    
//     startDelay={100}
//     cursorColor="black"
//     text="Learner , Developer , Coder"
//     typeSpeed={100}
//   />
//    <div ref={myAppRef}>

// </div></>
   
//   )
// }
// export default Type
import React from 'react'
 import TypeWriterEffect from 'react-typewriter-effect';



const Type = () => {
  return (
    <TypeWriterEffect
        textStyle={{
          fontFamily: 'Red Hat Display',
          color: '#3F3D56',
          fontWeight: 500,
          fontSize: '2 em',
        }}
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[
          'Learner',
          'Developer',
          'Coder',
          
        ]}
        multiTextDelay={1000}
        typeSpeed={30}
      />
  )
}

export default Type