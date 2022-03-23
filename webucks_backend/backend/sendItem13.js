const sendItem13 = (req, res) => {
  res.json({
    key: 13,
    name: "아이스 커피",
    engname: "ice coffee",
    imageURL: "/images/seulhaewon/coffee1.jpg",
    alt: "coffee",
    Link: "/detail-haewon",
    heart: "FH",
    heartColor: "#CFCFCF",
    comment: "부드러운 목넘김의 아이스커피의 매력을 한번에 느껴보세요!",
    nutrition: {
      "1st": 80,
      Na: 40,
      fat: 2,
      sugar: 10,
      protein: 1,
      caffein: 232,
    },
    arrergy: ["우유", "얼음"],
    review: [],
  });
};

module.exports = { sendItem13 };
