export const driving_licence = async (req, res) => {
    try {
      const email = req.body.email;
      const number = req.body.number;


  
      if (number) {
            res.status(200).send({
                success: true,

                msg: "User driving licence has been authorizised successfully.",
            })
      } else {
        res
          .status(200)
          .send({ success: true, msg: "User driving licence has not authorizised successfully" });
      }
    } catch (error) {   
      res.status(400).send({ success: false, msg: error.message });
    }
  };


//   const request = require('request');

//   const options = {
//     method: 'POST',
//     url: 'https://apisetu.gov.in/certificate/v3/transport/drvlc',
//     headers: {'X-APISETU-CLIENTID': 'REPLACE_KEY_VALUE', 'content-type': 'application/json'},
//     body: {
//       txnId: 'f7f1469c-29b0-4325-9dfc-c567200a70f7',
//       format: 'xml',
//       certificateParameters: {
//         dlno: 'GJ05 20220016236',
//         FullName: 'KUNAL S MAURYA',
//         DOB: '31-07-2002'
//       },
//       consentArtifact: {
//         consent: {
//           consentId: 'ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba',
//           timestamp: '2019-08-24T14:15:22Z',
//           dataConsumer: {id: 'string'},
//           dataProvider: {id: 'string'},
//           purpose: {description: 'string'},
//           user: {idType: 'string', idNumber: 'string', mobile: 'string', email: 'string'},
//           data: {id: 'string'},
//           permission: {
//             access: 'string',
//             dateRange: {from: '2019-08-24T14:15:22Z', to: '2019-08-24T14:15:22Z'},
//             frequency: {unit: 'string', value: 0, repeats: 0}
//           }
//         },
//         signature: {signature: 'string'}
//       }
//     },
//     json: true
//   };
  
//   request(options, function (error, response, body) {
//     if (error) throw new Error(error);
  
//     console.log(body);
//   });