const sendItem5 = (req, res) => {
  res.json({
    key: 5,
    name: "벨벳 다크 모카 나이트로",
    engname: "velvet dark mocha nitro",
    imageURL: "/images/seulhaewon/coffee7.jpg",
    alt: "coffee",
    Link: "/detail-haewon",
    heart: "FH",
    heartColor: "#CFCFCF",
    comment:
      "부드러운 목넘김의 밸벳 다크 모카 나이트로의 매력을 한번에 느껴보세요!",
    nutrition: {
      "1st": 80,
      Na: 45,
      fat: 23,
      sugar: 14,
      protein: 5,
      caffein: 262,
    },
    arrergy: ["우유"],
    review: [],
  });
};

module.exports = { sendItem5 };
