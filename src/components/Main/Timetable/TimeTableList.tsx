import React, { FC } from "react";

import * as S from "../style";
import { ResTimetable } from "../../../lib/api/payloads/Main";

interface Props {
  timetable: ResTimetable;
}

const TimetableList: FC<Props> = ({ timetable }) => {
  const { time1, time2, time3, time4, time5, time6, time7 } = timetable;

  return (
    <S.TimetableList>
      <S.TimetableItem>
        <S.TimetableItemDate>1교시</S.TimetableItemDate>
        {time1}
      </S.TimetableItem>
      <S.TimetableItem>
        <S.TimetableItemDate>2교시</S.TimetableItemDate>
        {time2}
      </S.TimetableItem>
      <S.TimetableItem>
        <S.TimetableItemDate>3교시</S.TimetableItemDate>
        {time3}
      </S.TimetableItem>
      <S.TimetableItem>
        <S.TimetableItemDate>4교시</S.TimetableItemDate>
        {time4}
      </S.TimetableItem>
      <S.TimetableItem>
        <S.TimetableItemDate>5교시</S.TimetableItemDate>
        {time5}
      </S.TimetableItem>
      <S.TimetableItem>
        <S.TimetableItemDate>6교시</S.TimetableItemDate>
        {time6}
      </S.TimetableItem>
      <S.TimetableItem>
        <S.TimetableItemDate>7교시</S.TimetableItemDate>
        {time7}
      </S.TimetableItem>
    </S.TimetableList>
  );
};

export default TimetableList;
