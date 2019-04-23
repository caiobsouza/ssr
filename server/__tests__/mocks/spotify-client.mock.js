jest.doMock('./../../src/clients/spotify-client', () => {
  class SpotifyClient {
    get() {
      return Promise.resolve({ data: require('../data/podcasts.json.js') });
    }
  }
  return new SpotifyClient();
});
