const FETCHING = 'freelances/fetching'
const RESOLVED = 'freelances/resolved'
const REJECTED = 'freelances/rejected'
 
const usersFetching = () => ({ type: FETCHING });
const usersResolved = (data) => ({ type: RESOLVED, payload: data });
const usersRejected = (error) => ({ type: REJECTED, payload: error });