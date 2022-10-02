const UserModel = require("../model/StoreModel");
const CheckUserStore = async (req, res, next) => {
  const ip = req.body;

  const data = await UserModel.findOne(ip);

  if (data == null) {
    const { ip, type, continent, country, region, city, latitude, longitude } =
      req.body;
    const { img } = req.body.flag;
    const { org, isp } = req.body.connection;

    const addEntry = new UserModel({
      ip,
      type,
      continent,
      country,
      region,
      city,
      latitude,
      longitude,
      img,
      isp,
      org,
    });
    await addEntry.save();
    next();
  } else {
    next();
  }
};
module.exports = CheckUserStore;
