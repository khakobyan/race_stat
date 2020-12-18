export const FETCH_RACERS = (limit, offset) =>  `/drivers.json?limit=${limit}&offset=${offset}`;
export const FETCH_RACER = (racer_id) =>  `/drivers/${racer_id}.json`;
export const FETCH_RACES = (racer_id, limit, offset) =>  `/drivers/${racer_id}/results.json?limit=${limit}&offset=${offset}`;
