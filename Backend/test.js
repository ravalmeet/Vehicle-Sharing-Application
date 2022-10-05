import request from 'request';

const options = {
  method: 'POST',
  url: 'https://apisetu.gov.in/certificate/v3/transport/drvlc',
  headers: {'X-APISETU-CLIENTID': 'REPLACE_KEY_VALUE', 'content-type': 'application/json'},
  body: {
    txnId: 'f7f1469c-29b0-4325-9dfc-c567200a70f7',
    format: 'xml',
    certificateParameters: {
      dlno: 'TN0119920009646. As per your Driving License.',
      FullName: 'Sunil Kumar',
      DOB: '31-12-1980'
    },
    consentArtifact: {
      consent: {
        consentId: 'ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba',
        timestamp: '2019-08-24T14:15:22Z',
        dataConsumer: {id: 'string'},
        dataProvider: {id: 'string'},
        purpose: {description: 'string'},
        user: {idType: 'string', idNumber: 'string', mobile: 'string', email: 'string'},
        data: {id: 'string'},
        permission: {
          access: 'string',
          dateRange: {from: '2019-08-24T14:15:22Z', to: '2019-08-24T14:15:22Z'},
          frequency: {unit: 'string', value: 0, repeats: 0}
        }
      },
      signature: {signature: 'string'}
    }
  },
  json: true
};


request(options, function (error, response, body) {
    if (error) throw new Error(error);
  
    console.log(body);
  });