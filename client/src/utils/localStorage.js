export const getSavedScheduleIds = () => {
    const savedScheduleIds = localStorage.getItem('saved_schedules')
        ? JSON.parse(localStorage.getItem('saved_schedules'))
        : [];

    return savedScheduleIds;
};

export const saveScheduleIds = (scheduleIdArr) => {
    if (scheduleIdArr.length) {
        localStorage.setItem('saved_schedules', JSON.stringify(scheduleIdArr));
    } else {
        localStorage.removeItem('saved_schedules');
    }
};

export const removeScheduleId = (scheduleId) => {
    const savedScheduleIds = localStorage.getItem('saved_schedules')
        ? JSON.parse(localStorage.getItem('saved_schedules'))
        : null;

    if (!savedScheduleIds) {
        return false;
    }

    const updatedSavedScheduleIds = savedScheduleIds?.filter((savedScheduleId) => savedScheduleId !== scheduleId);
    localStorage.setItem('saved_schedules', JSON.stringify(updatedSavedScheduleIds));

    return true;
};
