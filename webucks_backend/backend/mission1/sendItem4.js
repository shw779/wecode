const sendItem4 = (req, res) => {
  res.json({
    key: 4,
    name: "바닐라 크림 콜드 브루",
    engname: "banila cream cold brew",
    imageURL: "/images/seulhaewon/coffee6.jpg",
    alt: "coffee",
    Link: "/detail-haewon",
    heart: "FH",
    heartColor: "#CFCFCF",
    comment:
      "부드러운 목넘김의 바닐라 크림 콜드 브루의 매력을 한번에 느껴보세요!",
    nutrition: {
      "1st": 70,
      Na: 480,
      fat: 24,
      sugar: 103,
      protein: 14,
      caffein: 272,
    },
    arrergy: ["우유"],
    review: [],
  });
};

module.exports = { sendItem4 };
