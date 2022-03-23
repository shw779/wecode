const sendItem8 = (req, res) => {
  res.json({
    key: 8,
    name: "콜드 브루",
    engname: "cold brew",
    imageURL: "/images/seulhaewon/coffee10.jpg",
    alt: "coffee",
    Link: "/detail-haewon",
    heart: "FH",
    heartColor: "#CFCFCF",
    comment: "부드러운 목넘김의 콜드 브루의 매력을 한번에 느껴보세요!",
    nutrition: {
      "1st": 50,
      Na: 406,
      fat: 24,
      sugar: 103,
      protein: 13,
      caffein: 32,
    },
    arrergy: ["우유"],
    review: [],
  });
};

module.exports = { sendItem8 };
