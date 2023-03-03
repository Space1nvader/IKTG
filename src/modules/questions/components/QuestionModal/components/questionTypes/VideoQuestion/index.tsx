import React from 'react';
import YouTube from 'react-youtube';
import { Question } from 'modules/questions';

const VideoQuestion: IFC<Question> = (props) => {
  const { type, data } = props;
  const options = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
      controls: 2
    }
  };

  return (
    <div>
      {type} <YouTube opts={options} videoId={data} />
    </div>
  );
};

export default VideoQuestion;
