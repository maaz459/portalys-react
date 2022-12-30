import styled from "@emotion/styled";

export const EventBar = styled.div`
  .site-navigation-steps .ant-steps-item .ant-steps-item-title {
    color: ${(props) => props.color}!important;
  }

  .site-navigation-steps .ant-steps-item .ant-steps-icon {
    color: ${(props) => props.color}!important;
  }

  .site-navigation-steps .ant-steps-item .ant-steps-item-icon {
    background-color: transparent;
    color: ${(props) => props.color}!important;
    border: 1px solid #02f6ad !important;
  }

  .site-navigation-steps .ant-steps-item .ant-steps-icon {
    color: ${(props) => props.color}!important;
  }

  .site-navigation-steps .ant-steps-item::after {
    border-top-color: ${(props) => props.color} !important;
    border-inline-end-color: ${(props) => props.color} !important;
  }

  .site-navigation-steps .ant-steps-item::before {
    background-color: transparent !important;
  }

  /* Process */
  .site-navigation-steps .ant-steps-item-process .ant-steps-item-title {
    color: #02f6ad !important;
  }

  .site-navigation-steps .ant-steps-item-process .ant-steps-item-icon {
    background-color: #02f6ad;
    color: ${(props) => props.color}!important;
    border: none !important;
  }

  .site-navigation-steps .ant-steps-item-process .ant-steps-icon {
    color: ${(props) => props.color}!important;
  }

  .site-navigation-steps .ant-steps-item-process::after {
    border-top-color: #02f6ad !important;
    border-inline-end-color: #02f6ad !important;
  }
`;

export const SelectItem = styled.div`
  .optionss: {
    background-color: red !important;
    height: 56px !important;
  }
`;
