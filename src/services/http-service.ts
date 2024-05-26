class HttpService {
  endpooint: string;

  constructor(endpoint: string) {
    this.endpooint = endpoint;
  }
}

const create = (endpoint: string) => new HttpService(endpoint);

export default create;
