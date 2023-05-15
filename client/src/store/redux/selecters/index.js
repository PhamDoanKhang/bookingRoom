// loading
export const loadingSelecter = (state)=> state.loading.toggleLoading;

// room
export const listRoomSelecter = (state)=> state.room.listRoom;
export const roomIdSelecer = (state)=> state.room.idRoom;

// meeting room
export const listMeetingRoomSelecter = (state)=> state.meetingroom.listMeetingRoom;
export const mettingRoomIDSelecter = (state)=> state.meetingroom.mettingRoomID;

// weeklySchedule
export const listWeeklyScheduleSelecter = (state)=> state.weeklySchedule.weeklyScheduleList;
export const WeeklyScheduleSelecter = (state)=> state.weeklySchedule.weeklySchedule;

// member 
export const listMemberSelecter = (state)=> state.member.memberList;
export const memberSelecter = (state)=> state.member.member;

// info meeting 
export const listMeetingInfoSelecter = (state)=> state.meetingInfo.meetingInforList;
export const meetingInfoSelecter = (state)=> state.meetingInfo.meetingInfo;

// infoSuggestion 
export const InfoSuggesListSelecter = (state)=> state.infoSugges.infoSuggestionList;
export const InfoSuggesSelecter = (state)=> state.infoSugges.infoSuggestion;