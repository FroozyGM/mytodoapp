import CategoriesItem from "./CategoriesItem";

export default function Categories({
  categories,
  activeCategory,
  setActiveCategory,
}) {
  return (
    <ul className="todo-categories">
      {categories.map((item, i) => (
        <CategoriesItem
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          name={item}
          index={i}
          key={item}
        />
      ))}
    </ul>
  );
}
