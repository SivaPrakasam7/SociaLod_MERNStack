const walker = require("../util_services/utils").walker;

// Scrap services
exports.scrap = async (query, site) => {
  const Browser = require("../../../domain/XSEngine"),
    Site = require(`../../../infrastructure/db/models/sites/${site}`).model;
  const ainfo = await Site.findOne({ Query: query })
    .then((info) => {
      return { err: false, message: info };
    })
    .catch((err) => {
      return { err: true, message: err };
    });
  if (ainfo.message === "" || !ainfo.message) {
    Browser.clear();
    const info = await Browser.scrap(
      query,
      require(`../../../entities/${site}`)
    ).catch((err) => {
      return { err: true, message: err };
    });
    if (info.err) return info;
    return await Site.create(await Browser.filter())
      .then((info) => {
        return { err: false, message: info };
      })
      .catch((err) => {
        return { err: true, message: "Out of service" };
      });
  } else return ainfo;
};

// status -- under development
exports.check = async (query) => {
  const results = {};
  for (var v of walker("../../../entities", "js")) {
    await Browser.scrap(query, require(v.path))
      .then((info) => {
        results[v.categeory] = {
          err: true,
          message:
            require(`../../../infrastructure/db/models/sites/${v.categeory}`).model(
              info
            ),
        };
      })
      .catch((err) => {
        results[v.categeory] = { err: true, message: "Out of service" };
      });
  }
  return results;
};
