SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";
CREATE TABLE `cars` (
  `id` int(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` int(100) NOT NULL,
  `year` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO `cars` (`id`, `name`, `price`, `year`) VALUES
(1, 'Lambo', 35000, 2021);
CREATE TABLE `db` (
  `id` int(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `contact` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO `db` (`id`, `name`, `email`, `contact`) VALUES
(1, 'Semernin Max', 'semermaks@gmail.com', '2'),
(2, 'Semernin Ura', 'semerura@gmail.com', '2'),
(3, 'Denis Zolotar', 'deniszoloto@gmail.com', '2');
ALTER TABLE `cars`
  ADD PRIMARY KEY (`id`);
ALTER TABLE `db`
  ADD PRIMARY KEY (`id`);
ALTER TABLE `cars`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
ALTER TABLE `db`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;
