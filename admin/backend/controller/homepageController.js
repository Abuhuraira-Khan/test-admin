import { MongoClient, ObjectId } from "mongodb";
import { configDotenv } from "dotenv";
configDotenv();

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

// hero sec text post 
export const homeAddHeroSecText = async (req,res)=>{
    const {section,welcomeText,intoText} = req.body;
    try {
        await client.connect();
        const db = client.db(process.env.DB);
        const coll = db.collection('homePage');
        const data = coll.insertOne({section,welcomeText,intoText})
        res.json({data})
    } catch (error) {
        console.log(error)
    }
}
// hero sec text get

export const homeAboutMeSec = async (req, res) => {
    const id = req.params.id;
    const { section, myPic, aboutMe } = req.body;

    const updateAboutSec = {
        $set: {
            section: section,
            myPic: myPic,
            aboutMe: aboutMe
        }
    };


    try {
        await client.connect();
        const db = client.db(process.env.DB);
        const coll = db.collection('homePage');

        let data;
        if (id === 'undefined') {
            // Insert a new document if id is 'undefined'
            data = await coll.insertOne({ section, myPic, aboutMe });
        } else {
            // Update the document if id is provided
            data = await coll.updateOne({ _id: new ObjectId(id) }, updateAboutSec);
        }

        res.json({ data });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
};

export const getAboutSecDetails = async (req,res)=>{
    const section= req.params.section;

    try {
        await client.connect();
        const db = client.db(process.env.DB);
        const coll = db.collection('homePage');
        const data = await coll.findOne({section:section});

        if(data){
            res.json(data)
        }

    } catch (error) {
        
    }
}

// complete service section

export const homeAddNewService = async (req, res) => {
    const service = req.body;
    const { id, edit } = req.params;

    const UPdateservice = {
        _id: new ObjectId(parseInt(service._id)),
        title: service.title,
        description: service.description,
        image:service.image
    }
    try {
        await client.connect();

        const db = client.db(process.env.DB);
        const coll = db.collection('homePage');

        const data = id==='undefined'? await coll.insertOne({...service, _id: new ObjectId()}) :await coll.updateOne(
            { _id: new ObjectId(id), ...(edit !== 'false' && { 'all_services._id': new ObjectId(service._id) }) },
            edit === 'false'
                ? { $push: { 'all_services': { ...UPdateservice, _id: new ObjectId() } } }
                : { $set: { 'all_services.$': { _id: new ObjectId(service._id), ...UPdateservice } } }
        );

        res.json({ data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
};
export const getAllServices = async (req,res)=>{
    const section = req.params.section;
    try {
        await client.connect();
        const db = client.db(process.env.DB);
        const coll = db.collection('homePage');
        const data = await coll.findOne({section:section})
        if(data){
            res.json(data)
        }
    } catch (error) {
        console.log(error)
    }
}
export const deleteService = async (req,res)=>{
    const {collId,id} = req.params;
    try {
        await client.connect();
        const db = client.db(process.env.DB);
        const coll = db.collection('homePage');
        const data = await coll.updateOne({_id:new ObjectId(collId)},{$pull:{all_services:{_id:new ObjectId(id)}}})
        if(data){
            res.json(data)
        }
    } catch (error) {
        console.log(error)
    }
}

// complete skill section

// add new skill
export const homeAddNewSkill = async (req,res)=>{
    const skill = req.body;
    const id = req.params.id;

    try {
        await client.connect();
        const db = client.db(process.env.DB);
        const coll = db.collection('homePage');
        const data =id==='undefined'?coll.insertOne({...skill,_id:new ObjectId()}):coll.updateOne({_id:new ObjectId(id)},{$push:skill.type==='frontend'?{front_end:{...skill,_id:new ObjectId()}}:{back_end:{...skill,_id:new ObjectId()}}})
        res.json({data})
    } catch (error) {
        console.log(error)
    }
}
// get skill
export const getAllSkill = async (req,res)=>{
    const section = req.params.section;
    try {
        await client.connect();
        const db = client.db(process.env.DB);
        const coll = db.collection('homePage');
        const data = await coll.findOne({section:section})
        if(data){
            res.json(data)
        }
    } catch (error) {
        console.log(error)
    }
}
export const deleteSkill = async (req,res)=>{
    const {collId,id,type} = req.params;

    try {
        await client.connect();
        const db = client.db(process.env.DB);
        const coll = db.collection('homePage');
        const data = await coll.updateOne({_id:new ObjectId(collId)},{$pull:type==='frontend'?{front_end:{_id:new ObjectId(id)}}:{back_end:{_id:new ObjectId(id)}}})
        if(data){
            res.json(data)
        }
    } catch (error) {
        console.log(error)
    }
}