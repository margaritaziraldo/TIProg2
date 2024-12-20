DROP DATABASE IF EXISTS corteva;
CREATE DATABASE corteva;

USE corteva;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  email	VARCHAR(255) NOT NULL UNIQUE,
  contrasenia TEXT NOT NULL,
  profilepic TEXT,
  createdAt TIMESTAMP	NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP	NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT NOT NULL,
  imagen TEXT NOT NULL,
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  idUsuario INT,
  FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
);
  
INSERT INTO usuarios (email, username, contrasenia, profilepic) VALUES 
("mziraldo@udesa.edu.ar", "margaritaziraldo", "margarita123", "default-image.png"),
("lcaronni@udesa.edu.ar", "lucascaronni", "lucas123", "default-image.png"),
("mpoggio@udesa.edu.ar", "mateopoggio", "mateo123", "default-image.png"),
("castrot@udesa.edu.ar", "tomascastro", "tomas123", "default-image.png"),
("areggiardo@udesa.edu.ar", "abrilreggiardo", "abril123", "default-image.png");


INSERT INTO productos (nombre, imagen, descripcion, idUsuario) VALUES 
("Pava Jarra Electrica", "pava.jpeg", "Pava eléctrica de acero inoxidable con base removible. Interruptor automático de seguridad, Apagado automatico cuando hierve el agua, Tapa con bloqueo de cierre", 1),
("Ventilador De Techo 4 Aspas", "ventilador.jpeg", "3 tonos de luz progresiva: cálida, neutra y fría. Se puede usar la luz y el ventilador por separado, no es necesario que se prendan los dos al mismo tiempo. Funcionamiento en ambos sentidos: Para verano: contrario a las agujas del reloj (sube el aire caliente y baja el aire frío). Para invierno: sentido a las agujas del reloj (sube el aire frío y baja el aire caliente).", 2),
("Cup Cake Maker Antiadherente", "cupcake.jpeg", "Con capacidad para hacer 6 unidades, permitirá disfrutar de tus postres favoritos en la comodidad de tu hogar. Con una potencia de 650 W, este Cup Cake Maker garantiza un calentamiento rápido y uniforme, asegurando que tus cupcakes queden perfectamente cocidos en cada uso.", 2),
("Exprimidor de Jugo Eléctrico Acero Inoxidable", "exprimidor.jpeg", "Con el Exprimidor de Jugo Eléctrico Acero inoxidable ATMA, podes disfrutar de jugos frescos y deliciosos en cuestión de segundos. Gracias a su potente motor obtendrás el máximo rendimiento de tus frutas favoritas y te permitira disfrutar de jugos frescos todos los días.", 3),
("Rallador eléctrico", "rallador.jpeg", "Multirallador de 4 cuchillas para diferentes cortes de rallado: Cuchilla rebanadora, cuchilla para corte Juliana, cuchilla para rallado fino, cuchilla para rallado en hebras. 200 watts de potencia", 4);