import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 3rem;

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
      font-size: 1.2rem;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #3b9eff;
      border: 0;
      color: #fff;
      border-radius: 4px;
      font-weight: bold;
      font-size: 1.6rem;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, "#3b9eff")};
      }
    }

    a {
      color: #fff;
      margin-top: 10px;
      font-size: 1.6rem;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }

  > button {
    width: 100%;
    margin: 10px 0 0;
    height: 44px;
    background: #f64c75;
    border: 0;
    color: #fff;
    border-radius: 4px;
    font-weight: bold;
    font-size: 1.6rem;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, "#f64c75")};
    }
  }
`;
