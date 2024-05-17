const asyncHandler=(handle)=>async(req,res,next)=>{
  try {
      await handle(req,res,next)
  } catch (error) {
      res.status(error.code || 500).json({
          msg:error.message,
          success:false
      })
  }
}

export {asyncHandler}
