CREATE TABLE "gallery" (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR(255),
	"description" VARCHAR (255),
	"likes" INT DEFAULT 0
);

INSERT INTO "gallery" 
	("path", "description")
VALUES
('images/miso-with-sushi.jpeg', 'Photo of Miso with her favorite sushi.'),
('images/olivia-rappel.jpeg', 'Photo of me rappelling down a route at Taylors Falls.')
;
