import stateCities from '../../../../public/assets/json/mauritius-state-cities.json';

export class MauritiusUtil {
  static getCities(): string[] {
    const cities: string[] = [];

    for (const state of stateCities) {
      cities.push(...state.cities.map((city: any) => city.name));
    }

    return cities;
  }
}
