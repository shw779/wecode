const sendItem12 = (req, res) => {
  res.json({
    key: 12,
    name: "프렌치 애플 타르트 나이트로",
    engname: "french apple nitro",
    imageURL: "/images/seulhaewon/coffee2.jpg",
    alt: "coffee",
    Link: "/detail-haewon",
    heart: "FH",
    heartColor: "#CFCFCF",
    comment:
      "부드러운 목넘김의 프랜치 애플 타르트 나이트로의 매력을 한번에 느껴보세요!",
    nutrition: {
      "1st": 40,
      Na: 50,
      fat: 62,
      sugar: 130,
      protein: 166,
      caffein: 12,
    },
    arrergy: ["우유"],
    review: [],
  });
};

module.exports = { sendItem12 };
