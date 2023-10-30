SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";
CREATE TABLE `students` (
  `name` varchar(100) NOT NULL,
  `age` int(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `group` int(100) NOT NULL,
  `id` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO `students` (`name`, `age`, `email`, `group`, `id`) VALUES
('Max', 18, 'semermaks@gmail.com', 12, 1);
CREATE TABLE `tutorials` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` int(100) NOT NULL,
  `year` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO `tutorials` (`id`, `name`, `price`, `year`) VALUES
(1, 'Audi', 31000, 2021),
(2, 'Volkswagen', 690000, 2022),
(3, 'Dodge', 9000, 2023),
(4, 'Porshe', 100000000, 2019);
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);
ALTER TABLE `tutorials`
  ADD KEY `id` (`id`);
ALTER TABLE `students`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
ALTER TABLE `tutorials`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;