import { ICountry, NewCountry } from './country.model';

export const sampleWithRequiredData: ICountry = {
  id: 12681,
};

export const sampleWithPartialData: ICountry = {
  id: 23904,
  counrtyAreaCode: 'before',
};

export const sampleWithFullData: ICountry = {
  id: 29989,
  countryName: 'amongst optimisation',
  counrtyAreaCode: 'avail querulous',
};

export const sampleWithNewData: NewCountry = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
