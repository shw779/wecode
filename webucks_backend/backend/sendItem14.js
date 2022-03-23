const sendItem14 = (req, res) => {
  res.json({
    key: 14,
    name: "오늘의 커피",
    engname: "today's coffee",
    imageURL: "/images/seulhaewon/coffee2.jpg",
    alt: "coffee",
    Link: "/detail-haewon",
    heart: "FH",
    heartColor: "#CFCFCF",
    comment: "부드러운 목넘김의 오늘의 커피의 매력을 한번에 느껴보세요!",
    nutrition: {
      "1st": 180,
      Na: 20,
      fat: 12,
      sugar: 4,
      protein: 13,
      caffein: 222,
    },
    arrergy: ["우유"],
    review: [],
  });
};

module.exports = { sendItem14 };
