import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

function IssueDetail() {
  const [markdownText, setMarkdownText] = useState('');
  const selector = useSelector(state => state.issue.issuesStore);
  const { id } = useParams();

  useEffect(() => {
    const markdownData = selector[id]?.body || '';
    setMarkdownText(markdownData);
  }, [id, selector]);

  return (
    <DescriptionContainer>
      {selector[id] && (
        <ProfileContainer>
          <Avatar src={selector[id].user.avatar_url} alt="Author's Avatar" />
          <AuthorName>{selector[id].user.login}</AuthorName>
        </ProfileContainer>
      )}
      <StyledReactMarkdown>{markdownText}</StyledReactMarkdown>
    </DescriptionContainer>
  );
}

export default IssueDetail;

const DescriptionContainer = styled.div`
  padding: 20px;
  border-radius: 8px;
  background-color: #f4f4f4;
  max-width: 800px;
  margin: 20px auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: start;
`;

const StyledReactMarkdown = styled(ReactMarkdown)`
  font-family: 'Arial', sans-serif;
  color: #333;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #444;
    margin-top: 20px;
  }

  a {
    color: #0077cc;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  code {
    background-color: #e6e6e6;
    padding: 2px 4px;
    border-radius: 4px;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
`;

const AuthorName = styled.span`
  font-weight: bold;
  color: purple;
`;
