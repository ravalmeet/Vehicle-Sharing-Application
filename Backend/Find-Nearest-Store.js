JSON
{

}

//route

const store_controller = require('../controllers/store_controller');

store_route.post('/find-nearest-store',auth,store_controller.find_store);


//controller


const find_store = async (req, res) => {

    try{

    }catch(error)
    {
        res.status(400).send({succes})
    }

}