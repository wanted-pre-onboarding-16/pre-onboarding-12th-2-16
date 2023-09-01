import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

function Issue({ data, issueCount }) {
  const navigation = useNavigate();
  const moveToDescription = () => {
    navigation(`${issueCount}`);
  };
  const moveToAdvertosement = () => {
    window.location.href = 'https://www.wanted.co.kr/';
  };

  const DateFormatter = data.updated_at.match(/(\d{4})-(\d{2})-(\d{2})T/);
  let DateFormatterString = `${DateFormatter[1]}년 ${DateFormatter[2]}월 ${DateFormatter[3]}일`;
  return (
    <LiTag>
      {(issueCount + 1) % 5 === 0 && (
        <AdverTisement onClick={moveToAdvertosement}>
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
            alt="adevertisement logo"
          />
        </AdverTisement>
      )}
      <IssueContainer onClick={moveToDescription}>
        <IssueLeftSide>
          <LeftSideTitle>
            <LeftSideTitleSpan>#{data.number}</LeftSideTitleSpan>
            {data.title}
          </LeftSideTitle>
          <LeftSideWriter>
            <LeftSideWriterSpan>작성자: {data.user.login}</LeftSideWriterSpan> 작성일:
            {DateFormatterString}
          </LeftSideWriter>
        </IssueLeftSide>

        <RightSide>
          <p>코멘트: {data.comments}</p>
        </RightSide>
      </IssueContainer>
    </LiTag>
  );
}

export default Issue;

const LiTag = styled.li`
  border-bottom: 1px solid gray;
  padding: 20px 0;
  cursor: pointer;
  margin-bottom: 10px;
`;
const IssueLeftSide = styled.div`
  text-align: left;
  padding: 20px;
  width: 650px;
`;
const LeftSideTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 18px;
`;
const LeftSideTitleSpan = styled.span`
  margin-right: 20px;
`;
const LeftSideWriter = styled.p`
  width: 100%;
`;
const LeftSideWriterSpan = styled.span`
  margin-right: 5px;
`;
const RightSide = styled.div`
  margin: auto 4px;
`;
const AdverTisement = styled.div`
  padding: 20px 0;

  margin-bottom: 20px;

  border: 1px solid gray;
  transition: 0.3s ease;
  &:hover {
    background-color: rgba(0, 128, 255, 0.1);
  }
`;
const IssueContainer = styled.div`
  display: flex;
  justify-content: space-between;

  transition: 0.3s ease;
  &:hover {
    background-color: rgba(0, 128, 255, 0.1);
    box-shadow:
      0 5px 15px rgba(0, 128, 255, 0.1),
      0 -5px 15px rgba(0, 128, 255, 0.1);
  }
`;
