import styled, { css } from "styled-components";
import { lighten } from "polished";

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  border: 0;
  background: none;
  position: relative;

  ${props =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        right: -2px;
        top: -2px;
        width: 13px;
        height: 13px;
        background: red;
        content: "${props.notifications >= 10 ? "" : props.notifications}";
        font-size: 13px;
        color: #fff;
        border-radius: 50%;
      }
    `}
`;

export const NotificationList = styled.div`
  position: absolute;
  width: 260px;
  left: calc(50% - 130px);
  top: calc(100% + 30px);
  background: rgba(0, 0, 0, 0.8);
  z-index:1;
  border-radius: 4px;
  padding: 15px 5px;
  display:${props => (props.visible ? "block" : "none")}

  &::before {
    content: "";
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.8);
  }
`;

export const Scroll = styled.div`
  max-height: 260px;
  overflow: auto;
  padding: 5px 15px;

  & {
    ::-webkit-scrollbar-track {
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 5px;
    }
    ::-webkit-scrollbar {
      width: 6px;
      border-radius: 5px;
      background: rgba(255, 255, 255, 0.1);
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background: rgba(0, 0, 0, 0.6);
    }
  }

  span {
    color: gray;
    color: #eee;
    font-size: 1.4rem;
  }

  div:first-child {
    top: -90px;
    display: block;
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-end;

    button {
      font-size: 1.2rem;
      border: 0;
      background: none;
      color: #fff;
    }
  }
`;

export const Notification = styled.div`
  color: #fff;

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  p {
    font-size: 1.3rem;
    line-height: 18px;
  }

  time {
    font-size: 1.2rem;
    opacity: 0.6;
    display: block;
    margin-bottom: 5px;
  }

  button {
    font-size: 1.2rem;
    border: 0;
    background: none;
    color: ${lighten(0.2, "#7159c1")};
  }

  ${props =>
    props.unread &&
    css`
      &::after {
        content: "";
        display: inline-block;
        height: 7px;
        width: 7px;
        background: red;
        border-radius: 50%;
        margin-left: 10px;
      }
    `}
`;
