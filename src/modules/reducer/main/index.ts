import { ResSchedule, ResTimetable } from "../../../lib/api/payloads/Main";
import {
  TimetableAction,
  SET_TIMETABLES,
  SET_SCHEDULES
} from "../../action/main";

export interface TimetableState {
  timetables: ResTimetable[];
  schedules: ResSchedule;
}

const initialState: TimetableState = {
  timetables: [
    {
      time1: "...",
      time2: "...",
      time3: "...",
      time4: "...",
      time5: "...",
      time6: "...",
      time7: "..."
    }
  ],
  schedules: {
    detail: "",
    start_date: 1607767772,
    end_date: 1607777772,
    schedule_uuid: "schedule_123123123"
  }
};

const ManagementInfoReduce = (
  state: TimetableState = initialState,
  action: TimetableAction
): TimetableState => {
  switch (action.type) {
    case SET_TIMETABLES:
      return {
        ...state,
        timetables: action.payload.timetables
      };
    case SET_SCHEDULES:
      return {
        ...state,
        schedules: action.payload.schedules
      };
    default:
      return state;
  }
};

export default ManagementInfoReduce;
