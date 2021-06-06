CREATE TABLE "gallery" (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR(255) NOT NULL,
	"description" VARCHAR (255) NOT NULL,
	"likes" INT DEFAULT 0
);

INSERT INTO "gallery" 
	("path", "description")
VALUES
('https://i.imgur.com/80Wmgzq.jpg', 'Photo of Miso with her favorite sushi.'),
('images/olivia-rappel.jpeg', 'Photo of me rappelling down a route at Taylors Falls.')
('https://i.imgur.com/InKspO9.jpg', 'Photo of Toph looking as angry as usual.')
;
