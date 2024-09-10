import stateCities from '../../../../public/assets/json/mauritius-state-cities.json';

export class MauritiusUtil {
  static getCities(): string[] {
    const cities: string[] = [];

    for (const state of stateCities) {
      cities.push(...state.cities.map((city: any) => city.name));
    }

    return cities;
  }

  static getCityIdFromName(name: string): number | null {
    for (const state of stateCities) {
      for (const city of state.cities) {
        if (city.name === name) {
          return city.id;
        }
      }
    }

    return null;
  }
}
