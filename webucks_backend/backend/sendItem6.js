const sendItem6 = (req, res) => {
  res.json({
    key: 6,
    name: "시그니처 더 블랙 콜드 브루",
    engname: "signature the black cold brew",
    imageURL: "/images/seulhaewon/coffee8.jpg",
    alt: "coffee",
    Link: "/detail-haewon",
    heart: "FH",
    heartColor: "#CFCFCF",
    comment:
      "부드러운 목넘김의 시그니처 더 블랙 콜드 브루의 매력을 한번에 느껴보세요!",
    nutrition: {
      "1st": 20,
      Na: 30,
      fat: 24,
      sugar: 105,
      protein: 12,
      caffein: 132,
    },
    arrergy: ["우유"],
    review: [],
  });
};

module.exports = { sendItem6 };
