import styled from "styled-components";

const Page = styled.body`
  background-color: lemonchiffon;
  height: 100vh;
  width: 100vh;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h1`
  font-size: 50px;
  font-family: Tahoma;
  font-weight: 600;
  width: 100%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  /* color: ${({ theme }) => theme.colors.primary}; */
  color: cornflowerblue;
`;

export default function Home() {
  return (
    <Page>
      <Title>Cerebrum VaxVerify Landing Page</Title>
    </Page>
  );
}
