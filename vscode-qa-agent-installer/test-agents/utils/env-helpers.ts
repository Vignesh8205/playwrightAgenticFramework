export class EnvHelpers {
  static getBaseUrl(): string {
    const url = process.env.BASE_URL;
    if (!url) throw new Error('BASE_URL environment variable is not set');
    return url;
  }
}
