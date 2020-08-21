import React, { FC } from 'react';
import * as S from './styles';
import { Board } from '../../../../components/default';
import { NavIconNoticeBlue } from '../../../../assets';
import { CircleBoardFilterFunc } from '../../../../lib/api';
import { BoardObj } from '../../../default/Board/Board';

interface Props {
  data: BoardObj[];
}

const CircleNoticeList: FC<Props> = ({ data }) => {
  return (
    <S.Container>
      <Board
        boardData={data}
        title="동아리 공지사항"
        imgSrc={NavIconNoticeBlue}
        date={false}
        filterFunc={CircleBoardFilterFunc}
      />
    </S.Container>
  );
};

export default CircleNoticeList;
