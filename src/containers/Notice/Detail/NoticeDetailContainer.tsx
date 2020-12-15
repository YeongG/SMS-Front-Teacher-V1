import React, { FC } from "react";
import { NoticeDetail } from "../../../components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNoticeDetailSaga } from "../../../modules/action/notice";
import { RouteChildrenProps } from "react-router-dom";

export interface BoardDetail {
  content: string;
}

const NoticePageContainer: FC<RouteChildrenProps> = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const id: string = (match.params as any).id;
    dispatch(getNoticeDetailSaga(id));
  }, []);
  return <NoticeDetail />;
};

export default NoticePageContainer;
