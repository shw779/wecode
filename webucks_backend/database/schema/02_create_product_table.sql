CREATE TABLE products
(
  id INT NOT NULL AUTO_INCREMENT, 
  korean_name VARCHAR(200) NOT NULL,
  english_name VARCHAR(200) NULL,
  category_id INT NOT NULL,  
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id) 
);

ALTER TABLE `products` ADD FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);
