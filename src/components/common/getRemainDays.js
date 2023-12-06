export function getRemainDays(definedate) {
    const targetDate = new Date(definedate);
    const today = new Date();

    const timeDifference = targetDate.getTime() - today.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return daysDifference;
}


