const sendItem1 = (req, res) => {
  res.json({
    key: 1,
    name: "나이트로 바닐라 크림",
    engname: "Nitro Vanilla Cream",
    imageURL: "/images/seulhaewon/coffee3.jpg",
    alt: "coffee",
    Link: "/detail-haewon",
    heart: "FH",
    heartColor: "#CFCFCF",
    comment:
      "부드러운 목넘김의 나이트로 커피와 바닐라 크림의 매력을 한번에 느껴보세요!",
    nutrition: {
      "1st": 30,
      Na: 40,
      fat: 32,
      sugar: 120,
      protein: 11,
      caffein: 332,
    },
    arrergy: ["우유"],
    review: [],
  });
};

module.exports = { sendItem1 };
