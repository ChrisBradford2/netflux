import Results from "../../components/Results";
import requests from "../../service/requests";

const results =
  process.env.NODE_ENV === "production"
    ? require("../../service/requests").context.query.title
    : getSortedResultsData();

export default (req, res) => {
  const results = req.query.q
    ? results.filter((results) =>
        results.title.toLowerCase().includes(req.query.q)
      )
    : [];
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ results }));
};
