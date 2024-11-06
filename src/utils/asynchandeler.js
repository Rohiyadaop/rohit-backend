// const asynchandelar = ()=>{}
// const asynchandelar = (fn)=>()>{}
// const asynchandelar = (fn)=>async()=>{}

    const asynchandelar= (request_handelar)=>{
        (req,res,next)=>{
          Promise.resolve(request_handelar(req,res,next)).catch((err)=>next(err))    
        }
    }

export { asynchandelar };


// try catch methode 


// const asynchandelar = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.state(err.code || 500).json({
//       sucsess: false,
//       massage: err.massage,
//     });
//   }
// };
