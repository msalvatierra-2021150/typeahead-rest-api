import axios from 'axios';
import { describe, test, expect } from '@jest/globals';

describe('typeahead.controller.ts', () => {
   const apiUrl = 'http://localhost:8080/api/request/obtainInfo';
   const expectedOutput = [
      {
        "ZIP_CODE": "34208",
        "CITY": "Bradenton",
        "COUNTY": "Manatee"
      },
      {
        "ZIP_CODE": "34205",
        "CITY": "Bradenton",
        "COUNTY": "Manatee"
      },
      {
        "ZIP_CODE": "34281",
        "CITY": "Bradenton",
        "COUNTY": "Manatee"
      },
      {
        "ZIP_CODE": "34206",
        "CITY": "Bradenton",
        "COUNTY": "Manatee"
      },
      {
        "ZIP_CODE": "34217",
        "CITY": "Bradenton Beach",
        "COUNTY": "Manatee"
      },
      {
        "ZIP_CODE": "34280",
        "CITY": "Bradenton",
        "COUNTY": "Manatee"
      },
      {
        "ZIP_CODE": "34218",
        "CITY": "Holmes Beach",
        "COUNTY": "Manatee"
      },
      {
        "ZIP_CODE": "34209",
        "CITY": "Bradenton",
        "COUNTY": "Manatee"
      },
      {
        "ZIP_CODE": "34220",
        "CITY": "Palmetto",
        "COUNTY": "Manatee"
      },
      {
        "ZIP_CODE": "34216",
        "CITY": "Anna Maria",
        "COUNTY": "Manatee"
      }
    ]
   test('API GET request with search parameters', async() => {
      try {
         const response = await axios.get(apiUrl, {
            params:  {
               searchTerm: 'Manatee'
            }
         });

         expect(response.status).toBe(200);
         expect(response.data.fetchedInfo).toBeDefined();
         expect(response.data.fetchedInfo).toEqual(expectedOutput);
       } catch (error) {
         throw error;
       }
   })
})