import { StormGlass } from '@src/clients/stormGlass';
import axios from 'axios';
import StormGlassWeather3HoursFixture from '@test/fixtures/stormglass_weather_3_hours.json';
import StormGlassNormalizedResponse3HoursFixture from '@test/fixtures/stormglass_normalized_response_3_hours.json';

jest.mock('axios');

describe('StormGlass Client', () => {
  it('Should return the normalized forecast from the StormGlass service', async () => {
    const lat = -33.792233;
    const lng = 151.289823;

    axios.get = jest.fn().mockResolvedValue(StormGlassWeather3HoursFixture);

    const stormGlass = new StormGlass(axios);
    const response = await stormGlass.fetchPoints(lat, lng);

    expect(response).toEqual(StormGlassNormalizedResponse3HoursFixture);
  });
});
