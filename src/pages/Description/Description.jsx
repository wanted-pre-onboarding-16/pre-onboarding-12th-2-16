import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import remarkHtml from 'remark-html';
import remarkParse from 'remark-parse';
import { unified } from 'unified';

function Description() {
  const [markdownText, setMarkdownText] = useState('');
  const selector = useSelector(state => state.issue.issuesStore);
  const param = useParams();
  useEffect(() => {
    const markdownChangeHtml = async () => {
      const { value } = await unified()
        .use(remarkParse)
        .use(remarkHtml)
        .process(selector[param.id]?.body);
      setMarkdownText(value);
    };
    setMarkdownText('');
    markdownChangeHtml();
  }, [param.id, selector]);
  const createMarkdown = useCallback(() => {
    return { __html: markdownText };
  }, [markdownText]);

  return <div dangerouslySetInnerHTML={createMarkdown()} />;
}

export default Description;
