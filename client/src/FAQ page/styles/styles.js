import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(-180deg, hsl(273, 75%, 66%), hsl(240, 73%, 65%));
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
    height: 100%;
    width: 100%;
    .footer {
      width: 150px;
      margin-top: 5px;
      padding-top: 5px;
    }
  }
`;

export const Content = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  #img {
    margin-right: 0;
    padding-right: 0;
  }

  #faq-content {
    h1 {
      font-family: Arial, Helvetica, sans-serif;
      padding-bottom: 30px;
      margin-right: auto;
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
      border: 0;
      border-bottom: 1px solid #ddd;
      box-shadow: 0 8px 16px 0 #ccc;
      border-radius: 8px;
      background: none;
      width: 400px;
      padding: 5px;
      margin-right: 20px;
      margin-left: 50px;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: hsl(238, 29%, 16%);
    }
    button:hover {
      font-weight: bold;
      border: 1px solid hsl(14, 88%, 65%);
      cursor: pointer;
    }
  }
  .answer {
    display: none;
  }

  .open .answer {
    display: block;
    font-weight: bold;
    color: hsl(14, 88%, 55%);
  }
  p {
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    background: none;
    padding: 0;
    margin: 0;

    img {
      width: 200px;
      height: 200px;
      padding-bottom: 10px;
    }

    #faq-content {
      width: 250px;
      border: 1px solid #fff;
      border-radius: 8px;
      background: #fff;
      margin-left: 0;

      h1 {
        margin-right: 0;
      }

      button {
        flex-direction: column;
        width: 75%;
        background: #ccc;
        margin-right: 20px;
        margin-left: 20px;
      }
    }
  }
`;
