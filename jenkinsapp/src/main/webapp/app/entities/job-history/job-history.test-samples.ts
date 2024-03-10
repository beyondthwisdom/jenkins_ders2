import dayjs from 'dayjs/esm';

import { IJobHistory, NewJobHistory } from './job-history.model';

export const sampleWithRequiredData: IJobHistory = {
  id: 8601,
};

export const sampleWithPartialData: IJobHistory = {
  id: 13015,
  startDate: dayjs('2024-03-10T04:29'),
  endDate: dayjs('2024-03-09T23:31'),
};

export const sampleWithFullData: IJobHistory = {
  id: 25499,
  startDate: dayjs('2024-03-10T08:46'),
  endDate: dayjs('2024-03-10T04:10'),
  language: 'SPANISH',
};

export const sampleWithNewData: NewJobHistory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
