class NetworkGateway {
    constructor() {
      this.baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
      this.uniqueDbKey = 'DfgwhFgkrWjE0gvby3Ks';
    }

    add = async (_id, _name, _author, _category) => {
      const data = await fetch(`${this.baseUrl}${this.uniqueDbKey}/books`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ item_id: _id, title: _name, author: _author, category: _category }),
      });
      return data;
    }

    remove = async (_id) => {
        const data = await fetch(`${this.endpointURL}${this.uniqueDbKey}/books/${_id}`);
        return data;
    }

    fetch = async () => {
      const data = await fetch(`${this.endpointURL}${this.uniqueDbKey}/books`);
      return data;
    }
}