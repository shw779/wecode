const sendItem9 = (req, res) => {
  res.json({
    key: 9,
    name: "콜드 브루 몰트",
    engname: "cold brew molt",
    imageURL: "/images/seulhaewon/coffee11.jpg",
    alt: "coffee",
    Link: "/detail-haewon",
    heart: "FH",
    heartColor: "#CFCFCF",
    comment: "부드러운 목넘김의 콜드 브루 몰트의 매력을 한번에 느껴보세요!",
    nutrition: {
      "1st": 90,
      Na: 44,
      fat: 23,
      sugar: 201,
      protein: 3,
      caffein: 32,
    },
    arrergy: ["우유"],
    review: [],
  });
};

module.exports = { sendItem9 };
