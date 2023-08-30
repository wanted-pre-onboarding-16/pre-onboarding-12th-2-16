import React from 'react';
import { styled } from 'styled-components';

function Issue({ data, issueCount }) {
  return (
    <LiTag>
      {(issueCount + 1) % 5 === 0 && (
        <div>
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
            alt="adevertisement logo"
          />
        </div>
      )}
      <div>
        <p>
          <span>#{data.number}</span>
          title: {data.title}
        </p>
        <p>
          작성자: {data.user.login} 작성일:{data.updated_at}
        </p>
      </div>
      <div>코멘트: {data.comments}</div>
    </LiTag>
  );
}

export default Issue;

const LiTag = styled.li`
  margin: 20px 0;
  padding: 20px 0;
  border-bottom: 2px solid #eee;
`;