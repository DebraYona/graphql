import moongose from "mongoose"

export async function connect(){
    try{
        await moongose.connect('mongodb://localhost/mongographql',{
            //useUnifiedTopology: true
    })
    
    console.log('>>> DB is connected')

    }
   catch{
       console.log('upsss')
   }
}
