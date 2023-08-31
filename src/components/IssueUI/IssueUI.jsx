import { styled } from 'styled-components';

export function IssueUI({ data }) {
  return (
    <IssueStyle>
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
    </IssueStyle>
  );
}

const IssueStyle = styled.li`
  display: flex;
  margin-top: 20px;
  flex-flow: column nowrap;
  font-size: 1rem;
  line-height: 1.5rem;
  color: black;
  cursor: default; // 클릭할 수 없게 만들어줍니다.
  p:first-child {
    color: purple;
    font-size: 1.5rem;
  }
`;
