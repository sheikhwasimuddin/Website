fs = require("fs");
const https = require("https");
process = require("process");
require("dotenv").config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;

const ERR = {
  noUserName:
    "Github Username was found to be undefined. Please set all relevant environment variables.",
  requestFailed:
    "The request to GitHub didn't succeed. Check if GitHub token in your .env file is correct.",
  requestFailedMedium:
    "The request to Medium didn't succeed. Check if Medium username in your .env file is correct."
};
if (USE_GITHUB_DATA === "true") {
  if (GITHUB_USERNAME === undefined) {
    throw new Error(ERR.noUserName);
  }

  console.log(`Fetching profile data for ${GITHUB_USERNAME}`);
  var data = JSON.stringify({
    query: `
{
  user(login:"${GITHUB_USERNAME}") { 
    name
    bio
    avatarUrl
    location
    pinnedItems(first: 6, types: [REPOSITORY]) {
      totalCount
      edges {
          node {
            ... on Repository {
              name
              description
              forkCount
              stargazers {
                totalCount
              }
              url
              id
              diskUsage
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
}
`
  });
  const default_options = {
    hostname: "api.github.com",
    path: "/graphql",
    port: 443,
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "User-Agent": "Node"
    }
  };

  const req = https.request(default_options, res => {
    let data = "";

    console.log(`statusCode: ${res.statusCode}`);
    if (res.statusCode !== 200) {
      throw new Error(ERR.requestFailed);
    }

    res.on("data", d => {
      data += d;
    });
    res.on("end", () => {
      fs.writeFile("./public/profile.json", data, function (err) {
        if (err) return console.log(err);
        console.log("saved file to public/profile.json");
      });
    });
  });

  req.on("error", error => {
    throw error;
  });

  req.write(data);
  req.end();
}

<<<<<<< HEAD
=======
// ── Football: fetch next Real Madrid scheduled match ──────────────────────────
const FOOTBALL_API_TOKEN = "8565ad2223864f5fa20dac2795660f83";
const FOOTBALL_TEAM_ID = 86;

console.log("Fetching next Real Madrid match from football-data.org...");

const footballOptions = {
  hostname: "api.football-data.org",
  path: `/v4/teams/${FOOTBALL_TEAM_ID}/matches?status=SCHEDULED`,
  port: 443,
  method: "GET",
  headers: {
    "X-Auth-Token": FOOTBALL_API_TOKEN
  }
};

const footballReq = https.request(footballOptions, res => {
  let footballData = "";

  console.log(`football-data.org statusCode: ${res.statusCode}`);

  res.on("data", d => {
    footballData += d;
  });

  res.on("end", () => {
    try {
      const parsed = JSON.parse(footballData);
      const matches = parsed.matches || [];
      const nextMatch = matches.length > 0 ? matches[0] : null;
      const output = JSON.stringify({ nextMatch });
      fs.writeFile("./public/nextMatch.json", output, function (err) {
        if (err) return console.log(err);
        console.log("saved file to public/nextMatch.json");
      });
    } catch (e) {
      console.log("Failed to parse football data:", e.message);
    }
  });
});

footballReq.on("error", error => {
  console.log("Football API request failed:", error.message);
});

footballReq.end();
// ──────────────────────────────────────────────────────────────────────────────

>>>>>>> main
if (MEDIUM_USERNAME !== undefined) {
  console.log(`Fetching Medium blogs data for ${MEDIUM_USERNAME}`);
  const options = {
    hostname: "api.rss2json.com",
    path: `/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`,
    port: 443,
    method: "GET"
  };

  const req = https.request(options, res => {
    let mediumData = "";

    console.log(`statusCode: ${res.statusCode}`);
    if (res.statusCode !== 200) {
      throw new Error(ERR.requestMediumFailed);
    }

    res.on("data", d => {
      mediumData += d;
    });
    res.on("end", () => {
      fs.writeFile("./public/blogs.json", mediumData, function (err) {
        if (err) return console.log(err);
        console.log("saved file to public/blogs.json");
      });
    });
  });

  req.on("error", error => {
    throw error;
  });

  req.end();
}
