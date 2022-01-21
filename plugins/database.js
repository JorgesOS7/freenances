import localbase from "localbase";

const db = new localbase("freenances-database");
db.config.debug = process.env.NODE_ENV === "production" ? false : true;
export default (context, inject) => {
  inject("db", db);
};
