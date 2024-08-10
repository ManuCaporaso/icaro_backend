-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: turismo_carretera
-- ------------------------------------------------------
-- Server version	11.4.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `campeonato`
--

DROP TABLE IF EXISTS `campeonato`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `campeonato` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `posicion` int(11) NOT NULL,
  `piloto` varchar(255) NOT NULL,
  `numero_auto` int(11) NOT NULL,
  `nombre_apellido` varchar(255) NOT NULL,
  `marca` varchar(255) NOT NULL,
  `puntos` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `campeonato`
--

LOCK TABLES `campeonato` WRITE;
/*!40000 ALTER TABLE `campeonato` DISABLE KEYS */;
INSERT INTO `campeonato` VALUES (4,1,'https://icaro2024-blog.netlify.app/src/img/pilotos/julian_santero.png',68,'JULIAN SANTERO','https://icaro2024-blog.netlify.app/src/img/campeonato/logo-ford-xs.png',190),(5,2,'https://icaro2024-blog.netlify.app/src/img/pilotos/jose_manuel_urcera.png',231,'JOSE MANUEL URCERA','https://icaro2024-blog.netlify.app/src/img/campeonato/logo-ford-mustang-xs.png',187),(6,3,'https://icaro2024-blog.netlify.app/src/img/pilotos/mariano_werner.png',1,'MARIANO WERNER','https://icaro2024-blog.netlify.app/src/img/campeonato/logo-ford-mustang-xs.png',170),(7,4,'https://icaro2024-blog.netlify.app/src/img/pilotos/mauricio_lambiris.png',6,'MAURICIO LAMBIRIS','https://icaro2024-blog.netlify.app/src/img/campeonato/logo-ford-xs.png',167),(8,5,'https://icaro2024-blog.netlify.app/src/img/pilotos/diego_ciantini.png',19,'DIEGO CIANTINI','https://icaro2024-blog.netlify.app/src/img/campeonato/logo-chevrolet-xs.png',151),(9,6,'https://icaro2024-blog.netlify.app/src/img/pilotos/marcos_landa.png',7,'MARCOS LANDA','https://icaro2024-blog.netlify.app/src/img/campeonato/logo-torino-xs.png',143),(10,7,'https://icaro2024-blog.netlify.app/src/img/pilotos/valentin_aguirre.png',10,'VALENTIN AGUIRRE','https://icaro2024-blog.netlify.app/src/img/campeonato/logo-chevrolet-xs.png',139),(11,8,'https://icaro2024-blog.netlify.app/src/img/pilotos/juan_b._de_benedictis.png',157,'JUAN BAUTISTA DE BENEDICTIS','https://icaro2024-blog.netlify.app/src/img/campeonato/logo-ford-mustang-xs.png',139),(12,9,'https://icaro2024-blog.netlify.app/src/img/pilotos/esteban_gini.png',157,'ESTEBAN GINI','https://icaro2024-blog.netlify.app/src/img/campeonato/logo-toyota-xs.png',138),(13,10,'https://icaro2024-blog.netlify.app/src/img/pilotos/german_todino.png',3,'GERMAN TODINO','https://icaro2024-blog.netlify.app/src/img/campeonato/logo-ford-mustang-xs.png',135);
/*!40000 ALTER TABLE `campeonato` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `username_2` (`username`),
  UNIQUE KEY `username_3` (`username`),
  UNIQUE KEY `email_2` (`email`),
  UNIQUE KEY `username_4` (`username`),
  UNIQUE KEY `email_3` (`email`),
  UNIQUE KEY `username_5` (`username`),
  UNIQUE KEY `email_4` (`email`),
  UNIQUE KEY `username_6` (`username`),
  UNIQUE KEY `email_5` (`email`),
  UNIQUE KEY `username_7` (`username`),
  UNIQUE KEY `email_6` (`email`),
  UNIQUE KEY `username_8` (`username`),
  UNIQUE KEY `email_7` (`email`),
  UNIQUE KEY `username_9` (`username`),
  UNIQUE KEY `email_8` (`email`),
  UNIQUE KEY `username_10` (`username`),
  UNIQUE KEY `email_9` (`email`),
  UNIQUE KEY `username_11` (`username`),
  UNIQUE KEY `email_10` (`email`),
  UNIQUE KEY `username_12` (`username`),
  UNIQUE KEY `email_11` (`email`),
  UNIQUE KEY `username_13` (`username`),
  UNIQUE KEY `email_12` (`email`),
  UNIQUE KEY `username_14` (`username`),
  UNIQUE KEY `email_13` (`email`),
  UNIQUE KEY `username_15` (`username`),
  UNIQUE KEY `email_14` (`email`),
  UNIQUE KEY `username_16` (`username`),
  UNIQUE KEY `email_15` (`email`),
  UNIQUE KEY `username_17` (`username`),
  UNIQUE KEY `email_16` (`email`),
  UNIQUE KEY `username_18` (`username`),
  UNIQUE KEY `email_17` (`email`),
  UNIQUE KEY `username_19` (`username`),
  UNIQUE KEY `email_18` (`email`),
  UNIQUE KEY `username_20` (`username`),
  UNIQUE KEY `email_19` (`email`),
  UNIQUE KEY `username_21` (`username`),
  UNIQUE KEY `email_20` (`email`),
  UNIQUE KEY `username_22` (`username`),
  UNIQUE KEY `email_21` (`email`),
  UNIQUE KEY `username_23` (`username`),
  UNIQUE KEY `email_22` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'manuel22','$2b$10$NyKadWzF.iJUTPINXQoZD.jzDMwWucp4YK68B1r1tYL6Jc01fhp.S','manu@gmail.com','0000-00-00 00:00:00','0000-00-00 00:00:00'),(2,'manu1007','$2b$10$nVAPzGJdvWf5PKyMDsVOGejb4wtJEkxBABKI4WTDaQo1lghn0PMEm','prueba@gmail.com','0000-00-00 00:00:00','0000-00-00 00:00:00'),(3,'admin','$2b$10$Ht1qdy5sePRVPI7pw3cIWuDONVhk75KcjavRcWir1PAeGlGuH0UiS','prueba2@gmail.com','0000-00-00 00:00:00','0000-00-00 00:00:00'),(4,'admin2','$2b$10$jLo6EHKJxY2FPiIVWwRblebtKb4AbKhzGAsValzFnZ1GQAgIXVmMe','prueba3@gmail.com','2024-08-10 00:04:43','2024-08-10 00:04:43');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'turismo_carretera'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-09 21:51:55
