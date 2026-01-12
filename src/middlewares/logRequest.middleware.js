
const logRequest =(req,res,next)=>{
   console.log(
    `[${new Date().toLocaleString()}] reuest made to :${req.originalUrl}`
   )


    next() //move to next phase
}


export default logRequest

