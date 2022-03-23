const sendItem3 = (req, res) => {
  res.json({
    key: 3,
    name: "돌체 콜드 브루",
    engname: "dolche cold brew",
    imageURL: "/images/seulhaewon/coffee5.jpg",
    alt: "coffee",
    Link: "/detail-haewon",
    heart: "FH",
    heartColor: "#CFCFCF",
    comment: "부드러운 목넘김의 돌체 콜드 브루의 매력을 한번에 느껴보세요!",
    nutrition: {
      "1st": 20,
      Na: 50,
      fat: 22,
      sugar: 100,
      protein: 12,
      caffein: 432,
    },
    arrergy: ["우유"],
    review: [],
  });
};

module.exports = { sendItem3 };
