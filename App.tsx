import { useState } from 'react';

interface RussianMat {
  word: string;
  description: string;
  origin: string;
}

const russianMatData: RussianMat[] = [
  {
    word: 'Хуй',
    description: 'Мужской половой орган. Используется как ругательство или для выражения удивления.',
    origin: 'Древнерусское слово, произошло от праиндоевропейского корня *kuei-.',
  },
  // ... остальные маты ...
  {
    word: 'Мудила',
    description: 'Глупый или бездарный человек.',
    origin: 'Произошло от древнерусского слова "мудила", означающего "глупый" или "бездарный".',
  },
  {
    word: 'Нагибатор',
    description: 'Человек, который занимается анальным сексом.',
    origin: 'Произошло от древнерусского слова "нагибать", означающего "гнуть" или "сгибать".',
  },
  {
    word: 'Педик',
    description: 'Гомосексуальный мужчина.',
    origin: 'Произошло от древнерусского слова "педик", означающего "мальчик" или "юноша".',
  },
  {
    word: 'Пизданутый',
    description: 'Глупый или бездарный человек.',
    origin: 'Произошло от древнерусского слова "пизда", означающего "женский половой орган".',
  },
  {
    word: 'Похуй',
    description: 'Мужской половой орган.',
    origin: 'Произошло от древнерусского слова "похуй", означающего "мужской половой орган".',
  },
  {
    word: 'Сперма',
    description: 'Семенная жидкость.',
    origin: 'Произошло от древнерусского слова "сперма", означающего "семенная жидкость".',
  },
  {
    word: 'Срака',
    description: 'Женский половой орган.',
    origin: 'Древнерусское слово, произошло от праиндоевропейского корня *sre-.',
  },
  {
    word: 'Ссать',
    description: 'Мочиться.',
    origin: 'Произошло от древнерусского слова "ссать", означающего "мочиться".',
  },
  {
    word: 'Трахать',
    description: 'Заниматься сексом.',
    origin: 'Произошло от древнерусского слова "трахать", означающего "заниматься сексом".',
  },
  {
    word: 'Уебище',
    description: 'Глупый или бездарный человек.',
    origin: 'Произошло от древнерусского слова "уебище", означающего "глупый" или "бездарный".',
  },
  {
    word: 'Фаллос',
    description: 'Мужской половой орган.',
    origin: 'Произошло от древнегреческого слова "φαλλός" (phallos), означающего "мужской половой орган".',
  },
  {
    word: 'Херня',
    description: 'Глупость или чушь.',
    origin: 'Произошло от древнерусского слова "хер", означающего "мужской половой орган".',
  },
  {
    word: 'Хуйло',
    description: 'Глупый или бездарный человек.',
    origin: 'Произошло от древнерусского слова "хуй", означающего "мужской половой орган".',
  },
  {
    word: 'Член',
    description: 'Мужской половой орган.',
    origin: 'Произошло от древнерусского слова "член", означающего "мужской половой орган".',
  },
  {
    word: 'Шлюха',
    description: 'Женщина, которая ведет себя как проститутка или изменяет своему партнеру.',
    origin: 'Произошло от древнерусского слова "шлюха", означающего "женщина" или "девушка".',
  },
  {
    word: 'Щелка',
    description: 'Женский половой орган.',
    origin: 'Древнерусское слово, произошло от праиндоевропейского корня *skel-.',
  },
];

const RussianMatList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMat, setFilteredMat] = useState(russianMatData);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filteredMat = russianMatData.filter((mat) => mat.word.toLowerCase().includes(searchTerm));
    setFilteredMat(filteredMat);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <input
        type="search"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Поиск"
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-400"
      />
      <ul>
        {filteredMat.map((mat, index) => (
          <li key={index} className="mb-4">
            <h2 className="text-lg font-bold">{mat.word}</h2>
            <p className="text-gray-600">{mat.description}</p>
            <p className="text-gray-600">Происхождение: {mat.origin}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RussianMatList;