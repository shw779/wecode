const sendCategorys = (req, res) => {
  res.json({
    data: [
      {
        id: 1,
        name: "나이트로 바닐라 크림",
      },
      {
        id: 2,
        name: "나이트로 콜드 브루",
      },
      {
        id: 3,
        name: "돌체 콜드 브루",
      },
      {
        id: 4,
        name: "바닐라 크림 콜드 브루",
      },
      {
        id: 5,
        name: "벨벳 다크 모카 나이트로",
      },
      {
        id: 6,
        name: "시그니처 더 블랙 콜드 브루",
      },
      {
        id: 7,
        name: "제주 비자림 콜드 브루",
      },
      {
        id: 8,
        name: "콜드 브루",
      },
      {
        id: 9,
        name: "콜드 브루 몰트",
      },
      {
        id: 10,
        name: "콜드 브루 오트 라떼",
      },
      {
        id: 11,
        name: "콜드 브루 플로트",
      },
      {
        id: 12,
        name: "프렌치 애플 타르트 나이트로",
      },
      {
        id: 13,
        name: "아이스 커피",
      },
      {
        id: 14,
        name: "오늘의 커피",
      }
    ],
  });
};

module.exports = { sendCategorys }; 
