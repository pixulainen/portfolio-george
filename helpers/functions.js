import moment from 'moment';

export const formatDate = (date, dateFormat = 'LL') => {
	return date && moment(date).format(dateFormat);
};
