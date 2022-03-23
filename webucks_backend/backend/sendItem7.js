const sendItem7 = (req, res) => {
  res.json({
    key: 7,
    name: "제주 비자림 콜드 브루",
    engname: "jeju coffee",
    imageURL: "/images/seulhaewon/coffee9.jpg",
    alt: "coffee",
    Link: "/detail-haewon",
    heart: "FH",
    heartColor: "#CFCFCF",
    comment:
      "부드러운 목넘김의 제주 비자림 콜드 브루의 매력을 한번에 느껴보세요!",
    nutrition: {
      "1st": 70,
      Na: 440,
      fat: 22,
      sugar: 103,
      protein: 12,
      caffein: 2332,
    },
    arrergy: ["우유"],
    review: [],
  });
};

module.exports = { sendItem7 };
