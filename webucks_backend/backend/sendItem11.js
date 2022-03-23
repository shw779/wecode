const sendItem11 = (req, res) => {
  res.json({
    key: 11,
    name: "콜드 브루 플로트",
    engname: "cold brew float",
    imageURL: "/images/seulhaewon/coffee1.jpg",
    alt: "coffee",
    Link: "/detail-haewon",
    heart: "FH",
    heartColor: "#CFCFCF",
    comment: "부드러운 목넘김의 콜드 브루 플로트의 매력을 한번에 느껴보세요!",
    nutrition: {
      "1st": 90,
      Na: 403,
      fat: 22,
      sugar: 103,
      protein: 12,
      caffein: 212,
    },
    arrergy: ["우유"],
    review: [],
  });
};

module.exports = { sendItem11 };
