const walker = require("../util_services/utils").walker,
  User = require("../../../infrastructure/db/models/user/user");

exports.dashboard = async () => {
  const results = {};
  results["users"] = (await User.find({})).length;
  for (var v of walker("../../../infrastructure/db/models/sites/", "js")) {
    results[v.categeory] = (await require(v.path).model.find({})).length;
  }
  return results;
};
