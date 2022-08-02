import styled from "styled-components";

export const StyledLayout = styled.div`
  #components-layout-demo-custom-trigger .trigger {
    padding: 0 24px;
    font-size: 18px;
    line-height: 64px;
    cursor: pointer;
    transition: color 0.3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }

  .logo {
    height: 32px;
    margin: 13px;
    background: white;

    object-fit: cover;
  }

  .iconWhite {
    padding-left: 15px;
    color: white;
  }

  #components-layout-demo-responsive .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.2);
  }

  .site-layout-sub-header-background {
    background: #fff;
  }

  .site-layout-background {
    background: #fff;
  }
`;
