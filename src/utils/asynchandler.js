const asyncHandler = async () => {
  try {
    await handle(req, res, next);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: error.message,
    });
  }
};
export { asyncHandler };
