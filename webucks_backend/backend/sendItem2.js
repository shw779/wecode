const sendItem2 = (req, res) => {
  res.json({
    key: 2,
    name: "나이트로 콜드 브루",
    engname: "nitro cold brew",
    imageURL: "/images/seulhaewon/coffee4.jpg",
    alt: "coffee",
    Link: "/detail-haewon",
    heart: "FH",
    heartColor: "#CFCFCF",
    comment: "부드러운 목넘김의 나이트로 콜드 브루의 매력을 한번에 느껴보세요!",
    nutrition: {
      "1st": 810,
      Na: 420,
      fat: 23,
      sugar: 104,
      protein: 12,
      caffein: 22,
    },
    arrergy: ["우유"],
    review: [],
  });
};

module.exports = { sendItem2 };
