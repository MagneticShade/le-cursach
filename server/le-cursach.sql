-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Мар 27 2023 г., 14:18
-- Версия сервера: 8.0.30
-- Версия PHP: 8.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `le-cursach`
--

-- --------------------------------------------------------

--
-- Структура таблицы `likes`
--

CREATE TABLE `likes` (
  `id` int UNSIGNED NOT NULL,
  `user_id` int UNSIGNED NOT NULL,
  `review_id` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `likes`
--

INSERT INTO `likes` (`id`, `user_id`, `review_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 1, 4),
(5, 1, 5),
(6, 1, 6),
(7, 2, 1),
(8, 2, 2),
(9, 1, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `reviews`
--

CREATE TABLE `reviews` (
  `id` int UNSIGNED NOT NULL,
  `content` varchar(800) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `reviews`
--

INSERT INTO `reviews` (`id`, `content`, `time`, `user_id`) VALUES
(1, 'asldfja;lskdjf;alskdjf;lksadjf;lkasnd,.m,zn.,mznxcvmznxcmvzx.cbv,xncvm.zxnv,m.nz.,mcn.x,mn.czmxnc.mznc,mxznc.vmnxz.c,mnvxz.mcnv.zxcnvzxcnv.,mn,mxcn.vzxncv.xz', '2023-03-27 08:00:05', 1),
(2, 'asldfja;lskdjf;alskdjf;lksadjf;lkasnd,.m,zn.,mznxcvmznxcmvzx.cbv,xncvm.zxnv,m.nz.,mcn.x,mn.czmxnc.mznc,mxznc.vmnxz.c,mnvxz.mcnv.zxcnvzxcnv.,mn,mxcn.vzxncv.xz\r\n\r\nasdfas;lfdkjas;ldkfjas;lkdjfa;slkdjf;aslkjdf;aslkdjfkzncxvmnxz.cvnzx.mcnv.mzxnv.,mxzcn.,mxzncv.,mxnc.,mnzx.cv,mnz.xcvmnz.xcmnv.xzcmnzx.vmnxz.cv,mnx.zcmvn.,cxmn.,n.m,xczxcv', '2023-03-27 08:00:05', 2),
(3, 'asdfasdfasfcxvzxcvbnnm,,yrou8fc;fvfuo\'tjkjm,bn.mbjnklhjklfgujkghuighk nm,n.nm,.nm,.mhjk;hj,.nm,.mn,.nm,.nm,.nm,.nm,.hkjlhgjkdfagasdfzxcvzncvbvncm,vcnbcbnsgfsjsadfgaagvxcbcxnsdfssdfgjsgxbvxfnjssnnsn', '2023-03-27 08:00:36', 3),
(4, 'asldfja;lskdjf;alskdjf;lksadjf;lkasnd,.m,zn.,mznxcvmznxcmvzx.cbv,xncvm.zxnv,m.nz.,mcn.x,mn.czmxnc.mznc,mxznc.vmnxz.c,mnvxz.mcnv.zxcnvzxcnv.,mn,mxcn.vzxncv.xz', '2023-03-27 08:00:05', 1),
(5, 'asldfja;lskdjf;alskdjf;lksadjf;lkasnd,.m,zn.,mznxcvmznxcmvzx.cbv,xncvm.zxnv,m.nz.,mcn.x,mn.czmxnc.mznc,mxznc.vmnxz.c,mnvxz.mcnv.zxcnvzxcnv.,mn,mxcn.vzxncv.xz\r\n\r\nasdfas;lfdkjas;ldkfjas;lkdjfa;slkdjf;aslkjdf;aslkdjfkzncxvmnxz.cvnzx.mcnv.mzxnv.,mxzcn.,mxzncv.,mxnc.,mnzx.cv,mnz.xcvmnz.xcmnv.xzcmnzx.vmnxz.cv,mnx.zcmvn.,cxmn.,n.m,xczxcv', '2023-03-27 08:00:05', 2),
(6, 'asdfasdfasfcxvzxcvbnnm,,yrou8fc;fvfuo\'tjkjm,bn.mbjnklhjklfgujkghuighk nm,n.nm,.nm,.mhjk;hj,.nm,.mn,.nm,.nm,.nm,.nm,.hkjlhgjkdfagasdfzxcvzncvbvncm,vcnbcbnsgfsjsadfgaagvxcbcxnsdfssdfgjsgxbvxfnjssnnsn', '2023-03-27 08:00:36', 3);

-- --------------------------------------------------------

--
-- Структура таблицы `user`
--

CREATE TABLE `user` (
  `id` int UNSIGNED NOT NULL,
  `login` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_name` varchar(15) NOT NULL,
  `password` varchar(15) NOT NULL,
  `email` varchar(25) NOT NULL,
  `status` enum('user','admin') NOT NULL,
  `avatar_url` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `user`
--

INSERT INTO `user` (`id`, `login`, `user_name`, `password`, `email`, `status`, `avatar_url`) VALUES
(1, 'user1', 'user11', '12345', 'user@mail.ru', 'user', 'images/avatars/crown_of_storms.jpg'),
(2, 'user2', 'cayde', 'ace', 'user@mail.ru', 'user', 'images/avatars/roll_out.png'),
(3, 'user3', 'lfg', 'gjalahorn', 'user@mai.ru', 'user', 'images/avatars/live_action.jpg');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `review_id` (`review_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Индексы таблицы `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Индексы таблицы `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `likes`
--
ALTER TABLE `likes`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT для таблицы `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `user`
--
ALTER TABLE `user`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `likes`
--
ALTER TABLE `likes`
  ADD CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`review_id`) REFERENCES `reviews` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Ограничения внешнего ключа таблицы `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
