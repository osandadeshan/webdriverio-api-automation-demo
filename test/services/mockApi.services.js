import axios from 'axios';

class MockApiService {
    async mockApiGetMethod() {
        try {
          let response = await axios.get("http://localhost:9000/api/mytest");
          return response;
        } catch(err) {
          console.log(err);
        }
      }
}

export default new MockApiService();