CREATE TABLE `categories` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT (now())
);

CREATE TABLE `products` (
  `id` int PRIMARY KEY UNIQUE,
  `korean_name` varchar(200) UNIQUE NOT NULL,
  `english_name` varchar(200),
  `category_id` int NOT NULL,
  `created_at` datetime DEFAULT (now())
);

CREATE TABLE `product_images` (
  `id` int PRIMARY KEY,
  `image_url` varchar(3000) NOT NULL,
  `product_id` int NOT NULL,
  `created_at` datetime DEFAULT (now())
);

CREATE TABLE `allergies` (
  `id` int PRIMARY KEY,
  `name` varchar(200) UNIQUE NOT NULL,
  `created_at` datetime DEFAULT (now())
);

CREATE TABLE `products_allergies` (
  `id` int PRIMARY KEY,
  `product_id` int,
  `allergy_id` int,
  `created_at` datetime DEFAULT (now())
);

CREATE TABLE `nutritions` (
  `id` int PRIMARY KEY,
  `product_id` int NOT NULL,
  `caffein` float,
  `fat` float,
  `sugar` float,
  `sodium` float,
  `created_at` datetime DEFAULT (now())
);

ALTER TABLE `products` ADD FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

ALTER TABLE `product_images` ADD FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

ALTER TABLE `products_allergies` ADD FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

ALTER TABLE `products_allergies` ADD FOREIGN KEY (`allergy_id`) REFERENCES `allergies` (`id`);

ALTER TABLE `nutritions` ADD FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

/*ALTER TABLE `products` ADD FOREIGN KEY (`id`) REFERENCES `nutritions` (`product_id`);*/