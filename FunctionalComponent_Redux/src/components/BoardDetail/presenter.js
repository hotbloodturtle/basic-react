import styled from "styled-components";

const Container = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid red;
`;

const BoardDetail = (props) => {
  const { boardDetail } = props;
  return <Container>{boardDetail?.content && boardDetail.content}</Container>;
};

export default BoardDetail;
