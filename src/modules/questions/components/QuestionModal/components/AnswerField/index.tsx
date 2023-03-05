import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
// import FieldLabel from 'components/Fields/components/Label';
import TextField from 'components/Fields/TextField';
import { setAnswerAction } from 'store/answers/actions';
import { getAnswersSelector } from 'store/answers/selectors';
import { currentQuestionSelector } from 'store/questions/selectors';
import { generateAnswerMessage } from 'utils/generateAnswerMessage';
import AnswerDescription from './components/AnswerDescription';
import GameList from './components/GameList';
import s from './index.module.scss';

export type SearchData = Array<{ name: string }>;

const QuestionAnswerField: IFC = () => {
  const [fieldValue, setFieldValue] = useState('');
  const [answerLabel, setAnswerLabel] = useState('');
  const [data, setData] = useState<SearchData>([]);
  const question = useSelector(currentQuestionSelector);
  const answers = useSelector(getAnswersSelector);

  const isAnswered = answers[question.name];
  const dispatch = useDispatch();

  useEffect(() => {
    setFieldValue('');
    setAnswerLabel('');
    setData([]);
    setTimeout(() => {
      setData([]);
    }, 300);
  }, [question.name]);

  const onAnswerHandler = (answer: string) => {
    if (answer.length > 2) {
      const lowerCaseAnswer = answer.toLocaleLowerCase();
      const lowerCaseQuestion = question.name.toLocaleLowerCase();
      const answerResult = lowerCaseAnswer.includes(lowerCaseQuestion);
      dispatch(setAnswerAction({ [question.name]: answerResult }));

      setAnswerLabel(generateAnswerMessage(answerResult));
    }
    setFieldValue(answer);
    setData([]);
  };

  async function searchGamesRequest(value: string) {
    await fetch(
      `https://rawg.io/api/games?page_size=10&search=${value}&page=1&key=bf34a0e9ed1640ab991914fc565e8dc0`,
      { method: 'GET' }
    )
      .then(async (response) => (await response.json()) as Promise<{ results: SearchData }>)
      .then(({ results }) => {
        setData(results || []);
      });

    return undefined;
  }

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (fieldValue.length > 3) {
        searchGamesRequest(fieldValue);
      } else if (data.length) {
        setData([]);
      }
    }, 300);

    return () => {
      clearTimeout(delayDebounceFn);
    };
  }, [fieldValue]);

  const onSubmitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    onAnswerHandler(fieldValue);
  };

  const onFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setFieldValue(value);
    setAnswerLabel('');
  };

  const fieldAnsweredClassName = (() => {
    if (isAnswered === true) {
      return s.success;
    }

    if (answerLabel && isAnswered === false) {
      return s.error;
    }

    return '';
  })();

  const fieldClassList = classNames(s.input, fieldAnsweredClassName);

  return (
    <div className={s.field}>
      <form onSubmit={onSubmitHandler}>
        <TextField
          autoFocus
          disabled={isAnswered}
          autoComplete="off"
          placeholder="Start typing"
          className={fieldClassList}
          size="large"
          name="answer"
          onChange={onFieldChange}
          value={isAnswered ? question.name : fieldValue}
        />
        {/* {typeof isAnswered === 'boolean' && (
          <FieldLabel className={`${s.label} ${isAnswered ? s.valid : s.invalid}`} name="answer">
            {answerLabel}
          </FieldLabel>
        )} */}
      </form>
      <div className={s.content}>
        {isAnswered ? (
          <AnswerDescription>{question.message}</AnswerDescription>
        ) : (
          <GameList data={data} onAnswer={onAnswerHandler} />
        )}
      </div>
    </div>
  );
};

export default QuestionAnswerField;
