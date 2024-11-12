import { DownTimeIncidents } from './down-time-incident';
import { GOOGLE_DOWNTIME_PER_YEAR } from './google-downtime';

describe('calculate downtimes', () => {
  it('calculate downtimes', () => {
    const downTimeIncidents = new DownTimeIncidents();

    const downTimesPerYear = GOOGLE_DOWNTIME_PER_YEAR;
    for (const year in downTimesPerYear) {
      for (const incident of downTimesPerYear[Number(year)]) {
        downTimeIncidents.addIncident(incident[0], incident[1], incident[2]);
      }
    }

    console.log(downTimeIncidents.incidents.length);
    console.log(downTimeIncidents.calculateMeanDownTime());
  });
});