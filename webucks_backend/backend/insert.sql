INSERT INTO categories (name) VALUES ('콜드 브루 커피'); 
INSERT INTO categories (name) VALUES ('브루드 커피');
INSERT INTO categories (name) VALUES ('에스프레소');
INSERT INTO categories (name) VALUES ('프라푸치노');
INSERT INTO categories (name) VALUES ('블렌디드');

INSERT INTO products (korean_name, english_name, category_id, description ) VALUES ('나이트로 콜드 브루', 'Nitro Cold Brew', 1,"진한 에스프레소에 시원한 정수물과 얼음을 더햐여 스타벅스의 깔끔하고 강렬한 에스프레소를 가장 부드럽고 시원하게 즐길 수 있는 커피");
INSERT INTO products (korean_name, english_name, category_id, description ) VALUES ('돌체 콜드 브루', 'Dolce Cold Brew', 1,"맛있는 돌체 콜드 브루");
INSERT INTO products (korean_name, english_name, category_id, description ) VALUES ('아이스 커피', 'Iced Coffee', 2, "한국인의 커피는 뭐다? 아이스커피!");
INSERT INTO products (korean_name, english_name, category_id, description ) VALUES ('오늘의 커피', 'Brewed Coffee', 2,"오늘의 커피는 뭘까요?");
INSERT INTO products (korean_name, english_name, category_id, description ) VALUES ('에스프레소 콘 파나', 'Espresso Con Panna', 3, "에스프레소 하면 에스프레소 콘 파나!");
INSERT INTO products (korean_name, english_name, category_id, description ) VALUES ('모카 프라푸치노', 'Mocha Frappuccino', 4, "달달한 모카 프라푸치노를 즐겨보세요");
INSERT INTO products (korean_name, english_name, category_id, description ) VALUES ('딸기 딜라이트 요거트 블렌디드', 'Strawberry Delight Yogurt Blended', 5, "봄에는 역시 딸기! 딸기 딜라이트 요거트 블렌디드를 맛보세요!");


INSERT INTO product_images(image_url, product_id) VALUES ('http://image.co.kr/procut_id_1',1);
INSERT INTO product_images(image_url, product_id) VALUES ('http://image.co.kr/procut_id_2',2);
INSERT INTO product_images(image_url, product_id) VALUES ('http://image.co.kr/procut_id_3',3);
INSERT INTO product_images(image_url, product_id) VALUES ('http://image.co.kr/procut_id_4',4);
INSERT INTO product_images(image_url, product_id) VALUES ('http://image.co.kr/procut_id_5',5);
INSERT INTO product_images(image_url, product_id) VALUES ('http://image.co.kr/procut_id_6',6);
INSERT INTO product_images(image_url, product_id) VALUES ('http://image.co.kr/procut_id_7',7);

INSERT INTO allergies(name) VALUES ('우유');
INSERT INTO allergies(name) VALUES ('복숭아');
INSERT INTO allergies(name) VALUES ('대두');
INSERT INTO allergies(name) VALUES ('밀');
INSERT INTO allergies(name) VALUES ('오징어');

INSERT INTO products_allergies(product_id, allergy_id) VALUES (1,1);
INSERT INTO products_allergies(product_id, allergy_id) VALUES (1,2);
INSERT INTO products_allergies( product_id, allergy_id) VALUES (2,1);
INSERT INTO products_allergies( product_id, allergy_id) VALUES (2,3);
INSERT INTO products_allergies( product_id, allergy_id) VALUES (4,1);
INSERT INTO products_allergies( product_id, allergy_id) VALUES (5,4);
INSERT INTO products_allergies( product_id, allergy_id) VALUES (6,1);
INSERT INTO products_allergies( product_id, allergy_id) VALUES (6,4);

INSERT INTO nutritions(id, product_id, caffein, fat, sugar, sodium, calories) VALUES (1,1,12,2,3,10,22);
INSERT INTO nutritions(id, product_id, caffein, fat, sugar, sodium, calories) VALUES (2,2,10,5,24,23,33);
INSERT INTO nutritions(id, product_id, caffein, fat, sugar, sodium, calories) VALUES (3,3,3,24,5,4,44);
INSERT INTO nutritions(id, product_id, caffein, fat, sugar, sodium, calories) VALUES (4,4,32,66,24,3,55);
INSERT INTO nutritions(id, product_id, caffein, fat, sugar, sodium, calories) VALUES (5,5,12,27,17,1,66);
INSERT INTO nutritions(id, product_id, caffein, fat, sugar, sodium, calories) VALUES (6,6,30,10,40,3,77);
INSERT INTO nutritions(id, product_id, caffein, fat, sugar, sodium, calories) VALUES (7,7,2,5,32,2,10);


INSERT INTO user(email, password) VALUES ("shw779@naver.com", "123123123");
INSERT INTO user(email, password) VALUES ("mixiwana@gmail.com", "ssssdddfee");

INSERT INTO drinkLike(isLike, product_id, user_id) VALUES (false, 1, 1);
INSERT INTO drinkLike(isLike, product_id, user_id) VALUES (false, 2, 1);
INSERT INTO drinkLike(isLike, product_id, user_id) VALUES (true, 3, 1);
INSERT INTO drinkLike(isLike, product_id, user_id) VALUES (false, 4, 1);
INSERT INTO drinkLike(isLike, product_id, user_id) VALUES (false, 5, 1);
INSERT INTO drinkLike(isLike, product_id, user_id) VALUES (true, 6, 1);
INSERT INTO drinkLike(isLike, product_id, user_id) VALUES (false, 7, 1);

INSERT INTO drinkLike(isLike, product_id, user_id) VALUES (false, 1, 2);
INSERT INTO drinkLike(isLike, product_id, user_id) VALUES (false, 2, 2);
INSERT INTO drinkLike(isLike, product_id, user_id) VALUES (false, 3, 2);
INSERT INTO drinkLike(isLike, product_id, user_id) VALUES (false, 4, 2);
INSERT INTO drinkLike(isLike, product_id, user_id) VALUES (false, 5, 2);
INSERT INTO drinkLike(isLike, product_id, user_id) VALUES (false, 6, 2);
INSERT INTO drinkLike(isLike, product_id, user_id) VALUES (false, 7, 2);