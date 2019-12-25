import styled from 'styled-components';
import {darken} from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;

export const Content = styled.div`
width:100%;
max-width:315px;
text-align:center;

form{
  display:flex;
  flex-direction:column;
  margin-top:3rem;

  input{
    background: rgba(0,0,0, 0.1);
    border:0;
    border-radius:4px;
    height:44px;
    padding:15px;
    color: #fff;
    margin:0 0 10px;

    &::placeholder{
      color: rgba(255,255,255, 0.7);
    }
  }
  span{
    color:#FB6F91;
    align-self:flex-start;
    margin:0 0 10px;
    font-weight:bold;
    font-size:1.2rem;
  }

  button{
    margin:5px 0 0;
    height:44px;
    background:#3b9eff;
    border:0;
    color: #fff;
    border-radius:4px;
    font-weight:bold;
    font-size:1.6rem;
    transition: background 0.2s;

    &:hover{
      background:${darken(0.03, '#3b9eff')}
    }
  }

  a{
    color: #fff;
    margin-top:10px;
    font-size:1.6rem;
    opacity:0.8;

    &:hover{
      opacity:1;
    }
  }

}
`
