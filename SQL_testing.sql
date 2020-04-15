CREATE DATABASE IF NOT EXISTS `www` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `www`;

CREATE TABLE `electives` (
  `id` int(11) NOT NULL,
  `title` varchar(128) DEFAULT NULL,
  `description` varchar(1024) DEFAULT NULL,
  `lecturer` varchar(128) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `electives` (`id`, `title`, `description`, `lecturer`, `created_at`) VALUES
(1, 'Programming with Go', 'Let\'s learn Go', 'Nikolay Batchiyski', '2020-04-09 08:24:32'),
(2, 'AKDU', 'Let\'s Graduate', 'Svetlin Ivanov', '2020-04-09 08:24:32'),
(3, 'Web technologies', 'Let\'s learn the web', 'Milen Petrov', '2020-04-09 08:24:32'),
(4, 'Programming with Go', 'Let\'s learn Go', 'Nikolay Batchiyski', '2020-04-09 08:24:32'),
(5, 'AKDU', 'Let\'s Graduate', 'Svetlin Ivanov', '2020-04-09 08:24:32'),
(6, 'Web technologies', 'Let\'s learn the web', 'Milen Petrov', '2020-04-09 08:24:32');
(8, 'dddddd', 'ddddddddddddddddddddddddddddddddddd', 'dddddd', '2020-04-15 12:28:48'),
(9, 'Testing', 'Testing', 'Testing', '2020-04-15 12:32:14');
	
ALTER TABLE `electives`
  ADD PRIMARY KEY (`id`);
  
ALTER TABLE `electives`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;