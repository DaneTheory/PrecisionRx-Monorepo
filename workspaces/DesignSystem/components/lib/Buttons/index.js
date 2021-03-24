import styled from '@emotion/styled'


const Buttons = styled.button`
  padding: 12px 24px;
  background-color: #121a3e;
  font-size: 16px;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
`

const _Buttons = ({ onClick, children }) => {
 return (
   <Buttons
     onClick={ onClick }>
      { children }
   </Buttons>
 )
}


export default _Buttons
