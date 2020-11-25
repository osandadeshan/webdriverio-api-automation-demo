import Axios from "axios";
import MockApiService from "../services/mockApi.services";

describe('Mock API Test Suite', () => {

    it('Should return the mock data', () => {
        let response;
        browser.call(() => {
          return MockApiService.mockApiGetMethod()
            .then(data => response = data)
            .catch(err => console.log(err))
        });
        expect(response.status).toEqual(200)
        expect(response.data.message).toEqual("Hello World!!!")
        });
});