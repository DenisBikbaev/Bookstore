import AllBooks from "../AllBooks/AllBooks";
import Typography from "../Typography/Typography";

const Search: React.FC = () => {
  return (
    <div>
      <Typography>{} Search results</Typography>
      <p>{}</p>
      <AllBooks /> {/* Заменить на вывод результата поиска */}
    </div>
  );
};

export default Search;
