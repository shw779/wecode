const sendItem10 = (req, res) => {
  res.json({
    key: 10,
    name: "콜드 브루 오트 라떼",
    engname: "cold brew ort lattee",
    imageURL: "/images/seulhaewon/coffee12.jpg",
    alt: "coffee",
    Link: "/detail-haewon",
    heart: "FH",
    heartColor: "#CFCFCF",
    comment:
      "부드러운 목넘김의 콜드 브루 오트 라떼의 매력을 한번에 느껴보세요!",
    nutrition: {
      "1st": 70,
      Na: 43,
      fat: 44,
      sugar: 12,
      protein: 12,
      caffein: 112,
    },
    arrergy: ["우유"],
    review: [],
  });
};

module.exports = { sendItem10 };
