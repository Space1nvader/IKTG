import React from 'react';
import { SearchData } from '../..';
import s from './index.module.scss';

type GameListProps = {
  data: SearchData;
  onAnswer: (name: string) => void;
};

const GameList: IFC<GameListProps> = (props) => {
  const { data, onAnswer } = props;

  return (
    <div className={s.gameList}>
      {!!data.length &&
        data.map((game) => (
          <button
            className={s.gameButton}
            type="button"
            key={game.name}
            onClick={() => onAnswer(game.name)}
          >
            {game.name}
          </button>
        ))}
    </div>
  );
};

export default GameList;
