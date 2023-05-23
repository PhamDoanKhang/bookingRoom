// loading
export const loadingSelecter = (state)=> state.loading.toggleLoading;

// room
export const listRoomSelecter = (state)=> state.room.listRoom;
export const roomIdSelecer = (state)=> state.room.idRoom;
export const roomMetadataSelecer = (state)=> state.room.metaData;

// meeting room
export const listMeetingRoomSelecter = (state)=> state.meetingroom.listMeetingRoom;
export const mettingRoomIDSelecter = (state)=> state.meetingroom.mettingRoomID;
export const meetingMetaSelecter = (state)=> state.meetingroom.metaPage
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
export const InfoSuggesMetaDataSelecter = (state)=> state.infoSugges.metaData;

// participants

export const IndividualSelecter = (state) => state.participants.Individual
export const DepartmentSelecter = (state) => state.participants.Department